/* eslint react/prop-types: 0 */
import React from 'react';
import { connect } from 'react-redux';
import Board from '../components/Board';
import {
  moveQueen,
  increaceMoves,
  increaseActiveQueens,
  decreaseActiveQueens,
  gameOver
} from '../actions';

let Game = () => {
  return (
    <Board />
  );
};

const mapStateToProps = (state) => {
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
};

const drawRedBlocks = (row,col,gridSize,redBlocks) => {
  let absDist;
  row--;
  col--;
  for(let i=0; i<gridSize; i++){
    absDist = Math.abs(i-col);

    redBlocks[gridSize*row+i] = 1;
    redBlocks[gridSize*i+col] = 1;
    for(let j=0; j<gridSize; j++){
      if(j === row-absDist || j === row+absDist){
        redBlocks[gridSize*j+i] = 1;
      }
    }
  }
  redBlocks[gridSize*row+col] = 0;

  return redBlocks;

};

const removeRedBlocks = (row,col,gridSize,redBlocks,cols) => {
  row--;
  col--;
  for(let i=0; i<gridSize; i++){
    redBlocks[gridSize*row+i] = 0;
    redBlocks[gridSize*i+col] = 0;
    for(let j=0; j<gridSize; j++){
      redBlocks[gridSize*j+i] = 0;
    }
  }

  for(let i=0; i<gridSize; i++){
    if(cols[i] !== 0){
      redBlocks = drawRedBlocks(cols[i],i+1,gridSize,redBlocks);
    }
  }

  return redBlocks;
};

const mapDispatchToProps = (dispatch) => {
  return {
    gameOver: () => {
      dispatch(gameOver());
    },

    onTileClick: (id,cols,rows,gridSize,redBlocks) => {
      let row,col;
      let newRedBlocks = redBlocks.slice(0);
      let newRows = rows.slice(0);
      let newCols = cols.slice(0);



      if(id.length === 2){
        row = Number(id.charAt(0));
        col = Number(id.charAt(1));
      }
      else{
        row = Number(id.charAt(1));
        col = Number(id.charAt(2));
      }

      // when you click a tile for the first time on a column
      if(newCols[col-1] === 0){
        newCols[col-1] = row;
        newRows[row-1] = col;
        dispatch(increaceMoves());
        newRedBlocks = drawRedBlocks(row,col,gridSize,newRedBlocks);
        dispatch(increaseActiveQueens());
      }
      // when you click a tile with a queen on
      else if(newCols[col-1] === row) {
        newCols[col-1] = 0;
        newRows[row-1] = 0;
        newRedBlocks = removeRedBlocks(row,col,gridSize,newRedBlocks,newCols);
        dispatch(decreaseActiveQueens());
      }
      // when you have already clicked a tile on that column
      else {
        let prev_row = newCols[col-1];
        newCols[col-1] = row;
        newRows[row-1] = col;
        dispatch(increaceMoves());
        newRedBlocks = removeRedBlocks(prev_row,col,gridSize,newRedBlocks,newCols);
      }

      dispatch(moveQueen(newRows,newCols,newRedBlocks));
    }

  };
};

Game = connect(mapStateToProps,mapDispatchToProps)(Board);

export default Game;
