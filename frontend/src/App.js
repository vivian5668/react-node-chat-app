import React from 'react';
import logo from './logo.svg';
import Login from './Login';
import './App.css';
import MessagingPanel from './MessagingPanel';

class App extends React.Component {
  state = {
    username: null
  }

  setUsername = (username) => {
    this.setState({username})
  }

  render() {
    return (
      <div className="App">
        {
          !this.state.username ?
          <Login setUsername={this.setUsername}/>
          :
          <MessagingPanel username = {this.state.username}/>
        }
      </div>
    );
  }
}

export default App;
