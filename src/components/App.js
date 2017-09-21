import React, { Component } from 'react';
import '../styles/app.css';
import '../styles/base.css';
import '../styles/nav.css';

import FA from 'react-fontawesome';

class App extends Component {
  render() {
    return (
      <div className="App">
          <nav>
            <div className="container">
              <div className="row">
                <div className="branding"><a href="/">Blockbrick</a></div>
                <div className="mobile-toggle-menu" data-toggle='menu'><FA name='bars' /></div>
                <ul className="menu">
                  <li className='active'><a href="/profile">Profile</a></li>
                  <li><a href="/settings">Settings</a></li>
                  <li><a href="/signin">Sign in</a></li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="row">hello</div>
          </div>
      </div>
    );
  }
}

export default App;
