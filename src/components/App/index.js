import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import Board from 'components/Board';
import Footer from 'components/Footer';
import { QueensContextProvider } from './context';
import GlobalStyle from './global-styles';

const Wrapper = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media screen and (min-width: 768px) {
        max-width: 730px;
    }
`;

export default function App() {
    return (
        <QueensContextProvider>
            <GlobalStyle />
            <Wrapper>
                <Header />
                <Board />
                <Footer />
            </Wrapper>
        </QueensContextProvider>
    );
}
