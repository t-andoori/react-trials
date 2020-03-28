import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Contacts App</h1>
        <h3>2020's White Pages</h3>

        <h3>Delivered to your doorstep even if you don't want it.</h3>
        <button className="learnMore">Learn More</button>
      </header>
    );
  }
}

export default Header;
