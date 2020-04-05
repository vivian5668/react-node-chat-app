import React from 'react';
import logo from './logo.svg';
import './App.css';

class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setUsername(e.target.username.value)
  }

  render() {
    return (
      <div id="login">
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label><br/>
          <input type="text" id="username" /><br/>
          <input type="submit" value="Log In" />
        </form>
      </div>
    );
  }
}

export default Login;
