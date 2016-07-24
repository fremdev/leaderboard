import React from 'react';

require('../styles/camper.scss');

const Camper = React.createClass({
  handleCamperClick: function() {
    window.open('https://www.freecodecamp.com/' + this.props.camper.username, '_blank');
  },
  render: function() {
    return (
      <tr className="camper" onClick={this.handleCamperClick}>
        <td className="column-place">{this.props.index}</td>
        <td className="column-camper"><img src={this.props.camper.img} /><span className="camper-username">{this.props.camper.username}</span></td>
        <td className="column-points">{this.props.camper.recent}</td>
        <td className="column-points">{this.props.camper.alltime}</td>
      </tr>
    )
  }
});

export default Camper;
