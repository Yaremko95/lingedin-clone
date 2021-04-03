import React, { useState } from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import Collapse from "@material-ui/core/Collapse";
import Emoji from "emoji-mart/dist-modern/components/emoji/emoji";
const em = (emoji) => {
  return (
    <span
      contentEditable={false}
      dangerouslySetInnerHTML={{
        __html: Emoji({
          html: true,
          set: "apple",
          emoji: emoji,
          size: 24,
        }),
      }}
    ></span>
  );
};
function Message(props) {
  const classes = useStyles();
  const { msg } = props;
  const removeEmojis = (string) => {
    const regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
    // const str = string.replace(
    //   regex,
    //   em().props.dangerouslySetInnerHTML.__html
    // );
    // console.log(em().props.dangerouslySetInnerHTML);
    const match = regex.exec(string);
    let str = "";
    if (match) {
      str = em(match[0]).props.dangerouslySetInnerHTML.__html;
    }
    // console.log("match", match);
    return str;
  };

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
            <div
              contentEditable={true}
              dangerouslySetInnerHTML={{ __html: msg.text }}
            ></div>
            {/*<Typography className={classes.msg}>{msg.text}</Typography>*/}
          </div>
        }
      />
    </ListItem>
  );
}

export default Message;
