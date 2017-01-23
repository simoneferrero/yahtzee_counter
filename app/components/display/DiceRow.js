var React = require('react');
var Die = require('./Die');

var DiceRow = React.createClass({
  render: function() {
    var diceRow = [];
    var dieFace = this.props.dieFace; //this is the face of the die between 1 and 6 for one player
    var player = this.props.player; //this is the player id (key) among all players
    var onDieMouseOver = this.props.onDieMouseOver;
    var onDieMouseOut = this.props.onDieMouseOut;
    var onDieClick = this.props.onDieClick;

    for (var i = 0; i < 6; i++) {
      diceRow.push(
        <div className="col-xs-2" key={'wrap_' + i + '_' + dieFace + '_' + player}>
          <Die numberOfDice={i} dieFace={dieFace} player={player} key={i + '_' + dieFace + '_' + player}
            onClick={onDieClick}  onMouseOver={onDieMouseOver} onMouseOut={onDieMouseOut}/>
        </div>
      );
    }

    return (
      <div className="col-xs-9">
        {diceRow}
      </div>
    );
  }
});

module.exports = DiceRow;
