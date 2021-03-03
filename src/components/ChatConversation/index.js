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

function ChatConversation(props) {
  const { chat } = props;
  const { setChatOpen } = useContext(SocketContext);
  console.log(chat.id);
  const lastMsg = chat.messages[chat.messages.length - 1];
  const classes = useStyles();
  return (
    <ListItem button onClick={() => setChatOpen(chat.id)}>
      <div>Hello</div>
      {/*<ListItemIcon>*/}
      {/*  <Avatar className={classes.avatar} src={lastMsg.user.imgUrl} />*/}
      {/*</ListItemIcon>*/}
      {/*<ListItemText*/}
      {/*  primary={*/}
      {/*    <Typography className={classes.title}>*/}
      {/*      {lastMsg.user.fullName}*/}
      {/*    </Typography>*/}
      {/*  }*/}
      {/*  secondary={*/}
      {/*    <div className={classes.module}>*/}
      {/*      {" "}*/}
      {/*      <Typography className={classes.msg}>{lastMsg.text}</Typography>*/}
      {/*    </div>*/}
      {/*  }*/}
      {/*/>*/}
      {/*<ListItemSecondaryAction>*/}
      {/*  <IconButton size={"small"}>*/}
      {/*    <MoreVert fontSize={"small"} />*/}
      {/*  </IconButton>*/}
      {/*</ListItemSecondaryAction>*/}
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
