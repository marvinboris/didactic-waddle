<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class Admin extends Authenticatable
{
    use Notifiable, HasApiTokens;

    protected $directory = '/admins/';

    protected $fillable = [
        'name', 'email', 'password', 'phone', 'photo', 'language_id',
    ];

    protected $hidden = [
        'password',
    ];

    public function type()
    {
        return 'admin';
    }

    public function getPhotoAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }

    public function language()
    {
        return $this->belongsTo('App\Models\Language');
    }

    public function issues()
    {
        return $this->morphMany('App\Models\Issue', 'author');
    }

    public function comments()
    {
        return $this->morphMany('App\Models\Comment', 'author');
    }
}
