import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class HamccoImage extends Component {
  getInfoByFeel() {
    let dir = '/img/';
    let info = { name: '天使ハム', image: dir + 'kiki_ham.gif' };

    switch(this.props.feel) {
    case 1:   // Very BAD
      info = { name: 'おこりハム', image: dir + 'okori_ham.gif' };
      break;
    case 2:   // BAD
      info = { name: 'オニハム', image: dir + 'oni_ham.gif' };
      break;
    case 3:   // Normal
      info = { name: 'キキハム', image: dir + 'kiki_ham.gif' };
      break;
    case 4:   // Good
      info = { name: 'コックハム', image: dir + 'cook_ham.gif' };
      break;
    case 5:   // Very Good
      info = { name: '天使ハム', image: dir + 'tensi_ham.gif' };
      break;
    default:
      break;
    }
    return info;
  }
  render() {
    let info = this.getInfoByFeel();
    return (
      <div className={`hamcco-cell ${this.props.flex}`}>
        <h4>{info.name} </h4>
        <img src={info.image} alt={info.name} />
      </div>
    );
  }
}
class HamccoMessage extends Component {
  render() {
    return (
      <div className={`hamcco-cell ${this.props.flex}`}>
        <div className="ham-message">
          {this.props.message}
        </div>
      </div>
    );
  }
}
class HamccoLevel extends Component {
  render() {
    return (
      <div className="hamcco-cell">
        ごきげんメータ
        {this.props.level} %
        <meter min="0" max="5" low="2" high="3" optimum="4" value={this.props.level}>
        {this.props.level} %
        </meter>
      </div>
    );
  }
}
class MyTalk extends Component {
  handleSubmit() {
    let myTalk = ReactDOM.findDOMNode(this.refs.mytalk).value.trim();
    if (!myTalk) {
      return;
    }
    this.props.onSubmit(myTalk);
    ReactDOM.findDOMNode(this.refs.mytalk).value = '';
  }
  render() {
    return (
      <div className="hamcco-cell">
      {/* <input type="text" ref="mytalk" onKeyPress={() => this.handleSubmit()} />
      */}
        <input type="text" ref="mytalk" />
        <button type="button" onClick={() => this.handleSubmit()} >
          そうしん
        </button>
      </div>
    );
  }
}

class HamApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feel: 5,
      message: 'こんにちは、なにか話しかけてね！',
      count: 0
    };
  }
  render() {
    return (
      <main className="hamcco-container">
        <div className="hamcco-grid">
          <HamccoImage feel={this.state.feel} flex="flex6" />
          <HamccoMessage message={this.state.message} flex="flex6"/>
        </div>
        <div className="hamcco-grid">
          <HamccoLevel level={this.state.feel} />
        </div>
        <div className="hamcco-grid">
          <MyTalk onSubmit={(m) => this.sendMessage(m)} />
        </div>
      </main>
    );
  }
  sendMessage(message) {
    console.log('say message: ' + message);
    this.setState((prevState, props) => {
      return { 
        count: prevState.count + 1,
        feel: (prevState.feel % 5) + 1,
        message : message
      };
    });
  }
}

class HamHeader extends Component {
  render() {
    return (
      <header>
        <h1>人口無能ハムッ子であそぼう</h1>
      </header>
    );
  }
}
class HamFooter extends Component {
  render() {
    return (
      <footer>
        フッターですわ。
      </footer>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <HamHeader />
        <HamApp />
        <HamFooter />
      </div>
    );
  }
}

export default App;
