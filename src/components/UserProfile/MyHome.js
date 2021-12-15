import React, { useState, useEffect } from 'react';
import { Container, Typography, Grow, Grid } from '@material-ui/core';
import MyPetition from '../Petitions/Petition/MyPetition';
import ResponsiveAppBar from '../NavigationBar/ResponsiveAppBar';
import './MyHome.css';
const Home = () => {
  const userid = localStorage.getItem("userid");
  const [petitionsCreated, setCreated] = useState([]);
  const [petitionsVoted, setVoted] = useState([]);
  const [userName, setUserName] = useState("");

  async function getUserName() {
    try {
      const res = await fetch("https://petition-rate.herokuapp.com/isUserAuth", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      const data = await res.json();
      setUserName(data.username);
    } catch (err) {
      console.log("Error in verifying user");
    }
  }


  useEffect(() => {
    // console.log("http://localhost:5000/users/"+userid+"/votedPetitions");
    fetch(
      "https://petition-rate.herokuapp.com/users/" + userid + "/votedPetitions"
    )
      .then((res) => res.json())
      .then((data) => {
        setVoted(data);
      })
      .catch((err) => console.log(err));
      getUserName();

  }, [])

  return (
    <Container maxWidth="lg">
      <ResponsiveAppBar />
      <Grow in>
        <Container style={{ "margin-top": "150px" }}>
        <Typography
                variant="h3"
                component="div"
                gutterBottom
                style={{ color: "purple", fontWeight: "Bold"}}
              >
              Hi, {userName}
      </Typography>
          <div className="two_cols">
            <div className="col2">

              <Typography
                variant="h3"
                component="div"
                gutterBottom
                style={{ color: "purple" }}
              >
                My Petition
              </Typography>

              {petitionsCreated.map((petition) => (
                <div className='Petition'>
                  <MyPetition
                  petition={petition}
                    />
                </div>
              ))}

            </div>
            <div className="col2">
              <Typography
                variant="h3"
                component="div"
                gutterBottom
                style={{ color: "purple" }}
              >
                My Vote
              </Typography>
              {petitionsVoted.map((petition) => (
                  <div className='Petition'>
                    <MyPetition
                      petition={petition}
                    />
                  </div>
              ))}
              </div>
            </div>
        </Container>
      </Grow>
    </Container>
  );
};

export default Home;
