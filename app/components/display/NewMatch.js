var React = require('react');

var NewMatch = React.createClass({
  onClickOpenAlert: function(event) {
    var matchWinnerKeys = this.props.matchWinnerKeys;

    matchWinnerKeys ? $("#newMatchAlert").removeClass("hidden") : null;
  },

  render: function() {
    var newMatch  = (
      <div className="text-right col-xs-5 col-xs-offset-2 formWrapper">
        <button id="newMatch" onClick={this.onClickOpenAlert}
           className="btn btn-danger">New<br />Match</button>
      </div>
    );

    return newMatch;
  }
});

module.exports = NewMatch;
