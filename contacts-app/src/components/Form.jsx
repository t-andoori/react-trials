import React from "react";
import Header from "./Header.jsx";
import AddContact from "./AddContact.jsx";
import PeopleList from "./PeopleList.jsx";

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
        <PeopleList people={this.state.people} />
      </div>
    );
  }
}
export default Form;
