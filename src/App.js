import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './pages/Menu'

import './App.css';

function App() {
  

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/menu' exact component={Menu} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
