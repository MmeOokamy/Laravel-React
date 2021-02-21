# MmeOokamy.github.io


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
    * php artisan serve 

### ReactJs
    * npm start 







## Initialized Laravel & React ensemble // echec
### commande
    * composer create-project laravel/laravel mmeookamy.github.io 
    * npm install react
    * npm install react-dom
    * npm install

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


