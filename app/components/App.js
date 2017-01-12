var React = require('react');

var App = React.createClass({
  getInitialState: function() {
    // return {
    //   testPlayer: {
    //     name: 'testPlayer',
    //     ones: '',
    //     twos: '',
    //     threes: '',
    //     fours: '',
    //     fives: '',
    //     sixes: '',
    //     firstPartSum: 0
    //   }
    // };
    return {
      players: []
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
                 className="btn btn-primary col-xs-3 col-xs-offset-1" >Add me!</button>
            </div>
          </div>
        </form>
        <div>{this.state.players.map(function(player) {return player.name + ' ';})}</div>
      </div>
    );
    return jumbotron;
  }
});

module.exports = App;
