<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Driver;
use Illuminate\Http\Request;

class DriverController extends Controller
{
    private $rules = [
        'first_name' => 'required|string',
        'last_name' => 'required|string',
        'nid' => 'required|string|unique',
        'driving_license' => 'required|string|unique',
        'card' => 'required|string|unique',
        'category_id' => 'required|exists:categories,id',
        'photo' => 'nullable|image',
    ];

    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $data = [];
        $filteredData = Driver::latest();

        $filteredData = $filteredData
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('first_name', 'LIKE', "%$search%")
                        ->orWhere('last_name', 'LIKE', "%$search%")
                        ->orWhere('nid', 'LIKE', "%$search%")
                        ->orWhere('driving_license', 'LIKE', "%$search%")
                        ->orWhere('card', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $driver) {
            $data[] = array_merge($driver->toArray(), [
                'name' => $driver->first_name . ' ' . $driver->last_name
            ]);
        }

        return [
            'drivers' => $data,
            'total' => $total,
        ];
    }



    public function  index()
    {
        $data = $this->data();

        $drivers = $data['drivers'];
        $total = $data['total'];

        return response()->json([
            'drivers' => $drivers,
            'total' => $total,
        ]);
    }

    public function show($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $driver = Driver::find($id);
        if (!$driver) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['drivers']['not_found'], 'danger'),
        ]);

        $driver = $driver->toArray();

        return response()->json([
            'driver' => $driver,
        ]);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $request->validate($this->rules);

        $input = $request->except('photo');

        if ($file = $request->file('photo')) {
            $fileName = time() . $file->getClientOriginalName();
            $file->move('drivers', $fileName);
            $input['photo'] = htmlspecialchars($fileName);
        }

        Driver::create($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['drivers']['created'], 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $driver = Driver::find($id);
        if (!$driver) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['drivers']['not_found'], 'danger'),
        ]);

        $request->validate($this->rules);

        $input = $request->except('photo');

        if ($file = $request->file('photo')) {
            if ($driver->photo) unlink(public_path($driver->photo));
            $fileName = time() . $file->getClientOriginalName();
            $file->move('drivers', $fileName);
            $input['photo'] = htmlspecialchars($fileName);
        }

        $driver->update($input);

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => $cms['pages'][$user->language->abbr]['messages']['drivers']['updated']
            ],
        ]);
    }

    public function destroy($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $driver = Driver::find($id);
        if (!$driver) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['drivers']['not_found'], 'danger'),
        ]);

        if ($driver->photo) unlink(public_path($driver->photo));
        $driver->delete();

        $data = $this->data();

        $drivers = $data['drivers'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['drivers']['deleted'], 'success'),
            'drivers' => $drivers,
            'total' => $total,
        ]);
    }
}
