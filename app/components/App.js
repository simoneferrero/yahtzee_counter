var React = require('react');
var Jumbotron = require('./display/Jumbotron');
var DiceRow = require('./display/DiceRow');
// var Die = require('./display/Die');

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
      var players = this.state.players.slice().concat({
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
        firstPartSum: 0,
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
    console.dir(e.target.className);
  },

  componentDidUpdate: function(prevProps, prevState) {
    console.log(this.state.players);
  },

  render: function() {
    var tempDiceRowsArrayFP = [];
    for (var i = 1; i <= 6; i++) {
      tempDiceRowsArrayFP.push(
        <div className="row" key={i}>
          <DiceRow onClick={this.onDieClick}
            rowValue={i} part="1" playerKey="1" />
        </div>
      );
    }

    var tempDiceRowsArraySP = [];
    for (var i = 0; i <= 6; i++) {
      tempDiceRowsArraySP.push(
        <div className="row" key={i}>
          <DiceRow onClick={this.onDieClick}
            rowValue={i} part="2" playerKey="1" />
        </div>
      );
    }

    return (
      <div>
        <Jumbotron key="jumbotron" onClick={this.addNewPlayer} />
        <div className="container firstPart">
          {tempDiceRowsArrayFP}
          {/* <div className="row">
            <DiceRow onClick={this.onDieClick} rowValue="5" part="1" playerKey="1" />
          </div> */}
        </div>
        <div className="container secondPart">
          {tempDiceRowsArraySP}
          {/* <div className="row">
            <DiceRow onClick={this.onDieClick} rowValue="5" part="1" playerKey="1" />
          </div> */}
        </div>
        {/* {tempDiceArray} */}
      </div>
    );
  }
});

module.exports = App;
