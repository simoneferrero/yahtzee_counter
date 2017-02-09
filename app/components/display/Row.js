var React     = require('react');
var RowName   = require('./RowName');
var DiceRow   = require('./DiceRow');
var RowPoints = require('./RowPoints');

var Row = React.createClass({
  render: function() {
    var rowValue  = parseInt(this.props.rowValue); //this is the value of the row, eg. 1 to 6 in first section, or 3 of a kind in second section
    var section   = parseInt(this.props.section); //this is the value of which section of the game the row refers to
    var playerKey = parseInt(this.props.playerKey); //this is the player id (key)
    var points    = this.props.points; //this is the value of the points for the row
    var onClick   = this.props.onClick;

    return (
      <div className="row">
        <RowName rowValue={rowValue} section={section} />
        <DiceRow onClick={onClick} rowValue={rowValue}
          section={section} playerKey={playerKey} />
        <RowPoints rowValue={rowValue} section={section}
          playerKey={playerKey} points={points} />
      </div>
    );
  }
});

module.exports = Row;
