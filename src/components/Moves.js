import React from 'react';
import PropTypes from 'prop-types';

const Moves = ({ moves }) => (
  <div className="moves">
    <h4>Moves</h4>
    <h4>{moves}</h4>
  </div>
);

Moves.propTypes = {
  moves: PropTypes.number.isRequired,
};

export default Moves;
