var React     = require('react');
var Section   = require('./Section');

var Player = React.createClass({
  render: function() {
    var playerKey     = parseInt(this.props.playerKey); //this is the player id (key)
    var player        = this.props.player;
    var onClick       = this.props.onClick;

    var sectionsArray = [];

    for (var i = 1; i <= 2; i++) {
      sectionsArray.push(
        <div className={i === 1 ? 'upperSection' : 'lowerSection'} key={i}>
          <Section section={i} playerKey={playerKey} onClick={onClick}
            sectionPoints={player[i === 1 ? 'pointsUpperSection' : 'pointsLowerSection']} />
        </div>
      );
    }

    return (
      <div className="col-xs-6">
        <div className="row text-center">{player.name}</div>
        {sectionsArray}
      </div>
    );
  }
});

module.exports = Player;
