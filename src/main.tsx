import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import styled from 'styled-components';
import { Footer } from './components/footer/footer';
import { GlobalStyle } from './globalStyle';
import { QueensContextProvider } from './components/context/queensContextProvider';
import { Header } from './components/header/header';
import { Board } from './components/board/board';

const Wrapper = styled.div`
    margin: auto;
    max-width: 730px;

    @media (max-width: 730px) {
        padding: 0 5px;
    }
`;

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueensContextProvider>
            <GlobalStyle />
            <Wrapper>
                <Header />
                <Board />
                <Footer />
            </Wrapper>
        </QueensContextProvider>
    </StrictMode>
);
