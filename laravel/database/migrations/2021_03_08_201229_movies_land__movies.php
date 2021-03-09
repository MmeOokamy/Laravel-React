<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class MoviesLandMovies extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ML_Movies', function (Blueprint $table){
            $table->increments('ML_Movies_id');
            $table->string('ML_Movies_title', 255);
            $table->string('ML_Movies_year', 4);
            $table->string('ML_Movies_img', 255);
            $table->string('ML_Movies_url', 255);
            $table->foreignId('ML_Movies_category', 2);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ML_Movies');
    }
}
