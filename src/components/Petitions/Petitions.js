import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Petition from "./Petition/Petition";

const Petitions = ({ setCurrentId, query, sortBy, setWidth }) => {
  const petitions = useSelector((state) => state.petitions);

  if (sortBy === "voteCountDesc") {
    petitions.sort((a, b) => (a.voteCount < b.voteCount ? 1 : -1));
  } else if (sortBy === "voteCountAsc") {
    petitions.sort((a, b) => (a.voteCount < b.voteCount ? -1 : 1));
  } else if (sortBy === "creationTimeDesc") {
    petitions.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  } else if (sortBy === "creationTimeAsc") {
    petitions.sort((a, b) => (a.createdAt < b.createdAt ? -1 : 1));
  }

  return (
    <Grid justifyContent="center" spacing={5}>
      <Grid item>
        <Grid container spacing={4}>
          {petitions.map((petition) =>
            petition.title.toLowerCase().startsWith(query.toLowerCase()) ? (
              <Grid key={petition._id} item xs={setWidth}>
                <Petition petition={petition} setCurrentId={setCurrentId} />
              </Grid>
            ) : null
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Petitions;
