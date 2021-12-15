import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import * as Styles from 'components/GameMessage/styles';

function GameOverMessage({ score }) {
    if (score === 0) {
        return (
            <Fragment>
                <Styles.P>Excellent !!!</Styles.P>

                <Styles.Star>★</Styles.Star>
                <Styles.Star>★</Styles.Star>
                <Styles.Star>★</Styles.Star>
            </Fragment>
        );
    }
    if (score > 0 && score < 3) {
        return (
            <Fragment>
                <Styles.P>Great !!</Styles.P>

                <Styles.Star>★</Styles.Star>
                <Styles.Star>★</Styles.Star>
                <Styles.Star inactive>★</Styles.Star>
            </Fragment>
        );
    }
    return (
        <Fragment>
            <Styles.P>Good</Styles.P>

            <Styles.Star>★</Styles.Star>
            <Styles.Star inactive>★</Styles.Star>
            <Styles.Star inactive>★</Styles.Star>
        </Fragment>
    );
}

GameOverMessage.propTypes = {
    score: PropTypes.number.isRequired,
};

export default GameOverMessage;
