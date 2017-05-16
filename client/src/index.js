import React from 'react';
import ReactDOM from 'react-dom';
import HamController from './HamController';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

/**
 * Hamcco画面フレーム
 */
function App() {
  return (
    <div className="App">
      <HamHeader />
      <HamController />
      <HamFooter />
    </div>
  );
}

/**
 * Hamcco画面共通ヘッダ
 */
function HamHeader() {
  return (
    <header>
      <h1>人口無能ハムっこであそぼう</h1>
    </header>
  );
}

/**
 * Hamcco画面共通フッタ
 */
function HamFooter() {
  return (
    <footer>
      <small>French Connection</small>
    </footer>
  );
}

