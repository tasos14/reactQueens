/* eslint react/prop-types: 0 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Moves from '../components/Moves';
import GridSizes from '../components/GridSizes';
import Switch       from '../components/ToggleSwitch';
import {
  toggleSwitch,
  reset,
  changeGrid
} from '../actions';

let Header = ({ gridSize, moves, highlight, onClickGrid, toggleSwitch, onResetClick }) => {
  return (
    <div>
      <div id="heading" className="row">
        <h1 className="title">n-Queens</h1>
        <Moves moves={moves}/>
      </div>

      <div id="instructions" className="row">
        <div className="txt">
          Place all the queens on the board so that <br />
            no two queens threaten each other !
        </div>

        <button className="restart-button"
          onClick={() => onResetClick(gridSize)} >
          Reset<i className="fa fa-repeat" aria-hidden="true"></i>
        </button>

        <div className="dropdown">
          <button type="button" className="dropdown-toggle grid-button" data-toggle="dropdown">
            Grid
          </button>
          <GridSizes onClickGrid={onClickGrid}/>
        </div>

        <Switch on={highlight} onClick={toggleSwitch}/>

      </div>
    </div>
  );

};

const mapStateToProps = (state) => {
  return {
    gridSize: state.get('gridSize'),
    moves: state.get('moves'),
    highlight: state.get('highlight'),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickGrid: (grid) => {
      let cols = [];
      let rows = [];
      let redBlocks = [];
      for(let i=0; i<grid; i++){
        cols.push(0);
        rows.push(0);
        for(let j=0; j<grid; j++){
          redBlocks.push(0);
        }
      }

      dispatch(changeGrid(grid,cols,rows,redBlocks));
    },
    toggleSwitch: () => {
      dispatch(toggleSwitch());
    },
    onResetClick: (gridSize) => {
      let cols = [];
      let rows = [];
      let redBlocks = [];


      for(let i=0; i<gridSize; i++){
        cols.push(0);
        rows.push(0);
        for(let j=0; j<gridSize; j++){
          redBlocks.push(0);
        }
      }

      dispatch(reset(cols,rows,redBlocks));
    }
  };
};


Header = connect(mapStateToProps,mapDispatchToProps)(Header);

Header.PropTypes = {
  dispatch: PropTypes.func.isRequired,
  moves: PropTypes.number.isRequired,
  highlight: PropTypes.bool.isRequired,
  gridSize: PropTypes.number.isRequired
};

export default Header;
