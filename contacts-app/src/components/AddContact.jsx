import React from "react";

class AddContact extends React.Component {
  state = { nameInput: "", phoneInput: "" };

  isAddDisabled = () => {
    if (this.state.nameInput.length <= 0 || this.state.phoneInput.length <= 0) {
      return true;
    } else {
      return false;
    }
  };

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
      <div className="form-row" m-2>
        <div className="form-group col-md-3">
          <input
            class="form-control"
            value={nameInput}
            placeholder="Name"
            className="nameInput"
            onChange={this.handleChangeNameValue}
          />
        </div>

        <div className="form-group col-md-3">
          <input
            className="form-control"
            value={phoneInput}
            placeholder="Phone"
            className="phoneInput"
            onChange={this.handleChangePhoneValue}
          />
        </div>
        <div className="form-group col-md-2">
          <button
            className="btn btn-outline-dark
        "
            onClick={this.handleAddContact}
            disabled={this.isAddDisabled()}
          >
            Save Contact
          </button>
        </div>
      </div>
    );
  }
}
export default AddContact;
