import React, { Component } from "react";

// import PropTypes from 'prop-types';

class Keypad extends Component {
  render() {
    return (
      <div>
        <button
          name="("
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          (
        </button>
        <button
          name="CE"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          CE
        </button>
        <button
          name=")"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          )
        </button>
        <button
          name="C"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          C
        </button>
        <br />
        <button
          name="1"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          1
        </button>
        <button
          name="2"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          2
        </button>
        <button
          name="3"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          3
        </button>
        <button
          name="+"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          +
        </button>
        <br />
        <button
          name="4"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          4
        </button>
        <button
          name="5"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          5
        </button>
        <button
          name="6"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          6
        </button>
        <button
          name="-"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          -
        </button>
        <br />
        <button
          name="7"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          7
        </button>
        <button
          name="8"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          8
        </button>
        <button
          name="9"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          9
        </button>
        <button
          name="*"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          *
        </button>
        <br />
        <button
          name="."
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          .
        </button>
        <button
          name="0"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          0
        </button>
        <button
          name="="
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          =
        </button>
        <button
          name="/"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          /
        </button>
        <br />
      </div>
    );
  }
}
export default Keypad;
