var React     = require('react');
var Section   = require('./Section');
var Total  = require('./Total');

var Player = React.createClass({
  render: function() {
    var playerKey     = parseInt(this.props.playerKey);
    var player        = this.props.player;
    var yahtzeeBonus  = player['pointsLowerSection'][5]['numberOfDice'] === 7 &&
                        player['pointsLowerSection'][5]['isLocked'] === true ?
                        true : false;
    var onClick       = this.props.onClick;

    var sectionsArray = [];

    for (var i = 1; i <= 2; i++) {
      sectionsArray.push(
        <div className={i === 1 ? 'upperSection' : 'lowerSection'} key={i}>
          <Section section={i} playerKey={playerKey} onClick={onClick} yahtzeeBonus={yahtzeeBonus}
            sectionPoints={player[i === 1 ? 'pointsUpperSection' : 'pointsLowerSection']} />
          <Total section={i} player={player} />
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
