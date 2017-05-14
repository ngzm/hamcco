import React, { Component } from 'react';
import Axios from 'axios';
import Hamcco from './Hamcco';
import Hamtalk from './Hamtalk';
import Hamguide from './Hamguide';

/**
 * Hamccoアプリケーションコントローラクラス
 */
class HamController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feel: 80,
      message: 'こんにちは、なにか話しかけてね！',
      count: 0
    };
  }

  sendMessage(message) {
    console.log('say message: ' + message);

    Axios.get('/hamcco.json').then((res) => {

      console.log('status : ' + res.status);
      console.log('data : ' + JSON.stringify(res.data));

      this.setState(() => {
        return { 
          count: this.state.count + 1,
          feel: res.data.feel,
          message : res.data.message
        };
      });
    }).catch((res) => {
      console.log(res);
    });
  }

  render() {
    return (
      <main>
        <Hamcco feel={this.state.feel} message={this.state.message} />
        <Hamtalk onSubmit={(m) => this.sendMessage(m)} />
        <Hamguide />
      </main>
    );
  }
}

export default HamController;
