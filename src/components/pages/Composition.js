import React from 'react';
import styles from './CSSModules.css';
import PageContents from 'PageContents/PageContents';
import Footer from 'components/Footer/Footer';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerRow}>
      <span className={styles.headerTitle}>The Name Of This Page</span>
    </div>
  </header>
);

export default () => (
  <div className={styles.main}>
    <Header />
    <main className={styles.mainContent}>
      <div className={styles.paddingLarge}>
        <PageContents />
      </div>
      <Footer />
    </main>
  </div>
);