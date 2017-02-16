var React = require('react');

var AddPlayer = React.createClass({
  render: function() {
    var addPlayer = (
      <form>
        <div className="row">
          <input id="newPlayer" type="text" name="newPlayer" placeholder="Player Name"
            className="col-xs-12 text-center" />
        </div>
        <div className="row">
          <button id="addMe" onClick={this.props.onClick}
             className="btn btn-primary col-xs-12">Add Player</button>
        </div>
      </form>
    );

    return addPlayer;
  }
});

module.exports = AddPlayer;
