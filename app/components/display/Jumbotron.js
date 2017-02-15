var React     = require('react');
var AddPlayer = require('./AddPlayer');

var Jumbotron = React.createClass({
  render: function() {
    var winner  = this.props.winner;
    var onClick = this.props.onClick;

    var jumbotron = (
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-xs-8">
              <h1>Yahtzee Count Sheet<br />
                <small>The easy way to count Yahtzee points</small>
              </h1>
            </div>
            <div className="col-xs-4">
              <AddPlayer onClick={onClick} winner={winner} />
            </div>
          </div>
        </div>
      </div>
    );

    return jumbotron;
  }
});

module.exports = Jumbotron;
