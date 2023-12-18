import "../styles/ChatListItem.css";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import { onUpdateChatRoom } from "../graphql/subscriptions";
import { useEffect, useState } from "react";

function ChatListItem(props) {
  const user = props["chat"]["chatRoom"]["users"].items.find(
    (item) => item.user.id !== props.userId
  ).user;

  const [chatRoom, setChatRoom] = useState(props["chat"]["chatRoom"]);

  useEffect(() => {
    const chatRoomSubscription = props.amplifyClient
      .graphql({
        query: onUpdateChatRoom,
        filter: {
          id: {
            eq: chatRoom.id,
          },
        },
      })
      .subscribe({
        next: (chatRoomData) => {
          // console.log("Chat Room Update encountered");
          setChatRoom(chatRoomData.data.onUpdateChatRoom);
        },
        error: (err) => console.error(err),
      });

    return () => {
      chatRoomSubscription.unsubscribe();
    };
  }, [chatRoom]);

  return (
    <div
      className="ChatListItem"
      onClick={() =>
        props.selectChat({ chatRoomId: chatRoom.id, userId: user.id })
      }
    >
      <div className="ChatListItem-Topline">
        <div className="users-name" key={0}>
          {user["name"]}
        </div>
        <div className="date-time" key={1}>
          {" "}
          {dayjs(chatRoom.LastMessage?.createdAt).fromNow()}{" "}
        </div>
      </div>

      <div className="chatListItem-Bottomline">
        {chatRoom.LastMessage?.text}
      </div>
    </div>
  );
}

export default ChatListItem;
