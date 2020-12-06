<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    private $rules = [
        'name' => 'required|string',
    ];

    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $data = [];
        $filteredData = Category::latest();

        $filteredData = $filteredData
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('name', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $category) {
            $data[] = array_merge($category->toArray(), []);
        }

        return [
            'categories' => $data,
            'total' => $total,
        ];
    }



    public function  index()
    {
        $data = $this->data();

        $categories = $data['categories'];
        $total = $data['total'];

        return response()->json([
            'categories' => $categories,
            'total' => $total,
        ]);
    }

    public function show($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $category = Category::find($id);
        if (!$category) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['categories']['not_found'], 'danger'),
        ]);

        $category = $category->toArray();

        return response()->json([
            'category' => $category,
        ]);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $request->validate($this->rules);

        $input = $request->all();

        Category::create($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['categories']['created'], 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $category = Category::find($id);
        if (!$category) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['categories']['not_found'], 'danger'),
        ]);

        $rules = $this->rules;
        if ($request->email === $category->email) $rules['email'] = 'required|email';
        if ($request->matricule === $category->matricule) $rules['matricule'] = 'required|string';

        $request->validate($rules);

        $input = $request->all();

        $category->update($input);

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => $cms['pages'][$user->language->abbr]['messages']['categories']['updated']
            ],
        ]);
    }

    public function destroy($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $category = Category::find($id);
        if (!$category) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['categories']['not_found'], 'danger'),
        ]);

        $category->delete();

        $data = $this->data();

        $categories = $data['categories'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['categories']['deleted'], 'success'),
            'categories' => $categories,
            'total' => $total,
        ]);
    }
}
