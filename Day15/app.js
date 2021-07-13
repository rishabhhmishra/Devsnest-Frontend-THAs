  
"use strict";

class  Newclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };  
  }

  render() {
    if (this.state.clicked) {
      return "Hello World!";
    }

    return React.createElement(
      "button",
      { onClick: () => this.setState({ clicked: true }) },
      "click me"
    );
  }
}

ReactDOM.render(React.createElement( Newclass), document.getElementById("root"));
