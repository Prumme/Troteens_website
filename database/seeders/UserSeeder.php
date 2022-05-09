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

        $admin = new User([
            'firstname' => 'Matthias',
            'username' => 'Adib',
            'lastname' => 'Hamchi',
            'phone_number' => Str::random(10),
            'email' => 'matthias@gmail.com',
            'password' => Hash::make('admincheck'),
        ]);
        $admin->save();
    }
}
