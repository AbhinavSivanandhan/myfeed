import FlatList from "flatlist-react";
import Message from "./Message";
import InputBox from "./InputBox";

import "../styles/ChatArea.css";

import { useEffect, useState } from "react";

import { getChatRoom, textsByChatroomID } from "../graphql/queries";
import { onCreateText, onUpdateChatRoom } from "../graphql/subscriptions";

export function ChatArea(props) {
  const [reciever, setReciever] = useState({
    name: "Fetching Name",
    id: "Fetching Id",
  });
  const [texts, setTexts] = useState([]);
  const [files, setFiles] = useState(null);
  const [imgJsx, setImgJsx] = useState(null);
  console.log("props.selectedChat", props.selectedChat.chatRoomId);

  useEffect(() => {
    // console.log("ChatArea rendered");

    if (
      props.selectedChat === null ||
      props.selectedChat.chatRoomId === undefined ||
      props.selectedChat.chatRoomId === null ||
      props.selectedChat === undefined
    ) {
      return;
    }

    const setUpChat = async () => {
      if (
        props.selectedChat === undefined ||
        reciever.id === props.selectedChat.userId
      ) {
        return;
      }

      const chatRoomDetails = await props.amplifyClient.graphql({
        query: getChatRoom,
        variables: { id: props.selectedChat.chatRoomId },
      });
      const otherUser = chatRoomDetails.data.getChatRoom.users.items.find(
        (item) => item.user.id !== props.user.userId
      ).user;
      setReciever(otherUser);

      const textData = await props.amplifyClient.graphql({
        query: textsByChatroomID,
        variables: { chatroomID: props.selectedChat.chatRoomId },
      });
      setTexts(textData.data.textsByChatroomID.items);
      // console.log(textData.data.textsByChatroomID.items);
    };
    setUpChat();

    const textSubscription = props.amplifyClient
      .graphql({
        query: onCreateText,
        filter: {
          chatroomID: {
            eq: props.selectedChat.chatRoomId,
          },
        },
      })
      .subscribe({
        next: (textData) => {
          const newMsg = textData.data.onCreateText;
          setTexts((prevTexts) => [...prevTexts, newMsg]);
        },
        error: (err) => console.error(err),
      });

    if (files != null && imgJsx === null) {
      const endPoint = files.length % 2 == 0 ? files.length : files.length - 1;
      let photoGroups = [];

      for (let i = 0; i < endPoint; i += 2) {
        photoGroups.push([
          { imgSrc: URL.createObjectURL(files[i]), key: i },
          {
            imgSrc: URL.createObjectURL(files[i + 1]),
            key: i + 1,
          },
        ]);
      }

      if (files.length % 2 != 0) {
        photoGroups.push([
          {
            imgSrc: URL.createObjectURL(files[files.length - 1]),
            key: files.length - 1,
          },
        ]);
      }

      setImgJsx(
        photoGroups.map((photoGroup, idx) => {
          return (
            <div className="pics-row" key={photoGroup[0].key}>
              <img
                className="image-preview"
                src={photoGroup[0].imgSrc}
                alt={`img ${idx}`}
              />
              {photoGroup[1] ? (
                <img
                  className="image-preview"
                  src={photoGroup[1].imgSrc}
                  alt={`img ${idx}`}
                />
              ) : null}
            </div>
          );
        })
      );
    }
    return () => {
      textSubscription.unsubscribe();
      // chatRoomSubscription.unsubscribe();

      // if (texts.length === 0) {
      // 	props.amplifyClient.graphql({
      // 		query: deleteChatRoom,
      // 		variables: { input: { id: props.selectedChat.chatRoomId }},
      // 	})
      // }
    };
  }, [props, reciever, imgJsx, files]);

  if (props.selectedChat === null) {
    return (
      <div className="empty-chat-area chat-background">No Chat Selected</div>
    );
  } else {
    const renderMessages = (message, idx) => {
      return (
        <div key={idx}>
          <Message
            message={message}
            thisUserId={props.user.userId}
            amplifyClient={props.amplifyClient}
          />
        </div>
      );
    };

    return (
      <div className="chat-area chat-background">
        <div id="chat-header">
          <div id="username">{reciever.name}</div>
        </div>

        <div id="file-preview-container">
          {files != null && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="cancel-file-send"
              viewBox="0 0 24 24"
              onClick={() => {
                setFiles(null);
                setImgJsx(null);
              }}
            >
              <path
                fill="#888888"
                d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
              />
            </svg>
          )}
          {files !== null && imgJsx}
        </div>

        {files === null && (
          <div id="msg-container">
            <FlatList
              list={texts}
              renderItem={renderMessages}
              renderWhenEmpty={() => (
                <div>
                  This is begining of your chat. Chat room will be destructed if
                  no messages are sent
                </div>
              )}
              renderOnScroll
            />
          </div>
        )}

        <div id="inputBoxDiv">
          {/* {(props.selectedChat.chatRoomId !== undefined && props.selectedChat.chatRoomId !== null) &&  props<InputBox amplifyClient={props.amplifyClient} user={props.user} chatroomId={props.selectedChat.chatRoomId} selectFile={setFiles} /> } */}
        </div>
      </div>
    );
  }
}
