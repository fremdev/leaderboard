import React from 'react';
require('../styles/header.scss');

const Header = React.createClass({
  render: function() {
    return (
      <div className='header'><h1>FreeCodeCamp Leaderboard</h1><a className="author" href="https://twitter.com/">by @fremdev</a></div>
    );
  }
});

export default Header;
