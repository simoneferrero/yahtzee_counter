var React = require('react');
var Die   = require('./Die');

var DiceRow = React.createClass({
  render: function() {
    var rowValue  = parseInt(this.props.rowValue); //this is the value of the row, eg. 1 to 6 in first section, or 3 of a kind in second section
    var section   = parseInt(this.props.section); //this is the value of which section of the game the row refers to
    var playerKey = parseInt(this.props.playerKey); //this is the player id (key)
    var onClick   = this.props.onClick;

    var diceRow   = [];

    if (section === 1) {
      for (var i = 0; i <= 5; i++) {
        diceRow.push(
          <Die onClick={onClick} key={i} dieFace={i === 0 ? 0 : rowValue} dieValue={i}
            rowValue={rowValue} section={section} playerKey={playerKey} />
        )
      }
    } else if (section === 2) {
      if (rowValue <= 1) {
        for (var i = 0; i <= 6; i++) {
          diceRow.push(
            <Die onClick={onClick} key={i} dieFace={i} dieValue={i}
              rowValue={rowValue} section={section} playerKey={playerKey} />
          )
        }
      } else if (rowValue >= 2 && rowValue < 6) {
        for (var i = 0; i <= 7; i += 7) {
          diceRow.push(
            <Die onClick={onClick} key={i} dieFace={i} dieValue={i}
              rowValue={rowValue} section={section} playerKey={playerKey} />
          )
        }
      } else if (rowValue === 6) {
        var dieClass = 'slider_' + rowValue + '_' + section + '_' + playerKey;
        diceRow.push(
          <input type="range" defaultValue="-1" min="-1" max="36"
          onChange={onClick} key="6" className={dieClass + " slider"} id={dieClass} />
        );
      }
    } else {
      diceRow = 'There was an error loading information for this row';
    }

    return (
      <div className="col-xs-7 diceRow">
        {diceRow}
      </div>
    );
  }
});

module.exports = DiceRow;
