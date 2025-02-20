import { ReactElement } from 'react';
import useQueensContext from '../context/useQueensContext';
import { generateId } from '../../utils/helpers';
import * as Styles from './styles';
import { Queen } from './queen';
import { Tile } from './tile';
import { GameMessage } from './gameMessage/gameMessage';

export function Board(): ReactElement {
    const { gridSize, highlight, cols, redBlocks } = useQueensContext();

    const hasQueen = (index: number, size: number) => {
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
                        $boardSize={gridSize}
                        $fade={cols[i] !== 0}
                        alt="queen"
                    />
                ))}
            </Styles.QueensWrapper>
        </Styles.Wrapper>
    );
}
