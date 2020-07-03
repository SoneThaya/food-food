import React from 'react';
import { Link } from 'react-router-dom';
import {NavStyles} from './Styles'

const Navbar = () => {
  return (
   
     <NavStyles>
      <div className='nav'>
        <div className='container'>
        <Link to='/'>
          <h1>Food Food</h1>
        </Link>
        <nav>
            <Link to='/menu'>Menu</Link>
            <Link to='/breakfast'>Breakfast</Link>
            <Link to='/lunch'>Lunch</Link>
            <Link to='/dinner'>Dinner</Link>
          </nav>
          </div>
        </div>
      </NavStyles>
   
  )
}

export default Navbar;