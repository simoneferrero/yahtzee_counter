var React       = require('react');
var Section     = require('./Section');
var Total       = require('./Total');
var DeleteAlert = require('./DeleteAlert');

var Player = React.createClass({

  onMouseOverChangeName: function(e) {
    $(e.target).text("Delete");
    $(e.target).addClass("deleteName");
  },

  onMouseOutChangeName: function(e) {
    var playerName  = this.props.player.name;

    $(e.target).text(playerName);
    $(e.target).removeClass("deleteName");
  },

  onClickChangeName: function() {
    var playerKey   = parseInt(this.props.playerKey);
    var playerName  = this.props.player.name;

    $("#deleteAlert_" + playerKey).removeClass("hidden");
  },

  render: function() {
    var playerKey     = parseInt(this.props.playerKey);
    var player        = this.props.player;
    var yahtzeeBonus  = player['pointsLowerSection'][5]['numberOfDice'] === 7 &&
                        player['pointsLowerSection'][5]['isLocked'] === true ?
                        true : false;
    var onClickDie    = this.props.onClick;
    var onMouseOver   = this.onMouseOverChangeName;
    var onMouseOut    = this.onMouseOutChangeName;
    var onClick       = this.onClickChangeName;
    var removePlayer  = this.props.removePlayer;

    var sectionsArray = [];

    for (var i = 1; i <= 2; i++) {
      var className   = "sectionWrap " + (i === 1 ? 'upperSection' : 'lowerSection');
      var playerName  = player.name.length <= 15 ? player.name : (player.name.substr(0,15) + "...");

      sectionsArray.push(
        <div className={className} key={i}>
          <Section section={i} playerKey={playerKey} onClick={onClickDie} yahtzeeBonus={yahtzeeBonus}
            sectionPoints={player[i === 1 ? 'pointsUpperSection' : 'pointsLowerSection']} />
          <Total section={i} player={player} />
        </div>
      );
    }

    return (
      <div className="playerColumn">
        <div className="col-xs-10 col-xs-offset-1 player">
          <DeleteAlert playerKey={playerKey} playerName={player.name}
            removePlayer={removePlayer} />
          <div className="text-center playerNameWrap">
            <span id={"player_" + playerKey} className="playerName" onClick={onClick}
              onMouseOver={onMouseOver} onMouseOut={onMouseOut}>{player.name}</span><br />
            <span className="badge">Wins: {player.matchesWon}</span>
          </div>
          {sectionsArray}
        </div>
      </div>
    );
  }
});

module.exports = Player;
