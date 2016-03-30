import React from 'react';
import PageContents from 'PageContents/PageContents';
import styles from './CSSModules.css';
export default () => (
  <div className={`${styles.main} mdl-js-layout`}>
    <header className={styles.header}>
      <div className={styles.headerRow}>
        <span className={styles.headerTitle}>The Name Of This Page</span>
        <div className={styles.spacer}></div>
        <div className={`${styles.textField} mdl-js-textfield`}>
          <label className={`${styles.searchButton} mdl-js-button`} htmlFor="search">
            <i className={styles.icon}>search</i>
          </label>
          <div className={styles.textfieldContainer}>
            <input className={styles.input} type="text" id="search"/>
            <label className={styles.label} htmlFor="search">Enter your query...</label>
          </div>
        </div>
      </div>
    </header>
    <div className={styles.demoRibbon}></div>
    <main className={styles.demoMain}>
      <div className={styles.demoContainer}>
        <div className={styles.cell}></div>
        <div className={styles.demoContent}>
          <PageContents />
        </div>
      </div>
      <footer className={styles.demoFooter}>
        <div className={styles.demoFooterLeftSection}>
          <ul className={styles.demoFooterLinkList}>
            <li><a href="#">Help</a></li>
            <li><a href="#">Privacy and Terms</a></li>
            <li><a href="#">User Agreement</a></li>
          </ul>
        </div>
      </footer>
    </main>
  </div>
);