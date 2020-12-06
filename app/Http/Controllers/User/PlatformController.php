<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Platform;
use Illuminate\Http\Request;

class PlatformController extends Controller
{
    private $rules = [
        'name' => 'required|string',
        'color' => 'required|string',
    ];

    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $data = [];
        $filteredData = Platform::latest();

        $filteredData = $filteredData
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('name', 'LIKE', "%$search%")
                        ->orWhere('color', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $platform) {
            $data[] = array_merge($platform->toArray(), []);
        }

        return [
            'platforms' => $data,
            'total' => $total,
        ];
    }



    public function  index()
    {
        $data = $this->data();

        $platforms = $data['platforms'];
        $total = $data['total'];

        return response()->json([
            'platforms' => $platforms,
            'total' => $total,
        ]);
    }

    public function show($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $platform = Platform::find($id);
        if (!$platform) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['platforms']['not_found'], 'danger'),
        ]);

        $platform = $platform->toArray();

        return response()->json([
            'platform' => $platform,
        ]);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $request->validate($this->rules);

        $input = $request->all();

        Platform::create($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['platforms']['created'], 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $platform = Platform::find($id);
        if (!$platform) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['platforms']['not_found'], 'danger'),
        ]);

        $rules = $this->rules;

        $request->validate($rules);

        $input = $request->all();

        $platform->update($input);

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => $cms['pages'][$user->language->abbr]['messages']['platforms']['updated']
            ],
        ]);
    }

    public function destroy($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $platform = Platform::find($id);
        if (!$platform) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['platforms']['not_found'], 'danger'),
        ]);

        $platform->delete();

        $data = $this->data();

        $platforms = $data['platforms'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['platforms']['deleted'], 'success'),
            'platforms' => $platforms,
            'total' => $total,
        ]);
    }
}
