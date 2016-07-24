import React from 'react';

import Header from './Header';
import Leaderboard from './Leaderboard';

const App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Leaderboard />
      </div>
    )
  }
});

export default App;
