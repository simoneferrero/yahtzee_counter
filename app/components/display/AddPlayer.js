var React = require('react');

var AddPlayer = React.createClass({
  render: function() {
    var addPlayer = (
      <form>
        <div className="text-right col-xs-12 formWrapper">
          <input id="newPlayer" type="text" name="newPlayer" placeholder="Player Name"
            className="winner text-center" />
        </div>
        <div className="text-right col-xs-5 formWrapper">
          <button id="addMe" onClick={this.props.onClick}
             className="winner btn btn-primary">Add<br />Player</button>
        </div>
      </form>
    );

    return addPlayer;
  }
});

module.exports = AddPlayer;
