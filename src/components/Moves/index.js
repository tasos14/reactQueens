import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from 'components/Moves/styles';

const Moves = ({ moves }) => (
    <Wrapper>
        <h4>Moves</h4>
        <h4>{moves}</h4>
    </Wrapper>
);

Moves.propTypes = {
    moves: PropTypes.number.isRequired,
};

export default Moves;
