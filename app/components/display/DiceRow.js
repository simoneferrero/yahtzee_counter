var React = require('react');
var Die   = require('./Die');

var DiceRow = React.createClass({
  render: function() {
    var numberOfDice  = parseInt(this.props.numberOfDice);
    var rowValue      = parseInt(this.props.rowValue);
    var section       = parseInt(this.props.section);
    var playerKey     = parseInt(this.props.playerKey);
    var yahtzeeBonus  = this.props.yahtzeeBonus;
    var onClick       = this.props.onClick;
    var dieClass      = rowValue + '_' + section + '_' + playerKey;

    var diceRow       = [];
    if (section === 1) {
      for (var i = 0; i <= 5; i++) {
        diceRow.push(
          <Die onClick={onClick} key={i} dieFace={i === 0 ? 0 : rowValue} dieValue={i}
            rowValue={rowValue} section={section} playerKey={playerKey} />
        )
      }
    } else if (section === 2) {
      if (rowValue >= 2 && rowValue < 6) {
        for (var i = 0; i <= 7; i += 7) {
          diceRow.push(
            <Die onClick={onClick} key={i} dieFace={i} dieValue={i}
              rowValue={rowValue} section={section} playerKey={playerKey} />
          )
        }
      } else {
        diceRow.push(
          <div className=" col-xs-10" key={rowValue} >
            <input type="range" defaultValue="-1" min="-1" max="30"
            onChange={onClick} className={dieClass + " slider"}
            id={'slider_' + dieClass} />
          </div>
        );
      }
    } else {
      diceRow = 'There was an error loading information for this row';
    }

    if (!(section === 2 && rowValue === 5)) {// && numberOfDice === -1) {
      var yahtzeeClass    = '100_' + rowValue + '_' + section + '_' + playerKey;
      var isEnabled       = yahtzeeBonus && (numberOfDice === -1 || numberOfDice >= 5);
      var yahtzeeBonusDiv = isEnabled ? [
        <input type="checkbox" defaultValue="100" onClick={onClick} key="yahtzeeBonusInput"
          id={yahtzeeClass} className={dieClass + " yahtzeeBonus dieYahtzeeBonus"} />
      ] : [
        <input type="checkbox" defaultValue="100" onClick={onClick} key="yahtzeeBonusInput"
          id={yahtzeeClass} className={dieClass + " yahtzeeBonus dieYahtzeeBonus"} disabled />
      ];

      diceRow.push(
        <div className="dieYahtzeeBonus" key="dieYahtzeeBonus">
            {yahtzeeBonusDiv}
            {/* <label>Y</label> */}
        </div>

      );
    }

    return (
      <div className="col-xs-7 diceRow">
        {diceRow}
      </div>
    );
  }
});

module.exports = DiceRow;
