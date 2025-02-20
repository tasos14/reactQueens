import { ReactElement } from 'react';
import useQueensContext from '../../context/useQueensContext';
import * as Styles from './styles';
import { GameOverMessage } from './gameOverMessage';

export const GameMessage = (): ReactElement => {
    const { gridSize, moves, newGame, gameOver } = useQueensContext();

    return (
        <Styles.Wrapper $visible={gameOver}>
            <GameOverMessage score={moves - gridSize} />
            <Styles.NewGame onClick={() => newGame()}>New Game</Styles.NewGame>
        </Styles.Wrapper>
    );
};
