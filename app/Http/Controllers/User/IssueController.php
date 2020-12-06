<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\File;
use App\Models\Issue;
use App\Models\Platform;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class IssueController extends Controller
{
    private $rules = [
        'title' => 'required|string',
        'description' => 'required|string',
        'platform_id' => 'required|exists:platforms,id',
        'files.*' => 'nullable|file',
        'comments.*' => 'nullable|string'
    ];

    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $data = [];
        $filteredData = Issue::latest();

        $filteredData = $filteredData
            ->join('platforms', 'platforms.id', '=', 'issues.platform_id')
            ->select('issues.*')
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('title', 'LIKE', "%$search%")
                        ->orWhere('description', 'LIKE', "%$search%")
                        ->orWhere('platforms.name', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $issue) {
            $data[] = array_merge($issue->toArray(), [
                'platform' => $issue->platform->name,
            ]);
        }

        return [
            'issues' => $data,
            'total' => $total,
        ];
    }



    public function  index()
    {
        $data = $this->data();

        $issues = $data['issues'];
        $total = $data['total'];

        return response()->json([
            'issues' => $issues,
            'total' => $total,
        ]);
    }

    public function info()
    {
        $platforms = [];
        foreach (Platform::all() as $platform) {
            $platforms[] = $platform->toArray();
        }

        return response()->json([
            'platforms' => $platforms,
        ]);
    }

    public function show($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $issue = Issue::find($id);
        if (!$issue) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['issues']['not_found'], 'danger'),
        ]);

        $issue = $issue->toArray();

        $platforms = [];
        foreach (Platform::all() as $platform) {
            $platforms[] = $platform->toArray();
        }

        return response()->json([
            'issue' => $issue,
            'platforms' => $platforms,
        ]);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $request->validate($this->rules);

        $input = $request->all();

        $issid = Issue::issid();

        $input['issid'] = $issid;
        $input['status'] = 0;

        $input['author_type'] = User::class;
        $input['author_id'] = $user->id;

        Issue::create($input);

        $requestFiles = $request->files ? $request->file('files') : [];
        foreach ($requestFiles as $index => $file) {
            $name = $issid . ' - ' . $file->getClientOriginalName();
            $type = $file->getClientMimeType();
            $file->move('files', $name);

            File::create([
                'path' => htmlspecialchars($name),
                'type' => $type,
                'comment' => $request->comments[$index],
                'item_type' => Issue::class,
                'item_id' => Issue::whereIssid($issid)->first()->id,
            ]);
        }

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['issues']['created'], 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $issue = Issue::find($id);
        if (!$issue) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['issues']['not_found'], 'danger'),
        ]);

        $request->validate($this->rules);

        $input = $request->all();

        $issue->update($input);

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => $cms['pages'][$user->language->abbr]['messages']['issues']['updated']
            ],
        ]);
    }

    public function mark(Request $request, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $issue = Issue::find($id);
        if (!$issue) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['issues']['not_found'], 'danger'),
        ]);

        $issue->update(['status' => 1]);

        $pendingIssuesPreparation = Issue::whereStatus(0);

        $totalIssuesNumber = Issue::count();
        $pendingIssuesNumber = $pendingIssuesPreparation->count();
        $solvedIssuesNumber = Issue::whereStatus(1)->count();
        $todayIssuesNumber = Issue::whereDate('created_at', Carbon::today())->count();

        $pendingIssuesList = [];

        foreach ($pendingIssuesPreparation->get() as $issue) {
            $pendingIssuesList[] = $issue->toArray() + [
                'platform' => $issue->platform,
                'author' => $issue->author,
                'files' => $issue->files,
            ];
        }

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => $cms['pages'][$user->language->abbr]['messages']['issues']['updated']
            ],
            'blocksData' => [
                'totalIssues' => $totalIssuesNumber,
                'pendingIssues' => $pendingIssuesNumber,
                'solvedIssues' => $solvedIssuesNumber,
                'todayIssues' => $todayIssuesNumber,
            ],
            'pendingIssues' => $pendingIssuesList,
        ]);
    }

    public function destroy($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $issue = Issue::find($id);
        if (!$issue) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['issues']['not_found'], 'danger'),
        ]);

        $issue->delete();

        $data = $this->data();

        $issues = $data['issues'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['issues']['deleted'], 'success'),
            'issues' => $issues,
            'total' => $total,
        ]);
    }
}
