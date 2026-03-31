import { ReactElement } from 'react';
import { Queen } from './queen';
import useQueensContext from '../context/useQueensContext';
import { TitleWrapper } from './styles';

export function Tile({ tileId, isRed, hasQueen }: { tileId: string; isRed: boolean; hasQueen: boolean }): ReactElement {
    const { gridSize, moveQueen, isCalculating } = useQueensContext();
    return (
        <TitleWrapper
            id={tileId}
            $boardSize={gridSize}
            $isRed={isRed}
            $isCalculating={isCalculating}
            onClick={() => moveQueen(tileId)}
        >
            {hasQueen && (
                <Queen key={`Q${tileId}`} src="./img/queen.png" id={`Q${tileId}`} $boardSize={gridSize} alt="queen" />
            )}
        </TitleWrapper>
    );
}
