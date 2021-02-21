import React, { Component} from 'react';
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
