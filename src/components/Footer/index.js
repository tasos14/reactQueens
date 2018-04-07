import React from 'react';

const Footer = () => (
    <footer>
      <p>
        <strong>How to play:</strong> Click on each tile to place a <strong>queen </strong>
        on it. The game ends when all queens are placed
        to the board and no two queens share the same
        row, column,or diagonal.
      </p>

      <hr></hr>

      <p>
        <strong>Note:</strong> This game was built using React, Redux and SWI-Prolog Pengines.
      </p>

      <hr></hr>

      <p>
        <strong>More:</strong> About the n-Queens puzzle <a href="https://en.wikipedia.org/wiki/Eight_queens_puzzle" target="_blank" rel="noopener noreferrer">here</a>.
      </p>

      <hr></hr>

      <p>
        Created by <a href="https://github.com/tasos14">tasos14</a>, inspired by <a href="http://ng2048.github.io/" target="_blank" rel="noopener noreferrer">ng-2048</a>.
      </p>
    </footer>

);


export default Footer;
