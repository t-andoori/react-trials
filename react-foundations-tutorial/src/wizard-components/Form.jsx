import React from "react";
import Email from "./Email.jsx";
import Username from "./Username.jsx";
import Password from "./Password.jsx";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentStep: 1, email: "", username: "", password: "" };
  }

  //   handleChange = event => {
  //     const name = event.target.value;
  //     this.setState({ name: "" });
  //   };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, username, password } = this.state;
    alert(
      `Your registration detail: Email: ${email} Username: ${username} Password: ${password}`
    );
  };

  render() {
    return (
      <div>
        <React.Fragment />
        <h1> Wizard Form</h1>
        <p>Step {this.state.currentStep}</p>
        <form onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default Form;
