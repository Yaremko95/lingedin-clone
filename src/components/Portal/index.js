import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useStyles } from "./styles";
import ChatHistory from "../ChatHistory";
import { SocketContext } from "../../context/socket/SocketProvider";

import { useSpring, animated } from "react-spring";

import Chat from "../Chat";
import { AuthContext } from "../../context/auth/Auth";

export const Portal = (props) => {
  return ReactDOM.createPortal(props.children, document.body);
};
const AnimateHoc = (props) => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(props.isOpen);

  const [{ transform }, set, stop] = useSpring(() => ({
    transform: `translateY(352px)`,
  }));
  useEffect(() => {
    stop();
  }, []);
  useEffect(() => {
    set({ transform: `translateY(${isOpen ? 0 : 352}px)` });
    stop();
  }, [isOpen]);
  return (
    <animated.div className={classes.animatedContainer} style={{ transform }}>
      {React.cloneElement(props.children, {
        show: isOpen,
        toggleModal: setIsOpen,
      })}
    </animated.div>
  );
};
export const Animate = React.memo(AnimateHoc);
const ChatPortal = (props) => {
  const classes = useStyles();
  const { chats, openedChats } = useContext(SocketContext);
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Portal>
      {isAuthenticated && (
        <div className={classes.container}>
          <Animate isOpen>
            <ChatHistory />
          </Animate>

          {openedChats.map((chatId) => {
            return (
              <Animate isOpen key={chatId}>
                <Chat chat={chats[chatId]} key={chatId} />
              </Animate>
            );
          })}
        </div>
      )}
    </Portal>
  );
};

export default ChatPortal;
