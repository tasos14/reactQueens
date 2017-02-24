import React, { PropTypes } from 'react';

const Moves = ({ moves }) => {
  return (
    <div className="moves">
      <h4>Moves</h4>
      <h4>{moves}</h4>
    </div>
  );
};

Moves.propTypes = {
  moves: PropTypes.number.isRequired
};

export default Moves;
