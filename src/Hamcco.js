import React, { Component } from 'react';
import './Hamcco.css';

/**
 * Hamccoコンポーネントクラス
 */
class Hamcco extends Component {
  render() {
    return (
      <div className="hamcco-container">
        <div className="hamcco-grid">
          <HamccoImage feel={this.props.feel} flex="flex6" />
          <HamccoMessage message={this.props.message} flex="flex6"/>
        </div>
        <div className="hamcco-grid">
          <HamccoLevel level={this.props.feel} />
        </div>
      </div>
    );
  }
}

/**
 * Hamcco イメージコンポーネントクラス
 */
class HamccoImage extends Component {
  getInfoByFeel() {
    let dir = '/img/';
    let info = { name: '天使ハム', image: dir + 'tensi_ham.gif' };
    let flno = Math.floor(this.props.feel / 20) + 1;
    flno = (flno > 5) ? 5 : flno;
    flno = (flno < 1) ? 1 : flno;

    switch(flno) {
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
        <h4>{info.name}</h4>
        <img src={info.image} alt={info.name} />
      </div>
    );
  }
}

/**
 * Hamccoメッセージコンポーネントクラス
 */
class HamccoMessage extends Component {
  render() {
    return (
      <div className={`hamcco-cell ${this.props.flex}`}>
        <div className="hamcco-message">
          {this.props.message}
        </div>
      </div>
    );
  }
}

/**
 * Hamccoごきげんメータコンポーネントクラス
 */
class HamccoLevel extends Component {
  render() {
    return (
      <div className="hamcco-cell">
        ごきげんメータ：
        <span>{this.props.level} %</span>
        <meter min="0" max="100" low="20" high="40" optimum="99" value={this.props.level}>
        {this.props.level} %
        </meter>
      </div>
    );
  }
}

export default Hamcco;
