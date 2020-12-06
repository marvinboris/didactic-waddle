<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Issue;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
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
            'blocksData' => [
                'totalIssues' => $totalIssuesNumber,
                'pendingIssues' => $pendingIssuesNumber,
                'solvedIssues' => $solvedIssuesNumber,
                'todayIssues' => $todayIssuesNumber,
            ],
            'pendingIssues' => $pendingIssuesList,
        ]);
    }
}
