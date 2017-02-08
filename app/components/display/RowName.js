var React = require('react');

var RowName = React.createClass({
  render: function() {
    var rowValue  = parseInt(this.props.rowValue); //this is the value of the row, eg. 1 to 6 in first section, or 3 of a kind in second section
    var section   = parseInt(this.props.section); //this is the value of which section of the game the row refers to

    var rowName   = '';
    if (section === 1) {
      rowName = rowValue + 's';
    } else if (section === 2) {
      switch (rowValue) {
        case 0:
          rowName = '3 of a kind';
          break;
        case 1:
          rowName = '4 of a kind';
          break;
        case 2:
          rowName = 'Full house';
          break;
        case 3:
          rowName = 'Small straight';
          break;
        case 4:
          rowName = 'Big straight';
          break;
        case 5:
          rowName = 'Yahtzee';
          break;
        case 6:
          rowName = 'Chance';
          break;
        default:
      }
    }

    return (
      <div className="col-xs-3 rowName">
        <span>{rowName}</span>
      </div>
    );
  }
});

module.exports = RowName;
