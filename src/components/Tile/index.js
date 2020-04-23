/* eslint-disable  no-lonely-if */
import React from 'react';
import PropTypes from 'prop-types';
import Queen from 'components/Queen';
import Wrapper from 'components/Tile/styles';

function Tile(props) {
  return (
    <Wrapper
      id={props.propId}
      boardSize={props.boardSize}
      isRed={props.isRed}
      onClick={() => props.handleTileClick(props.propId)}
    >
      {props.hasQueen && (
        <Queen
          key={`Q${props.propId}`}
          src="./img/queen.png"
          id={`Q${props.propId}`}
          boardSize={props.boardSize}
          alt="queen"
        />
      )}
    </Wrapper>
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
