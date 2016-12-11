var React = require('react');

var GridSizes = React.createClass({
  handleClick: function(e){
    var grid = parseInt(e.target.id);
    this.props.onClick(grid);
  },

  render: function(){
    var elements = [];
    for(var i=4; i<9; i++){
      elements.push(<li key={"grid"+i}><a onClick={this.handleClick} id={i}>{i+"x"+i}</a></li>);
    }

    return (
      <ul className="dropdown-menu">
        {elements}
      </ul>
    );
  }
});

module.exports = GridSizes;
