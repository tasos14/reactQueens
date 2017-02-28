import React, { PropTypes } from 'react';
import Tile  from './Tile';
import GameMessage from './GameMessage';

const Board = ({
  size,
  highlight,
  onTileClick,
  cols,
  rows,
  redBlocks,
  activeQueens,
  moves,
  isGameOver,
  newGame}) => {

    let row = [];
    let board = {
      rows: [],
      queens: []
    };

    for(let i=1; i<size+1; i++){
      for(let j=1; j<size+1; j++){
        // if its a red block
        if(redBlocks[size*(i-1)+j-1] == 1 && highlight){
          if(cols[j-1] === i){
            row.push(
              <Tile
                key={i+""+j}
                propId={i+""+j}
                boardSize={size}
                handleTileClick={onTileClick}
                cols={cols}
                rows={rows}
                redBlocks={redBlocks} hasQueen={true} isRed={true}
              />
            );
          }
          else {
            row.push(
              <Tile
                key={i+""+j}
                propId={i+""+j}
                boardSize={size}
                handleTileClick={onTileClick}
                cols={cols}
                rows={rows}
                redBlocks={redBlocks}
                isRed={true}
              />
            );
          }
        }
        else {
          if(cols[j-1] === i){
            row.push(
              <Tile
                key={i+""+j}
                propId={i+""+j}
                boardSize={size}
                handleTileClick={onTileClick}
                cols={cols}
                rows={rows}
                redBlocks={redBlocks} hasQueen={true}/>
            );
          }
          else {
            row.push(
              <Tile
                key={i+""+j}
                propId={i+""+j}
                boardSize={size}
                handleTileClick={onTileClick}
                cols={cols}
                rows={rows}
                redBlocks={redBlocks}
              />
            );
          }
        }

      }
      board.rows.push(
        <div key={i} className="board-row">{row}</div>
      );

      if(cols[i-1] != 0){
        board.queens.push(
          <img key={"Q"+i} src="./img/queen.png" id={"Q"+i} className={"queen-"+size+" fade"} />
        );
      }
      else {
        board.queens.push(
          <img key={"Q"+i} src="./img/queen.png" id={"Q"+i} className={"queen-"+size} />
        );
      }
      row = [];
    }


    return (
      <board>
        {board.rows}
        <GameMessage
          activeQueens={activeQueens}
          gridSize={size}
          moves={moves}
          newGame={newGame}
          visible={isGameOver}
        />
        {board.queens}
      </board>
    );

};


Board.propTypes = {
  size: PropTypes.number,
  onTileClick: PropTypes.func,
  rows: PropTypes.array,
  cols: PropTypes.array,
  redBlocks: PropTypes.array,
  activeQueens: PropTypes.number,
  moves: PropTypes.number,
  newGame: PropTypes.func,
  highlight: PropTypes.bool,
  isGameOver: PropTypes.bool,
  gameOver: PropTypes.func
};

export default Board;
