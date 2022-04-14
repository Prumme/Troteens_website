<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Package;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $loli = new User([
            'firstname' => 'Aurélien',
            'username' => 'dite La Puteuh',
            'lastname' => 'La Loli',
            'phone_number' => Str::random(10),
            'email' => 'ohyeah@loli.com',
            'password' => Hash::make('loli'),
        ]);
        $loli->save();

        $package = new Package([
            'name' => 'minim',
            'price' => '0.23',
            'is_subscription' => false
        ]);
        $package->save();

        $package = new Package([
            'name' => 'medium',
            'price' => '9.99',
            'is_subscription' => true
        ]);
        $package->save();

        $package = new Package([
            'name' => 'large1',
            'price' => '19.99',
            'max_trips' => '8',
            'is_subscription' => true,
        ]);
        $package->save();

        $package = new Package([
            'name' => 'large2',
            'price' => '44.99',
            'max_trips' => '25',
            'is_subscription' => true
        ]);
        $package->save();

        $package = new Package([
            'name' => 'large3',
            'price' => '79.99',
            'max_trips' => '50',
            'is_subscription' => true
        ]);
        $package->save();

    }
}
