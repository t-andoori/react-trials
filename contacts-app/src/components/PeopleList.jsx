import React from "react";

class PeopleList extends React.Component {
  render() {
    return (
      <table className="table table-hover table-bordered table-sm">
        <thead className="">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {this.props.people.map((person, index) => (
            <tr scope="row">
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
