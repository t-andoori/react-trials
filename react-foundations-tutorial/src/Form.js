import React, { Component } from "react";

class Form extends Component {
  initialState = {
    name: "",
    job: "",
  };
  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
    console.log(name);
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };
  render() {
    const { name, job } = this.state;

    return (
      <form>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          id="job"
          name="job"
          value={job}
          placeholder="Job"
          onChange={this.handleChange}
        />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}
export default Form;
