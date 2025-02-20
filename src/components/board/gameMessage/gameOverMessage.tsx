import { Fragment, ReactElement } from 'react';
import * as Styles from './styles';

export function GameOverMessage({ score }: { score: number }): ReactElement {
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
                <Styles.Star $inactive>★</Styles.Star>
            </Fragment>
        );
    }
    return (
        <Fragment>
            <Styles.P>Good</Styles.P>

            <Styles.Star>★</Styles.Star>
            <Styles.Star $inactive>★</Styles.Star>
            <Styles.Star $inactive>★</Styles.Star>
        </Fragment>
    );
}
