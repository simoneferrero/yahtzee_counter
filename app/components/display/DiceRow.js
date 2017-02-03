var React = require('react');
var Die   = require('./Die');

var DiceRow = React.createClass({
  render: function() {
    var rowValue  = parseInt(this.props.rowValue); //this is the value of the row, eg. 1 to 6 in first part, or 3 of a kind in second part
    var part      = parseInt(this.props.part); //this is the value of which part of the game the row refers to
    var playerKey = parseInt(this.props.playerKey); //this is the player id (key)
    var onClick   = this.props.onClick;

    var diceRow   = [];
    //print the row according to the player, the part and the row value
    //print the points according to the player, the part and the row value

    if (part === 1) {
      for (var i = 0; i <= 5; i++) {
        diceRow.push(
          <Die onClick={onClick} key={i} dieFace={i === 0 ? 0 : rowValue} dieValue={i}
            rowValue={rowValue} part={part} playerKey={playerKey} />
        )
      }
    } else if (part === 2) {
      if (rowValue <= 1) {
        for (var i = 0; i <= 6; i++) {
          diceRow.push(
            <Die onClick={onClick} key={i} dieFace={i} dieValue={i}
              rowValue={rowValue} part={part} playerKey={playerKey} />
          )
        }
      } else if (rowValue >= 2 && rowValue < 6) {
        for (var i = 0; i <= 7; i += 7) {
          diceRow.push(
            <Die onClick={onClick} key={i} dieFace={i} dieValue={i}
              rowValue={rowValue} part={part} playerKey={playerKey} />
          )
        }
      } else if (rowValue === 6) {
        //one die and slider
      }

    } else {
      diceRow = 'There was an error loading information for this row';
    }

    return (
      <div className="col-xs-10 diceRow">
        {diceRow}
      </div>
    );
  }
});

module.exports = DiceRow;
