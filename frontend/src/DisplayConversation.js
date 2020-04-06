import React from 'react';
import logo from './logo.svg';
import './App.css';

class DisplayConversation extends React.Component {
  render() {
    return (
      <div id="displayConversation">
        { this.props.messages.map(message => <div>{message.username}: {message.message}</div>)}
      </div>
    );
  }
}

export default DisplayConversation;
