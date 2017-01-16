var React = require('react');

var PointsHeaders = React.createClass({
  render: function() {
    var pointsHeaders = [];

    for (var i = 1; i <= 6; i++) {
      pointsHeaders.push(<div className={"Row points" + i} key={i}>{i}s</div>);
    }

    return (
      <div className="col-xs-1 pointsHeaders">
        <div className="Row pointsName" key="name">Name</div>
        {pointsHeaders}
      </div>
    );
  }
});

module.exports = PointsHeaders;
