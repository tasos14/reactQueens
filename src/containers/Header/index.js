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

const Header = ({ gridSize, moves, highlight, onClickGrid, toggleSwitch, onResetClick }) => (
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

      <Styles.Restart onClick={() => onResetClick(gridSize)} >
        Reset<i className="fa fa-repeat" aria-hidden="true"></i>
      </Styles.Restart>

      <DropDown onClickGrid={onClickGrid} />

      <Switch on={highlight} onClick={toggleSwitch}/>
    </Styles.Instructions>
  </Fragment>
);

function mapStateToProps(state) {
  return {
    gridSize: state.get('gridSize'),
    moves: state.get('moves'),
    highlight: state.get('highlight'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClickGrid: (grid) => {
      const cols = [];
      const rows = [];
      const redBlocks = [];

      for (let i = 0; i < grid; i++) {
        cols.push(0);
        rows.push(0);
        for (let j = 0; j < grid; j++) {
          redBlocks.push(0);
        }
      }

      dispatch(changeGrid(grid, cols, rows, redBlocks));
    },
    toggleSwitch: () => {
      dispatch(toggleSwitchAction());
    },
    onResetClick: (gridSize) => {
      const cols = [];
      const rows = [];
      const redBlocks = [];


      for (let i = 0; i < gridSize; i++) {
        cols.push(0);
        rows.push(0);
        for (let j = 0; j < gridSize; j++) {
          redBlocks.push(0);
        }
      }

      dispatch(reset(cols, rows, redBlocks));
    },
  };
}

Header.propTypes = {
  moves: PropTypes.number.isRequired,
  highlight: PropTypes.bool.isRequired,
  gridSize: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
