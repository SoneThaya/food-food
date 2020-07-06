import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Menu from './pages/Menu';
import Login from './components/Login'
import Register from './components/Register'
import AddItem from './components/AddItem'

import './App.css';

function App() {
  

  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/menu' exact component={Menu} />
          <Route path='/add-item' exact component={AddItem} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
