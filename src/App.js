import React, { Component } from 'react';
import Image from './Image';
import Carousel from './Carousel';
import Tester from './Tester';
import Rotator from './Rotator';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="tvBox">
        </div>
        <div className="tvContent">
          <Tester />
        </div>
      </div>
    );
  }
}

export default App;
