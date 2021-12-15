import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from 'components/Switch/styles';

const Switch = ({ on, onClick }) => (
    <Styles.Wrapper onClick={onClick}>
        <Styles.Slider on={on} />
    </Styles.Wrapper>
);

Switch.propTypes = {
    on: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Switch;
