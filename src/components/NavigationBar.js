import React from 'react';
import { Link } from 'react-router-dom';
import { NavStyles } from './Styles'
import { Navbar, Nav } from "react-bootstrap"

const NavigationBar = () => {
  return (
   
    //  <NavStyles>
    //   <div className='nav'>
    //     <div className='container'>
    //     <Link to='/'>
    //       <h1>Food Food</h1>
    //     </Link>
    //     <nav>
    //         <Link to='/menu'>Menu</Link>
    //         <Link to='/breakfast'>Breakfast</Link>
    //         <Link to='/lunch'>Lunch</Link>
    //         <Link to='/dinner'>Dinner</Link>
    //         <Link to='/add-item'>Add Item</Link>
    //         <Link to='/login'>Login</Link>
    //         <Link to='/register'>Register</Link>
    //       </nav>
    //       </div>
    //     </div>
    //   </NavStyles>
    <div className="App">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/">Food Food</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/menu">Menu</Nav.Link>
        <Nav.Link href="/breakfast">Breakfast</Nav.Link>
        <Nav.Link href="/lunch">Lunch</Nav.Link>
        <Nav.Link href="/dinner">Dinner</Nav.Link>
            
        
      </Nav>
      
    </Navbar.Collapse>
  </Navbar>
    </div>
    
   
  )
}

export default NavigationBar;