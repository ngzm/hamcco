import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import HamccoPanel from './HamccoPanel';
import HamccoInput from './HamccoInput';
import HamccoGuide from './HamccoGuide';

/**
 * Hamccoアプリケーション（メインコントローラ）クラス
 */
class Hamcco extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feel: 80,
      message: 'Hi! user',
      count: 0,
    };
  }

  componentWillMount() {
    this.setState(() => ({
      message: `こんにちは ${this.props.username} さん、なにか話しかけてね！`,
    }));
  }

  sendMessage(message) {
    console.log(`say message: ${message}`);

    Axios.post('/hamcco/chat', {
      usrname: this.props.username,
      count: this.state.count,
      feel: this.state.feel,
      message,
    }).then((res) => {
      console.log(`status : ${res.status}`);
      console.log(`data : ${JSON.stringify(res.data)}`);

      this.setState(() => ({
        count: this.state.count + 1,
        feel: res.data.feel,
        message: res.data.message,
      }));
    }).catch((res) => {
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        <HamccoPanel feel={this.state.feel} message={this.state.message} />
        <HamccoInput onSubmit={m => this.sendMessage(m)} />
        <HamccoGuide />
      </div>
    );
  }
}

Hamcco.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Hamcco;
