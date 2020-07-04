import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Styles } from '../components/Styles'
import { Link, useHistory } from "react-router-dom";

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
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

  login = e => {
    e.preventDefault();

    axiosWithAuth()
      .post("/api/auth/login", this.state.credentials)
      .then(res => {
        // res.data.payload
        console.log(res)
        localStorage.setItem("token", res.data.token);
        // this.props.history.push("/users");
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Styles>
        <form onSubmit={this.login}>
          <h2>Login</h2>
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
            <button>Log in</button>
            
            <h5>
          Need to register? <Link to="/signup">Sign up here.</Link>
        </h5>
          </form>
          </Styles>
      </div>
    ) 
  }
}

export default Login