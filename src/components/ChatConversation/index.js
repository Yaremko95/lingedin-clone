import React, { useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { SocketContext } from "../../context/socket/SocketProvider";
import { AuthContext } from "../../context/auth/Auth";

function ChatConversation(props) {
  const { chat } = props;
  const { setChatOpen } = useContext(SocketContext);
  const { user } = useContext(AuthContext);
  console.log({ chat });
  const lastMsg = chat.messages[chat.messages.length - 1];
  const participant = chat.participants.find((p) => p.userId !== user.id);
  const classes = useStyles();
  const unshiftUserName = () => {
    if (lastMsg) {
      return `<p> ${lastMsg.user.fullName}:</p>` + lastMsg.text;
    }
  };
  unshiftUserName();
  return (
    <ListItem
      button
      onClick={() => setChatOpen(chat.id)}
      className={classes.listItem}
    >
      <ListItemIcon>
        <Avatar className={classes.avatar} src={participant.user.imgUrl} />
      </ListItemIcon>
      <ListItemText
        className={classes.listItemText}
        primary={
          <Typography className={classes.title}>
            {participant.user.fullName}
          </Typography>
        }
        secondary={
          <div className={classes.module}>
            {" "}
            {/*<span className={classes.msg}>*/}
            {lastMsg && (
              <p
                className={classes.msgText}
                dangerouslySetInnerHTML={{
                  __html: unshiftUserName(),
                }}
              ></p>
            )}
            {/*</span>*/}
          </div>
        }
      />
      <ListItemSecondaryAction className={classes.msgIcon}>
        <IconButton size={"small"}>
          <MoreVert fontSize={"small"} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>

    // <div className={classes.container}>
    //   <div className={classes.user}>
    //     <Avatar className={classes.avatar} src={lastMsg.user.imgUrl} />
    //     <div>
    //       <Typography className={}>{lastMsg.user.fullName}</Typography>
    //     </div>
    //   </div>
    //   <div></div>
    // </div>
  );
}

export default React.memo(ChatConversation);
