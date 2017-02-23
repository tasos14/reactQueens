import React        from 'react';
import axios        from 'axios';
import { createStore } from 'redux';
import Board        from './Board';
import GridSizes    from './GridSizes';
import Switch       from './ToggleSwitch';
import Footer       from './Footer';
import queensApp from '../reducers';
import { toggleSwitch, changeGrid } from '../actions';

const store = createStore(queensApp);


export default class App extends React.Component {
  constructor(props) {
    super(props);

    // Operations usually carried out in componentWillMount go here
    if(localStorage.state == null){
      let gridSize = 4;
      let cols = [];
      let rows = [];
      let redBlocks = [];
      let activeQueens = 0;

      for(let i=0; i<gridSize; i++){
        cols.push(0);
        rows.push(0);
        for(let j=0; j<gridSize; j++){
          redBlocks.push(0);
        }
      }

      this.state = {
        gridSize:     4,
        moves:        0,
        cols:         cols,
        rows:         rows,
        redBlocks:    redBlocks,
        activeQueens: activeQueens,
        gameOver:     false,
        highlight:    true
      };
    }
    else {
      this.state = JSON.parse(localStorage.getItem("state"));
    }
  }

  componentDidUpdate = () => {
    let data;
    let that = this;
    if (this.state.activeQueens == this.state.gridSize && !this.state.gameOver){
      axios.post('/', {
        size:   this.state.gridSize,
        queens: this.state.cols
      })
      .then(function (response) {
        data = response.data;
        if (data && !that.state.gameOver) {
          that.setState({
            gameOver: data
          });
        }
      })
      .catch(function (error) {
        console.log("Error: \n"+error);
      });
    }

    localStorage.state = JSON.stringify(this.state);

  }

  handleToggleSwitch = () => {
    let on = !this.state.highlight;

    this.setState({
      highlight: on
    });

    store.dispatch(toggleSwitch());
    store.dispatch(changeGrid(9));

    let state = store.getState().toObject();
    console.log(state);

  }

  changeGridSize = (size) => {
    this.setState({
      gridSize: size
    });

    this.newGame(size);
  }

  reset = () => {
    let gridSize = this.state.gridSize;
    let cols = [];
    let rows = [];
    let redBlocks = [];


    for(let i=0; i<gridSize; i++){
      cols.push(0);
      rows.push(0);
      for(let j=0; j<gridSize; j++){
        redBlocks.push(0);
      }
    }

    this.setState({
      cols:         cols,
      rows:         rows,
      redBlocks:    redBlocks,
      activeQueens: 0,
      gameOver:     false
    });


  }

  newGame = (size) => {
    let gridSize = isNaN(size)?  this.state.gridSize : size;
    let cols = [];
    let rows = [];
    let redBlocks = [];


    for(let i=0; i<gridSize; i++){
      cols.push(0);
      rows.push(0);
      for(let j=0; j<gridSize; j++){
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
  }

  increaceMoves = () => {
    let newMoves = this.state.moves + 1;
    this.setState({
      moves: newMoves
    });
  }

  moveQueen = (id) => {
    let row,col;
    let cols = this.state.cols;
    let rows = this.state.rows;

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
      this.increaceMoves();
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
      let prev_row = cols[col-1];
      cols[col-1] = row;
      rows[row-1] = col;
      this.increaceMoves();
      this.removeRedBlocks(prev_row,col);
    }

    this.setState({
      cols:      cols,
      rows:      rows
    });
  }

  drawRedBlocks = (row, col) => {
    let absDist;
    let gridSize = this.state.gridSize;
    let redBlocks = this.state.redBlocks;
    // let cols = this.state.cols;

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

    this.setState({
      redBlocks: redBlocks
    });
  }

  removeRedBlocks = (row,col) => {
    let gridSize = this.state.gridSize;
    let redBlocks = this.state.redBlocks;
    let cols = this.state.cols;

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
        this.drawRedBlocks(cols[i],i+1);
      }
    }

    this.setState({
      redBlocks: redBlocks
    });
  }

  render() {
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

          <button className="restart-button" onClick={this.reset}>Reset<i className="fa fa-repeat" aria-hidden="true"></i></button>

          <div className="dropdown">
            <button type="button" className="dropdown-toggle grid-button" data-toggle="dropdown">
              Grid
            </button>
            <GridSizes onClick={this.changeGridSize} />
          </div>

          <Switch on={this.state.highlight} onClick={this.handleToggleSwitch}/>

        </div>

        <div id="board-container">
          <Board size={this.state.gridSize}
            onTileClick={this.moveQueen}
            cols={this.state.cols}
            redBlocks={this.state.redBlocks}
            activeQueens={this.state.activeQueens}
            moves={this.state.moves}
            newGame={this.newGame}
            highlight={this.state.highlight}
            gameOver={this.state.gameOver}
          />
        </div>

        <Footer />

      </div>
    );
  }
}
