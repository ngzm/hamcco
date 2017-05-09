import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class HamccoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feel : 5,
      count : 0
    };
  }
  render() {
    return {
      <div className="Hamcco">
        <HamccoImage feel={this.state.feel} />
        <HamccoMessage message="あああああ" />
        <HamccoLevel feel={this.state.feel} />
      </div>
      <div className="HamChat">
        <HamccoChat onSubmit={() => this.chatHamcco()} />
      </div>
    };
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <Hamheader />
        <HamccoApp />
        <Hamfooter />
      </div>
    );
  }
}

export default App;
