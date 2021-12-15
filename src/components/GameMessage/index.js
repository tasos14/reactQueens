/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import GameOverMessage from 'components/GameMessage/GameOverMessage';
import * as Styles from 'components/GameMessage/styles';

const GameMessage = ({ gridSize, moves, newGame, visible }) => {
    const size = gridSize;
    const score = moves - size;

    return (
        <Styles.Wrapper visible={visible}>
            <GameOverMessage score={score} />
            <Styles.NewGame onClick={newGame}>New Game</Styles.NewGame>
        </Styles.Wrapper>
    );
};

GameMessage.propTypes = {
    gridSize: PropTypes.number.isRequired,
    moves: PropTypes.number.isRequired,
    newGame: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
};

export default GameMessage;
