var React = require('react');

var DiceRow = React.createClass({
  render: function() {
    var numberOfDice = parseInt(this.props.numberOfDice); //this is the number of dice between 0 and 5 within the row -> only in first part
    var dieFace = parseInt(this.props.dieFace); //this is the face of the die between 1 and 6 for one player
    var playerKey = parseInt(this.props.playerKey); //this is the player id (key) among all players
    // var onMouseOver = this.props.onMouseOver;
    // var onMouseOut = this.props.onMouseOut;
    var onClick = this.props.onClick;

    var diceRow = '';

    return diceRow;
  }
});

module.exports = DiceRow;
