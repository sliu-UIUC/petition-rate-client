import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import description from "./description";
const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
}));
export default function () {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<ImageCard place={description[1]} />
			<ImageCard place={description[0]} />
		</div>
	);
}
