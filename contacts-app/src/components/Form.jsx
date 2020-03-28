import React from "react";
import Header from "./Header.jsx";
import AddContact from "./AddContact.jsx";
class Form extends React.Component {
  state = {
    people: []
  };
  handleAddContact = person => {
    const people = [...this.state.people];
    people.push(person);
    this.setState({ people: people });
  };

  render() {
    return (
      <div>
        <Header />
        <hr />
        <AddContact onAddPerson={this.handleAddContact} />
      </div>
    );
  }
}
export default Form;
