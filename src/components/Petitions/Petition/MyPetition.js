import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt"
import moment from "moment";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom"
import useStyles from "./styles";

const MyPetition = ({ petition }) => {
  const classes = useStyles();

  const cardStyle = {
    display: "block",
    width: "100%",
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
      <div className={classes.details}>
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
          disabled
        >
          <ThumbUpAltIcon fontSize="small" /> 
          Vote {petition.voteCount}{" "}
        </Button>
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

export default MyPetition;
