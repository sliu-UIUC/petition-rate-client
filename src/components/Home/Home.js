import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, MenuItem, TextField, Select } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Petitions from '../Petitions/Petitions';
import { getPetitions } from "../../actions/petitions";
import ResponsiveAppBar from '../NavigationBar/ResponsiveAppBar';

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("None");

  const dispatch = useDispatch();

  const updateQuery = (e) => {
    setQuery(e.target.value);
  };

  const updateSortBy = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    dispatch(getPetitions());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <ResponsiveAppBar />
      <TextField
        style={{
          marginTop: "150px",
          backgroundColor: "White",
          position: "relative",
          width: "50%",
          left: "25%",
        }}
        id="outlined-basic"
        label="Search for petitions!"
        variant="outlined"
        onChange={updateQuery}
      />
      <br />

      <Select
        style={{
          marginTop: "15px",
          backgroundColor: "White",
          position: "relative",
          width: "50%",
          left: "25%",
        }}
        variant="outlined"
        defaultValue="FilterBy"
        inputProps={{ "aria-label": "Without label" }}
        onChange={updateSortBy}
      >
        <MenuItem value={"FilterBy"} disabled={true}>
          <em>Filter By</em>
        </MenuItem>
        <MenuItem value={"voteCountDesc"}>Vote Count (Descending)</MenuItem>
        <MenuItem value={"voteCountAsc"}>Vote Count (Ascending)</MenuItem>

        <MenuItem value={"creationTimeDesc"}>
          Creation Time (Descending)
        </MenuItem>
        <MenuItem value={"creationTimeAsc"}>Creation Time (Ascending)</MenuItem>
      </Select>

      <Grow in>
        <Container style={{ marginTop: "20px" }}>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={2}
          >
            <Grid item xs={12} sm={12}>
              <Petitions
                setCurrentId={setCurrentId}
                query={query}
                sortBy={sortBy}
                setWidth={4}
              />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default Home;
