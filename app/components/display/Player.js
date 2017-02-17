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

  getColumnSize: function() {
    var numberOfPlayers = this.props.numberOfPlayers;
    // var columnSize      = 'col-xs-12';
    //
    // if (numberOfPlayers >= 4) {
    //   columnSize += ' col-sm-6 col-md-6 col-lg-4 col-xl-3';
    // } else if (numberOfPlayers >= 3) {
    //   columnSize += ' col-sm-6 col-md-6 col-lg-4';
    // } else if (numberOfPlayers >= 2) {
    //   columnSize += ' col-sm-6';
    // }

    var columnSize  = 'playerColumn ';

    if (numberOfPlayers >= 4) {
      columnSize += 'fourPlayers';
    } else if (numberOfPlayers === 3) {
      columnSize += 'threePlayers';
    } else if (numberOfPlayers === 2) {
      columnSize += 'twoPlayers';
    } else if (numberOfPlayers === 1) {
      columnSize += 'onePlayer'
    }

    return columnSize;
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
    var columnSize    = this.getColumnSize();

    var sectionsArray = [];

    for (var i = 1; i <= 2; i++) {
      var className = "sectionWrap " + (i === 1 ? 'upperSection' : 'lowerSection');

      sectionsArray.push(
        <div className={className} key={i}>
          <Section section={i} playerKey={playerKey} onClick={onClickDie} yahtzeeBonus={yahtzeeBonus}
            sectionPoints={player[i === 1 ? 'pointsUpperSection' : 'pointsLowerSection']} />
          <Total section={i} player={player} />
        </div>
      );
    }

    return (
      <div className={columnSize}>
        <div className="col-xs-10 col-xs-offset-1 player">
          <DeleteAlert playerKey={playerKey} playerName={player.name}
            removePlayer={removePlayer} />
          <div className="text-center playerNameWrap">
            <span id={"player_" + playerKey} className="playerName" onClick={onClick}
              onMouseOver={onMouseOver} onMouseOut={onMouseOut}>{player.name}</span>
            <span className="badge">Won: {player.matchesWon}</span>
          </div>
          {sectionsArray}
        </div>
      </div>
    );
  }
});

module.exports = Player;
