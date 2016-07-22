import React from 'react';

import Camper from './Camper';

const Leaderboard = React.createClass({
  render: function() {
    return (
      <div className="leaderboard">
        Rows will go here
        <Camper />
        <Camper />
        <Camper />
      </div>
    )
  }
});

export default Leaderboard;
