import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Hamcco from './Hamcco';
import './AppFrame.css';

/**
 * Application Frame
 */
function AppFrame() {
  return (
    <div className="AppFrame">
      <AppHeader />
      <AppMain />
      <AppFooter />
    </div>
  );
}

/**
 * Hamcco画面共通ヘッダ
 */
function AppHeader() {
  return (
    <header>
      <h1>人口無能ハムっこであそぼう</h1>
    </header>
  );
}

/**
 * Hamcco画面共通フッタ
 */
function AppFooter() {
  return (
    <footer>
      <small>Beauty FRANCE</small>
    </footer>
  );
}

/**
 * Application Main フレーム
 */
class AppMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '名無しさん',
    };
  }

  setUserName(username) {
    this.setState(() => ({
      username,
    }));
  }

  render() {
    return (
      <main>
        <Switch>
          <Route
            exact path="/"
            render={props => <Login onSubmit={un => this.setUserName(un)} {...props} />}
          />
          <Route
            path="/chat"
            render={props => <Hamcco username={this.state.username} {...props} />}
          />
        </Switch>
      </main>
    );
  }
}

export default AppFrame;
