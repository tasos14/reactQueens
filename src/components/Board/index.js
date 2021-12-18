/* eslint-disable function-paren-newline */
/* eslint-disable  no-lonely-if */
import React from 'react';
import Tile from './Tile';
import Queen from './Queen';
import GameMessage from './GameMessage';
import * as Styles from './styles';
import { useQueensContext } from 'components/App/context';

function Board() {
    const { gridSize, highlight, cols, redBlocks } = useQueensContext();
    let row = [];
    const board = {
        rows: [],
        queens: [],
    };

    for (let i = 1; i < gridSize + 1; i++) {
        for (let j = 1; j < gridSize + 1; j++) {
            const isRed = highlight && redBlocks[gridSize * (i - 1) + j - 1] === 1;
            const hasQueen = cols[j - 1] === i;

            row.push(<Tile key={`${i}${j}`} tileId={`${i}${j}`} isRed={isRed} hasQueen={hasQueen} />);
        }
        const fade = cols[i - 1] !== 0;

        board.rows.push(<Styles.BoardRow key={i}>{row}</Styles.BoardRow>);
        board.queens.push(
            <Queen key={`Q${i}`} src="./img/queen.png" id={`Q${i}`} boardSize={gridSize} fade={fade} alt="queen" />
        );
        row = [];
    }

    return (
        <Styles.Wrapper>
            <Styles.Board>
                {board.rows}
                <GameMessage />
                {board.queens}
            </Styles.Board>
        </Styles.Wrapper>
    );
}

Board.propTypes = {};

export default Board;
