import React from 'react';
import './App.css';

import axios from "axios";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import List from './List';

class App extends React.Component {
  
  state = {

  }
// frontend started 6.11
  render(){
    return (
      <div className="App">
  <button onClick={this.handleOnPostRequest}>sa</button>
  <h1 className="header">Otsimo MusicDB</h1>

      <div className="search">
  <form className = "search-form">
    <input className = "search-bar" type = "text" />
    <button className = "search-button" type = "submit">
      Search
    </button>
  </form>
  </div>

{/* burda cagırırız diye dusundum <List />  */}
      {/* <div className="lists">
        {lists.map(list => (
          <List
          key = {}
          title = {list.title}
          writer = {list.writer}
          licence = {list.licence}
          />
        ))}
      </div> */}

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
