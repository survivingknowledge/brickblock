import React, { Component } from 'react';
import '../styles/app.css';
import '../styles/base.css';

import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <div className="container">
          <div className="row">hello</div>
        </div>
      </div>
    );
  }
}

export default App;
