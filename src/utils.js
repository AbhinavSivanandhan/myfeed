import { userChatRoomsByUserId } from "./graphql/queries";

import { uploadData } from "aws-amplify/storage";
import { v4 as uuidv4 } from "uuid";

export const FileTypeEnum = {
  IMAGE: "IMAGE",
  VIDEO: "VIDEO",
  AUDIO: "AUDIO",
  DOCUMENT: "DOCUMENT",
};

export async function getChatRoom(userId, friendId, amplifyClient) {
  const chatRoomData = await amplifyClient.graphql({
    query: userChatRoomsByUserId,
    variables: { userId: userId },
  });

  // console.log(chatRoomData);

  if (chatRoomData.data.userChatRoomsByUserId.items.length === 0) {
    console.log("No existing chat room found");
    return null;
  }

  const chatRooms = chatRoomData.data?.userChatRoomsByUserId?.items || [];

  // console.log(chatRooms);

  const chatRoom = chatRooms.find((chatRoom) => chatRoom.chatRoom.users.items.find((user) => {
		// console.log("here", user.user);
		return user.user.id === friendId
	}));

  console.log("chat room found:", chatRoom);

	return chatRoom.chatRoom.id;
}

async function uploadFile(file) {
  const filename = `${
    file.name.split(".")[0]
  }_${Date.now()}_${uuidv4()}.${file.type.split("/")[1]}`;

  const result = await uploadData({
    key: filename,
    data: file,
  }).result;

  return filename;
}

export async function uploadFilesToS3 (selectedFiles) {
  let uploadedFileNames = {};

  for (let file of selectedFiles) {
    try {
      const uploadedFileName = await uploadFile(file);
      uploadedFileNames[uploadedFileName] = getFileType(file);
    } catch (err) {
      console.error(err);
      uploadedFileNames[file] = null;
    }
  }

  return uploadedFileNames;
}

function getFileType(file) {
  if (file.type.includes("image")) {
    return FileTypeEnum.IMAGE;
  } else if (file.type.includes("video")) {
    return FileTypeEnum.VIDEO;
  } else if (file.type.includes("audio")) {
    return FileTypeEnum.AUDIO;
  } else {
    return FileTypeEnum.DOCUMENT;
  }

}