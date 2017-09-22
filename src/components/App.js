import React, { Component } from 'react';
import '../styles/app.css';
import '../styles/base.css';
import FA from 'react-fontawesome';
import Fundstats from './Fundstats';
import Fancycharts from './Fancycharts';

import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <section className="container">
          <div className="row">
            <div className="card">
              <header className='card-header'>
                <div className="card-title">Lobo Fund</div>
                <div className="card-menu"><FA name='ellipsis-h' /></div>
              </header>

              <Fundstats />
              <hr className='card-divider' />

              <Fancycharts />
              <hr className="card-divider"/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
