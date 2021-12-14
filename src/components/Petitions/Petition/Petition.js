import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import { Link } from "react-router-dom";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { votePetition, deletePetition } from "../../../actions/petitions";
import useStyles from "./styles";

const Petition = ({ petition, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [canDelete, setCanDelete] = React.useState(false);
  const userid = localStorage.getItem('userid'); 
  
  async function allowToDelete(creator) {
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

      if (data.username === creator) {
        setCanDelete(true);
      }
    } catch (err) {
      console.log("Error in verifying user");
    }
  }

  useEffect(() => {
    allowToDelete(petition.creator)
  }, [petition]);

  const cardStyle = {
    display: "block",
    width: "100%"
  };

  return (
    <Card style={cardStyle} className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          petition.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={petition.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{petition.creator}</Typography>
        <Typography variant="body2">
          {moment(petition.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {petition.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {petition.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(votePetition(petition._id, userid))}
        >
          <ThumbUpAltIcon fontSize="small" /> Vote {petition.voteCount}{" "}
        </Button>
        
        {canDelete ? (
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deletePetition(petition._id))}
          >
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        ) : null}
        <Link
          to={`/description/${petition._id}`}
          style={{ textDecoration: "none" }}
        >
          <Button variant="outlined" color="primary">
            Show Detail
          </Button>
        </Link>
      </CardActions>
      
    </Card>
  );
};

export default Petition;
