import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.onClick();
  }

  render() {
    let toggleSwitch;
    if (this.props.on) {
      toggleSwitch = <div className="switch" onClick={this.handleClick}>
        <div className="slider on"></div>
      </div>
    }
    else {
      toggleSwitch = <div className="switch" onClick={this.handleClick}>
        <div className="slider"></div>
      </div>
    }

    return (toggleSwitch);
  }

}
