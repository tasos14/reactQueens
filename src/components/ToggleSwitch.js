import React from 'react';
import PropTypes from 'prop-types';

const ToggleSwitch = ({ on, onClick }) => (
  <div className="switch" onClick={onClick}>
    <div className={on ? 'slider on' : 'slider'}></div>
  </div>
);

ToggleSwitch.propTypes = {
  on: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ToggleSwitch;
