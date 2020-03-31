import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import Game from "./components/Game.jsx";
import News from "./components/News.jsx";
import Records from "./components/NavBar.jsx";
import Stats from "./components/Stats.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <div>
        <Route exact path="./components/Stats.jsx" component={Stats} />
        <Route exact path="./components/Records.jsx" component={Records} />
        <Route exact path="./components/News.jsx" component={News} />
        <Route exact path="./components/Game.jsx" component={Game} />
      </div>
    </div>
  );
}

export default App;
