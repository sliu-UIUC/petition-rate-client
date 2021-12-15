import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Grow } from "@material-ui/core";

import Introduction from "./Introduction";
import ResponsiveAppBar from "./../NavigationBar/ResponsiveAppBar";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
    fontFamily: "Nunito",
  },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "purple",
    fontSize: "1rem",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "black",
    fontSize: "4.5rem",
  },
}));
export default function Landing() {
  const classes = useStyles();

  return (
    <div>
      <ResponsiveAppBar />
      <Grow in>
        <div>
          <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0}></AppBar>

            <div className={classes.container}>
              <h1 className={classes.title}>
                Welcome to <br />
                PetitionRate
                <span className={classes.colorText}>
                  &nbsp;&nbsp;Made by TeamToffee
                </span>
              </h1>
            </div>
          </div>
          <Introduction />
        </div>
      </Grow>
    </div>
  );
}
