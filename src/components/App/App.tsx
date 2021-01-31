import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GeistProvider, CssBaseline } from "@geist-ui/react";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import Launch from "../Launch";
import LaunchDetails from "../LaunchDetails";
import Rockets from "../Rockets";
import Missions from "../Missions";
import MissionDetails from "../MissionDetails";

const App = () => {
  return (
    <GeistProvider theme={{ type: "dark" }}>
      <CssBaseline />
      <Router>
        {/* TODO: nav goes here */}
        <NavBar />
        <Switch>
          <Route path="/rockets">
            <Rockets />
          </Route>
          <Route path="/missions">
            <Missions />
          </Route>
          <Route path="/mission/:id">
            <MissionDetails />
          </Route>
          <Route path="/launches">
            <Launch />
          </Route>
          <Route path="/launch/:id">
            <LaunchDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </GeistProvider>
  );
};

export default App;
