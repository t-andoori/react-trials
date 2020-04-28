import React from "react";

class Clock extends React.Component {
  state = { date: new Date().toLocaleTimeString() };
  timerId = 0;
  constructor() {
    super();
  }
  updateTime = () => {
    this.setState({
      date: new Date(),
    });
  };

  componentDidMount() {
    this.timerId = setInterval(this.updateTime, 1000);
  }
  getTime = () => {
    let date = this.state.date;
    return `${date}`;
  };
  render() {
    return (
      <div>
        <div>{this.getTime()} </div>
      </div>
    );
  }
}
export default Clock;
