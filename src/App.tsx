import React from 'react';
import './App.scss';
import './assets/styles/main.scss';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Watermark from './components/Watermark/Watermark';

const App = (): JSX.Element => {
  const discordLink = 'https://discord.com/invite/EAMvygbY9c';
  return (
    <div className="App-container">
      <Navbar />
      <Watermark />
      <div className="App-container--content">
        <h1 className="title">Seattle Commander</h1>
        <h2>An inclusive group that enjoys playing Magic: The Gathering</h2>
        <h3>
          <a href={discordLink} className="btn btn--1">Join Now!</a>
        </h3>
      </div>
      <Footer />
    </div>
  );
};

export default App;
