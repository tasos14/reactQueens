import React from 'react';
import Header from '../containers/Header';
import Game from '../containers/Game';
import Footer from './Footer';

export default function App() {
  return (
    <div>
      <Header/>
      <div id="board-container">
        <Game/>
      </div>
      <Footer />
    </div>
  );
}
