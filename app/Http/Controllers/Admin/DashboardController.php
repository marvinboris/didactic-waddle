<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Member;
use App\Models\Post;
use App\Models\Product;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $subscriptionsAmount = 0;

        $totalCustomers = Member::count();

        $expenses = Product::count();

        $totalCase = Post::count();

        return response()->json([
            'blocksData' => [
                'subscriptionsAmount' => $subscriptionsAmount,
                'totalCustomers' => $totalCustomers,
                'expenses' => $expenses,
                'totalCase' => $totalCase,
            ],
            'tasks' => [],
            'attendanceReport' => [],
            'calendar' => [],
            'chatBox' => [],
            'messages' => [],
            'workTimeTracker' => [],
        ]);
    }
}
