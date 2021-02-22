<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;

class AuthApi extends Controller
{
    function login(Request $request)
    {

        if(
            $request->input('email') == 'test@gmail.com'
            &&
            $request->input('password') == 'chupakabra'
        ){
            return ['status' => 'success', 'message' => "Connecté avec Successs"];
        } else {
            return ['status' => 'error', 'message' =>"Failed! essaye encore!"];
        }
    }
}
