import React from "react";

function Username(props) {
  return (
    <div>
      <input
        id="username"
        name="username"
        placeholder="Enter Username"
        value={props.username}
        onChange={props.onChange}
      />
    </div>
  );
}
export default Username;
