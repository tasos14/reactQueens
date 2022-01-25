/* eslint-disable function-paren-newline */
/* eslint-disable  no-lonely-if */
import React from 'react';
import Tile from './Tile';
import Queen from './Queen';
import GameMessage from './GameMessage';
import * as Styles from './styles';
import { useQueensContext } from 'components/App/context';

function generateId(index, size) {
    if (index % size === 0) {
        return `${Math.ceil(index / size)}${size}`;
    }
    return `${Math.ceil(index / size)}${index % size}`;
}
function Board() {
    const { gridSize, highlight, cols, redBlocks } = useQueensContext();

    const hasQueen = (index, size) => {
        const [i, j] = generateId(index, size).split('');
        return cols[Number(j) - 1] === Number(i);
    };

    return (
        <Styles.Wrapper>
            <Styles.Board size={gridSize}>
                {[...Array(gridSize * gridSize)].map((_, i) => (
                    <Tile
                        key={`${i}`}
                        tileId={generateId(i + 1, gridSize)}
                        isRed={highlight && redBlocks[i] === 1}
                        hasQueen={hasQueen(i + 1, gridSize)}
                    />
                ))}
            </Styles.Board>
            <GameMessage />
            <Styles.QueensWrapper size={gridSize}>
                {[...Array(gridSize)].map((_, i) => (
                    <Queen
                        key={`Q${i + 1}`}
                        src="./img/queen.png"
                        id={`Q${i + 1}`}
                        boardSize={gridSize}
                        fade={cols[i] !== 0}
                        alt="queen"
                    />
                ))}
            </Styles.QueensWrapper>
        </Styles.Wrapper>
    );
}

Board.propTypes = {};

export default Board;
