 var React = require('react');

var NewMatchAlert = React.createClass({
  onClickCloseAlert: function(event) {
    var onClick = this.props.onClick;

    var startNewMatch = event.target.className === "newMatch";

    $("#newMatchAlert").addClass("hidden");
    if (startNewMatch) onClick();
  },

  render: function() {
    return (
      <div id="newMatchAlert" className="alert alert-danger fade in text-center hidden">
        <strong>Warning:</strong> All current points will be reset. Start new match?
        <div>
          <button className="winner btn btn-danger newMatch" onClick={this.onClickCloseAlert}>
            Yes
          </button>
          <button className="winner btn btn-primary noNewMatch" onClick={this.onClickCloseAlert}>
            No
          </button>
        </div>
      </div>
    );
  }
});

module.exports = NewMatchAlert;
