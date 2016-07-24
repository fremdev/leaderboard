import React from 'react';

import Camper from './Camper';
require('../styles/leaderboard.scss');

const Leaderboard = React.createClass({
  getInitialState: function() {
    return ({
        recent: [],
        alltime: [],
        isRecent: true
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
  handleSortClick: function(sortByRecent) {
    if((sortByRecent && !this.state.isRecent) ||
      (!sortByRecent && this.state.isRecent)) {
        this.setState({
          isRecent: !this.state.isRecent
        });
      }
  },
  render: function() {
    let toShow = this.state.isRecent ? 'recent' : 'alltime';
    return (
      <table className="leaderboard">
        <thead>
          <tr>
            <th className="column-place">Place</th>
            <th className="column-camper">Camper</th>
            <th className="column-points"><span onClick={this.handleSortClick.bind(null, true)}>Recent Points</span></th>
            <th className="column-points"><span onClick={this.handleSortClick.bind(null, false)}>Alltime Points</span></th>
          </tr>
        </thead>
        <tbody>
        {this.state[toShow].map(this.renderCampers)}
        </tbody>
      </table>
    )
  }
});

export default Leaderboard;
