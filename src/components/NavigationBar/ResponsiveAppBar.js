import React, { useState, useEffect } from 'react';
import {
  AppBar,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from "react-router-dom";
import "./ResponsiveAppBar.css";

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const userid = localStorage.getItem("userid");
  const [userName, setUserName] = useState("");
  async function verifyAndLoggingIn() {
    try {
      const res = await fetch("https://petition-rate.herokuapp.com/isUserAuth", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });

      const data = await res.json();
      setIsLoggedIn(data.isLoggedIn);
      setUserName(data.username);

    } catch (err) {
      console.log("Error in verifying user");
    }
  }

  const history = useHistory();
  const routeChangetoHome = () => {
    history.push("/home");
  };

  const routeChangeToCreate = () => {
    history.push("/add");
  };

  const routeChangetoMyHome = () => {
    history.push("/myhome");
  };

  const routeChangetoLogin = () => {
    history.push("/signin");
  };

  const routeChangeToAbout = () => {
    history.push("/");
  };

  const routeChangeToSignIn = () => {
    localStorage.removeItem("token");
    history.push("/signin");
  };

  const routeChangeToSignUp = () => {
    history.push("/signup");
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    verifyAndLoggingIn();
  }, []);

  return (
    <div>
      <AppBar position="fixed">
        <div className="nav_bar">
          <div className="nav_left">
            <div className="nav_title">
              <Typography variant="h5">PetitionRate</Typography>
            </div>
            <Button
              variant="contained"
              color="primary"
              className="nav_btn"
              onClick={routeChangeToAbout}
            >
              About
            </Button>
            {isLoggedIn ? (
            <Button
              variant="contained"
              color="primary"
              className="nav_btn"
              onClick={routeChangetoHome}
            >
              Home
            </Button>):null}
          </div>

          <div className="nav_profile">
            {isLoggedIn ? (
              <Tooltip title="Create Petition">
                <Button size="big" onClick={routeChangeToCreate}>
                  <Fab variant="extended" color="primary" aria-label="add" >
                    <AddIcon />
                    Create a Petition
                  </Fab>
                </Button>
              </Tooltip>
            ) : null}
            <Tooltip title="Open Profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="/broken-image.jpg" />
              </IconButton>
            </Tooltip>

            {isLoggedIn ? (
              <Typography variant="body1"
              style={{ color: "white" }}>{userName}</Typography>
            ):null}
          </div>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {isLoggedIn ? (
              <MenuItem key="My Home" onClick={routeChangetoMyHome}>
                <Typography textAlign="center">My Home</Typography>
              </MenuItem>
            ): null}
            {isLoggedIn ? null : (
              <MenuItem key="Sign In" onClick={routeChangetoLogin}>
                <Typography textAlign="center">Sign In</Typography>
              </MenuItem>
            )}
            {isLoggedIn ? (
              <MenuItem key="Sign Out" onClick={routeChangeToSignIn}>
                <Typography textAlign="center">Sign Out</Typography>
              </MenuItem>
            ) : null}
            {isLoggedIn ? null : (
              <MenuItem key="Sign Up" onClick={routeChangeToSignUp}>
                <Typography textAlign="center">Sign Up</Typography>
              </MenuItem>
            )}
          </Menu>


        </div>
      </AppBar>
    </div>
  );
};
export default ResponsiveAppBar;
