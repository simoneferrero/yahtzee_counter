var React = require('react');

var RowPoints = React.createClass({
  render: function() {
    var points = this.props.points; //this is the value of the points for the row

    return (
      <div className="col-xs-2 rowPoints">
        {points}
      </div>
    );
  }
});

module.exports = RowPoints;
