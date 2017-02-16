var React = require('react');

var NewMatch = React.createClass({
  render: function() {
    var onClick   = this.props.onClick;
    var newMatch  = (
      <div className="row">
        <button id="newMatch" onClick={onClick}
           className="btn btn-primary col-xs-12">New Match</button>
      </div>
    );

    return newMatch;
  }
});

module.exports = NewMatch;
