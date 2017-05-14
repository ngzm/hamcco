import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Hamtalk.css';

class Hamtalk extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const mytalk = this.mytalk.value.trim();
    if (!mytalk) {
      return;
    }
    this.props.onSubmit(mytalk);
    this.mytalk.value = '';
  }
  render() {
    return (
      <div className="hamtalk-container">
        ここから話しかけてね！
        <form onSubmit={e => this.handleSubmit(e)} >
          <input type="text" ref={(node) => { this.mytalk = node; }} />
          <button>そうしん</button>
        </form>
      </div>
    );
  }
}
Hamtalk.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Hamtalk;
