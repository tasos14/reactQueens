var React = require('react');

var GameMessage = React.createClass({
  render: function() {
    var activeQueens = this.props.activeQueens;
    var size = this.props.gridSize;
    var score = this.props.moves-size;
    var gameMessage;

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
            <button className="new-game" onClick={this.props.newGame}>Play again</button>
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
            <button className="new-game" onClick={this.props.newGame}>Play again</button>
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
            <button className="new-game" onClick={this.props.newGame}>Play again</button>
          </div>
        </div>;
      }

    }
    else {
      gameMessage = <div className="game-over"></div>;
    }

    return gameMessage;
  }

});

module.exports = GameMessage;
