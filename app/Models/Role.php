<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'description',
    ];

    public function users()
    {
        return $this->hasMany('App\Models\User');
    }

    public function features()
    {
        return $this->belongsToMany('App\Models\Feature', 'feature_role')->withPivot(['access']);
    }
}
