var React = require('react');
var Tile  = require('./Tile');
var GameMessage = require('./GameMessage');

var Board = React.createClass({
  createBoard: function(){
    var rows = [];
    var row = [];
    var queens = [];
    var size = (this.props.size);

    for(var i=1; i<size+1; i++){
      for(var j=1; j<size+1; j++){
        // if its a red block
        if(this.props.redBlocks[size*(i-1)+j-1] == 1){
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
    })
  },

  render: function(){
    var board = this.createBoard();

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
})

module.exports = Board;
