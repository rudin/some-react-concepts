import React from 'react';
import PageContents from 'PageContents/PageContents';
import styles from './CSSModules.css';
export default () => (
  <div className={styles.main}>
    <header className={styles.header}>
      <div className={styles.headerRow}>
        <span className={styles.headerTitle}>The Name Of This Page</span>
        <div className={styles.spacer}></div>
        <div className={styles.textField}>
          <label className={styles.searchButton} htmlFor="search">
            <i className={styles.icon}>search</i>
          </label>
          <div className={styles.textfieldContainer}>
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