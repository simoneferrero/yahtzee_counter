var React = require('react');

var FirstPartPoints = React.createClass({
  render: function() {
    var playerData = this.props.player;
    var firstPartPoints = [];
    for (var i = 1; i <= 6; i++) {
      var identifier = '';
      switch (i) {
        case 1:
          identifier = "ones"
          break;
        case 2:
          identifier = "twos"
          break;
        case 3:
          identifier = "threes"
          break;
        case 4:
          identifier = "fours"
          break;
        case 5:
          identifier = "fives"
          break;
        case 6:
          identifier = "sixes"
          break;
        default: identifier = "name"
      }

      firstPartPoints.push(
        <div className="Row" key={i + "s"}>
          <div className="col-xs-8">Temp space for form</div>
          <div className="col-xs-4">{playerData[identifier]}</div>
        </div>
      );
    }
      // <div className="Row">
      //   <div className="col-xs-8">Temp space for form</div>
        /* each of these temp must have an onClick function set in the main app.js controller,
          it is the same principle as Jumbotron
          the challenge is to create a custom function for each of those->use parameters wisely */
      //   <div className="col-xs-4">{playerData.ones}</div>
      // </div>
      // <div className="Row">
      //   <div className="col-xs-8">Temp space for form</div>
      //   <div className="col-xs-4">{playerData.twos}</div>
      // </div>
      // <div className="Row">
      //   <div className="col-xs-8">Temp space for form</div>
      //   <div className="col-xs-4">{playerData.threes}</div>
      // </div>
      // <div className="Row">
      //   <div className="col-xs-8">Temp space for form</div>
      //   <div className="col-xs-4">{playerData.fours}</div>
      // </div>
      // <div className="Row">
      //   <div className="col-xs-8">Temp space for form</div>
      //   <div className="col-xs-4">{playerData.fives}</div>
      // </div>
      // <div className="Row">
      //   <div className="col-xs-8">Temp space for form</div>
      //   <div className="col-xs-4">{playerData.sixes}</div>
      // </div>

    return (
      <div className={this.props.chosenColumnSize}>
        <div className="Row">{playerData.name}</div>
        {firstPartPoints}
      </div>
    );
  }
});

module.exports = FirstPartPoints;
