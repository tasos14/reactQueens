/* eslint react/prop-types: 0 */
/* eslint-disable no-plusplus */
/* eslint-disable object-curly-newline */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moves from 'components/Moves';
import Switch from 'components/Switch';
import DropDown from 'components/DropDown';
import {
  toggleSwitch as toggleSwitchAction,
  reset,
  changeGrid,
} from 'actions';
import * as Styles from 'containers/Header/styles';

const Header = ({ moves, highlight, onClickGrid, toggleSwitch, onResetClick }) => (
  <Fragment>
    <Styles.Heading>
      <Styles.Title>n-Queens</Styles.Title>
      <Moves moves={moves}/>
    </Styles.Heading>

    <Styles.Instructions>
      <Styles.Text>
        Place all the queens on the board so that <br />
          no two queens threaten each other !
      </Styles.Text>

      <Styles.Restart onClick={onResetClick} >
        Reset<i className="fa fa-repeat" aria-hidden="true"></i>
      </Styles.Restart>

      <DropDown onClickGrid={onClickGrid} />

      <Switch on={highlight} onClick={toggleSwitch}/>
    </Styles.Instructions>
  </Fragment>
);

function mapStateToProps(state) {
  return {
    moves: state.get('moves'),
    highlight: state.get('highlight'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClickGrid: (grid) => {
      dispatch(changeGrid(grid));
    },
    toggleSwitch: () => {
      dispatch(toggleSwitchAction());
    },
    onResetClick: () => {
      dispatch(reset());
    },
  };
}

Header.propTypes = {
  moves: PropTypes.number.isRequired,
  highlight: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
