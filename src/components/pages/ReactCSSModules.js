import React from 'react';
import PageContents from 'PageContents/PageContents';
import styles from './ReactCSSModules.css';
import CSSModules from 'react-css-modules';
export default CSSModules(() => (
  <div styleName="main" className="mdl-js-layout">
    <header styleName="header">
      <div styleName="header-row">
        <span styleName="header-title">The Name Of This Page</span>
        <div styleName="spacer"></div>
        <div styleName="text-field" className="mdl-js-textfield">
          <label styleName="search-button" className="mdl-js-button" htmlFor="search">
            <i styleName="icon">search</i>
          </label>
          <div styleName="textfield-container">
            <input styleName="input" type="text" id="search"/>
            <label styleName="label" htmlFor="search">Enter your query...</label>
          </div>
        </div>
      </div>
    </header>
    <div styleName="demo-ribbon"></div>
    <main styleName="demo-main">
      <div styleName="demo-container">
        <div styleName="cell"></div>
        <div styleName="demo-content">
          <PageContents />
        </div>
      </div>
      <footer styleName="demo-footer">
        <div styleName="demo-footer-left-section">
          <ul styleName="demo-footer-link-list">
            <li><a href="#">Help</a></li>
            <li><a href="#">Privacy and Terms</a></li>
            <li><a href="#">User Agreement</a></li>
          </ul>
        </div>
      </footer>
    </main>
  </div>
), styles);