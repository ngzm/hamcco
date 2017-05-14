import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Hamtalk.css';

class Hamtalk extends Component {
  handleSubmit(e) {
    e.preventDefault();
    let mytalk = ReactDOM.findDOMNode(this.refs.mytalk).value.trim();
    if (!mytalk) {
      return;
    }
    this.props.onSubmit(mytalk);
    ReactDOM.findDOMNode(this.refs.mytalk).value = '';
  }
  render() {
    return (
      <div className="hamtalk-container">
        ここから話しかけてね！
        <form onSubmit={(e) => this.handleSubmit(e)} >
          <input type="text" ref="mytalk" />
          <button>そうしん</button>
        </form>
      </div>
    );
  }
}

export default Hamtalk;
