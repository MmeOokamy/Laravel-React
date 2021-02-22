# Laravel & ReactJs

### Challenge de développement pour ce dépôt: (Ce que je veux faire)
=> * Simple Page Application - ReactJs
* Importer des projets php / "java" - Laravel & MariaDB
* Envoyer sur Github - GitKraken
* Suivi de projet - Jira
* Dév un petit bot - Wit.ai
* (perhaps) Dév une application android - ReactNative - expo

## Challenge Accepted!
=> Ce projet existe pour m’entraîner et apprendre les bases afin d'être préparé au mieux et entamer mon stage sereinement.
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

    * dans le fichier => laravel/app/routes/api.php
        * Route::get('/test', function () {
             return ['name'=> "Ookamy"];
        });
    * run wamp server // php artisan serve
    * url =>  http://127.0.0.1:8000/api/test

### ReactJs

    * npm start
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
* Eller on va changer les condition de la function login pour avoir un presque vrai truc





##########################################################################

## Initialized Laravel & React ensemble // echec

### commande
_ composer create-project laravel/laravel mmeookamy.github.io
_ npm install react
_ npm install react-dom
_ npm install

### Modif

    => fichier webpack.mix.js
        * remplace ligne 14
            * mix.js('resources/js/app.js', 'public/js')
            * mix.react('resources/js/app.jsx', 'public/js')

    => modifier le nom resources/js/app.js en jsx

    => Dans resources/js/
        * créer un dossier components
            * créer un fichier App.js


    => Dans ce fichier App.js
        * rce // reactClassExportComponent
        * import ReactDOM from 'react-dom';
        * ligne 16 => if(document.getElementById('root')){ ReactDOM.render(<App />, document.getElementById('root'));}

    => Dans le fichier App.jsx ajouter
        * require('./components/App.js');

    => resources/views/welcome.blade.php purger le body
        * <div id="root"></div>
        * <script type="text/javascript" src="./js/app.js"></script>

### autre commande

    * npm run dev // error avec mieux
    * npm install laravel-mix --save-dev
