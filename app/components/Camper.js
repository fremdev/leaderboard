import React from 'react';

require('../styles/camper.scss');

const Camper = React.createClass({
  render: function() {
    return (
      <tr className="camper">
        <td className="column-place">{this.props.index}</td>
        <td className="column-camper"><img src={this.props.camper.img} /><span className="camper-username">{this.props.camper.username}</span></td>
        <td className="column-points">{this.props.camper.recent}</td>
        <td className="column-points">{this.props.camper.alltime}</td>
      </tr>
    )
  }
});

export default Camper;
