var React = require('react');
var PointsHeaders = require('./PointsHeaders');
var FirstPartPoints = require('./FirstPartPoints');

var FirstPart = React.createClass({
  render: function() {
    var players = this.props.players;
    var playersPoints = [];
    var onChange = this.props.onChange;
    var chosenColumnSize = this.props.chosenColumnSize;

    playersPoints = players.map(function(player) {
      return <FirstPartPoints chosenColumnSize={chosenColumnSize} playerData={player} key={player.key} onChange={onChange} />;
    });

    var firstPartPoints = (
      <div className="container">
        <div className="row">
          {playersPoints.length != 0 ? playersPoints : null}
        </div>
      </div>
    );
    return firstPartPoints;
  }
});

module.exports = FirstPart;
