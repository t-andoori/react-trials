import React, { useState } from "react";

function LoginForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword && state.password.length > 0) {
      {
        alert("Logged In");
      }
    } else {
      alert("Passwords do not match");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form>
        <div className="form-group text-left">
          <label for="inputEmail">Email</label>
          <input
            className="form-control"
            id="email"
            placeholder="Enter email"
            aria-describedby="emailHelp"
            onChange={handleChange}
            value={state.email}
          />
        </div>

        <div className="form-group text-left">
          <label for="inputPassword">Password</label>
          <input
            className="form-control"
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            value={state.password}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmitClick}
        >
          Login
        </button>
      </form>
    </div>
  );
}
export default LoginForm;
