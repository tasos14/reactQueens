import styled from 'styled-components';

export const Queen = styled.img<{ $fade?: boolean; $boardSize: number }>`
    float: left;
    width: 90%;
    opacity: ${(props) => (props.$fade ? '0.3' : '1')};
    transition: opacity 0.15s linear;
`;
