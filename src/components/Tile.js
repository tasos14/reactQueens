import React from 'react';

const Tile = ({ isRed, hasQueen, propId, boardSize, handleTileClick  }) => {
  let tile;

  if(isRed){
    if(hasQueen){
      tile = <div id={propId}
        className={"tile-"+boardSize+" red"}
        onClick={() => handleTileClick(propId)}
      >
        <img key={"Q"+propId}
          src="./img/queen.png"
          id={"Q"+propId}
          className={"queen-"+boardSize}
        />
      </div>;
    }
    else {
      tile = <div id={propId}
        className={"tile-"+boardSize+" red"}
        onClick={() => handleTileClick(propId)}
      >

      </div>;
    }
  }
  else {
    if(hasQueen){
      tile = <div id={propId}
        className={"tile-"+boardSize}
        onClick={() => handleTileClick(propId)}
      >
        <img key={"Q"+propId}
          src="./img/queen.png"
          id={"Q"+propId}
          className={"queen-"+boardSize}
        />
      </div>;
    }
    else {
      tile = <div id={propId}
        className={"tile-"+boardSize}
        onClick={() => handleTileClick(propId)}
      >

      </div>;
    }
  }

  return tile;
};

export default Tile;
