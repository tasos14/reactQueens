import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridSizes from 'components/GridSizes';
import * as Styles from 'components/DropDown/styles';

class DropDown extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState((state) => ({ open: !state.open }));
    }

    render() {
        return (
            <Styles.Wrapper>
                <Styles.GridButton onClick={this.toggle}>Grid</Styles.GridButton>
                <GridSizes onClickGrid={this.props.onClickGrid} toggle={this.toggle} open={this.state.open} />
            </Styles.Wrapper>
        );
    }
}

DropDown.propTypes = {
    onClickGrid: PropTypes.func,
};

export default DropDown;
