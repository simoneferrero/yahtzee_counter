var React = require('react');
var Jumbotron = require('./display/Jumbotron');
var TempName = require('./display/tempName');
var FirstPart = require('./display/FirstPart');

var App = React.createClass({
  getInitialState: function() {
    return {
      playerId: 1,
      players: [
      //  {
      //     key: 0,
      //     name: 'testPlayer',
      //     ones: '',
      //     twos: '',
      //     threes: '',
      //     fours: '',
      //     fives: '',
      //     sixes: '',
      //     firstPartSum: 0
      //   }
      ],
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
    var pointsArray = [player.ones, player.twos, player.threes, player.fours, player.fives, player.sixes];
    var pointsSum = 0;

    pointsArray.forEach(function(item, index) {
      if (item >= 0) {
        pointsSum += item
      }
    });

    console.log(pointsArray);
    console.log(pointsSum);

    return pointsSum;
  },

  addNewPlayer: function(event) {
    event.preventDefault();
    var playerName = $("#newPlayer").val();
    var player = {
      key: this.state.playerId,
      name: playerName,
      ones: -1,
      twos: -1,
      threes: -1,
      fours: -1,
      fives: -1,
      sixes: -1,
      firstPartSum: 0
    };
    this.setState({
      players: this.state.players.concat(player),
      playerId: this.state.playerId + 1
    });
    $("#newPlayer").val('').focus();
    player.firstPartSum = this.sumFirstPartPoints(player);
    //all this code will not work, it's just to understand
    //the event is not this, it is when user updates points
  },

  changePoints: function(e) {
    var playerKey = e.target.key;
    var number = e.target.className;
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
      <Jumbotron onClick={this.addNewPlayer} />,
      // <TempName tempName={this.state.players} />,
      <FirstPart chosenColumnSize={this.state.chosenColumnSize} players={this.state.players} />
    ])}</div>
  }
});

module.exports = App;
