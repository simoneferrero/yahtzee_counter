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
      sectionsArray.push(
        <div className={i === 1 ? 'upperSection' : 'lowerSection'} key={i}>
          <Section section={i} playerKey={playerKey} onClick={onClickDie} yahtzeeBonus={yahtzeeBonus}
            sectionPoints={player[i === 1 ? 'pointsUpperSection' : 'pointsLowerSection']} />
          <Total section={i} player={player} />
        </div>
      );
    }

    return (
      <div className="col-xs-6">
        <div className="row text-center" id={"player_" + playerKey} onClick={onClick}
          onMouseOver={onMouseOver} onMouseOut={onMouseOut}>{player.name}</div>
          <DeleteAlert playerKey={playerKey} playerName={player.name}
            removePlayer={removePlayer} />
        {sectionsArray}
      </div>
    );
  }
});

module.exports = Player;
