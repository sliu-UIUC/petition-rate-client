import React, { useState, useEffect } from "react";
import ResponsiveAppBar from "../NavigationBar/ResponsiveAppBar";
import Form from "../Form/Form";
import { getPetitions } from "../../actions/petitions";
import { Container, Grow } from "@material-ui/core";
import { useDispatch } from "react-redux";

const MyHome = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPetitions());
  }, [currentId, dispatch]);

  return (
    <>
      <ResponsiveAppBar />
      <Grow in>
        <Container style={{ "margin-top": "150px" }} maxWidth="sm">
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Container>
      </Grow>
    </>
  );
};

export default MyHome;
