<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'body', 'issue_id',
    ];

    public function issue()
    {
        return $this->belongsTo('App\Models\Issue');
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
