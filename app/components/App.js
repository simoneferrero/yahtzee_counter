var React     = require('react');
var Jumbotron = require('./display/Jumbotron');
var Points    = require('./display/Points');

var App = React.createClass({
  getInitialState: function() {
    return {
      playerId: 1,
      players: {}
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
        grandTotal: 0
      };

      var playerId = this.state.playerId + 1;

      this.setState({
        players: players,
        playerId: playerId
      });
    }

    $("#newPlayer").val('').focus();
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
    var dieIdValues       = e.target.id.split('_');
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

    var points            = this.countPoints(section, rowValue, dieValue);

    if (dieValue === 100) {
      row.isYahtzee       = e.target.checked;
    } else if (section === 2 && rowValue === 6) {
      row.points          = points;
      row.numberOfDice    = points;
    } else {
      row.points          = row.numberOfDice !== dieValue ? points : 0;
      //put conditional to check if it's hover on, off or click
      //save previous points somewhere to recall if hover off and not locked
      row.isLocked        = row.numberOfDice !== dieValue ? true : false;
      row.numberOfDice    = row.numberOfDice !== dieValue ? dieValue : -1;
    }

    player['subTotal']    = this.countSectionTotal(player['pointsUpperSection']);
    player['bonusPoints'] = player['subTotal'] >= 63 ? 35 : 0;
    player['grandTotal']  = player['subTotal'] + player['bonusPoints'] +
                            this.countSectionTotal(player['pointsLowerSection']) +
                            this.countYahtzeeBonus(player);

    this.setState({
      players: players
    });


  },

  componentDidUpdate: function(prevProps, prevState) {
    //console.log(this.state.players);
  },

  render: function() {
    var players   = JSON.parse(JSON.stringify(this.state.players));
    var onClick   = this.onDieClick;

    return (
      <div>
        <Jumbotron key="jumbotron" onClick={this.addNewPlayer} />
        <Points players={players} onClick={onClick} />
      </div>
    );
  }
});

module.exports = App;
