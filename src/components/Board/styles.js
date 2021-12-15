import styled from 'styled-components';

export const Board = styled.div``;

export const BoardRow = styled.div`
    ${Board} &:nth-of-type(odd) > div:nth-child(odd) {
        background-color: #d6e4d6;
        color: white;
        cursor: pointer;
    }

    ${Board} &:nth-of-type(odd) > div:nth-child(even) {
        background-color: #c0a58b;
        color: black;
        cursor: pointer;
    }

    ${Board} &:nth-of-type(even) > div:nth-child(even) {
        background-color: #d6e4d6;
        color: white;
        cursor: pointer;
    }

    ${Board} &:nth-of-type(even) > div:nth-child(odd) {
        background-color: #c0a58b;
        color: black;
        cursor: pointer;
    }
`;
