import React from 'react';
import Tile  from './Tile';
import GameMessage from './GameMessage';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
  }

  createBoard() {
    let rows = [];
    let row = [];
    let queens = [];
    let size = (this.props.size);

    for(let i=1; i<size+1; i++){
      for(let j=1; j<size+1; j++){
        // if its a red block
        if(this.props.redBlocks[size*(i-1)+j-1] == 1 && this.props.highlight){
          if(this.props.cols[j-1] === i){
            row.push(
              <Tile key={i+""+j} propId={i+""+j} boardSize={size} onClick={this.props.onTileClick} hasQueen={true} isRed={true}/>);
          }
          else {
            row.push(<Tile key={i+""+j} propId={i+""+j} boardSize={size} onClick={this.props.onTileClick} isRed={true}/>);
          }
        }
        else {
          if(this.props.cols[j-1] === i){
            row.push(
              <Tile key={i+""+j} propId={i+""+j} boardSize={size} onClick={this.props.onTileClick} hasQueen={true}/>);
          }
          else {
            row.push(<Tile key={i+""+j} propId={i+""+j} boardSize={size} onClick={this.props.onTileClick}/>);
          }
        }

      }
      rows.push(
        <div key={i} className="board-row">{row}</div>
      );

      if(this.props.cols[i-1] != 0){
        queens.push(
          <img key={"Q"+i} src="./img/queen.png" id={"Q"+i} className={"queen-"+size+" fade"} />
        );
      }
      else {
        queens.push(
          <img key={"Q"+i} src="./img/queen.png" id={"Q"+i} className={"queen-"+size} />
        );
      }
      row = [];
    }

    return ({
      rows:   rows,
      queens: queens
    });
  }

  render() {
    let board = this.createBoard();

    return (
      <board>
        {board.rows}
        <GameMessage
          activeQueens={this.props.activeQueens}
          gridSize={this.props.size}
          moves={this.props.moves}
          newGame={this.props.newGame}
          visible={this.props.gameOver}
        />
        {board.queens}
      </board>
    );
  }

}
