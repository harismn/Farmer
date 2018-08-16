import React from 'react';
import { Link } from 'react-router-dom';


/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {

  render() {
    return (
      <nav className="teal lighten-1">
        <div className="nav-wrapper">
          <a href="" className="brand-logo left">
            <img src={require('../../assets/bg.png')} width="50" height="50" />
          </a>
          <a href="/" data-activates="mobile-demo" className="button-collapse right">
            <i className="material-icons">menu</i>
          </a>
          <ul id="mobile-demo" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/appointment">Shop</Link>
            </li>
            <li>
              <Link to="/service">Blog</Link>
            </li>
            <li>
              <Link to="/Register">About US</Link>
            </li>
            <li>
              <Link to="/loginPage">Contact US</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
}




export default Header;