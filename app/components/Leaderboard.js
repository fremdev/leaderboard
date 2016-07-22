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
      .then((recent) => {
        this.setState({recent: recent});
      })
      .catch(function(error) {
        console.log(error);
      });

    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then(function(response) {
        return response.json();
      })
      .then((alltime) => {
        this.setState({alltime: alltime});
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  renderCampers: function(camper, index) {
    return <Camper key={camper.username} camper={camper} index={index + 1} />;
  },
  render: function() {
    return (
      <div className="leaderboard">
        <ul>
          {this.state.recent.map(this.renderCampers)}
        </ul>
      </div>
    )
  }
});

export default Leaderboard;
