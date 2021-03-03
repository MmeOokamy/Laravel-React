<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('todolist', 'ToDoListController');

Route::get('/test', function () {
    return ['name'=> "Ookamy"];
});
/* quand 'post' a l'adresse /api/login est envoyer on affiche la function login
    de la class AuthApi
*/
Route::post('/login', "AuthApi@login");



