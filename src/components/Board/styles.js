import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    width: 420px;
    margin: 20px auto;

    @media screen and (max-width: 430px) {
        width: 360px;
    }
`;

export const QueensWrapper = styled.div`
    display: grid;
    grid-template-columns: ${(props) => `repeat(${props.size}, minmax(0, 1fr))`};
    justify-items: center;
`;


// https://codepen.io/Staghouse/pen/OzpVya
function generateBoardClasses(size) {
    let rule = 'div {';

    if (size % 2 === 0) {
        rule += 'background-color: #d6e4d6;';
    }else {
        rule += 'background-color: #c0a58b;';
    }

    rule += `&:nth-of-type(-2n + ${size}),`;
    for(let i=1; i<size; i++) {
        if (i % 2 === 0) {
            rule += `&:nth-of-type(${size * i}) ~ *:nth-of-type(-2n + ${size * (i + 1)})`;
        } else {
            rule += `&:nth-of-type(${size * i}) ~ *:nth-of-type(-2n + ${size * (i+1) -1 })`;
        }

        if (i !== size - 1) {
            rule += ',';
        }
    }

    if (size % 2 === 0) {
        rule += `{background-color: #c0a58b;}}`;
    } else {
        rule += `{background-color: #d6e4d6;}}`;
    }

    return rule;

}

export const Board = styled.div`
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
