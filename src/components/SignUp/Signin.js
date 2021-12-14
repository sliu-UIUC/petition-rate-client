import * as React from "react";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Signin.css"
import { Avatar, Button, Grow } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ResponsiveAppBar from "./../NavigationBar/ResponsiveAppBar";

const SignIn = () => {
  const history = useHistory();
  const [ErrMessage, SetErrMessage] = useState("")
  async function verifyAndLoggingIn() {
    try {
      const res = await fetch(
        "https://petition-rate.herokuapp.com/isUserAuth",
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        }
      );

      const data = await res.json();
      if (data.isLoggedIn) {
        localStorage.setItem("userid", data.userid);
        history.push("/");
      }else{
        
      }
    } catch (err) {
      console.log("Error in verifying user");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      username: data.get("email"),
      password: data.get("password"),
    };

    try {
      const res = await fetch("https://petition-rate.herokuapp.com/signin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      if(data.message == "Invalid username or password."){
        SetErrMessage("Invalid username or password.")
      }
      localStorage.setItem("token", data.token);

      await verifyAndLoggingIn();

      // history.push("/");

      // console.log("Get token: ", localStorage.getItem("token"));
    } catch (err) {
      console.log("Error. No such user");
    }
  }

  useEffect(() => {
    verifyAndLoggingIn();
  }, []);

  const routeChangeToSignUp = () => {
    history.push("/signup");
  };

  return (
    // <ThemeProvider theme={theme}>
    <div>
      <ResponsiveAppBar />
      <Grow in>
        <Container
          component="main"
          maxWidth="xs"
          style={{ "margin-top": "150px" }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              {ErrMessage == "" ? (
                  <p className="normal_message">Please Sign In</p>
              ) : (<p className="error_message">{ErrMessage}</p>)
              }
              <Grid container>
                <Grid item>
                  <Link href="#" variant="body2" onClick={routeChangeToSignUp}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Grow>
    </div>
  );
};

export default SignIn;
