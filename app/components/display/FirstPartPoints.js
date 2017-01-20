var React = require('react');
var Die = require('./Die');

var FirstPartPoints = React.createClass({
  render: function() {
    var playerData = this.props.player;
    var onChange = this.props.onChange;
    var firstPartPoints = [];
    // var options = [<option value="-1" key="-1">--</option>];
    // for (var j = 0; j <= 5; j++) {
    //   options.push(<option value={j} key={j}>{j}</option>);
    // }

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
      var dice = [];
      for (var j = 0; j < 5; j++) {
        dice.push(<div className="col-xs-2"><Die  dieFace={i}/></div>);
      }

      firstPartPoints.push(
        <div className="row" key={i + "s"} style={{marginBottom: 10}}>
          {/* <div className="col-xs-2" key="number">{i}</div> */}
            {/* <select className={playerData.key + " " + i + " col-xs-6"} name={i + "s"} defaultValue="-1" key="select"
              onChange={onChange}>
              {options}
            </select> */}
            <div className="col-xs-9 row" key="dice">
              <div className="col-xs-2"><Die  dieFace="0"/></div>
              {dice}
            </div>
          <div className="col-xs-3" key="result">{playerData[identifier] < 0 ? "-" : playerData[identifier]}</div>
        </div>
      );
    }

    return (
      <div className={this.props.chosenColumnSize}>
        <div className="row" key="name">{playerData.name}</div>
        {firstPartPoints}
        <div className="row" key="firstPartPoints">
          <div className="col-xs-6 col-xs-offset-2">Subtot:</div>
          <div className="col-xs-3">{playerData.firstPartSum}</div>
        </div>
      </div>
    );
  }
});

module.exports = FirstPartPoints;
