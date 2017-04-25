var React     = require('react');
var RowPoints = require('./RowPoints');

var Total = React.createClass({
  render: function() {
    var section     = parseInt(this.props.section);
    var player      = this.props.player;

    var subTotal    = player['subTotal'];
    var bonusPoints = player['bonusPoints'];
    var grandTotal  = player['grandTotal'];

    var total = [];

    if (section === 1) {
      total.push(
        <div className="row text-center" key="subTotal">
          <div className="col-xs-8 col-xs-offset-2 subTotal">Sub Total</div>
          <RowPoints points={subTotal} />
        </div>,
        <div className="row text-center" key="bonusPoints">
          <div className="col-xs-8 col-xs-offset-2 bonusPoints">Bonus Points</div>
          <RowPoints points={bonusPoints} />
        </div>
      );
    } else {
      total.push(
        <div className="row text-center" key="grandTotal">
          <div className="col-xs-8 col-xs-offset-2 grandTotal">Grand Total</div>
          <RowPoints points={grandTotal} />
        </div>
      );
    }

    return (
      <div className="totalPoints">{total}</div>
    );
  }
});

module.exports = Total;
