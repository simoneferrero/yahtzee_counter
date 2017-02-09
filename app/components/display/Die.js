var React = require('react');

var Die = React.createClass({
  render: function() {
    var dieFace       = parseInt(this.props.dieFace); //this is the face that the die will show (cross, 1, 2, 3, 4, 5, 6, check)
    var dieValue      = parseInt(this.props.dieValue); //this is the value of the die in the row, e.g. 0 to 5 in first section, or 0 to 6 in 3 of a kind in second section
    var rowValue      = parseInt(this.props.rowValue); //this is the value of the row, eg. 1 to 6 in first section, or 3 of a kind in second section
    var section       = parseInt(this.props.section); //this is the value of which section of the game the row refers to
    var playerKey     = parseInt(this.props.playerKey); //this is the player id (key)
    var onClick       = this.props.onClick;

    var dieFaces      = [
      [],
      ['Center'],
      ['TopRight', 'BottomLeft'],
      ['TopRight', 'BottomLeft', 'Center'],
      ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
      ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight', 'Center'],
      ['TopLeft', 'TopCenter', 'TopRight', 'BottomLeft', 'BottomCenter', 'BottomRight']
    ]; //each index in the large array refers to the face, and the values inside refer to the dots that show on the face
    var dieFaceDots   = dieFaces[dieFace];
    var dots          = [];
    var dieId         = dieValue + '_' + rowValue + '_' + section + '_' + playerKey;
                      //dieValue_rowValue_section_playerKey
    var dieClass      = rowValue + '_' + section + '_' + playerKey;
                      //rowValue_section_playerKey

    if (dieFace < 1) {
      dots.push(<span className="glyphicon glyphicon-remove dieNoDot" key="dieDotNone"></span>);
    } else if (dieFace > 6) {
      dots.push(<span className="glyphicon glyphicon-ok dieNoDot" key="dieDotCheck"></span>);
    } else {
      for (var i = 0; i < dieFaceDots.length; i++) {
        var dotName= "dieDot" + dieFaceDots[i];
        dots.push(
          <div className={dotName} key={dotName}></div>
        );
      }
    }

    var die = (
      <div className="die">
        {dots}
        <div id={dieId} className={dieClass + " dieCover"} onClick={onClick}></div>
      </div>
    );

    return die;
  }
});

module.exports = Die;
