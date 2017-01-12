var React = require('react');

var App = React.createClass({
  getInitialState: function() {
    return {
      numberOfHelloWorlds: ''
    };
  },

  updateOnChange: function(e) {
    if (!isNaN(e.target.value)) {
      this.setState({
        numberOfHelloWorlds: e.target.value
      });
    }
  },

  render: function() {
    var helloWorlds = [];
    var userInputHelloWorlds = $('#numberOfHelloWorlds').value;

    for (var i = 1; i <= this.state.numberOfHelloWorlds; i++) {
      helloWorlds.push(<div className="col-sm-6 col-md-4 col-lg-2" key={i}>Hello world {i}!</div>);
    }

    var testHtml = (
      <div className="container">
        <div className="Row"><input type="number" placeholder="How many Hello Worlds?"
          onChange={this.updateOnChange} value={this.state.numberOfHelloWorlds}/></div>
        <div className="Row">{helloWorlds}</div>
      </div>
    );
    return testHtml;
  }
});

module.exports = App;
