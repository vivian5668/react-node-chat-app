import React, {Component, Fragment} from 'react';
import './App.css';
import DisplayConversation from './DisplayConversation';
import MessagingBox from './MessagingBox';

class MessagingPanel extends Component {
  state = {
    messages: []
  }

  connection = new WebSocket('wss://localhost:3030/')

  // open connection to receive messages
  componentDidMount() {
    this.connection.onmessage = (message) => {
      console.log(JSON.parse(message.data))
      const data = JSON.parse(message.data);
      this.setState({messages: [...this.state.messages, data]})
    }
  }

  // send message to socket
  sendMessages = (message) => {
    // this.setState({messages: [...this.state.messages, message]})
    const data = {
      username: this.props.username,
      message: message
    }
    this.connection.send(JSON.stringify(data))
  }

  render() {
    return (
      <Fragment>
        <DisplayConversation messages={this.state.messages}/>
        <MessagingBox sendMessages={this.sendMessages}/>
      </Fragment>
    );
  }
}

export default MessagingPanel;
