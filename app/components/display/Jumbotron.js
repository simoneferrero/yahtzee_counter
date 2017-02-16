var React     = require('react');
var AddPlayer = require('./AddPlayer');
var NewMatch  = require('./NewMatch');

var Jumbotron = React.createClass({
  render: function() {
    var winner      = this.props.winner;
    var grandWinner = this.props.grandWinner;
    var onClick     = this.props.onClick;
    var newMatch    = this.props.newMatch;

    var jumbotron   = (
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-xs-8">
              <span className="h1">Yahtzee Count Sheet<br />
                <small>The easy way to count Yahtzee points</small>
              </span>
            </div>
            <div className="col-xs-4">
              <AddPlayer onClick={onClick} />
              <div className="row">
                <div className="col-xs-12 text-center">
                  {winner}
                </div>
              </div>
              <NewMatch onClick={newMatch} />
              <div className="row">
                <div className="col-xs-12 text-center">
                  {grandWinner}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    return jumbotron;
  }
});

module.exports = Jumbotron;
