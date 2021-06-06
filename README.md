# Laravel & ReactJs

### Challenge de développement pour ce dépôt: (Ce que je veux faire)
-   Simple Page Application - ReactJs
-   Importer des projets php / "java" - Laravel & MariaDB
-   Envoyer sur Github - GitKraken
-   Suivi de projet - Jira
-   Dév un petit bot - Wit.ai
-   (perhaps) Dév une application android - ReactNative - expo / ou ionic angular

## Challenge Accepted!
* => Ce projet existe pour m’entraîner et apprendre les bases afin d'être préparé au mieux et entamer mon stage sereinement.
  La plupart de ses outils me sont inconnues.

## Initialized Laravel & React dans 2 dossiers dif

   * composer create-project laravel/laravel laravel
   * npx create-react-app reactjs

### Laravel

   * gerer .env pour adapter a mariadb => port 3006
   * php artisan serve => c'est good

### ReactJs

* npm start => c'est good

## Lié les deux par une API ?

### laravel

*   dans le fichier => laravel/app/routes/api.php
        * Route::get('/test', function () {
             return ['name'=> "Ookamy"];
        });
    * run wamp server // php artisan serve
    * url =>  http://127.0.0.1:8000/api/test

### ReactJs

*   * npm start
    * trier les fichiers et components/app
    * jsconfig.js
        * {
            "compilerOptions": {
            "baseUrl": "src"
            },
            "include": ["src"]
        }

    * package.json
        "crcf": [
            "cssmodules",
            "functional",
            "uppercase",
            {
            "output": "src/components"
            }
        ]

    * reactjs/src/components/App/app.js
        * import React, { Component} from 'react';
          import ReactDOM from 'react-dom';
          import css from './App.module.css';

          class App extends React.Component {
            componentDidMount()
                {
                    fetch('http://127.0.0.1:8000/api/test')
                    .then(function(response) {
                    response.json().then(function(resp){
                        console.log(resp);
                    })
                    })
                };

             render() {
                return (
                    <div className={css.container}>
                    <h1>hello</h1>
                    </div>
                );
                }

        }

        export default App;

 * Avec cela on voit bien l'affichage dans la console de mon objet name: "ookamy"

## On continue? c'est partie form submit et post api <3
     
### React

* Et si on rajouter bootstrap? 
    * npm install bootstrap react-bootstrap 
    * import 'bootstrap/dist/css/bootstrap.min.css' // dans le src/index.js
*  reactjs/src/components/App/app.js
    * on efface le componentDidMount et on met un constructor
        constructor() {
            super();
            this.state = {
            email: "",
            password: "",
            }
        }

    * On rajoute 2 input text et password  dans le render()
    * onChange={(e)=>{this.setState({email: e.target.value})}} // on recupé la valeur ecrite dans le champs input pour modifier le constructor vide.
    * pareil pour le password

    * au onClick du btn submit() on fait un console.log(this.state);
        Il faut que la console affiche  l'email et le psw en claire.


### Laravel
    
* Il nous faut un controller pour justement  donnée l'accées a react  
    * php artisan make:controller AuthApi
    * dans ce fichier app/Http/Controllers/AuthApi.php 
      *  function login(Request $request){
            return $request->input();
        }

* Dans routes/api.php on rajoute => Route::post('/login', "AuthApi@login");

* E:\Dev\Project\Laravel-React\laravel\app\Providers\RouteServiceProvider.php
    * ligne 43 ->namespace($this->namespace)  devient  ->namespace('App\Http\Controllers')

    * si tout les changements sont bien fait ça sera au top


### React

* on va modifier submit() pour envoyer une requete
     * submit =() => {
            console.log(this.state)
            fetch('http://127.0.0.1:8000/api/login',{
            method: 'post',
            body: JSON.stringify(this.state),
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            }).then(function(response) {
            response.json().then(function(resp){
                console.log(resp);
            })
            })
        }

### Laravel API
* Aller on va changer les condition de la function login pour avoir un presque vrai truc
*  => composer require laravel/sanctum

### Changements et ajout
* Crcf
            => npm install create-react-component-folder
* React-bootstrap
            => npm install react-bootstrap bootstrap
            => import { Button } from 'react-bootstrap';

* fontawsome
            => npm i --save @fortawesome/fontawesome-svg-core
            => npm install --save @fortawesome/free-solid-svg-icons
            => npm install --save @fortawesome/react-fontawesome
            => import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
            => import { faCoffee } from '@fortawesome/free-solid-svg-icons'

* Le router de react
            => npm install react-router-dom 
            => import {Route, BrowserRouter as Router} from "react-router-dom";

    

