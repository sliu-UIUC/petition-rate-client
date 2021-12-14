import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import useStyles from "./styles";
import { useHistory } from "react-router-dom";

import { createPetition, updatePetition } from "../../actions/petitions";

const Form = ({ currentId, setCurrentId }) => {
  const history = useHistory();

  const [petitionData, setPetitionData] = useState({
    creator: "",
    title: "",
    description: "",
    selectedFile: "",
  });
  const petition = useSelector((state) =>
    currentId
      ? state.petitions.find((message) => message._id === currentId)
      : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  async function verifyAndSetUser() {
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
      setPetitionData({ ...petitionData, creator: data.username });
    } catch (err) {
      console.log("Error in verifying user");
    }
  }

  useEffect(() => {
    if (petition) setPetitionData(petition);
    verifyAndSetUser();
  }, [petition]);

  const clear = () => {
    setCurrentId(0);
    setPetitionData({
      creator: "",
      title: "",
      description: "",
      selectedFile: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPetition(petitionData));
      clear();
    } else {
      dispatch(updatePetition(currentId, petitionData));
      clear();
    }
    // history.push("/");
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing "${petition.title}"` : "Create a Petition"}
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title (Required)"
          fullWidth
          value={petitionData.title}
          required={true}
          onChange={(e) =>
            setPetitionData({ ...petitionData, title: e.target.value })
          }
        />
        <TextField
          name="message"
          variant="outlined"
          label="Description"
          fullWidth
          multiline
          rows={4}
          value={petitionData.description}
          onChange={(e) =>
            setPetitionData({ ...petitionData, description: e.target.value })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPetitionData({ ...petitionData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit!
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
