var React = require('react');

var FirstPartPoints = React.createClass({
  render: function() {
    var playerData = this.props.player;
    var onChange = this.props.onChange;
    var firstPartPoints = [];
    var options = [<option value="-1" key="-1">--</option>];
    for (var j = 0; j <= 5; j++) {
      options.push(<option value={j} key={j}>{j}</option>);
    }

    for (var i = 1; i <= 6; i++) {
      var identifier = '';
      switch (i) {
        case 1:
          identifier = "s1"
          break;
        case 2:
          identifier = "s2"
          break;
        case 3:
          identifier = "s3"
          break;
        case 4:
          identifier = "s4"
          break;
        case 5:
          identifier = "s5"
          break;
        case 6:
          identifier = "s6"
          break;
        default: identifier = "name"
      }

      firstPartPoints.push(
        <div className="Row" key={i + "s"}>
          <div className="col-xs-2" key="number">{i}</div>
            <select className={playerData.key + " " + i + " col-xs-6"} name={i + "s"} defaultValue="-1" key="select"
              onChange={onChange}>
              {options}
            </select>
          <div className="col-xs-3" key="result">{playerData[identifier] < 0 ? "--" : playerData[identifier]}</div>
        </div>
      );
    }

    return (
      <div className={this.props.chosenColumnSize}>
        <div className="Row" key="name">{playerData.name}</div>
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
