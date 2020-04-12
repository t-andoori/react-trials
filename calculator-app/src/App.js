import React, { Component } from "react";
import "./App.css";
import Result from "./components/Result.jsx";
import Keypad from "./components/Keypad.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = { result: "" };
  }
  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({ result: this.state.result + button });
    }
  };

  calculate = () => {
    try {
      this.setState({ result: (eval(this.state.result) || "") + "" });
    } catch (event) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };
  backspace = () => {
    this.setState({ result: this.state.result.splice(0, -1) });
  };
  render() {
    return (
      <div className="container">
        <h1>Hello, React!</h1>
        <Result result={this.state.result} />
        <Keypad onClick={this.onClick} />
      </div>
    );
  }
}
export default App;
