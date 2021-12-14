import React, { useState, useEffect } from 'react';
import { Container, Typography, Grow, Grid } from '@material-ui/core';

import MyPetition from '../Petitions/Petition/MyPetition';
import ResponsiveAppBar from '../NavigationBar/ResponsiveAppBar';
import './MyHome.css';
const Home = () => {
  const userid = localStorage.getItem("userid");
  const [petitionsCreated, setCreated] = useState([]);
  const [petitionsVoted, setVoted] = useState([]);


  useEffect(() => {
    fetch(
      "https://petition-rate.herokuapp.com/users/" +
        userid +
        "/createdPetitions"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log("Port!!!",  process.env.PORT);
        // console.log(
        //   "https://petition-rate.herokuapp.com/users/" +
        //     userid +
        //     "/createdPetitions"
        // );
        setCreated(data);
      })
      .catch((err) => console.log(err));
    // console.log("http://localhost:5000/users/"+userid+"/votedPetitions");
    fetch(
      "https://petition-rate.herokuapp.com/users/" + userid + "/votedPetitions"
    )
      .then((res) => res.json())
      .then((data) => {
        setVoted(data);
      })
      .catch((err) => console.log(err));
  }, [])

  return (
    <Container maxWidth="lg">
      <ResponsiveAppBar />
      <Grow in>
        <Container style={{ "margin-top": "150px" }}>
          <div className="two_cols">
            <div>
            
              <Typography
                variant="h3"
                component="div"
                gutterBottom
                style={{ color: "white" }}
              >
                My Petition
              </Typography>
              
              {petitionsCreated.map((petition) => (
                <MyPetition
                petition={petition}
                  />
              ))}
              
            </div>

            <div>
            <div className="col2">
              <Typography
                variant="h3"
                component="div"
                gutterBottom
                style={{ color: "white" }}
              >
                My Vote
              </Typography>
              {petitionsVoted.map((petition) => (
                  <MyPetition
                    petition={petition}
                  />    
              ))}
              </div>
            </div>
          </div>
        </Container>
      </Grow>
    </Container>
  );
};

export default Home;
