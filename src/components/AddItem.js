import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Styles } from './Styles'
import { Link, useHistory } from "react-router-dom";

class AddStory extends React.Component {
  state = {
    credentials: {
      title: '',
      description: '',
      category: '',
      price: '',
      itemImage: ''
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

  submitForm = e => {
    e.preventDefault();

    axiosWithAuth()
      .post("/menu", this.state.credentials)
      .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.token);
       // this.props.history.push("/menu");
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Styles>
        <form onSubmit={this.submitForm}>
          <h2>Add Story</h2>
          <input
            type="text"
            name="title"
            value={this.state.credentials.title}
            onChange={this.handleChange}
            placeholder="title"
          />
         
          <input
            type="text"
            name="description"
            value={this.state.credentials.description}
            onChange={this.handleChange}
            placeholder="description"
          />
            
          <input
            type="text"
            name="category"
            value={this.state.credentials.category}
            onChange={this.handleChange}
            placeholder="category"
          />
            
          <input
            type="text"
            name="price"
            value={this.state.credentials.price}
            onChange={this.handleChange}
            placeholder="price"
          />

          <input
            type="text"
            name="itemImage"
            value={this.state.credentials.itemImage}
            onChange={this.handleChange}
            placeholder="image"
          />

          <button>Submit</button>
          </form>
          </Styles>
      </div>
    ) 
  }
}

export default AddStory