var React = require('react');
var DiceRow = require('./DiceRow');

var FirstPartPoints = React.createClass({
  render: function() {
    var playerData = this.props.playerData;
    var player = playerData.key;
    var onDieMouseOver = this.props.onDieMouseOver;
    var onDieMouseOut = this.props.onDieMouseOut;
    var onDieClick = this.props.onDieClick;
    var firstPartPoints = [];

    for (var i = 1; i <= 6; i++) {
      var identifier = 's' + i;

      firstPartPoints.push(
        <div className="row" key={"firstPartPoints_" + i} style={{marginBottom: 10}}>
          <DiceRow dieFace={i} player={player} key={i + '_' + player}
            onDieClick={onDieClick} onDieMouseOver={onDieMouseOver} onDieMouseOut={onDieMouseOut} />
          <div className="col-xs-3" key="result">{playerData[identifier] < 0 ? "-" : playerData[identifier]}</div>
        </div>
      );
    }

    return (
      <div className={this.props.chosenColumnSize}>
        <div className="row" key="name">{playerData.name}</div>
        {firstPartPoints}
        <div className="row" key="subTot">
          <div className="col-xs-9">Subtot:</div>
          <div className="col-xs-3">{playerData.firstPartSum}</div>
        </div>
        <div className="row" key="bonusPoints">
          <div className="col-xs-9">Bonus:</div>
          <div className="col-xs-3">{playerData.bonusPoints}</div>
        </div>
        <div className="row" key="total">
          <div className="col-xs-9"><h3>Grand total:</h3></div>
          <div className="col-xs-3"><h3>{playerData.grandTotal}</h3></div>
        </div>
      </div>
    );
  }
});

module.exports = FirstPartPoints;
