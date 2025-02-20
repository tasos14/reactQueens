import { ReactElement } from 'react';
import { Queen } from './queen';
import styled from 'styled-components';
import useQueensContext from '../context/useQueensContext';

export const Wrapper = styled.div<{ $isRed: boolean; $boardSize: number }>`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: ${(props) => (props.$isRed ? 'saturate(50%) brightness(63%)' : 'none')};
`;

export function Tile({ tileId, isRed, hasQueen }: { tileId: string; isRed: boolean; hasQueen: boolean }): ReactElement {
    const { gridSize, moveQueen } = useQueensContext();
    return (
        <Wrapper id={tileId} $boardSize={gridSize} $isRed={isRed} onClick={() => moveQueen(tileId)}>
            {hasQueen && (
                <Queen key={`Q${tileId}`} src="./img/queen.png" id={`Q${tileId}`} $boardSize={gridSize} alt="queen" />
            )}
        </Wrapper>
    );
}
