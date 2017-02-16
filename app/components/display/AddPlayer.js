var React = require('react');

var AddPlayer = React.createClass({
  render: function() {
    var addPlayer = (
      <form>
        <div className="row">
          <input id="newPlayer" type="text" name="newPlayer" placeholder="Player Name"
            className="text-center" />
        </div>
        <div className="row">
          <button id="addMe" onClick={this.props.onClick}
             className="btn btn-primary">Add Player</button>
        </div>
      </form>
    );

    return addPlayer;
  }
});

module.exports = AddPlayer;
