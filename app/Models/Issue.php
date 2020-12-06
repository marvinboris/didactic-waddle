<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Issue extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'description', 'status', 'issid', 'platform_id', 'author_type', 'author_id'
    ];

    public static function generateIssid()
    {
        $letters = range('A', 'Z');
        $numbers = range(0, 9);
        $chars = array_merge($letters, $numbers);
        $length = count($chars);

        $code = '';

        for ($i = 0; $i < 5; $i++) {
            $index = rand(0, $length - 1);
            $code .= $chars[$index];
        }

        return Carbon::now()->isoFormat('YYYYMMDDHHmmss') . $code;
    }

    public static function issid()
    {
        $issid = self::generateIssid();
        $request = self::where('issid', $issid)->first();
        while ($request) {
            $issid = self::generateIssid();
            $request = self::where('issid', $issid)->first();
        }

        return $issid;
    }

    public function platform()
    {
        return $this->belongsTo('App\Models\Platform');
    }

    public function comments()
    {
        return $this->hasMany('App\Models\Comment');
    }

    public function author()
    {
        return $this->morphTo();
    }

    public function files()
    {
        return $this->morphMany('App\Models\File', 'item');
    }
}
