var React = require('react');
var PointsHeaders = require('./PointsHeaders');
var FirstPartPoints = require('./FirstPartPoints');

var FirstPart = React.createClass({
  render: function() {
    var firstPartPoints = (
      <div className="container">
        <div className="Row">
          {/* <div className={this.props.chosenColumnSize}>Test div</div> */}
          <PointsHeaders chosenColumnSize={this.props.chosenColumnSize} />
          {/* <FirstPartPoints chosenColumnSize={this.props.chosenColumnSize} /> */}
          {/* use a loop to loop through players, each of them will display a FirstPartPoints controller */}
        </div>
      </div>
    );
    return firstPartPoints;
  }
});

module.exports = FirstPart;
