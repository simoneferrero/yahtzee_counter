var React = require('react');

var App = React.createClass({
  getInitialState: function() {
    return {
      players: [
        //  testPlayer: {
        //     name: 'testPlayer',
        //     ones: '',
        //     twos: '',
        //     threes: '',
        //     fours: '',
        //     fives: '',
        //     sixes: '',
        //     firstPartSum: 0
        //   }
        // }
      ]
    };
  },

  addNewPlayer: function(event) {
    event.preventDefault();
    var playerName = $("#newPlayer").val();
    var player = {
      name: playerName
    };
    this.setState({
      players: this.state.players.concat(player)
    });
    $("#newPlayer").val('').focus();
  },

  render: function() {
    var jumbotron = (
      <div className="jumbotron">
        <div className="container">
          <div className="Row">
            <h1 className="col-xs-12 text-center">Yahtzee!!<br /><small>The easy way to count Yahtzee points</small></h1>
          </div>
        </div>
        <form className="form-inline">
          <div className="container">
            <div className="Row">
              <label htmlFor="addNewPlayer"
                className="col-xs-2">Add new player:</label>
              <input id="newPlayer" type="text" name="newPlayer" placeholder="Player name"
                className="col-xs-5 col-xs-offset-1" />
              <button id="addMe" onClick={this.addNewPlayer}
                 className="btn btn-primary col-xs-3 col-xs-offset-1">Add me!</button>
            </div>
          </div>
        </form>
        <div>{this.state.players.map(function(player) {return player.name + ' ';})}</div>
      </div>
    );

    var firstPartPoints = (
      <div className="container">
        <div className="Row">
          {/* add column for point description (1s, 2s, etc.) with size col-xs-2
            loop over number of players and create 1 column for each
            if 1 player, col-xs-10
            if 2 players, col-xs-5
            if 3/4 players, col-xs-5 col-sm-3
            if >5 players, col-xs-5 col-sm-3 col-md-2  */}
        </div>
      </div>
    );
    return jumbotron;
  }
});

module.exports = App;
