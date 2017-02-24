import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Moves from '../components/Moves';
import GridSizes from '../components/GridSizes';
import Switch       from '../components/ToggleSwitch';
import {
  toggleSwitch,
  increaceMoves,
  changeGrid
} from '../actions';

let Header = ({ dispatch, moves, highlight, gridSize }) => {
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
          onClick={() => {dispatch(increaceMoves());}} >
          Reset<i className="fa fa-repeat" aria-hidden="true"></i>
        </button>

        <div className="dropdown">
          <button type="button" className="dropdown-toggle grid-button" data-toggle="dropdown">
            Grid
          </button>
          <GridSizes onClickGrid={changeGrid}/>
        </div>

        <Switch on={highlight} onClick={() => {dispatch(toggleSwitch());}}/>

      </div>

      <h1>gridSize {gridSize}</h1>
    </div>
  );

};

const mapStateToProps = (state) => {
  return {
    moves: state.get('moves'),
    highlight: state.get('highlight'),
    gridSize: state.get('gridSize')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickGrid: (grid) => {
      dispatch(changeGrid(grid));
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
