import React, { Component } from "react";
import { Button, Container, Header } from "semantic-ui-react";
import "./Mystyle.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="App">
        <Header as="h2" inverted textAlign="center">
          {this.state.count}
        </Header>
        <div class="ui buttons">
          <button onClick={this.increment} class="ui button">
            +
          </button>
          <div class="or"></div>
          <button onClick={this.decrement} class="ui button">
            -
          </button>
        </div>
      </div>
    );
  }
}

export default App;
