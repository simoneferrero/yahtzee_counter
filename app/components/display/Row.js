var React     = require('react');
var RowName   = require('./RowName');
var DiceRow   = require('./DiceRow');
var RowPoints = require('./RowPoints');

var Row = React.createClass({
  render: function() {
    var numberOfDice  = parseInt(this.props.numberOfDice);
    var rowValue      = parseInt(this.props.rowValue);
    var section       = parseInt(this.props.section);
    var playerKey     = parseInt(this.props.playerKey);
    var points        = this.props.points;
    var yahtzeeBonus  = this.props.yahtzeeBonus;
    var onClick       = this.props.onClick;

    return (
      <div className="row">
        <RowName rowValue={rowValue} section={section} />
        <DiceRow onClick={onClick} rowValue={rowValue} numberOfDice={numberOfDice}
          section={section} playerKey={playerKey} yahtzeeBonus={yahtzeeBonus} />
        <RowPoints points={points} />
      </div>
    );
  }
});

module.exports = Row;
