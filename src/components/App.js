import React, { Component } from 'react';
import '../styles/app.css';
import '../styles/base.css';

import Navbar from './Navbar';


import FA from 'react-fontawesome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <header>
              <Navbar />
            </header>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
