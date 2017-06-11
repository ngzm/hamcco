import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

/**
 * ログイン（ユーザ名入力）画面フレーム
 */
class Login extends Component {
  handleSubmit(e) {
    e.preventDefault();

    const username = this.username.value.trim();
    if (!username) {
      return;
    }
    this.props.onSubmit(username);
    this.username.value = '';
    this.props.history.push('/chat');
  }

  render() {
    return (
      <div className="login-panel">
        あなたのお名前（ニックネーム）をおしえてください！
        <form onSubmit={e => this.handleSubmit(e)} >
          <input
            type="text"
            ref={(input) => { this.username = input; }}
            autoFocus="true"
          />
          <button>そうしん</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

export default Login;
