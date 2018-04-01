import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function GameOverMessage({ score }) {
  if (score === 0) {
    return (
      <Fragment>
        <p>Excellent !!!</p>
        <div className="rating" >
          <span className="star" >★</span>
          <span className="star" >★</span>
          <span className="star" >★</span>
        </div>
      </Fragment>
    );
  } else if (score > 0 && score < 3) {
    return (
      <Fragment>
        <p>Great !!</p>
        <div className="rating" >
          <span className="star" >★</span>
          <span className="star" >★</span>
          <span className="star inactive" >★</span>
        </div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <p>Good</p>
      <div className="rating" >
        <span className="star" >★</span>
        <span className="star inactive" >★</span>
        <span className="star inactive" >★</span>
      </div>
    </Fragment>
  );
}

GameOverMessage.propTypes = {
  score: PropTypes.number.isRequired,
};

export default GameOverMessage;
