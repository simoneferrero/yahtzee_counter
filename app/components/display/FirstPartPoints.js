var React = require('react');

var FirstPartPoints = React.createClass({
  render: function() {
    var playerData = this.props.player;
    var firstPartPoints = (
      <div className={this.props.chosenColumnSize}>
        <div className="Row">{playerdata.name}</div>
        <div className="Row">
          <div className="col-xs-8">Temp space for form</div>
          {/* each of these temp must have an onClick function set in the main app.js controller,
            it is the same principle as Jumbotron
            the challenge is to create a custom function for each of those->use parameters wisely */}
          <div className="col-xs-4">{playerdata.ones}</div>
        </div>
        <div className="Row">
          <div className="col-xs-8">Temp space for form</div>
          <div className="col-xs-4">{playerdata.twos}</div>
        </div>
        <div className="Row">
          <div className="col-xs-8">Temp space for form</div>
          <div className="col-xs-4">{playerdata.threes}</div>
        </div>
        <div className="Row">
          <div className="col-xs-8">Temp space for form</div>
          <div className="col-xs-4">{playerdata.fours}</div>
        </div>
        <div className="Row">
          <div className="col-xs-8">Temp space for form</div>
          <div className="col-xs-4">{playerdata.fives}</div>
        </div>
        <div className="Row">
          <div className="col-xs-8">Temp space for form</div>
          <div className="col-xs-4">{playerdata.sixes}</div>
        </div>
      </div>
    );

    return firstPartPoints;
  }
});

module.exports = FirstPartPoints;
