var React = require('react');

var AddPlayer = React.createClass({
  render: function() {
    var addPlayer = (
      <form>
        <div className="text-right col-xs-12 formWrapper">
          <input id="newPlayerText" type="text" name="newPlayer" placeholder="Player Name"
            className="text-center" />
        </div>
        <div className="text-right col-xs-5 formWrapper">
          <button id="newPlayerButton" onClick={this.props.onClick}
             className="btn btn-primary">Add<br />Player</button>
        </div>
      </form>
    );

    return addPlayer;
  }
});

module.exports = AddPlayer;
