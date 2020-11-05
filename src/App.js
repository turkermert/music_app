import React from 'react';
import './App.css';

import axios from "axios";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


class App extends React.Component {
  
  state = {

  }
// frontend started
  render(){
    return (
      <div className="App">
  <button onClick={this.handleOnPostRequest}>sa</button>
      </div>
    );
  }
  handleOnPostRequest = (event) => {
    event.preventDefault();
    const res = axios.post("https://musicdb.jobs.otsimo.com/createClient",{
        "email": "deneme@gmail.com"
      },{
        headers:{ "Content-Type": "application/json"}
      }).then(res => res.json()).catch(err =>console.log(err))
  }
}

export default App;
