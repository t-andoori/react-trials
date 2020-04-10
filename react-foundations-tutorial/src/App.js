import React, { Component } from "react";
import Table from "./Table.js";
import Form from "./Form";

class App extends Component {
  state = {
    characters: [],
  };
  removeCharacter = (index) => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };
  handleSubmit = (characters) => {
    this.setState({ characters: [...this.state.characters, characters] });
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default App;

// class App extends Component {
//   state = {
//     characters: [],
//   };

//   removeCharacter = (index) => {
//     const { characters } = this.state;

//     this.setState({
//       characters: characters.filter((character, i) => {
//         return i !== index;
//       }),
//     });
//   };
//   render() {
//     const { characters } = this.state;
//     return (
//       <div className="container">
//         <Table
//           characterData={characters}
//           removeCharacter={this.removeCharacter}
//         />
//       </div>
//     );
//   }
// }
// export default App;
