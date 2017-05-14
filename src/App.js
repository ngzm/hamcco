import React, { Component } from 'react';
import HamController from './HamController';
import './App.css';

/**
 * Hamcco画面フレーム
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <HamHeader />
        <HamController />
        <HamFooter />
      </div>
    );
  }
}

/**
 * Hamcco画面共通ヘッダ
 */
class HamHeader extends Component {
  render() {
    return (
      <header>
        <h1>人口無能ハムっこであそぼう</h1>
      </header>
    );
  }
}

/**
 * Hamcco画面共通フッタ
 */
class HamFooter extends Component {
  render() {
    return (
      <footer>
        <small>French Connection</small>
      </footer>
    );
  }
}

export default App;
