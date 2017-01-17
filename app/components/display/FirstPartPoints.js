var React = require('react');

var FirstPartPoints = React.createClass({
  render: function() {
    var playerData = this.props.player;
    var firstPartPoints = [];
    var options = [<option value="-1">--</option>];
    for (var j = 0; j <= 5; j++) {
      options.push(<option value={j}>{j}</option>);
    }

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
          <div className="col-xs-2">{i}
          </div>
          {/* <label className="col-xs-4" htmlFor={i + "s"}>{i + "s"}</label> */}
          {/* <div className="col-xs-7"> */}
            <select className={playerData.key + " " + i + "s col-xs-6"} name={i + "s"} defaultValue="-1">
              {options}
            </select>
          {/* </div> */}
          <div className="col-xs-3">{playerData[identifier]}</div>
        </div>
      );
    }
    /*each of these temp must have an onClick function set in the main app.js controller,
          it is the same principle as Jumbotron
          the challenge is to create a custom function for each of those->use parameters wisely*/

    return (
      <div className={this.props.chosenColumnSize}>
        <div className="Row">{playerData.name}</div>
        <div className="Row" key={i + "s"}>
          <div className="col-xs-6 col-xs-offset-2">Dice</div>
          <div className="col-xs-3">Points</div>
        </div>
        {firstPartPoints}
      </div>
    );
  }
});

module.exports = FirstPartPoints;
