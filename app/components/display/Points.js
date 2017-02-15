var React     = require('react');
var Player   = require('./Player');

var Points = React.createClass({
  render: function() {
    var players       = this.props.players;
    var onClick       = this.props.onClick;
    var removePlayer  = this.props.removePlayer;

    var points        = [];

    for (var player in players) {
      points.push(
        <Player key={player} playerKey={player} player={players[player]}
          onClick={onClick} removePlayer={removePlayer} />
      );
    }

    return (
      <div className="container">
        <div className="row">
          {points}
        </div>
      </div>
    );
  }
});

module.exports = Points;
