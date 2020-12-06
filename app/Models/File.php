<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory;
    
    protected $directory = '/files/';

    protected $fillable = [
        'path', 'comment', 'type', 'item_id', 'item_type',
    ];

    public function item()
    {
        return $this->morphTo();
    }

    public function getPathAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }
}
