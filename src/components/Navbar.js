import React from 'react';
import '../styles/nav.css';
import FA from 'react-fontawesome';

const Navbar = (props) => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="nav-padding">
            <div className="branding"><a href="/">Blockbrick</a></div>
            <div className="mobile-toggle-menu"><FA name='bars' /></div>

          </div>
          <ul className="menu">
            <li><a href="/profile">Profile</a></li>
            <li><a href="/settings">Settings</a></li>
            <li><a href="/signin">Sign in</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
