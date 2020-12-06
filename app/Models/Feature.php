<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'prefix',
    ];

    public function roles()
    {
        return $this->belongsToMany('App\Models\Role', 'feature_role')->withPivot(['access']);
    }

    public function getAccessAttribute($value)
    {
        return json_decode($value);
    }
}
