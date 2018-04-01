/* eslint-disable  no-lonely-if */
import React from 'react';
import PropTypes from 'prop-types';

function Tile(props) {
  return (
    <div
      id={props.propId}
      className={props.isRed ? `tile-${props.boardSize} red` : `tile-${props.boardSize}`}
      onClick={() => props.handleTileClick(props.propId, props.cols, props.rows, props.boardSize, props.redBlocks)} // eslint-disable-line
    >
      {
        props.hasQueen &&
        <img key={`Q${props.propId}`}
          src="./img/queen.png"
          id={`Q${props.propId}`}
          className={`queen-${props.boardSize}`}
        />
      }
    </div>
  );
}

Tile.propTypes = {
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
