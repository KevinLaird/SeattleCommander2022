import React from 'react';
import './css/main.scss';
import styles from './App.module.scss';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

const App = (): JSX.Element => {
  const discordLink = 'https://discord.com/invite/EAMvygbY9c';
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.flexContainer}>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>Seattle Commander</h1>
          <h2 className={styles.content}>
            A place where people can come together and play Magic in the
            Seattle Area.
          </h2>
          <a
            href={discordLink}
            className={`btn btn--2 ${styles.btn}`}
          >
            Join Now!
          </a>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default App;
