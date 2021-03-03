import React, { useContext } from "react";
import { useStyles } from "./styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import LaunchIcon from "@material-ui/icons/Launch";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Auth, { useAuth } from "../../context/auth/Auth";
function ChatHeader(props) {
  const classes = useStyles();
  const { user } = useAuth();
  return (
    <div
      className={classes.container}
      onClick={() => props.toggleModal(!props.show)}
    >
      <div className={"header"}>
        <Avatar
          className={classes.avatar}
          src={props.participant ? props.participant.user.imgUrl : user.imgUrl}
        />
        <Typography className={classes.title}>
          {props.participant ? props.participant.user.fullName : "Messenger"}
        </Typography>
      </div>
      <div className={"header"}>
        <LaunchIcon className={classes.icon} />
        <MoreHorizIcon className={classes.icon} />
        {props.show ? (
          <ExpandMoreIcon className={classes.icon} />
        ) : (
          <ExpandLessIcon className={classes.icon} />
        )}
      </div>
    </div>
  );
}

export default ChatHeader;
