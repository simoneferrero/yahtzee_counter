var React = require('react');

var Die = React.createClass({
  getInitialState: function() {
    return {
      die1: [
        <div className="dieDot dieDot7" key="dot7"></div>
      ],
      die2: [
        <div className="dieDot dieDot1" key="dot1"></div>,
        <div className="dieDot dieDot6" key="dot6"></div>
      ],
      die3: [
        <div className="dieDot dieDot1" key="dot1"></div>,
        <div className="dieDot dieDot6" key="dot6"></div>,
        <div className="dieDot dieDot7" key="dot7"></div>
      ],
      die4: [
        <div className="dieDot dieDot1" key="dot1"></div>,
        <div className="dieDot dieDot3" key="dot3"></div>,
        <div className="dieDot dieDot4" key="dot4"></div>,
        <div className="dieDot dieDot6" key="dot6"></div>
      ],
      die5: [
        <div className="dieDot dieDot1" key="dot1"></div>,
        <div className="dieDot dieDot3" key="dot3"></div>,
        <div className="dieDot dieDot4" key="dot4"></div>,
        <div className="dieDot dieDot6" key="dot6"></div>,
        <div className="dieDot dieDot7" key="dot7"></div>
      ],
      die6: [
        <div className="dieDot dieDot1" key="dot1"></div>,
        <div className="dieDot dieDot2" key="dot2"></div>,
        <div className="dieDot dieDot3" key="dot3"></div>,
        <div className="dieDot dieDot4" key="dot4"></div>,
        <div className="dieDot dieDot5" key="dot5"></div>,
        <div className="dieDot dieDot6" key="dot6"></div>
      ],
      none: [
        <div className="dieCross" key="dieCross"></div>
      ]
    }
  },

  render: function() {
    var dots = [];
    switch (this.props.dieFace.toString()) {
      case "0":
        dots.push(this.state.none);
        break;
      case "1":
        dots.push(this.state.die1);
        break;
      case "2":
        dots.push(this.state.die2);
        break;
      case "3":
        dots.push(this.state.die3);
        break;
      case "4":
        dots.push(this.state.die4);
        break;
      case "5":
        dots.push(this.state.die5);
        break;
      case "6":
        dots.push(this.state.die6);
        break;
      default:
        break;
    }

    var die = (<div className="die">
      {dots}
    </div>);

    return die;
  }
});

module.exports = Die;
