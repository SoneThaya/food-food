import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './pages/Menu'
import {axiosWithAuth} from './utils/axiosWithAuth'
import './App.css';

function App() {
  const [list, setList] = useState([])

  const getList = () => {
    axiosWithAuth()
      .get('https://grub-grub-backend.herokuapp.com/api/menu')
      .then(res => {
        console.log(res.data)
        setList(res.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/menu' exact component={Menu} list={list} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
