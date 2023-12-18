import "../styles/ChatsPanel.css";
import { getChatRoom } from "../utils";

import ChatListItem from "./ChatListItem";
import FlatList from "flatlist-react";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useEffect, useState } from "react";

import { userChatRoomsByUserId } from "../graphql/queries";
import { createChatRoom, createUserChatRoom } from "../graphql/mutations";

export function ChatPanel(props) {
  const renderChatListItem = (chat, idx) => {
    console.log("hmm", idx);
    return (
      <li key={idx}>
        <ChatListItem
          chat={chat}
          selectChat={props.selectChat}
          userId={props.user.userId}
          amplifyClient={props.amplifyClient}
        />
      </li>
    );
  };

  const [newUserId, setNewUserId] = useState("");

  const addNewChat = async () => {
    const existingChatRoomId = await getChatRoom(
      props.user.userId,
      newUserId,
      props.amplifyClient
    );

    if (existingChatRoomId !== null) {
      console.log("Existing chat room ID Found: " + existingChatRoomId);
      props.selectChat(existingChatRoomId);
      return;
    }

    const newChatRoomData = await props.amplifyClient.graphql({
      query: createChatRoom,
      variables: { input: {} },
    });

    if (!newChatRoomData.data?.createChatRoom) {
      console.error("Failed to create chat room");
    }

    const newChatRoomId = newChatRoomData.data.createChatRoom.id;

    console.log("New chat room created with ID: " + newChatRoomId);

    const currUserAdded = await props.amplifyClient.graphql({
      query: createUserChatRoom,
      variables: {
        input: { chatRoomId: newChatRoomId, userId: props.user.userId },
      },
    });

    console.log(`Current user was also added to the newly created chatroom`);

    const newUserAdded = await props.amplifyClient.graphql({
      query: createUserChatRoom,
      variables: { input: { chatRoomId: newChatRoomId, userId: newUserId } },
    });

    console.log(`User with ID: ${newUserId} added.`);

    console.log("Chat Room creation complete");
    setNewUserId("");
    props.selectChat({ chatRoomId: newChatRoomId, userId: newUserId });
  };

  const [chats, setChats] = useState([]);

  useEffect(() => {
    console.log(props.user);
    const fetchChatRooms = async () => {
      const chatRoomData = await props.amplifyClient.graphql({
        query: userChatRoomsByUserId,
        variables: { userId: props.user.id },
      });
      setChats(chatRoomData.data.userChatRoomsByUserId.items);
    };
    fetchChatRooms();
  }, []);

  return (
    <div>
      <div id="ChatPanel-Header">
        <h2>Chats</h2>

        <Popup
          trigger={
            <button type="button" id="AddChat-btn" name="AddChat-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="royalblue"
                  d="M11 13H6q-.425 0-.712-.288T5 12q0-.425.288-.712T6 11h5V6q0-.425.288-.712T12 5q.425 0 .713.288T13 6v5h5q.425 0 .713.288T19 12q0 .425-.288.713T18 13h-5v5q0 .425-.288.713T12 19q-.425 0-.712-.288T11 18v-5Z"
                />
              </svg>
            </button>
          }
        >
          <div id="CreateChatPopup">
            <div id="PopupHeader">Enter new User ID</div>
            <input
              type="text"
              id="newUserInput"
              placeholder="#494857"
              value={newUserId}
              onChange={(e) => setNewUserId(e.target.value)}
            />
            <button
              type="button"
              id="CreateChat-btn"
              name="CreateChat-btn"
              onClick={addNewChat}
            >
              Create Chat
            </button>
          </div>
        </Popup>

        <button
          type="reset"
          id="SignOut-btn"
          name="SignOut-btn"
          onClick={props.signOutFunc}
        >
          Sign Out
        </button>
      </div>

      <ul className="chats-list">
        <FlatList
          list={chats}
          renderItem={renderChatListItem}
          renderWhenEmpty={() => <div>Create a chat</div>}
          // sortBy={["chatRoom.LastMessage.createdAt", "chatRoom.user.name"]}
          sortDescending
          renderOnScroll
        />
      </ul>
    </div>
  );
}
