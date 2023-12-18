import { generateClient } from "aws-amplify/api";
import { useEffect, useState } from "react";
import { getChatRoom } from "../utils.js";

import {} from "../graphql/queries.js";
import { createChatRoom, createUserChatRoom } from "../graphql/mutations.js";

import { ChatArea } from "./ChatArea.jsx";
import { ChatPanel } from "./ChatsPanel.jsx";

export function Chat(props) {
  const client = generateClient();

  const [selectedChat, setSelectedChat] = useState({
    chatRoomId: null,
    userId: props.user.id,
    otherUserId: props.otherUser.id,
  });

  useEffect(() => {
    console.log("selectedChat", selectedChat);

    const syncChat = async () => {
      const chatRoom = await getChatRoom(
        props.user.id,
        props.otherUser.id,
        client
      );

      if (chatRoom == null) {
        console.log("No chat room found, creating new chat room");
        const newChatRoomData = await client.graphql({
          query: createChatRoom,
          variables: { input: {} },
        });

        if (!newChatRoomData.data?.createChatRoom) {
          console.error("Failed to create chat room");
        }

        const newChatRoomId = newChatRoomData.data.createChatRoom.id;

        console.log("New chat room created with ID: " + newChatRoomId);

        const currUserAdded = await client.graphql({
          query: createUserChatRoom,
          variables: {
            input: { chatRoomId: newChatRoomId, userId: props.user.id },
          },
        });

        console.log(
          `Current user was also added to the newly created chatroom`
        );

        const newUserAdded = await client.graphql({
          query: createUserChatRoom,
          variables: {
            input: { chatRoomId: newChatRoomId, userId: props.otherUser.id },
          },
        });

        console.log(`User with ID: ${props.otherUser.id} added.`);

        console.log("Chat Room creation complete");

        props.setSelectedChat({
          chatRoomId: newChatRoomId,
          userId: props.otherUser.id,
        });
      } else {
        setSelectedChat({
          chatRoomId: chatRoom,
          userId: props.user.id,
          otherUserId: props.otherUser.id,
        });
      }
    };

    if (selectedChat.chatRoomId == null) {
      syncChat();
    }
  }, [selectedChat]);

  return (
    <div id="MyChatApp">
    {/* {props.selectedChat?.chatRoomId != null && */}
      <div id="ChatPanel">
        <ChatPanel
          selectChat={props.setSelectedChat}
          signOutFunc={props.signOut}
          amplifyClient={client}
          user={props.user}
        />
      </div>
    {/* } */}

    {/* {props.selectedChat?.chatRoomId != null && */}
      <div id="ChatArea">
        <ChatArea
          selectedChat={props.selectedChat}
          amplifyClient={client}
          user={props.user}
        />
      </div>
    {/* } */}
    </div>
  );
}
