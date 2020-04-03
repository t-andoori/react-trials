import React from "react";

function Email(props) {
  return (
    <div>
      <input
        name="email"
        placeholder="email"
        id="email"
        value={props.email}
        onChange={props.handleChange}
      />{" "}
    </div>
  );
}

export default Email;
