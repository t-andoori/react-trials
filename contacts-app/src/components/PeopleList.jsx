import React from "react";

class PeopleList extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {this.props.people.map((person, index) => (
            <tr>
              <td>{person.nameInput}</td>
              <td>{person.phoneInput}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default PeopleList;
