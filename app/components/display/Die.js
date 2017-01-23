var React = require('react');

var Die = React.createClass({
  render: function() {
    var numberOfDice = this.props.numberOfDice; //this is the number of dice between 0 and 5 within the row
    var dieFace = this.props.dieFace; //this is the face of the die between 1 and 6 for one player
    var player = this.props.player; //this is the player id (key) among all players
    var onMouseOver = this.props.onMouseOver;
    var onMouseOut = this.props.onMouseOut;
    var onClick = this.props.onClick;
    var dieFacesArray = [
      [0],//no dot-cross
      [4, 5, 6],//top-left
      [6],//top-mid
      [2, 3, 4, 5, 6],//top-right
      [2, 3, 4, 5, 6],//bottom-left
      [6],//bottom-mid
      [4, 5, 6],//bottom-right
      [1, 3, 5]//center
    ]; //each index in the large array refers to the dot, and the values inside refer to the faces in which they are shown

    var dots = [<div className={dieFacesArray[0].includes(numberOfDice) ? "dieCross" : ""} key="dieCross"></div>];

    for (var i = 1; i <= 7; i++) {
      dots.push(
        <div className={dieFacesArray[i].includes(dieFace) && numberOfDice != 0 ? "dieDot dieDot" + i : ""} key={"dot" + i}></div>
      );
    }

    var rowHighlighted = "";
    for (var j = 0; j <= numberOfDice; j++) {
      rowHighlighted += "." + j + "_" + dieFace + "_" + player;
      if (j != numberOfDice) {
        rowHighlighted += ", ";
      }
    }

    var die = (<div className={"die die" + numberOfDice + '_' + dieFace + '_' + player}>
      {dots}
      <div className={"dieCover " + numberOfDice + '_' + dieFace + '_' + player + " " + dieFace + '_' + player}
        onMouseEnter={onMouseOver} onMouseOut={onMouseOut} onClick={onClick}></div>
    </div>);

    return die;
  }
});

module.exports = Die;
