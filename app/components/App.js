var React     = require('react');
var Jumbotron = require('./display/Jumbotron');
var Points    = require('./display/Points');

var App = React.createClass({
  getInitialState: function() {
    return {
      playerId: 1,
      players: []
    };
  },

  countPoints: function(section, rowValue, dieValue) {
    var points;

    if (section === 1) {
      points = rowValue * dieValue;
    } else if (section === 2) {
      switch (rowValue) {
        case 0:
          points = 3 * dieValue;
          break;
        case 1:
          points = 4 * dieValue;
          break;
        case 2:
          points = 25;
          break;
        case 3:
          points = 30;
          break;
        case 4:
          points = 40;
          break;
        case 5:
          points = 50;
          break;
        case 6:
          points = dieValue;
          break;
      }
    }

    return points;
  },

  addNewPlayer: function(event) {
    event.preventDefault();
    var playerName = $("#newPlayer").val();
    if (playerName !== "") {
      var players = this.state.players.slice().concat({
        key: this.state.playerId,
        name: playerName,
        pointsUpperSection: Array.apply(null, Array(7)).map(function() {
          return {
            numberOfDice: -1,
            points: 0,
            isLocked: false
          };
        }),
        firstsectionSum: 0,
        bonusPoints: 0,
        pointsLowerSection: Array.apply(null, Array(7)).map(function() {
          return {
            numberOfDice: -1,
            points: 0,
            isLocked: false
          };
        }),
        grandTotal: 0
      });

      var playerId = this.state.playerId + 1;

      this.setState({
        players: players,
        playerId: playerId
      });
    }

    $("#newPlayer").val('').focus();
  },

  onDieClick: function(e) {
    var dieIdValues = e.target.id.split('_');
    var rowValue    = parseInt(dieIdValues[1]);
    var section     = parseInt(dieIdValues[2]);
    var dieValue    = section === 2 && rowValue === 6 ?
                    parseInt(e.target.value) : parseInt(dieIdValues[0]);
    var playerKey   = parseInt(dieIdValues[3]);
    var players     = this.state.players.slice();

    var points      = this.countPoints(section, rowValue, dieValue);

    for (var i = 0; i < players.length; i++) {
      var player            = players[i];
      if (player.key === playerKey) {
        var playerSection   = player[section === 1 ? 'pointsUpperSection' : 'pointsLowerSection'];
        var row             = playerSection[rowValue];
        if (section === 2 && rowValue === 6) {
          row.points        = points;
          row.numberOfDice  = points;
        } else {
          row.points          = row.points === 0 ? points : 0;
          row.numberOfDice    = row.numberOfDice === -1 ? dieValue : -1;
          row.isLocked        = row.isLocked === false ? true : false;
        }
      }
    }

    this.setState({
      players: players
    });

  },

  componentDidUpdate: function(prevProps, prevState) {
    //console.log(this.state.players);
  },

  render: function() {
    var players   = this.state.players.slice();
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
