<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use app\ToDoList;

class ToDoListTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       factory(ToDoList::class, 10)->create();
    }
}
