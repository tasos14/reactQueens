import React from 'react';
import Header from 'containers/Header';
import Game from 'containers/Game';
import Footer from 'components/Footer';
import Container from 'components/App/styles';

export default function App() {
    return (
        <Container>
            <Header />
            <Game />
            <Footer />
        </Container>
    );
}
