var React = require('react');

var Die = React.createClass({
  render: function() {
    var dieFace       = parseInt(this.props.dieFace);
    var dieValue      = parseInt(this.props.dieValue);
    var rowValue      = parseInt(this.props.rowValue);
    var section       = parseInt(this.props.section);
    var playerKey     = parseInt(this.props.playerKey);
    var onClick       = this.props.onClick;

    var dieFaces      = [
      [],
      ['Center'],
      ['TopRight', 'BottomLeft'],
      ['TopRight', 'BottomLeft', 'Center'],
      ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
      ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight', 'Center'],
      ['TopLeft', 'TopCenter', 'TopRight', 'BottomLeft', 'BottomCenter', 'BottomRight']
    ];
    var dieFaceDots   = dieFaces[dieFace];
    var dots          = [];
    var dieId         = dieValue + '_' + rowValue + '_' + section + '_' + playerKey;
                      //dieValue_rowValue_section_playerKey
    var dieClass      = rowValue + '_' + section + '_' + playerKey;
                      //rowValue_section_playerKey

    if (dieFace < 1) {
      dots.push(<span className="glyphicon glyphicon-remove dieGlyphicon" key="dieDotNone"></span>);
    } else if (dieFace === 7) {
      dots.push(<span className="glyphicon glyphicon-ok dieGlyphicon" key="dieDotCheck"></span>);
    } else if (dieFace === 10) {
      dots.push(<div className="dieYahtzeeBonus text-center" key="dieDotCheck">Y</div>);
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
