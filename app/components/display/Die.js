var React = require('react');

var Die = React.createClass({
  render: function() {
    var dieFace = parseInt(this.props.dieFace); //this is the face that the die will show (cross, 1, 2, 3, 4, 5, 6, check)
    var dieValue = parseInt(this.props.dieValue); //this is the value of the die in the row, e.g. 0 to 5 in first part, or 0 to 6 in 3 of a kind in second part
    var rowValue = parseInt(this.props.rowValue); //this is the value of the row, eg. 1 to 6 in first part, or 3 of a kind in second part
    var playerKey = parseInt(this.props.playerKey); //this is the player id (key)
    // var onMouseOver = this.props.onMouseOver;
    // var onMouseOut = this.props.onMouseOut;
    var onClick = this.props.onClick;

    var dieFaces = [
      [],
      [7],
      [3, 4],
      [3, 4, 7],
      [1, 3, 4, 6],
      [1, 3, 4, 6, 7],
      [1, 2, 3, 4, 5, 6]
    ]; //each index in the large array refers to the face, and the values inside refer to the dots that show on the face

    var dots = [];

    if (dieFace < 1) {
      dots.push(<span className="glyphicon glyphicon-remove dieNoDot" key="dieNone"></span>);
    } else if (dieFace > 6) {
      dots.push(<span className="glyphicon glyphicon-ok dieNoDot" key="dieCheck"></span>);
    } else {
      for (var i = 0; i < dieFaces[dieFace].length; i++) {
        dots.push(
          <div className={"dieDot dieDot" + dieFaces[dieFace][i]} key={"dot" + dieFaces[dieFace][i]}></div>
        );
      }
    }


    // var rowHighlighted = "";
    // for (var j = 0; j <= dieValue; j++) {
    //   rowHighlighted += "." + j + "_" + rowValue + "_" + playerKey;
    //   if (j != dieValue) {
    //     rowHighlighted += ", ";
    //   }
    // }

    var die = (<div className={"die " + dieValue + '_' + rowValue + '_' + playerKey}>
      {dots}
      <div className={"dieCover " + dieValue + '_' + rowValue + '_' + playerKey}// + " " + rowValue + '_' + playerKey}
        onClick={onClick}></div>
    </div>);

    return die;
  }
});

module.exports = Die;
