var React     = require('react');
var Board     = require('./Board');
var GridSizes = require('./GridSizes');
var axios     = require('axios');

var App = React.createClass({
  getInitialState: function(){
    return {
      gridSize:     4,
      moves:        0,
      cols:         [],
      rows:         [],
      redBlocks:    [],
      activeQueens: 0,
      gameOver:     false
    };
  },

  componentWillMount: function(){
    if(localStorage.state == null){
      var gridSize = this.state.gridSize;
      var cols = [];
      var rows = [];
      var redBlocks = [];
      var activeQueens = 0;

      for(var i=0; i<gridSize; i++){
        cols.push(0);
        rows.push(0);
        for(var j=0; j<gridSize; j++){
          redBlocks.push(0);
        }
      }

      this.setState({
        cols:         cols,
        rows:         rows,
        redBlocks:    redBlocks,
        activeQueens: activeQueens
      });
    }
    else {
      var localState = JSON.parse(localStorage.getItem("state"));
      this.setState({
        gridSize:     localState.gridSize,
        cols:         localState.cols,
        rows:         localState.rows,
        redBlocks:    localState.redBlocks,
        moves:        localState.moves,
        activeQueens: localState.activeQueens
      });
    }


  },

  // componentDidMount: function() {
  //   if (this.state.activeQueens == this.state.gridSize){
  //     // console.log("from app this is where you'll make the post");
  //   }
  // },

  componentDidUpdate: function(prevProps, prevState){
    var data;
    var that = this;
    if (this.state.activeQueens == this.state.gridSize && !this.state.gameOver){
      axios.post('/', {
        size:   this.state.gridSize,
        queens: this.state.cols
      })
      .then(function (response) {
        data = response.data;
        if (data && !that.state.gameOver) {
          console.log(data);
          that.setState({
            gameOver: data,
          });
        }
      })
      .catch(function (error) {
        console.log("Error: \n"+error);
      });
    }

    localStorage.state = JSON.stringify(this.state);

  },

  changeGridSize: function(size){
    this.setState({
      gridSize: size,
    });

    this.newGame(size);
  },

  newGame: function(size){
    var gridSize = isNaN(size)?  this.state.gridSize : size;
    var cols = [];
    var rows = [];
    var redBlocks = [];


    for(var i=0; i<gridSize; i++){
      cols.push(0);
      rows.push(0);
      for(var j=0; j<gridSize; j++){
        redBlocks.push(0);
      }
    }

    this.setState({
      moves:        0,
      cols:         cols,
      rows:         rows,
      redBlocks:    redBlocks,
      activeQueens: 0,
      gameOver:     false
    });
  },

  increaceMoves: function(){
    var newMoves = this.state.moves + 1;
    this.setState({
      moves: newMoves
    });
  },

  moveQueen: function(id){
    var row,col;
    var cols = this.state.cols;
    var rows = this.state.rows;

    this.increaceMoves();

    if(id.length === 2){
      row = Number(id.charAt(0));
      col = Number(id.charAt(1));
    }
    else{
      row = Number(id.charAt(1));
      col = Number(id.charAt(2));
    }

    // when you click a tile for the first time on a column
    if(cols[col-1] === 0){
      cols[col-1] = row;
      rows[row-1] = col;
      this.drawRedBlocks(row,col);
      this.state.activeQueens++;
    }
    // when you click a tile with a queen on
    else if(cols[col-1] === row) {
      cols[col-1] = 0;
      rows[row-1] = 0;
      this.removeRedBlocks(row,col);
      this.state.activeQueens--;
    }
    // when you have already clicked a tile on that column
    else {
      var prev_row = cols[col-1];
      cols[col-1] = row;
      rows[row-1] = col;
      this.removeRedBlocks(prev_row,col);
    }

    this.setState({
      cols:      cols,
      rows:      rows
    });
  },

  drawRedBlocks: function(row, col){
    var absDist;
    var gridSize = this.state.gridSize;
    var redBlocks = this.state.redBlocks;
    var cols = this.state.cols;

    row--;
    col--;
    for(var i=0; i<gridSize; i++){
      absDist = Math.abs(i-col);

      redBlocks[gridSize*row+i] = 1;
      redBlocks[gridSize*i+col] = 1;
      for(var j=0; j<gridSize; j++){
        if(j === row-absDist || j === row+absDist){
          redBlocks[gridSize*j+i] = 1;
        }
      }
    }
    redBlocks[gridSize*row+col] = 0;

    this.setState({
      redBlocks: redBlocks
    });
  },

  removeRedBlocks: function(row,col){
    var gridSize = this.state.gridSize;
    var redBlocks = this.state.redBlocks;
    var cols = this.state.cols;

    row--;
    col--;
    for(var i=0; i<gridSize; i++){
      redBlocks[gridSize*row+i] = 0;
      redBlocks[gridSize*i+col] = 0;
      for(var j=0; j<gridSize; j++){
        redBlocks[gridSize*j+i] = 0;
      }
    }

    for(var i=0; i<gridSize; i++){
      if(cols[i] !== 0){
        this.drawRedBlocks(cols[i],i+1);
      }
    }

    this.setState({
      redBlocks: redBlocks
    });
  },

  render: function(){
    return (
      <div id="content">
        <div id="heading" className="row">
          <h1 className="title">n-Queens</h1>
          <div className="moves">
            <h4>Moves</h4>
            <h4>{this.state.moves}</h4>
          </div>
        </div>

        <div id="instructions" className="row">
          <div className="txt">
            Place all the queens on the board so that <br />
              no two queens threaten each other !
          </div>
            <button className="restart-button" onClick={this.newGame}>New game</button>

            <div className="dropdown">
              <button type="button" className="dropdown-toggle grid-button" data-toggle="dropdown">
                Grid
              </button>
              <GridSizes onClick={this.changeGridSize} />
            </div>
        </div>

        <div id="board-container">
          <Board size={this.state.gridSize}
            onTileClick={this.moveQueen}
            rows={this.state.rows}
            cols={this.state.cols}
            redBlocks={this.state.redBlocks}
            activeQueens={this.state.activeQueens}
            moves={this.state.moves}
            newGame={this.newGame}
            gameOver={this.state.gameOver}
          />
        </div>


        <p className="how-to">
          <strong className="important">How to play:</strong> Click on each tile to place a <strong>queen</strong>
          on it. The game ends when all queens are placed to the board and no two queens share the same row, column, or diagonal.
        </p>

        <hr></hr>

        <p>
          <strong>Note:</strong> This game was built using React and SWI-Prolog Pengines.
        </p>

        <hr></hr>

        <p>
          <strong>More:</strong> About the n-Queens puzzle <a href="https://en.wikipedia.org/wiki/Eight_queens_puzzle" target="_blank">here</a>.
        </p>

        <hr></hr>

        <p>
          Created by <a href="github.com/tasos14">tasos14</a>, inspired by <a href="http://ng2048.github.io/" target="_blank">ng-2048</a>.
        </p>

      </div>
    )
  }
});

module.exports = App;
