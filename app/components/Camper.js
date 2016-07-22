import React from 'react';

const Camper = React.createClass({
  render: function() {
    return (
      <li className="camper">
        <div>{this.props.index}</div>
        <div>{this.props.camper.username}</div>
        <div><img src={this.props.camper.img} /></div>
        <div>{this.props.camper.recent}</div>
      </li>
    )
  }
});

export default Camper;
