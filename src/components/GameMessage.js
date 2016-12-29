import React from 'react';

export default class GameMessage extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
  }

  render() {
    let activeQueens = this.props.activeQueens;
    let size = this.props.gridSize;
    let score = this.props.moves-size;
    let gameMessage;

    if (this.props.visible) {
      if (score == 0) {
        gameMessage = <div className="game-over visible">
          <p>Exelent !!!</p>
          <div className="rating" >
            <span className="star" >★</span>
            <span className="star" >★</span>
            <span className="star" >★</span>
          </div>
          <div className="text-center">
            <button className="new-game" onClick={this.props.newGame}>New Game</button>
          </div>
        </div>;
      }
      else if (score > 0 && score < 3) {
        gameMessage = <div className="game-over visible">
          <p>Great !!</p>
          <div className="rating" >
            <span className="star" >★</span>
            <span className="star" >★</span>
            <span className="star inactive" >★</span>
          </div>
          <div className="text-center">
            <button className="new-game" onClick={this.props.newGame}>New Game</button>
          </div>
        </div>;
      }
      else {
        gameMessage = <div className="game-over visible">
          <p>Good</p>
          <div className="rating" >
            <span className="star" >★</span>
            <span className="star inactive" >★</span>
            <span className="star inactive" >★</span>
          </div>
          <div className="text-center">
            <button className="new-game" onClick={this.props.newGame}>New Game</button>
          </div>
        </div>;
      }

    }
    else {
      gameMessage = <div className="game-over"></div>;
    }

    return gameMessage;
  }
}
