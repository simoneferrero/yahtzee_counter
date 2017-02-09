var React     = require('react');
var Row       = require('./Row');

var Section = React.createClass({
  render: function() {
    var section       = parseInt(this.props.section); //this is the value of which section of the game the row refers to
    var playerKey     = parseInt(this.props.playerKey); //this is the player id (key)
    var sectionPoints = this.props.sectionPoints; //this is an array of points
    var onClick       = this.props.onClick;

    var rowsArray     = [];

    var i             = section === 1 ? 1 : 0; //upper section starts from 1, lower from 0

    for (i; i <= 6; i++) {
      var rowPoints   = sectionPoints[i];
      var points      = rowPoints.numberOfDice !== -1 ? rowPoints.points : '-';
      rowsArray.push(
        <Row onClick={onClick} rowValue={i} section={section} key={i}
          playerKey={playerKey} points={points} />
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
