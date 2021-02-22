import { container } from 'bootstrap';
import React, { Component} from 'react';



class App extends Component {

  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    }
  }
  submit =() => {
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

 render() {
   return (
    <div className="container">
      <h1>React et Laravel Application Web</h1>
      <h2>Le pouvoir du backend et du frontend</h2>

      <input type="email" onChange={(item)=>{this.setState({email: item.target.value})}}/>
      <input type="password" onChange={(item)=>{this.setState({password: item.target.value})}}/>

      <button onClick={()=>{this.submit()}}>Login</button>
    </div>
  );
 }
  
}

export default App;
