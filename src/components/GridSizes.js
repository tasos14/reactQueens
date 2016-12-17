import React from 'react';

export default class GridSizes extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    var grid = parseInt(e.target.id);
    this.props.onClick(grid);
  }

  render() {
    let elements = [];
    for(let i=4; i<9; i++){
      elements.push(<li key={"grid"+i}><a onClick={this.handleClick} id={i}>{i+"x"+i}</a></li>);
    }

    return (
      <ul className="dropdown-menu">
        {elements}
      </ul>
    );
  }

}
