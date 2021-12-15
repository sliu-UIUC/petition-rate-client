import React, { useState, useEffect } from "react";
import ResponsiveAppBar from "./components/NavigationBar/ResponsiveAppBar";
import axios from "axios";
import "./Description.css";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Button} from "@material-ui/core/";
import { useDispatch } from "react-redux";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import { votePetition, deletePetition } from "./actions/petitions";
const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: blue,
    width: 40,
    height: 40
  },
}));

const Description = (props) => {
  const dispatch = useDispatch();
  const { id } = props.match.params;
  const [createDate, setCreateDate] = useState(null);
  const [voteCount, setVoteCount] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [userName, setUserName] = useState("");
  const [voteBy, setVoteBy] = useState("");
  const classes = useStyles();
  const [pic, setPic] = useState("");
  const userid = localStorage.getItem('userid');
  const handlevoteCount = () => {
    dispatch(votePetition(id, userid));
    if (!voteBy.includes(userid)) {
      voteBy.push(userid);
      setVoteCount(voteCount+1);
    }else{
      voteBy.splice(voteBy.indexOf(userid), 1);
      setVoteCount(voteCount-1);
    }

  };

  useEffect(() => {
    axios
      .get(`https://petition-rate.herokuapp.com/petitions/${id}`)
      .then((result) => {
        setTitle(result.data.title);
        setDescription(result.data.description);
        setUserName(result.data.creator);
        setVoteCount(result.data.voteCount);
        setPic(result.data.selectedFile);
        setVoteBy(result.data.votedBy);
        const date = new Date(result.data.createdAt);
        setCreateDate(date.toString().split(" ").slice(1, 4).join(" "));
      });
  }, []);

  return (
    <div className="petition_container">
      <ResponsiveAppBar />
      <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={pic || "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
      />
      <CardContent>
        <Typography variant="h5">
          {title}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p" style={{ wordWrap: "break-word" }}>
          {description}
        </Typography>
      </CardContent>
      <CardHeader
        avatar={
          <Avatar aria-label="profile_pic" className={classes.avatar}>
          </Avatar>
        }
        title= {"Created by: "+ userName}
        titleTypographyProps={{variant:'h6' }}
        subheader={"Date created: " + createDate}
      />
      <div className="Vote">
      <CardHeader
        title= {"Vote Count: "+ voteCount}
        titleTypographyProps={{variant:'h6' }}
      />
      <Button
          size="small"
          color="primary"
          onClick={handlevoteCount}
        >
          <ThumbUpAltIcon fontSize="large" /> Vote {voteCount}
      </Button>
      </div>
    </Card>
    </div>
  );
};

export default Description;
