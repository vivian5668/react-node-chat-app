import React from 'react';
import logo from './logo.svg';
import './App.css';

class MessagingBox extends React.Component {
  messageHandler = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.props.sendMessages(e.target.value);
      e.target.value = ""
    }
  }

  render() {
    return (
      <div id="messagingBox">
        <textarea onKeyDown={this.messageHandler}></textarea>
      </div>
    );
  }
}

export default MessagingBox;
