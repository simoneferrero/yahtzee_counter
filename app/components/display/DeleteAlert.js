 var React = require('react');

var DeleteAlert = React.createClass({
  onClickCloseAlert: function() {
    var playerKey   = parseInt(this.props.playerKey);

    $("#deleteAlert_" + playerKey).addClass("hidden");
  },

  render: function() {
    var playerKey     = parseInt(this.props.playerKey);
    var playerName    = this.props.playerName;
    var removePlayer  = this.props.removePlayer;

    return (
      <div className="alert alert-danger fade in hidden" id={"deleteAlert_" + playerKey}>
        <strong>Warning:</strong> Do you want to delete player {playerName}?
        <div>
          <span id={"removePlayer_" + playerKey} onClick={removePlayer}>
            Yes
          </span> | <span onClick={this.onClickCloseAlert}>
            No
          </span>
        </div>
      </div>
    );
  }
});

module.exports = DeleteAlert;
