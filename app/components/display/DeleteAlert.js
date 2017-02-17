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
      <div className="alert alert-danger fade in text-center hidden deletePlayer"
        id={"deleteAlert_" + playerKey}>
        <strong>Warning:</strong> Do you want to delete player <strong>{playerName}</strong>?
        <div>
          <button id={"removePlayer_" + playerKey} onClick={removePlayer}
            className="winner btn btn-danger">
            Yes
          </button>
          <button onClick={this.onClickCloseAlert}
            className="winner btn btn-primary">
            No
          </button>
        </div>
      </div>
    );
  }
});

module.exports = DeleteAlert;
