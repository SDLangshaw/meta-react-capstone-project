import React from 'react';
//import logoImage from './assets/logo.png';
import './Header.css';
import Nav from '../Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';

const Header = () => {
  return (
      <Router>
        <div className="site-header">
          <Nav />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
  );
}

export default  Header;