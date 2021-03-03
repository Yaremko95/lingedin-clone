import React, { useState } from "react";
import { useStyles } from "./styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

function Card(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <Paper
      className={
        props.padding ? classes.container + " isPadding" : classes.container
      }
    >
      {/*{props.heading && (*/}
      {/*  <div className={classes.headingWrapper}>*/}
      {/*    <Typography variant={"h3"}>About</Typography>*/}
      {/*    {props.user.authorized && (*/}
      {/*      <EditOutlinedIcon onClick={() => setOpen(true)} />*/}
      {/*    )}*/}
      {/*  </div>*/}
      {/*)}*/}
      {props.children}
    </Paper>
  );
}

export default Card;
