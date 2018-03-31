/* eslint-disable  no-lonely-if */
import React, { PropTypes } from 'react';

const Tile = ({
  isRed,
  hasQueen,
  propId,
  boardSize,
  handleTileClick,
  cols,
  rows,
  redBlocks,
}) => {
  let tile;

  if (isRed) {
    if (hasQueen) {
      tile = <div id={propId}
        className={`tile-${boardSize} red`}
        onClick={() => handleTileClick(propId, cols, rows, boardSize, redBlocks)}
      >
        <img key={`Q${propId}`}
          src="./img/queen.png"
          id={`Q${propId}`}
          className={`queen-${boardSize}`}
        />
      </div>;
    } else {
      tile = <div id={propId}
        className={`tile-${boardSize} red`}
        onClick={() => handleTileClick(propId, cols, rows, boardSize, redBlocks)}
      >

      </div>;
    }
  } else {
    if (hasQueen) {
      tile = <div id={propId}
        className={`tile-${boardSize}`}
        onClick={() => handleTileClick(propId, cols, rows, boardSize, redBlocks)}
      >
        <img key={`Q${propId}`}
          src="./img/queen.png"
          id={`Q${propId}`}
          className={`queen-${boardSize}`}
        />
      </div>;
    } else {
      tile = <div id={propId}
        className={`tile-${boardSize}`}
        onClick={() => handleTileClick(propId, cols, rows, boardSize, redBlocks)}
      >

      </div>;
    }
  }

  return tile;
};

Tile.PropTypes = {
  isRed: PropTypes.bool.isRequired,
  hasQueen: PropTypes.bool.isRequired,
  propId: PropTypes.string.isRequired,
  boardSize: PropTypes.number.isRequired,
  handleTileClick: PropTypes.func.isRequired,
  cols: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  redBlocks: PropTypes.array.isRequired,
};

export default Tile;
