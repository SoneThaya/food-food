import React from 'react';
import axios from 'axios'
import { Styles } from './Styles'
import { Link, useHistory } from "react-router-dom";

class Register extends React.Component {
  state = {
    credentials: {
      username: '',
      password: '',
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  signup = e => {
    e.preventDefault();

    axios
      .post("https://bw-expatjournal.herokuapp.com/api/auth/register", this.state.credentials)
      .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.payload);
        //this.props.history.push("/users");
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Styles>
        <form onSubmit={this.signup}>
          <h2>Register</h2>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            placeholder="username"
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            placeholder="password"
          />
          
            <button>Sign Up</button>
            
            <h5>
          Already registered? <Link to="/login">Login here.</Link>
        </h5>
          </form>
          </Styles>
      </div>
    ) 
  }
}

export default Register