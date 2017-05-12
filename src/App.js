import React, { Component } from 'react';
import './App.css';

class HamccoImage extends Component {
  render() {
    return (
      <div className={`hamcco-cell ${this.props.flex}`}>
        <h4>はむっこイメージ</h4>
        feel: {this.props.feel} / {`hamcco-cell ${this.props.flex}`}
      </div>
    );
  }
}
class HamccoMessage extends Component {
  render() {
    return (
      <div className={`hamcco-cell ${this.props.flex}`}>
        <h4>はむっこメッセージ</h4>
        message: {this.props.message}
      </div>
    );
  }
}
class HamccoLevel extends Component {
  render() {
    return (
      <div className="hamcco-cell">
        Level: {this.props.level}
      </div>
    );
  }
}



class HamApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feel : 5,
      count : 0
    };
  }
  render() {
    return (
      <main className="hamcco-container">
        <div className="hamcco-grid">
          <HamccoImage feel={this.state.feel} flex="flex7" />
          <HamccoMessage message="あああああ" flex="flex5"/>
        </div>
        <div className="hamcco-grid">
          <HamccoLevel level={this.state.feel} />
        </div>

      {/* <div className="Hamcco">
        <HamccoImage feel={this.state.feel} />
        <HamccoMessage message="あああああ" />
        <HamccoLevel feel={this.state.feel} />
      </div>
      <div className="HamChat">
        <HamccoChat onSubmit={() => this.chatHamcco()} />
      </div> */}

      </main>
    );
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
