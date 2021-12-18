/* eslint-disable  no-lonely-if */
import React from 'react';
import PropTypes from 'prop-types';
import Queen from '../Queen';
import { useQueensContext } from 'components/App/context';
import Wrapper from './styles';

function Tile({ tileId, isRed, hasQueen }) {
    const {gridSize, moveQueen} = useQueensContext();
    return (
        <Wrapper id={tileId} boardSize={gridSize} isRed={isRed} onClick={() => moveQueen(tileId)}>
            {hasQueen && (
                <Queen key={`Q${tileId}`} src="./img/queen.png" id={`Q${tileId}`} boardSize={gridSize} alt="queen" />
            )}
        </Wrapper>
    );
}

Tile.propTypes = {
    isRed: PropTypes.bool.isRequired,
    hasQueen: PropTypes.bool.isRequired,
    tileId: PropTypes.string.isRequired,
};

export default Tile;
