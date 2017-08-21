import React, { Component } from 'react';
import FaLeanpub from 'react-icons/lib/fa/leanpub'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="header">
              <div className="grid row">
              <h1 className='logo col-3'><FaLeanpub size={30}/> Readable</h1>
              <ul className="navigation col-9">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Products</a></li>
                  <li><a href="#">Contact</a></li>
              </ul>
              </div>
          </div>
          <div className="container grid">
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
      </div>
    );
  }
}

export default App;
