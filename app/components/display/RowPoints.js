var React = require('react');

var RowPoints = React.createClass({
  render: function() {
    var rowValue  = parseInt(this.props.rowValue); //this is the value of the row, eg. 1 to 6 in first section, or 3 of a kind in second section
    var section   = parseInt(this.props.section); //this is the value of which section of the game the row refers to
    var playerKey = parseInt(this.props.playerKey); //this is the player id (key)
    var points    = this.props.points; //this is the value of the points for the row

    return (
      <div className="col-xs-2 rowPoints">
        {points}
      </div>
    );
  }
});

module.exports = RowPoints;
