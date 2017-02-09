var React     = require('react');
var Player   = require('./Player');

var Points = React.createClass({
  render: function() {
    var players       = this.props.players; //array of players
    var onClick       = this.props.onClick;

    var points        = [];

    players.forEach(function(player, index) {
      points.push(
        <Player key={index} playerKey={player.key} player={player}
          onClick={onClick} />
      );
    });

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
