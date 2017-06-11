import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HamccoInput.css';

class HamccoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myInput: '',
    };
  }

  handleChange(e) {
    this.setState({
      myInput: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const message = this.state.myInput.trim();
    if (!message.length) {
      return;
    }
    this.props.onSubmit(message);
    this.setState({
      myInput: '',
    });
  }

  render() {
    return (
      <div className="hamcco-input">
        ここから話しかけてね！
        <form onSubmit={e => this.handleSubmit(e)} >
          <input
            type="text"
            value={this.state.myInput}
            onChange={e => this.handleChange(e)}
            autoFocus="true"
          />
          <button>そうしん</button>
        </form>
      </div>
    );
  }
}
HamccoInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default HamccoInput;
