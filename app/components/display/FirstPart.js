var React = require('react');
var PointsHeaders = require('./PointsHeaders');
var FirstPartPoints = require('./FirstPartPoints');

var FirstPart = React.createClass({
  render: function() {
    var players = this.props.players;
    var playersPoints = [];
    var chosenColumnSize = this.props.chosenColumnSize;
    console.log(players);

    playersPoints = players.map(function(player) {
      return <FirstPartPoints chosenColumnSize={chosenColumnSize} player={player} key={player.key} />;
    });
    // for (var i = 0; i < players.length; i++) {
    //   playersPoints.push(<FirstPartPoints chosenColumnSize={this.props.chosenColumnSize} player={players[i]} key={player.key} />);
    // }

    var firstPartPoints = (
      <div className="container">
        <div className="Row">
          {/* <div className={this.props.chosenColumnSize}>Test div</div> */}
          {/* <PointsHeaders chosenColumnSize={this.props.chosenColumnSize} /> */}
          {/* <FirstPartPoints chosenColumnSize={this.props.chosenColumnSize} player={this.props.player} /> */}
          {/* use a loop to loop through players, each of them will display a FirstPartPoints controller */}
          {playersPoints.length != 0 ? playersPoints : null}
        </div>
      </div>
    );
    return firstPartPoints;
  }
});

module.exports = FirstPart;
