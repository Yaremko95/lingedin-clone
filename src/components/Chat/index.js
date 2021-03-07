import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../context/socket/SocketProvider";
import ChatHeader from "../ChatHeader";
import { AuthContext } from "../../context/auth/Auth";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import GifIcon from "@material-ui/icons/Gif";
import MoodIcon from "@material-ui/icons/Mood";
import VideocamIcon from "@material-ui/icons/Videocam";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  List,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Message from "../Message";

function Chat(props) {
  const { chat } = props;
  const { socket } = useContext(SocketContext);
  const { user: authorizedUser } = useContext(AuthContext);
  const [text, setText] = useState("");
  const classes = useStyles();
  useEffect(() => {
    const participants = chat.participants.map((participant) => participant.id);
    socket.emit("join", { conversationId: chat.id, participants });
  }, []);
  const participant = chat.participants.find(
    (participant) => participant.user.id !== authorizedUser.id
  );
  console.log("messages", chat.messages);
  const sendMessage = () => {
    socket.emit("sendMsg", { conversationId: chat.id, text });
    setText("");
  };
  const messagesEndRef = React.useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat.messages]);

  return (
    <>
      <div>
        <ChatHeader
          toggleModal={props.toggleModal}
          show={props.show}
          participant={participant}
        />
      </div>

      <div style={{ overflowY: "auto", height: "257px" }}>
        <List>
          {chat.messages.map((msg) => (
            <Message msg={msg} key={msg.id} />
          ))}
        </List>
        <div ref={messagesEndRef} />
      </div>
      <div style={{ position: "absolute", bottom: "0", width: "100%" }}>
        <TextField
          style={{ width: "100%" }}
          id="outlined-multiline-static"
          value={text}
          onChange={(e) => setText(e.currentTarget.value)}
          multiline
          rows={1}
          variant="outlined"
        />
        <div className={classes.footer}>
          <div className={classes.footerSectionWrapper}>
            <CropOriginalIcon className={classes.footerIcon} />
            <AttachFileIcon className={classes.footerIcon} />
            <GifIcon className={classes.footerIcon} />
            <MoodIcon className={classes.footerIcon} />
            <VideocamIcon className={classes.footerIcon} />
          </div>
          <div className={classes.footerSectionWrapper}>
            <Button variant="contained" color={"primary"} onClick={sendMessage}>
              Send
            </Button>
            <MoreHorizIcon className={classes.footerIcon} />
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(Chat);
