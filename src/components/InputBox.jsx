import "../styles/InputBox.css";
import { uploadFilesToS3 } from "../utils";

import { useState, useRef } from "react";
import {
  createText,
  updateChatRoom,
  createAttachment,
} from "../graphql/mutations";

function InputBox(props) {
  const [inputText, setInputText] = useState("");
  const fileSelected = useRef(null);

  const onSend = async () => {

    let uploadedFiles = {};

    if (fileSelected.current != null) {
      uploadedFiles = await uploadFilesToS3(fileSelected.current);
      props.selectFile(null);
      fileSelected.current = null;
    }

    if (inputText != "" || uploadedFiles != null) {
      const msgObj = {
        text: inputText,
        userID: props.user.userId,
        chatroomID: props.chatroomId,
        hasAttachment: Object.keys(uploadedFiles).length > 0,
      };

      const newMsgData = await props.amplifyClient.graphql({
        query: createText,
        variables: { input: msgObj },
      });

      for (const [key, fileType] of Object.entries(uploadedFiles)) {
        const attachmentObj = {
          storageKey: key,
          chatroomID: props.chatroomId,
          textID: newMsgData.data.createText.id,
          type: fileType,
        };

        const newAttachmentData = await props.amplifyClient.graphql({
          query: createAttachment,
          variables: { input: attachmentObj },
        });

        console.log(
          "New attachment created with ID: " + newAttachmentData.data
        );
      }

      props.selectFile(null);
      fileSelected.current = null;

      const updatedChatRoomData = await props.amplifyClient.graphql({
        query: updateChatRoom,
        variables: {
          input: {
            id: props.chatroomId,
            chatRoomLastMessageId: newMsgData.data.createText.id,
          },
        },
      });

      console.log("Message Sent");
      setInputText("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSend();
    }
  };

  const handleFileChange = (event) => {
    console.log(event.target.files);
    
    props.selectFile(event.target.files);
    fileSelected.current = event.target.files;
  };

  return (
    <div id="input-box-container">
      <label htmlFor="file-upload">
        <svg
          id="add-attatchment-btn"
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
      </label>
      <input
        id="file-upload"
        type="file"
        onChange={handleFileChange}
        accept="image/*, video/*"
        multiple
      />

      {/* input box */}
      <label htmlFor="msgInput" />
      <input
        type="text"
        id="msg-input"
        placeholder="Type a message"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      {/* send button */}
      <svg
        id="send-btn"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        onClick={onSend}
      >
        <g fill="None">
          <path
            fill="#FFFFFF"
            d="M20.25 3.532a1 1 0 0 1 1.183 1.329l-6 15.5a1 1 0 0 1-1.624.362l-3.382-3.235l-1.203 1.202c-.636.636-1.724.186-1.724-.714v-3.288L2.309 9.723a1 1 0 0 1 .442-1.691l17.5-4.5Zm-2.114 4.305l-7.998 6.607l3.97 3.798l4.028-10.405Zm-1.578-1.29L4.991 9.52l3.692 3.53l7.875-6.505Z"
          />
        </g>
      </svg>
    </div>
  );
}

export default InputBox;
