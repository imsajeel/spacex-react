import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GeistProvider, CssBaseline } from "@geist-ui/react";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";

const App = () => {
  return (
    <GeistProvider theme={{ type: "dark" }}>
      <CssBaseline />
      <Router>
        {/* TODO: nav goes here */}
        <NavBar />
        <Switch>
          <Route path="/rockets">
            <div>rockets</div>
          </Route>
          <Route path="/ships">
            <div>ships</div>
          </Route>
          <Route path="/missions">
            <div>missions</div>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </GeistProvider>
  );
};

export default App;
