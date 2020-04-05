import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayConversation from './DisplayConversation';
import MessagingBox from './MessagingBox';

class MessagingPanel extends Component {
  state = {
    messages: []
  }

  setMessages = (message) => {
    this.setState({messages: [...this.state.messages, message]})
  }

  render() {
    return (
      <Fragment>
        <DisplayConversation />
        <MessagingBox setMessages={this.setMessages}/>
      </Fragment>
    );
  }
}

export default MessagingPanel;
