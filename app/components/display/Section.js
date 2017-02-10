var React     = require('react');
var Row       = require('./Row');

var Section = React.createClass({
  render: function() {
    var numberOfDice    = parseInt(this.props.numberOfDice);
    var section         = parseInt(this.props.section);
    var playerKey       = parseInt(this.props.playerKey);
    var yahtzeeBonus    = this.props.yahtzeeBonus;
    var sectionPoints   = this.props.sectionPoints;
    var onClick         = this.props.onClick;

    var rowsArray       = [];

    var i               = section === 1 ? 1 : 0;

    for (i; i <= 6; i++) {
      var rowPoints     = sectionPoints[i];
      var numberOfDice  = rowPoints.numberOfDice;
      var points        = numberOfDice !== -1 ? rowPoints.points : '-';
      rowsArray.push(
        <Row onClick={onClick} rowValue={i} section={section} key={i} numberOfDice={numberOfDice}
          playerKey={playerKey} points={points} yahtzeeBonus={yahtzeeBonus} />
      );
    }

    return (
      <div className="row">
        <div className="col-xs-12">
          {rowsArray}
        </div>
      </div>
    );
  }
});

module.exports = Section;
