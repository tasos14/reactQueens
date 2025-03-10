import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  0% {
    top: 75%;
    opacity: 0;
  }
  100% {
    top: 0%;
    opacity: 1;
  }
`;

export const Wrapper = styled.div<{ $visible: boolean }>`
    position: absolute;
    display: ${(props) => (props.$visible ? 'block' : 'none')};
    text-align: center;
    width: 100%;
    height: 420px;
    background: rgba(238, 228, 218, 0.73);
    animation: ${slideUp} 1s ease-in-out 250ms forwards;
    opacity: 0;
`;

export const NewGame = styled.div`
    display: inline-block;
    background: #8f7a66;
    border-radius: 3px;
    padding: 0 20px;
    text-decoration: none;
    color: #f9f6f2;
    height: 40px;
    line-height: 42px;
    cursor: pointer;
    text-align: center;
    border: none;
    margin-top: 10%;
    font-size: inherit;
`;

export const P = styled.p`
    font-size: 60px;
    font-weight: bold;
    text-align: center;
    margin-top: 5%;
`;

export const Star = styled.span<{ $inactive?: boolean }>`
    color: ${(props) => (props.$inactive ? 'grey' : '#ffd700')};
    font-size: 60px;
    position: relative;
    overflow: hidden;
    display: block;
    float: left;
    width: 33.3%;
`;
