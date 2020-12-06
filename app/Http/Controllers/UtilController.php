<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\User;
use Illuminate\Http\Request;

class UtilController extends Controller
{
    private function guard()
    {
        $user = request()->user();
        switch ($user->token()->name) {
            case 'User Personal Access Token':
                $user = User::find($user->id);
                break;
            case 'Admin Personal Access Token':
                $user = Admin::find($user->id);
                break;
        }
        return $user;
    }

    public static function message($content, $type = 'info')
    {
        return [
            'type' => $type,
            'content' => $content
        ];
    }

    public static function get($request)
    {
        $user = $request->user();
        switch ($user->token()->name) {
            case 'User Personal Access Token':
                $user = User::find($user->id);
                break;
            case 'Admin Personal Access Token':
                $user = Admin::find($user->id);
                break;
        }
        return $user;
    }

    public static function cms()
    {
        $jsonString = file_get_contents(base_path('cms.json'));
        return json_decode($jsonString, true);
    }



    // Authentication
    public function logout()
    {
        request()->user()->token()->revoke();

        return response()->json([
            'message' => self::message('Successfully logged out.', 'success'),
        ]);
    }

    public function user()
    {
        $user = $this->guard();

        $type = $user->type();

        $data = array_merge($user->toArray(), [
            'notifications' => $user->unreadNotifications()->latest()->limit(5)->get(),
            'language' => $user->language->abbr
        ]);
        if ($type === 'user') {
            $role = $user->role;

            $role_features = [];
            foreach ($role->features as $feature) {
                $role_features[] = [
                    'id' => $feature->id,
                    'prefix' => $feature->prefix,
                    'permissions' => $feature->pivot->access,
                ];
            }

            $role = $role->toArray();
            $role['features'] = $role_features;

            $data = $data + [
                'role' => $role
            ];
        } else if ($type === 'admin') $data = array_merge($data, []);
        return response()->json(['data' => $data, 'role' => $type,]);
    }


    // Notifications
    public function notifications()
    {
        $user = $this->guard();

        $notifications = [];
        foreach ($user->notifications()->latest()->get() as $notification) {
            $notifications[] = array_merge($notification->toArray(), [
                'data' => $notification->data
            ]);
        }

        return response()->json([
            'notifications' => $notifications
        ]);
    }

    public function notification($id)
    {
        $user = $this->guard();

        $notification = $user->notifications()->find($id);
        $notification->markAsRead();

        return response()->json([
            'notification' => $notification
        ]);
    }
}
