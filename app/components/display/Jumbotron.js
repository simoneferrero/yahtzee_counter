var React     = require('react');
var AddPlayer = require('./AddPlayer');
var NewMatch  = require('./NewMatch');

var Jumbotron = React.createClass({
  render: function() {
    var winner          = this.props.winner;
    var grandWinner     = this.props.grandWinner;
    var onClick         = this.props.onClick;
    var matchWinnerKeys = this.props.matchWinnerKeys;

    var jumbotron       = (
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-xs-8">
              <span className="h1">Yahtzee Counter<br />
                <small>{winner}</small><br />
                <small>{grandWinner}</small>
              </span>
            </div>
            <div className="col-xs-4">
              <AddPlayer onClick={onClick} />
              <NewMatch matchWinnerKeys={matchWinnerKeys} />
            </div>
          </div>
        </div>
      </div>
    );

    return jumbotron;
  }
});

module.exports = Jumbotron;
