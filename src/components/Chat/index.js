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
import { List } from "@material-ui/core";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import Quill from "quill";
import { useStyles } from "./styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Message from "../Message";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.core.css";
import QuillEmoji from "quill-emoji";
import "quill-emoji/dist/quill-emoji.css";
import Grid from "@material-ui/core/Grid";
import Emoji from "emoji-mart/dist-modern/components/emoji/emoji";

Quill.register({
  "modules/emoji-toolbar": QuillEmoji.ToolbarEmoji,
  // 'modules/emoji-textarea': QuillEmoji.TextAreaEmoji,
  "modules/emoji-shortname": QuillEmoji.ShortNameEmoji,
});
const toolbarContainer = [
  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ font: [] }],
  [{ header: 1 }, { header: 2 }], // custom button values
  ["bold", "italic", "underline", "strike"], // toggled buttons
  [{ align: [] }],
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  ["blockquote", "code-block"],

  [{ list: "ordered" }, { list: "bullet" }],
  [{ color: [] }, { background: [] }],
  ["emoji", "image", "video", "link"],

  ["clean"],
];
function Chat(props) {
  const { chat } = props;
  const { socket } = useContext(SocketContext);
  const { user: authorizedUser } = useContext(AuthContext);
  const [text, setText] = useState(``);
  const [show, setShow] = useState(false);
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
  console.log("text", text);
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
        <ReactQuill
          style={{ width: "100%", border: "1px solid black", height: "50px" }}
          theme={"bubble"}
          value={text}
          onChange={(value) => setText(value)}
          modules={{
            toolbar: {
              container: toolbarContainer,
              // handlers: {
              //   image: this.imageHandler
              // }
            },
            "emoji-toolbar": true,
            "emoji-textarea": true,
            "emoji-shortname": true,
          }}
        />

        <div className={classes.footer}>
          <div className={classes.footerSectionWrapper}>
            <CropOriginalIcon className={classes.footerIcon} />
            <AttachFileIcon className={classes.footerIcon} />
            <GifIcon className={classes.footerIcon} />
            <MoodIcon
              className={classes.footerIcon}
              onClick={() => {
                const icon = document.querySelector(".textarea-emoji-control");
                icon.click();
                //setShow(!show)
              }}
            />
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
