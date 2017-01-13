var React = require('react');

var TempName = React.createClass({
  render: function() {
    var playersArray = this.props.tempName;
    var htmlToShow = 'Hello World';
    return <div className="jumbotron">{playersArray.length > 0 ? playersArray.map(function(player) {return player.firstPartSum;}) : htmlToShow}</div>;
  }
});

module.exports = TempName;
