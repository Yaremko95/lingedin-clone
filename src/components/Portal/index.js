import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useStyles } from "./styles";
import ChatHistory from "../ChatHistory";
import { SocketContext } from "../../context/socket/SocketProvider";
import { animated, useSpring } from "react-spring";
import { AuthContext } from "../../context/auth/Auth";
import Chat from "../Chat";

export const Portal = (props) => {
  return ReactDOM.createPortal(props.children, document.body);
};
const AnimateHoc = (props) => {
  const classes = useStyles();

  const [isHistoryOpen, setIsHistoryOpen] = useState(true);
  //const { isHistoryOpen, setIsHistoryOpen } = useContext(SocketContext);
  const [{ transform }, set, stop] = useSpring(() => ({
    transform: `translateY(352px)`,
  }));
  useEffect(() => {
    stop();
  }, []);
  useEffect(() => {
    set({ transform: `translateY(${isHistoryOpen ? 0 : 352}px)` });
    stop();
    //setIsHistoryOpen(true);
  }, [isHistoryOpen]);
  return (
    <animated.div className={classes.animatedContainer} style={{ transform }}>
      {React.cloneElement(props.children, {
        show: isHistoryOpen,
        toggleModal: setIsHistoryOpen,
      })}
      {/*<Component*/}
      {/*  show={isHistoryOpen}*/}
      {/*  toggleModal={setIsHistoryOpen}*/}
      {/*  {...props}*/}
      {/*/>*/}
    </animated.div>
  );
};
export const Animate = React.memo(AnimateHoc);
const ChatPortal = (props) => {
  const classes = useStyles();
  //const ChatHistoryWindow = animate(ChatHistory);
  const { chats } = useContext(SocketContext);
  return (
    <Portal>
      <div className={classes.container}>
        <Animate>
          <ChatHistory />
        </Animate>
        {Object.keys(chats)
          .filter((chatId) => chats[chatId].isOpen)
          .map((chatId) => {
            return (
              <Animate>
                <Chat chat={chats[chatId]} key={chatId} />
              </Animate>
            );
          })}
      </div>
    </Portal>
  );
};

export default ChatPortal;
