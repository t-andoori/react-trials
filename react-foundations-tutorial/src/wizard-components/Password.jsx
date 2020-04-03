import React from "react";

function Password(props) {
  return (
    <div>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter Name"
        value={props.password}
        onChange={props.onChange}
      />
    </div>
  );
}
export default Password;
