import React from 'react';

const ToggleSwitch = ({ on, onClick }) => {
  let toggleSwitch;

  if (on) {
    toggleSwitch = <div className="switch" onClick={onClick}>
      <div className="slider on"></div>
    </div>;
  }
  else {
    toggleSwitch = <div className="switch" onClick={onClick}>
      <div className="slider"></div>
    </div>;
  }

  return (toggleSwitch);
};

export default ToggleSwitch;
