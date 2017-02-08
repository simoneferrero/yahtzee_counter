var React     = require('react');
var Jumbotron = require('./display/Jumbotron');
var RowName   = require('./display/RowName');
var DiceRow   = require('./display/DiceRow');
var RowPoints = require('./display/RowPoints');

var App = React.createClass({
  getInitialState: function() {
    return {
      playerId: 1,
      players: [
        {
          key: 0,
          name: 'Test player',
          pointsFirstSection: new Array(7).fill({
            numberOfDice: -1,
            points: 0,
            isLocked: false
          }),
          firstsectionSum: 0,
          bonusPoints: 0,
          pointsSecondSection: new Array(7).fill({
            numberOfDice: -1,
            points: 0,
            isLocked: false
          }),
          grandTotal: 0
        }
      ]//,
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

  countPoints: function(value, dice) {
    return value * dice;
  },

  addNewPlayer: function(event) {
    event.preventDefault();
    var playerName = $("#newPlayer").val();
    if (playerName !== "") {
      var players = this.state.players.slice().concat({
        key: this.state.playerId,
        name: playerName,
        pointsFirstSection: new Array(7).fill({
          numberOfDice: -1,
          points: 0,
          isLocked: false
        }),
        /*
          Each index, starting from 1, determines the value of the row.
          numberOfDice shows how many dice have been selected for said row.
          A negative value means the row is untouched.
          isLocked is used to lock the points when the mouse leaves the die.
        */
        firstsectionSum: 0,
        bonusPoints: 0,
        pointsSecondSection: new Array(7).fill({
          numberOfDice: -1,
          points: 0,
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
    //dieValue_rowValue_section_playerKey
    var classNameValues = e.target.className.split(" ")[0].split('_')
    var dieValue        = classNameValues[0];
    var rowValue        = classNameValues[1];
    var section         = classNameValues[2];
    var playerKey       = classNameValues[3];
    var players         = this.state.players.slice();

    console.dir(e.target.className);

    //call function this.countPoints and return updated state

  },

  componentDidUpdate: function(prevProps, prevState) {
    console.log(this.state.players);
  },

  render: function() {
    //this is all temporary until a specific component is created to display players
    //before that a component shows first and second sections with points in between
    var players   = this.state.players;
    var toReturn  = [];
    var onClick   = this.onDieClick;

    players.forEach(function(player, index) {
      var tempDiceRowsArrayFP = [];
      for (var i = 1; i <= 6; i++) {
        tempDiceRowsArrayFP.push(
          <div className="row" key={i}>
            <RowName rowValue={i} section="1" />
            <DiceRow onClick={onClick}
              rowValue={i} section="1" playerKey={player.key} />
            <RowPoints rowValue={i} section="1" playerKey={player.key} players={players} />
          </div>
        );
      }

      var tempDiceRowsArraySP = [];
      for (var i = 0; i <= 6; i++) {
        tempDiceRowsArraySP.push(
          <div className="row" key={i}>
            <RowName rowValue={i} section="2" />
            <DiceRow onClick={onClick}
              rowValue={i} section="2" playerKey={player.key} />
            <RowPoints rowValue={i} section="2" playerKey={player.key} players={players} />
          </div>
        );
      }

      toReturn.push(
        <div className="col-xs-6" key={index}>
          <div className="firstSection">
            {tempDiceRowsArrayFP}
          </div>
          <div className="secondSection">
            {tempDiceRowsArraySP}
          </div>
        </div>
      )
    });

    return (
      <div>
        <Jumbotron key="jumbotron" onClick={this.addNewPlayer} />
        <div className="container"><div className="row">{toReturn}</div></div>
      </div>
    );
  }
});

module.exports = App;
