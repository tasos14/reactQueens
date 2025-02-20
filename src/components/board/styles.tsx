import styled from 'styled-components';
import { generateBoardClasses } from '../../utils/helpers';

export const Wrapper = styled.div`
    position: relative;
    width: 420px;
    margin: 20px auto;

    @media screen and (max-width: 430px) {
        width: 360px;
    }
`;

export const QueensWrapper = styled.div<{ size: number }>`
    display: grid;
    grid-template-columns: ${(props) => `repeat(${props.size}, minmax(0, 1fr))`};
    justify-items: center;
`;

export const Board = styled.div<{ size: number }>`
    display: grid;
    grid-template-columns: ${(props) => `repeat(${props.size}, minmax(0, 1fr))`};
    grid-template-rows: ${(props) => `repeat(${props.size}, minmax(0, 1fr))`};
    justify-content: center;
    width: 100%;
    height: 420px;

    ${(props) => generateBoardClasses(props.size)};

    @media screen and (max-width: 430px) {
        height: 360px;
    }
`;
