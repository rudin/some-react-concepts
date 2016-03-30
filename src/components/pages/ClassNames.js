import React from 'react';
import PageContents from 'PageContents/PageContents';
export default () => (
  <div className="demo-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
    <header className="demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800">
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title">The Name Of This Page</span>
        <div className="mdl-layout-spacer"></div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
          <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search">
            <i className="material-icons">search</i>
          </label>
          <div className="mdl-textfield__expandable-holder">
            <input className="mdl-textfield__input" type="text" id="search"/>
            <label className="mdl-textfield__label" htmlFor="search">Enter your query...</label>
          </div>
        </div>
      </div>
    </header>
    <div className="demo-ribbon"></div>
    <main className="demo-main mdl-layout__content">
      <div className="demo-container mdl-grid">
        <div className="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
        <div className="demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
          <PageContents />
        </div>
      </div>
      <footer className="demo-footer mdl-mini-footer">
        <div className="mdl-mini-footer--left-section">
          <ul className="mdl-mini-footer--link-list">
            <li><a href="#">Help</a></li>
            <li><a href="#">Privacy and Terms</a></li>
            <li><a href="#">User Agreement</a></li>
          </ul>
        </div>
      </footer>
    </main>
  </div>
);