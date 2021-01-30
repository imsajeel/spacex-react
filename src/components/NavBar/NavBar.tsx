import React, { useState } from "react";
import logo from "./spacex-logo.png";
import { Grid, Link } from "@geist-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Grid.Container
      gap={4}
      justify="center"
      alignItems="flex-end"
      style={{ marginTop: "10px" }}
    >
      <Grid xl={12}>
        <RouterLink to="/">
          <img src={logo} alt="spaceX logo" style={{ width: "250px" }} />
        </RouterLink>
      </Grid>

      <Grid xl={12}>
        <Grid.Container gap={2} justify="center">
          <Grid xs={6}>
            <NavButton to="/">Home</NavButton>
          </Grid>
          <Grid xs={6}>
            <NavButton to="/rockets">Rockets</NavButton>
          </Grid>
          <Grid xs={6}>
            <NavButton to="/missions">Missions</NavButton>
          </Grid>
          <Grid xs={6}>
            <NavButton to="/launches">Launches</NavButton>
          </Grid>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
};

const NavButton = ({ children, to }: { children: string; to: string }) => {
  const [hover, setHover] = useState(false);

  return (
    <RouterLink to={to} style={{ color: "white" }}>
      <Link
        style={{ color: hover ? "gray" : "white" }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {children.toUpperCase()}
      </Link>
    </RouterLink>
  );
};

export default NavBar;
