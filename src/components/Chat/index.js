import React, { useContext, useEffect } from "react";
import { SocketContext } from "../../context/socket/SocketProvider";
import ChatHeader from "../ChatHeader";
import { AuthContext } from "../../context/auth/Auth";

function Chat(props) {
  const { chat } = props;
  const { socket } = useContext(SocketContext);
  const { user: authorizedUser } = useContext(AuthContext);
  useEffect(() => {
    const participants = chat.participants.map((participant) => participant.id);
    socket.emit("join", { conversationId: chat.id, participants });
  }, []);
  const participant = chat.participants.find(
    (participant) => participant.user.id !== authorizedUser.id
  );
  console.log("participant", chat);
  return (
    <div>
      <ChatHeader
        toggleModal={props.toggleModal}
        show={props.show}
        participant={participant}
      />
    </div>
  );
}

export default React.memo(Chat);
