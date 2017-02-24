import React, { PropTypes } from 'react';

const GridSizes = ({ onClickGrid }) => {
  let elements = [];

  for(let i=4; i<9; i++){
    elements.push(<li key={"grid"+i}><a onClick={() => onClickGrid(i)} id={i}>{i+"x"+i}</a></li>);
  }

  return (
    <ul className="dropdown-menu">
      {elements}
    </ul>
  );
};

GridSizes.propTypes = {
  onClickGrid: PropTypes.func.isRequired
};

export default GridSizes;
