var React     = require('react');
var Jumbotron = require('./display/Jumbotron');
var Points    = require('./display/Points');

var App = React.createClass({
  getInitialState: function() {
    return {
      playerId: 1,
      players: {},
      matchWinnerKeys: [],
      winner: 'Winner: -',
      grandWinner: 'Total winner: -',
    };
  },

  addNewPlayer: function(event) {
    event.preventDefault();
    var playerName = $("#newPlayer").val();
    if (playerName !== "") {
      var players = JSON.parse(JSON.stringify(this.state.players));
      players[this.state.playerId] = {
        name: playerName,
        pointsUpperSection: Array.apply(null, Array(7)).map(function() {
          return {
            numberOfDice: -1,
            points: 0,
            isLocked: false,
            isYahtzee: false
          };
        }),
        subTotal: 0,
        bonusPoints: 0,
        pointsLowerSection: Array.apply(null, Array(7)).map(function() {
          return {
            numberOfDice: -1,
            points: 0,
            isLocked: false,
            isYahtzee: false
          };
        }),
        grandTotal: 0,
        matchesWon: 0
      };

      var playerId = this.state.playerId + 1;

      this.setState({
        players: players,
        playerId: playerId
      });
    }

    $("#newPlayer").val('').focus();

    return this.state;
  },

  removePlayer: function(e) {
    var players   = JSON.parse(JSON.stringify(this.state.players));
    var playerKey = e.target.id.split('_')[1];

    delete players[playerKey];

    var winner    = this.getWinnersText(players);
    var grandWinnersText = this.getWinnersText(players, true);

    this.setState({
      players: players,
      winner: winner,
      grandWinner: grandWinnersText
    });
  },

  resetPlayers: function(players) {
    var resetPlayers = {};

    for (var playerKey in players) {
      var player = players[playerKey];
      resetPlayers[playerKey] = {
        name: player.name,
        pointsUpperSection: Array.apply(null, Array(7)).map(function() {
          return {
            numberOfDice: -1,
            points: 0,
            isLocked: false,
            isYahtzee: false
          };
        }),
        subTotal: 0,
        bonusPoints: 0,
        pointsLowerSection: Array.apply(null, Array(7)).map(function() {
          return {
            numberOfDice: -1,
            points: 0,
            isLocked: false,
            isYahtzee: false
          };
        }),
        grandTotal: 0,
        matchesWon: player.matchesWon
      };
    }

    return resetPlayers;
  },

  setNewMatch: function(event) {
    event.preventDefault();
    var matchWinnerKeys = this.state.matchWinnerKeys;

    if (matchWinnerKeys.length > 0) {
      var players = JSON.parse(JSON.stringify(this.state.players));

      matchWinnerKeys.forEach((winnerKey) => {
        players[winnerKey].matchesWon++;
      });

      var resetPlayers = this.resetPlayers(players);
      var winnersText = this.getWinnersText(resetPlayers);
      var grandWinnersText = this.getWinnersText(players, true);

      $('.dieCover').removeClass('clickedDie');

      this.setState({
        players: resetPlayers,
        winner: winnersText,
        grandWinner: grandWinnersText
      });
    }
  },

  getWinnersText: function(players, grandWinner = false) {
    var winnerKeys  = this.getHighestPoints(players, grandWinner);
    var winnerText = grandWinner ? "Total winner" : "Winner";

    if (winnerKeys.length === 0) {
      return winnerText + ": -";
    }

    var namesArray = [];

    winnerKeys.forEach((winnerKey) => {
      namesArray.push(players[winnerKey].name);
    });

    winnerText += winnerKeys.length === 1 ? ": " : "s: ";


    return winnerText + namesArray.join(", ");
  },

  getHighestPoints: function(players, matchesWon) {
    var points          = 0;
    var winnerKeys      = [];

    for (var playerKey in players) {
      var player        = players[playerKey];
      var playerPoints  = matchesWon ? player.matchesWon : player.grandTotal;

      if (playerPoints !== 0) {
        if (playerPoints === points) {
          winnerKeys.push(playerKey);
        } else if (playerPoints > points) {
          winnerKeys      = [playerKey];
          points          = playerPoints;
        }
      }
    }


    if (!matchesWon) {
      this.setState({
        matchWinnerKeys: winnerKeys
      });
    }

    return winnerKeys;
  },

  countPoints: function(section, rowValue, dieValue) {
    var points;

    if (section === 1) {
      points = rowValue * dieValue;
    } else if (section === 2) {
      switch (rowValue) {
        case 2:
          points = dieValue === 0 ? 0 : 25;
          break;
        case 3:
          points = dieValue === 0 ? 0 : 30;
          break;
        case 4:
          points = dieValue === 0 ? 0 : 40;
          break;
        case 5:
          points = dieValue === 0 ? 0 : 50;
          break;
        default:
          points = dieValue;
          break;
      }
    }

    return points;
  },

  countSectionTotal: function(playerSection) {
    var sectionTotal = 0;

    playerSection.forEach(function(row) {
      if (row['numberOfDice'] !== -1) {
        sectionTotal += row['points'];
      }
    });

    return sectionTotal;
  },

  countYahtzeeBonus: function(player) {
    var yahtzeeBonus = 0;

    player['pointsUpperSection'].forEach(function(row) {
      if (row['isYahtzee']) {
        yahtzeeBonus += 100;
      }
    });

    player['pointsLowerSection'].forEach(function(row) {
      if (row['isYahtzee']) {
        yahtzeeBonus += 100;
      }
    });

    return yahtzeeBonus;
  },

  onDieClick: function(e) {
    var dieId             = e.target.id;
    var dieIdValues       = dieId.split('_');
    var rowValue          = parseInt(dieIdValues[1]);
    var section           = parseInt(dieIdValues[2]);
    var dieValue          = section === 2 && (rowValue <= 1 || rowValue === 6) ?
                            parseInt(e.target.value) : parseInt(dieIdValues[0]);
    var playerKey         = parseInt(dieIdValues[3]);

    var players           = JSON.parse(JSON.stringify(this.state.players));
    var player            = players[playerKey];
    var playerSection     = player[section === 1 ?
                            'pointsUpperSection' : 'pointsLowerSection'];
    var row               = playerSection[rowValue];
    var dieClass          = rowValue + '_' + section + '_' + playerKey;

    var points            = this.countPoints(section, rowValue, dieValue);

    $("." + dieClass).removeClass("clickedDie");

    if (dieValue === 100) {
      var isYahtzee       = e.target.checked;
      var sectionPoints   = section === 1 ? 5 : 7;
      var conditionsUpper = section === 1;
      var conditionsLower = section === 2 && (rowValue > 1 && rowValue < 6);
      var maxValueDie     = sectionPoints + "_" + dieClass;

      row.isYahtzee       = isYahtzee;

      if (conditionsUpper || conditionsLower) {
        if (isYahtzee) {
          row.points          = this.countPoints(section, rowValue, sectionPoints);
          row.numberOfDice    = sectionPoints;
          row.isLocked        = true;
        } else {
          row.points          = 0;
          row.numberOfDice    = -1;
          row.isLocked        = false;
        }
      }
    } else if (section === 2 && rowValue === 6) {
      row.points          = points;
      row.numberOfDice    = dieValue;
    } else {
      row.points          = row.numberOfDice !== dieValue ? points : 0;

      row.isLocked        = row.numberOfDice !== dieValue ? true : false;
      row.numberOfDice    = row.numberOfDice !== dieValue ? dieValue : -1;
      row.isYahtzee       = (section === 1 && row.numberOfDice !== 5) ||
                            (section === 2 && row.numberOfDice !== 7) ?
                            false : row.isYahtzee;

      var isChecked       = $('100_' + dieClass).is(":checked");
      $('#100_' + dieClass).prop('checked',
                            (section === 1 && row.numberOfDice !== 5) ||
                            (section === 2 && row.numberOfDice !== 7) ?
                            false : isChecked);
      if (section === 2 && rowValue === 5 && (dieValue === 0 || row.isLocked === false)) {
        player['pointsUpperSection'].forEach(function(row) {
          row.isYahtzee = false;
        });
        player['pointsLowerSection'].forEach(function(row) {
          row.isYahtzee = false;
        });
        $('.yahtzeeBonus').prop('checked', false);
      }
    }

    player['subTotal']    = this.countSectionTotal(player['pointsUpperSection']);
    player['bonusPoints'] = player['subTotal'] >= 63 ? 35 : 0;
    player['grandTotal']  = player['subTotal'] + player['bonusPoints'] +
                            this.countSectionTotal(player['pointsLowerSection']) +
                            this.countYahtzeeBonus(player);

    if (row.numberOfDice !== -1) {
      for (var i = 0; i <= row.numberOfDice; i++) {
        $("#" + i + "_" + dieClass).addClass("clickedDie");
      }
    } else {
      $("." + dieClass).removeClass("clickedDie");
    }

    this.setState({
      players: players,
      winner: this.getWinnersText(players)
    });


  },

  render: function() {
    var players       = JSON.parse(JSON.stringify(this.state.players));
    var winner        = this.state.winner;
    var grandWinner   = this.state.grandWinner;
    var onClick       = this.onDieClick;
    var removePlayer  = this.removePlayer;

    return (
      <div>
        <Jumbotron key="jumbotron" winner={winner} grandWinner={grandWinner}
          onClick={this.addNewPlayer} newMatch={this.setNewMatch} />
        <Points players={players} onClick={onClick} removePlayer={removePlayer} />
      </div>
    );
  }
});

module.exports = App;
