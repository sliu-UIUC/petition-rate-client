import * as React from "react";
import { useHistory } from "react-router-dom";
import { useEffect, useState} from "react";
import "./Signup.css"
import { Avatar, Button, Grow } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ResponsiveAppBar from "./../NavigationBar/ResponsiveAppBar";

const SignUp = () => {
  const history = useHistory();
  const [register, setRegister] = useState(false);
  const [ErrMessage, setErrMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      username: data.get("email"),
      password: data.get("password"),
    };

    // console.log(user);

    fetch("https://petition-rate.herokuapp.com/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        const isSignedUp = data.isSignedUp;
        setRegister(isSignedUp);
        setErrMessage(data.message);
        if (isSignedUp) {
          history.push("/signin");
        }
      });
  };

  useEffect(() => {
    fetch("https://petition-rate.herokuapp.com/isUserAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => (data.isLoggedIn ? history.push("/home") : null))
      .catch((err) => console.log(err));
  }, []);

  return (
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
              Sign Up
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
                label="Username"
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
                Create the account
              </Button>
              {register ? (
                <p className="success_message">You Are Registered Successfully</p>
              ) : ErrMessage ? (
                <p className="err_message">Username has been taken!</p>
              ) : <p className="normal_message">Please Register</p>
            }
            </Box>
          </Box>
        </Container>
      </Grow>
    </div>
  );
};

export default SignUp;
