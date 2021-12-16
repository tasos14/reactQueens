/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import List from 'components/GridSizes/styles';

const GridSizes = ({ onClickGrid, open, toggle }) => {
    const elements = [];

    for (let i = 4; i < 9; i++) {
        elements.push(
            <li key={`grid${i}`}>
                <a
                    onClick={() => {
                        onClickGrid(i);
                        toggle();
                    }}
                    id={i}
                >{`${i}x${i}`}</a>
            </li>
        );
    }

    return <List open={open}>{elements}</List>;
};

GridSizes.propTypes = {
    onClickGrid: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    open: PropTypes.bool,
};

GridSizes.defaultProps = {
    open: false,
};

export default GridSizes;
