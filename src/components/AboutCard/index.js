import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

function AboutCard(props) {
  const classes = useStyles();
  return (
    <div className={classes.headingWrapper}>
      <Typography variant={"h3"}>About</Typography>
      <EditOutlinedIcon />
    </div>
  );
}

export default AboutCard;
