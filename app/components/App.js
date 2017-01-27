var React = require('react');
var Jumbotron = require('./display/Jumbotron');
var TempName = require('./display/tempName');
var FirstPart = require('./display/FirstPart');

var App = React.createClass({
  getInitialState: function() {
    return {
      playerId: 1,
      players: [],
      columnSizes: [
        "col-xs-12",
        "col-xs-6",
        "col-xs-6 col-sm-4",
        "col-xs-6 col-sm-3",
        "col-xs-6 col-sm-3 col-md-2"
      ],
      chosenColumnSize: ''
    };
  },

  //this must be refactored, it's just an idea
  sumFirstPartPoints: function(player) {
    var pointsArray = [player.s1, player.s2, player.s3, player.s4, player.s5, player.s6];
    var pointsSum = 0;

    pointsArray.forEach(function(item, index) {
      if (item >= 0) {
        pointsSum += item;
      }
    });

    return pointsSum;
  },

  updateBonus: function(player) {
    return player.firstPartSum >= 63 ? 35 : 0
  },

  updateTotal: function(player) {
    var pointsArray = [player.firstPartSum, player.bonusPoints, player.toak, player.foak, player.fh, player.ss, player.ls, player.yaht, player.chance];
    var total = 0;

    pointsArray.forEach(function(item, index) {
      if (item >= 0) {
        total += item;
      }
    });

    return total;
  },

  addNewPlayer: function(event) {
    event.preventDefault();
    var playerName = $("#newPlayer").val();
    var player = {
      key: this.state.playerId,
      name: playerName,
      s1: -1,
      s1locked: false,
      s2: -1,
      s2locked: false,
      s3: -1,
      s3locked: false,
      s4: -1,
      s4locked: false,
      s5: -1,
      s5locked: false,
      s6: -1,
      s6locked: false,
      firstPartSum: 0,
      bonusPoints: 0,
      toak: -1,
      foak: -1,
      fh: -1,
      ss: -1,
      ls: -1,
      yaht: -1,
      chance: -1,
      grandTotal: 0
    };
    if (playerName !== "") {
      this.setState({
        players: this.state.players.concat(player),
        playerId: this.state.playerId + 1
      });
    }

    $("#newPlayer").val('').focus();
  },

  onDieMouseOver: function(e) {
    var players = this.state.players;
    var dieInfo = e.target.className.split(" ")[1].split("_");

    var numberOfDice = parseInt(dieInfo[0]);
    var dieFace = dieInfo[1];
    var dieFaceIndex = "s" + dieInfo[1];
    var player = dieInfo[2];
    var dieRowLock = "s" + dieInfo[1] + "locked";

    var rowHighlighted = "";
    for (var j = 0; j <= numberOfDice; j++) {
      rowHighlighted += "." + j + "_" + dieFace + "_" + player;
      if (j != numberOfDice) {
        rowHighlighted += ", ";
      }
    }

    for (var i = 0; i < players.length; i++) {
      if (player == players[i].key && players[i][dieRowLock] === false) {
        $("." + dieFace + "_" + player).removeClass("highlightedDie");//removes all highlighted elements from row
        if (players[i][dieFaceIndex] != numberOfDice * dieFace) {//checks if value was already selected
          players[i][dieFaceIndex] = numberOfDice * dieFace;
          $(rowHighlighted).addClass("highlightedDie");
        } else {//if it was selected, it reverts to default
          players[i][dieFaceIndex] = -1;
        }
        players[i].firstPartSum = this.sumFirstPartPoints(players[i]);
        players[i].bonusPoints = this.updateBonus(players[i]);
        players[i].grandTotal = this.updateTotal(players[i]);

        this.setState({
          players: players
        });
      }
    }
  },

  onDieMouseOut: function(e) {
    var players = this.state.players;
    var dieInfo = e.target.className.split(" ")[1].split("_");

    var numberOfDice = parseInt(dieInfo[0]);
    var dieFace = dieInfo[1];
    var dieFaceIndex = "s" + dieInfo[1];
    var player = dieInfo[2];
    var dieRowLock = "s" + dieInfo[1] + "locked";

    var rowHighlighted = "";
    for (var j = 0; j <= numberOfDice; j++) {
      rowHighlighted += "." + j + "_" + dieFace + "_" + player;
      if (j != numberOfDice) {
        rowHighlighted += ", ";
      }
    }

    for (var i = 0; i < players.length; i++) {
      if (player == players[i].key && players[i][dieRowLock] === false) {
        $("." + dieFace + "_" + player).removeClass("highlightedDie");
        players[i][dieFaceIndex] = -1;
        players[i].firstPartSum = this.sumFirstPartPoints(players[i]);
        players[i].bonusPoints = this.updateBonus(players[i]);
        players[i].grandTotal = this.updateTotal(players[i]);

        this.setState({
          players: players
        });
      }
    }
  },

  onDieClick: function(e) {
    var players = this.state.players;
    var dieInfo = e.target.className.split(" ")[1].split("_");

    var numberOfDice = parseInt(dieInfo[0]);
    var dieFace = dieInfo[1];
    var dieFaceIndex = "s" + dieInfo[1];
    var player = dieInfo[2];
    var dieRowLock = "s" + dieInfo[1] + "locked";

    var rowHighlighted = "";
    for (var j = 0; j <= numberOfDice; j++) {
      rowHighlighted += "." + j + "_" + dieFace + "_" + player;
      if (j != numberOfDice) {
        rowHighlighted += ", ";
      }
    }

    for (var i = 0; i < players.length; i++) {
      if (player == players[i].key && players[i][dieRowLock] === true) {
        $("." + dieFace + "_" + player).removeClass("highlightedDie");//removes all highlighted elements from row
        if (players[i][dieFaceIndex] != numberOfDice * dieFace) {//checks if value was already selected
          players[i][dieFaceIndex] = numberOfDice * dieFace;
          $(rowHighlighted).addClass("highlightedDie");
        } else {//if it was selected, it reverts to default
          players[i][dieFaceIndex] = -1;
          players[i][dieRowLock] = false;
        }
      } else {
        players[i][dieRowLock] = true;
      }
      players[i].firstPartSum = this.sumFirstPartPoints(players[i]);
      players[i].bonusPoints = this.updateBonus(players[i]);
      players[i].grandTotal = this.updateTotal(players[i]);
    }

    this.setState({
      players: players
    });
  },

  componentDidUpdate: function(prevProps, prevState) {
    var playersLength = this.state.players.length;
    var columnSizes = this.state.columnSizes;

    if (playersLength !== prevState.players.length) {
      var chosenColumnSize = '';

      if (playersLength === 1) {
        chosenColumnSize = columnSizes[0];
      } else if (playersLength === 2) {
        chosenColumnSize = columnSizes[1];
      } else if (playersLength === 3) {
        chosenColumnSize = columnSizes[2];
      } else if (playersLength === 4) {
        chosenColumnSize = columnSizes[3];
      } else if (playersLength > 4) {
        chosenColumnSize = columnSizes[4];
      }

      this.setState({
        chosenColumnSize: chosenColumnSize + " container text-center"
      });
    }
  },


  render: function() {
    return <div>{([
      <Jumbotron key="jumbotron" onClick={this.addNewPlayer} />,
      // <TempName tempName={this.state.players} />,
      <FirstPart key="firstPart" chosenColumnSize={this.state.chosenColumnSize} players={this.state.players}
        onDieClick={this.onDieClick} onDieMouseOver={this.onDieMouseOver} onDieMouseOut={this.onDieMouseOut} />
    ])}</div>
  }
});

module.exports = App;
