import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: 'http://192.168.86.130:5000'
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on('buttonPush', data => this.setState({ response: data }));
  }

  render() {
    const { response } = this.state;
    return (
        <div style={{ textAlign: 'center' }}>
          {response === 1
            ? <p>The light is on</p>
            : <p>The light is off</p>}
        </div>
    );
  }
}

export default App;
