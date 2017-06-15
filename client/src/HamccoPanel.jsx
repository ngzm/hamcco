import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HamccoPanel.css';

/**
 * Hamccoコンポーネントクラス
 */
function HamccoPanel(props) {
  return (
    <div className="hamcco-panel">
      <div className="hamcco-grid">
        <HamccoImage feel={props.feel} flex="flex6" />
        <HamccoMessage message={props.message} flex="flex6" />
      </div>
      <div className="hamcco-grid">
        <HamccoLevel level={props.feel} />
      </div>
    </div>
  );
}
HamccoPanel.propTypes = {
  feel: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};

/**
 * Hamcco イメージコンポーネントクラス
 */
class HamccoImage extends Component {
  getInfoByFeel() {
    const dir = '/img/';
    let info = { name: '天使ハム', image: `${dir}tensi_ham.gif` };
    let flno = Math.floor(this.props.feel / 20) + 1;
    flno = (flno > 5) ? 5 : flno;
    flno = (flno < 1) ? 1 : flno;

    switch (flno) {
    case 1:   // Very BAD
      info = { name: 'おこりハム', image: `${dir}okori_ham.gif` };
      break;
    case 2:   // BAD
      info = { name: 'オニハム', image: `${dir}oni_ham.gif` };
      break;
    case 3:   // Normal
      info = { name: 'キキハム', image: `${dir}kiki_ham.gif` };
      break;
    case 4:   // Good
      info = { name: 'コックハム', image: `${dir}cook_ham.gif` };
      break;
    case 5:   // Very Good
      info = { name: '天使ハム', image: `${dir}tensi_ham.gif` };
      break;
    default:
      break;
    }
    return info;
  }
  render() {
    const info = this.getInfoByFeel();
    return (
      <div className={`hamcco-cell ${this.props.flex}`}>
        <h4>{info.name}</h4>
        <img src={info.image} alt={info.name} />
      </div>
    );
  }
}
HamccoImage.propTypes = {
  feel: PropTypes.number.isRequired,
  flex: PropTypes.string.isRequired,
};

/**
 * Hamccoメッセージコンポーネントクラス
 */
function HamccoMessage(props) {
  return (
    <div className={`hamcco-cell ${props.flex}`}>
      <div className="hamcco-message">
        <p>{props.message}</p>
      </div>
    </div>
  );
}
HamccoMessage.propTypes = {
  flex: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

/**
 * Hamccoごきげんメータコンポーネントクラス
 */
function HamccoLevel(props) {
  return (
    <div className="hamcco-cell">
      ごきげんメータ：
      <span>{props.level} %</span>
      <meter min="0" max="100" low="20" high="40" optimum="99" value={props.level}>
        {props.level} %
      </meter>
    </div>
  );
}
HamccoLevel.propTypes = {
  level: PropTypes.number.isRequired,
};

export default HamccoPanel;
