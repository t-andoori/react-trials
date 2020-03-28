import React from "react";

class AddContact extends React.Component {
  state = { nameInput: "", phoneInput: "" };

  handleChangeNameValue = event => {
    const newName = event.target.value;
    this.setState({ nameInput: newName });
  };

  handleChangePhoneValue = event => {
    const newPhone = event.target.value;
    this.setState({ phoneInput: newPhone });
  };

  handleAddContact = () => {
    const { nameInput, phoneInput } = this.state;
    const person = { nameInput, phoneInput };
    this.props.onAddPerson(person);
    this.setState({ nameInput: "", phoneInput: "" });
  };

  render() {
    const { nameInput, phoneInput } = this.state;

    return (
      <div>
        <input
          value={nameInput}
          placeholder="Name"
          className="nameInput"
          onChange={this.handleChangeNameValue}
        />

        <input
          value={phoneInput}
          placeholder="Phone"
          className="phoneInput"
          onChange={this.handleChangePhoneValue}
        />
        <button className="addButton" onClick={this.handleAddContact}>
          Save Contacts
        </button>
      </div>
    );
  }
}
export default AddContact;
