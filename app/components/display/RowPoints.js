var React = require('react');

var RowPoints = React.createClass({
  render: function() {
    var rowValue  = parseInt(this.props.rowValue); //this is the value of the row, eg. 1 to 6 in first section, or 3 of a kind in second section
    var section   = parseInt(this.props.section); //this is the value of which section of the game the row refers to
    var playerKey = parseInt(this.props.playerKey); //this is the player id (key)
    var players   = this.props.players; //array of players

    var player    = {};

    for (var i = 0; i < players.length; i++) {
      if (players[i].key === playerKey) {
        player = players[i];
        break;
      }
    }

    var numberOfDice
      , points
      , rowPoints;

    if (section === 1) {
      numberOfDice = player['pointsFirstSection'][rowValue].numberOfDice;
      points = player['pointsFirstSection'][rowValue].points;
    } else if (section === 2) {
      numberOfDice = player['pointsSecondSection'][rowValue].numberOfDice;
      points = player['pointsSecondSection'][rowValue].points;
    }

    rowPoints = numberOfDice !== -1 ? points : '-';

    return (
      <div className="col-xs-1 rowPoints">
        {rowPoints}
      </div>
    );
  }
});

module.exports = RowPoints;
