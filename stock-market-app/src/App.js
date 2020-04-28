import React from "react";
import Header from "./components/Header/Header";
// import LoginForm from "./components/LoginForm/LoginForm";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/Nav/NavBar";

import Nasdaq from "./components/Nasdaq";
import Dow from "./components/Dow";
import SP500 from "./components/SP500";
import Russell from "./components/Russell";
import NotFound from "./components/NotFound";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <Switch>
          <Route path="/Nasdaq" component={Nasdaq} />
          <Route path="/Dow" component={Dow} />
          <Route path="/SP500" component={SP500} />
          <Route path="/Russell" component={Russell} />
          <Route path="/NotFound" component={NotFound} />
          <Redirect to="/NotFound" />
        </Switch>
      </div>
    );
  }
}

export default App;
