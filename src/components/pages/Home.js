import React, { Component } from 'react';
import { Link } from 'react-router';
export default class Home extends Component {
  render() {
    const style = {
      color: '#ff0000',
      fontSize: '4em',
      fontFamily: `"Comic Sans MS", cursive, sans-serif`,
      textAlign: 'center',
      padding: '3em',
      lineHeight: '1em',
      listStyleType: 'none',
      textDecoration: 'none'
    };
    return (
      <ul style={style} className="menu">
        <li><Link to={''}>Home</Link></li>
        <li><Link to={'es6'}>ES6 - Immutability</Link></li>
        <li><Link to={'composition'}>Composition</Link></li>
        <li><Link to={'classnames'}>ClassNames</Link></li>
        <li><Link to={'cssmodules'}>CSSModules</Link></li>
        <li><Link to={'reactcssmodules'}>React CSSModules</Link></li>
      </ul>
    );
  }
}

// export default () => <div>Home</div>