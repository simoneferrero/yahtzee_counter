var React = require('react');
var Jumbotron = require('./display/Jumbotron');

var App = React.createClass({
  getInitialState: function() {
    return {
      playerId: 1,
      players: []//,
      // columnSizes: [
      //   "col-xs-12",
      //   "col-xs-6",
      //   "col-xs-6 col-sm-4",
      //   "col-xs-6 col-sm-3",
      //   "col-xs-6 col-sm-3 col-md-2"
      // ],
      // chosenColumnSize: ''
    };
  },

  addNewPlayer: function(event) {
    event.preventDefault();
    var playerName = $("#newPlayer").val();
    if (playerName !== "") {
      var player = {
        id: this.state.playerId,
        name: playerName,
        pointsFirstPart: new Array(7).fill({
          numberOfDice: -1,
          isLocked: false
        }),
        /*
          Each index, starting from 1, determines the value of the row.
          numberOfDice shows how many dice have been selected for said row.
          A negative value means the row is untouched.
          isLocked is used to lock the points when the mouse leaves the die.
        */
        firstPartSum: 64,
        bonusPoints: 0,
        pointsSecondPart: new Array(7).fill({
          numberOfDice: -1,
          isLocked: false
        }),
        /*
          Same as before, except now the indexes are as follow:
          0: 3 of a kind
          1: 4 of a kind
          2: full house
          3: small straight
          4: large straight
          5: yahtzee
          6: chance
        */
        grandTotal: 0
      };

      this.setState({
        players: this.state.players.concat(player),
        playerId: this.state.playerId + 1
      });
    }

    $("#newPlayer").val('').focus();
  },

  componentDidUpdate: function(prevProps, prevState) {
    console.log(this.state.players);
  },

  render: function() {
    return (
      <div>
        <Jumbotron key="jumbotron" onClick={this.addNewPlayer} />,
      </div>
    );
  }
});

module.exports = App;
