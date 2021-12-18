import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    width: 60px;
    height: 34px;
    float: right;
    margin-right: 0.1em;
    margin-top: 3px;
`;

export const Slider = styled.div`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 34px;
    background-color: ${(props) => (props.on ? '#8f7a66' : '#ccc')};
    transition: 0.4s;

    &::before {
        position: absolute;
        content: '';
        height: 26px;
        width: 26px;
        border-radius: 50%;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;

        ${(props) =>
        props.on &&
            css`
                transform: translateX(26px);
            `};
    }
`;
