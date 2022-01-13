import React from 'react';
import * as Styles from './styles';
import { useQueensContext } from 'components/App/context';

const Switch = () => {
    const { highlight, setHighlight } = useQueensContext();

    return (
        <Styles.Wrapper onClick={() => setHighlight(!highlight)}>
            <Styles.Slider on={highlight} />
        </Styles.Wrapper>
    );
};

Switch.propTypes = {};

export default Switch;
