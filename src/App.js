import React, { Component } from 'react';
import './App.css';

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
      <div>
        <h3>はむっこボディー部</h3>
        <dl><dt>feel</dt><dd>{this.state.feel}</dd></dl>
        <dl><dt>count</dt><dd>{this.state.count}</dd></dl>

      {/* <div className="Hamcco">
        <HamccoImage feel={this.state.feel} />
        <HamccoMessage message="あああああ" />
        <HamccoLevel feel={this.state.feel} />
      </div>
      <div className="HamChat">
        <HamccoChat onSubmit={() => this.chatHamcco()} />
      </div> */}

      </div>
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
