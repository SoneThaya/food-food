import styled from 'styled-components'

export const NavStyles = styled.div`
  .container {
    width: 100%;
    margin: 0 auto;
    font-family: 'Raleway', sans-serif;
  }
  
  header {
    background: #FF9233;
    
  }

  header::after {
    content: '';
    display: table;
    clear: both;
  }

  h1 {
    float: left;
    padding-top: 3px;
  }

  nav {
    float: right;
  }

  nav a {
    margin: 0;
    padding: 0;
    display: inline-block;
    margin-left: 35px;
    padding-top: 13px;
    color: #000000;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 400;

    position: relative;
  }

  nav a:hover {
    color: #000000;
  }

  nav a::before {
    content: '';
    display: block;
    height: 5px;
    width: 100%;
    background-color: #444444;
    position: absolute;
    top: 0;
    width: 0%;
    transition: all ease-in-out 250ms;
  }

  nav a:hover::before {
    width: 100%;
  }

`