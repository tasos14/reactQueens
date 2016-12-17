import React from 'react';

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
  }

  handleClick = (e) => {
    let id = e.target.id;
    this.props.onClick(id);
  }

  render() {
    let tile;

    if(this.props.isRed){
      if(this.props.hasQueen){
        tile = <div id={this.props.propId}
          className={"tile-"+this.props.boardSize+" red"}
          onClick={this.handleClick}
        >
          <img key={"Q"+this.props.propId}
            src="./img/queen.png"
            id={"Q"+this.props.propId}
            className={"queen-"+this.props.boardSize}
          />
        </div>;
      }
      else {
        tile = <div id={this.props.propId}
          className={"tile-"+this.props.boardSize+" red"}
          onClick={this.handleClick}
        >

        </div>;
      }
    }
    else {
      if(this.props.hasQueen){
        tile = <div id={this.props.propId}
          className={"tile-"+this.props.boardSize}
          onClick={this.handleClick}
        >
          <img key={"Q"+this.props.propId}
            src="./img/queen.png"
            id={"Q"+this.props.propId}
            className={"queen-"+this.props.boardSize}
          />
        </div>;
      }
      else {
        tile = <div id={this.props.propId}
          className={"tile-"+this.props.boardSize}
          onClick={this.handleClick}
        >

        </div>;
      }
    }

    return tile;
  }
}
