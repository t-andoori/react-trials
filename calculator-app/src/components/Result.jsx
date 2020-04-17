import React from "react";
import { Component } from "react";

class Result extends Component {
  render() {
    let { result } = this.props;

    return (
      <div className="container">
        <p className="resultDisplay">{result}</p>
      </div>
    );
  }
}
export default Result;
