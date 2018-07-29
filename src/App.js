import React, { Component } from 'react';
import Tv from './Tv';
import Header from './Header';
import Link from './Link';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="tvContent">
          <Tv />
        </div>
        <Link />
      </div>
    );
  }
}

export default App;
