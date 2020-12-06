<?php

namespace Database\Seeders;

use App\Models\Platform;
use Illuminate\Database\Seeder;

class PlatformSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $platforms = [
            [
                'name' => 'Liyeplimal',
                'color' => 'blue'
            ],
            [
                'name' => 'Simbcoin',
                'color' => 'gold'
            ],
            [
                'name' => 'Limarket',
                'color' => 'orange'
            ],
        ];

        foreach ($platforms as $platform) {
            Platform::create($platform);
        }
    }
}
