import React from 'react';
import { connect } from 'react-redux';
import Board from 'components/Board';
import Wrapper from 'containers/Game/styles';
import {
  moveQueen,
  gameOver as gameOverAction,
  newGame,
} from 'actions';

class Game extends React.Component {
  render() {
    return (
      <Wrapper>
        <Board {...this.props} />
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    size: state.get('gridSize'),
    highlight: state.get('highlight'),
    cols: state.get('cols'),
    rows: state.get('rows'),
    redBlocks: state.get('redBlocks'),
    activeQueens: state.get('activeQueens'),
    moves: state.get('moves'),
    isGameOver: state.get('gameOver'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    newGame: () => {
      dispatch(newGame());
    },

    gameOver: () => {
      dispatch(gameOverAction());
    },

    onTileClick: (id) => {
      dispatch(moveQueen(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
