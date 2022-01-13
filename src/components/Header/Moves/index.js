import React from 'react';
import styled from 'styled-components';
import { useQueensContext } from 'components/App/context';

const Wrapper = styled.div`
    min-height: 2.5em;
    min-width: 5em;
    position: relative;
    background: #c0a58b;
    font-size: 25px;
    height: 25px;
    line-height: 47px;
    font-weight: 700;
    border-radius: 3px;
    color: #fff;
    margin-top: 8px;
    text-align: center;
    float: right;
`;

const Moves = () => {
    const { moves } = useQueensContext();
    return (
        <Wrapper>
            <h4>Moves</h4>
            <h4>{moves}</h4>
        </Wrapper>
    );
};

Moves.propTypes = {};

export default Moves;
