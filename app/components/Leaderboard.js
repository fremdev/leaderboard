import React from 'react';

import Camper from './Camper';

const Leaderboard = React.createClass({
  getInitialState: function() {
    return ({
        recent: [],
        alltime: []
      })
  },
  componentDidMount: function() {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(function(response) {
        return response.json();
      })
      .then(function(recent) {
        console.log(recent);
      })
      .catch(function(error) {
        console.log(error);
    });

    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then(function(response) {
        return response.json();
      })
      .then(function(alltime) {
        console.log(alltime);
      })
      .catch(function(error) {
        console.log(error);
    });
  },
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
