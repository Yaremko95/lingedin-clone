import React, { useState } from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";

function Message(props) {
  const classes = useStyles();
  const { msg } = props;
  return (
    <ListItem button>
      <ListItemIcon>
        <Avatar className={classes.avatar} src={msg.user.imgUrl} />
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography className={classes.title}>{msg.user.fullName}</Typography>
        }
        secondary={
          <div className={classes.module}>
            {" "}
            <Typography className={classes.msg}>{msg.text}</Typography>
          </div>
        }
      />
    </ListItem>
  );
}

export default Message;
