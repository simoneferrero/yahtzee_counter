var React = require('react');

var PointsHeaders = React.createClass({
  render: function() {
    var pointsHeaders = (
      <div className="col-xs-2 pointsHeaders">
        <div className="Row">Name</div>
        <div className="Row">1s</div>
        <div className="Row">2s</div>
        <div className="Row">3s</div>
        <div className="Row">4s</div>
        <div className="Row">5s</div>
        <div className="Row">6s</div>
      </div>
    );

    return pointsHeaders;
  }
});

module.exports = PointsHeaders;
