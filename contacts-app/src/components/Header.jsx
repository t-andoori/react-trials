import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <h1>Contacts App</h1>
          <h3>2020's White Pages</h3>
        </div>

        <div className="container-fluid">
          <h5>Delivered to your doorstep even if you don't want it.</h5>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </header>
    );
  }
}

export default Header;
