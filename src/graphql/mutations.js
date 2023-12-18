/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAttachment = /* GraphQL */ `
  mutation CreateAttachment(
    $input: CreateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    createAttachment(input: $input, condition: $condition) {
      id
      storageKey
      duration
      type
      textID
      chatroomID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAttachment = /* GraphQL */ `
  mutation UpdateAttachment(
    $input: UpdateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    updateAttachment(input: $input, condition: $condition) {
      id
      storageKey
      duration
      type
      textID
      chatroomID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAttachment = /* GraphQL */ `
  mutation DeleteAttachment(
    $input: DeleteAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    deleteAttachment(input: $input, condition: $condition) {
      id
      storageKey
      duration
      type
      textID
      chatroomID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
      id
      name
      image
      users {
        items {
          id
          chatRoomId
          userId
          chatRoom {
            id
            name
            image
            users {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  name
                  image
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  __typename
                }
                user {
                  id
                  name
                  dob
                  email
                  isBusiness
                  follows
                  experience
                  genre
                  bio
                  profilePic
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Texts {
              items {
                id
                text
                hasAttachment
                createdAt
                userID
                Attachments {
                  nextToken
                  __typename
                }
                chatroomID
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Attachments {
              items {
                id
                storageKey
                duration
                type
                textID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            LastMessage {
              id
              text
              hasAttachment
              createdAt
              userID
              Attachments {
                items {
                  id
                  storageKey
                  duration
                  type
                  textID
                  chatroomID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              chatroomID
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          user {
            id
            name
            dob
            email
            isBusiness
            follows
            experience
            genre
            bio
            Posts {
              items {
                id
                caption
                type
                comment
                likes
                userID
                User {
                  id
                  name
                  dob
                  email
                  isBusiness
                  follows
                  experience
                  genre
                  bio
                  profilePic
                  createdAt
                  updatedAt
                  __typename
                }
                mediaSrc
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            profilePic
            ChatRooms {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  name
                  image
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  __typename
                }
                user {
                  id
                  name
                  dob
                  email
                  isBusiness
                  follows
                  experience
                  genre
                  bio
                  profilePic
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Texts {
              items {
                id
                text
                hasAttachment
                createdAt
                userID
                Attachments {
                  nextToken
                  __typename
                }
                chatroomID
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Texts {
        items {
          id
          text
          hasAttachment
          createdAt
          userID
          Attachments {
            items {
              id
              storageKey
              duration
              type
              textID
              chatroomID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          chatroomID
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Attachments {
        items {
          id
          storageKey
          duration
          type
          textID
          chatroomID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      LastMessage {
        id
        text
        hasAttachment
        createdAt
        userID
        Attachments {
          items {
            id
            storageKey
            duration
            type
            textID
            chatroomID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        chatroomID
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      __typename
    }
  }
`;
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
      id
      name
      image
      users {
        items {
          id
          chatRoomId
          userId
          chatRoom {
            id
            name
            image
            users {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  name
                  image
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  __typename
                }
                user {
                  id
                  name
                  dob
                  email
                  isBusiness
                  follows
                  experience
                  genre
                  bio
                  profilePic
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Texts {
              items {
                id
                text
                hasAttachment
                createdAt
                userID
                Attachments {
                  nextToken
                  __typename
                }
                chatroomID
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Attachments {
              items {
                id
                storageKey
                duration
                type
                textID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            LastMessage {
              id
              text
              hasAttachment
              createdAt
              userID
              Attachments {
                items {
                  id
                  storageKey
                  duration
                  type
                  textID
                  chatroomID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              chatroomID
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          user {
            id
            name
            dob
            email
            isBusiness
            follows
            experience
            genre
            bio
            Posts {
              items {
                id
                caption
                type
                comment
                likes
                userID
                User {
                  id
                  name
                  dob
                  email
                  isBusiness
                  follows
                  experience
                  genre
                  bio
                  profilePic
                  createdAt
                  updatedAt
                  __typename
                }
                mediaSrc
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            profilePic
            ChatRooms {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  name
                  image
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  __typename
                }
                user {
                  id
                  name
                  dob
                  email
                  isBusiness
                  follows
                  experience
                  genre
                  bio
                  profilePic
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Texts {
              items {
                id
                text
                hasAttachment
                createdAt
                userID
                Attachments {
                  nextToken
                  __typename
                }
                chatroomID
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Texts {
        items {
          id
          text
          hasAttachment
          createdAt
          userID
          Attachments {
            items {
              id
              storageKey
              duration
              type
              textID
              chatroomID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          chatroomID
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Attachments {
        items {
          id
          storageKey
          duration
          type
          textID
          chatroomID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      LastMessage {
        id
        text
        hasAttachment
        createdAt
        userID
        Attachments {
          items {
            id
            storageKey
            duration
            type
            textID
            chatroomID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        chatroomID
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      __typename
    }
  }
`;
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
      id
      name
      image
      users {
        items {
          id
          chatRoomId
          userId
          chatRoom {
            id
            name
            image
            users {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  name
                  image
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  __typename
                }
                user {
                  id
                  name
                  dob
                  email
                  isBusiness
                  follows
                  experience
                  genre
                  bio
                  profilePic
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Texts {
              items {
                id
                text
                hasAttachment
                createdAt
                userID
                Attachments {
                  nextToken
                  __typename
                }
                chatroomID
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Attachments {
              items {
                id
                storageKey
                duration
                type
                textID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            LastMessage {
              id
              text
              hasAttachment
              createdAt
              userID
              Attachments {
                items {
                  id
                  storageKey
                  duration
                  type
                  textID
                  chatroomID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              chatroomID
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          user {
            id
            name
            dob
            email
            isBusiness
            follows
            experience
            genre
            bio
            Posts {
              items {
                id
                caption
                type
                comment
                likes
                userID
                User {
                  id
                  name
                  dob
                  email
                  isBusiness
                  follows
                  experience
                  genre
                  bio
                  profilePic
                  createdAt
                  updatedAt
                  __typename
                }
                mediaSrc
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            profilePic
            ChatRooms {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  name
                  image
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  __typename
                }
                user {
                  id
                  name
                  dob
                  email
                  isBusiness
                  follows
                  experience
                  genre
                  bio
                  profilePic
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Texts {
              items {
                id
                text
                hasAttachment
                createdAt
                userID
                Attachments {
                  nextToken
                  __typename
                }
                chatroomID
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Texts {
        items {
          id
          text
          hasAttachment
          createdAt
          userID
          Attachments {
            items {
              id
              storageKey
              duration
              type
              textID
              chatroomID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          chatroomID
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Attachments {
        items {
          id
          storageKey
          duration
          type
          textID
          chatroomID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      LastMessage {
        id
        text
        hasAttachment
        createdAt
        userID
        Attachments {
          items {
            id
            storageKey
            duration
            type
            textID
            chatroomID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        chatroomID
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      __typename
    }
  }
`;
export const createText = /* GraphQL */ `
  mutation CreateText(
    $input: CreateTextInput!
    $condition: ModelTextConditionInput
  ) {
    createText(input: $input, condition: $condition) {
      id
      text
      hasAttachment
      createdAt
      userID
      Attachments {
        items {
          id
          storageKey
          duration
          type
          textID
          chatroomID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatroomID
      updatedAt
      __typename
    }
  }
`;
export const updateText = /* GraphQL */ `
  mutation UpdateText(
    $input: UpdateTextInput!
    $condition: ModelTextConditionInput
  ) {
    updateText(input: $input, condition: $condition) {
      id
      text
      hasAttachment
      createdAt
      userID
      Attachments {
        items {
          id
          storageKey
          duration
          type
          textID
          chatroomID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatroomID
      updatedAt
      __typename
    }
  }
`;
export const deleteText = /* GraphQL */ `
  mutation DeleteText(
    $input: DeleteTextInput!
    $condition: ModelTextConditionInput
  ) {
    deleteText(input: $input, condition: $condition) {
      id
      text
      hasAttachment
      createdAt
      userID
      Attachments {
        items {
          id
          storageKey
          duration
          type
          textID
          chatroomID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatroomID
      updatedAt
      __typename
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      caption
      type
      comment
      likes
      userID
      User {
        id
        name
        dob
        email
        isBusiness
        follows
        experience
        genre
        bio
        Posts {
          items {
            id
            caption
            type
            comment
            likes
            userID
            User {
              id
              name
              dob
              email
              isBusiness
              follows
              experience
              genre
              bio
              Posts {
                items {
                  id
                  caption
                  type
                  comment
                  likes
                  userID
                  mediaSrc
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              profilePic
              ChatRooms {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Texts {
                items {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
                  chatroomID
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            mediaSrc
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        profilePic
        ChatRooms {
          items {
            id
            chatRoomId
            userId
            chatRoom {
              id
              name
              image
              users {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Texts {
                items {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
                  chatroomID
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Attachments {
                items {
                  id
                  storageKey
                  duration
                  type
                  textID
                  chatroomID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              LastMessage {
                id
                text
                hasAttachment
                createdAt
                userID
                Attachments {
                  nextToken
                  __typename
                }
                chatroomID
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              chatRoomLastMessageId
              __typename
            }
            user {
              id
              name
              dob
              email
              isBusiness
              follows
              experience
              genre
              bio
              Posts {
                items {
                  id
                  caption
                  type
                  comment
                  likes
                  userID
                  mediaSrc
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              profilePic
              ChatRooms {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Texts {
                items {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
                  chatroomID
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Texts {
          items {
            id
            text
            hasAttachment
            createdAt
            userID
            Attachments {
              items {
                id
                storageKey
                duration
                type
                textID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            chatroomID
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      mediaSrc
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      caption
      type
      comment
      likes
      userID
      User {
        id
        name
        dob
        email
        isBusiness
        follows
        experience
        genre
        bio
        Posts {
          items {
            id
            caption
            type
            comment
            likes
            userID
            User {
              id
              name
              dob
              email
              isBusiness
              follows
              experience
              genre
              bio
              Posts {
                items {
                  id
                  caption
                  type
                  comment
                  likes
                  userID
                  mediaSrc
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              profilePic
              ChatRooms {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Texts {
                items {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
                  chatroomID
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            mediaSrc
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        profilePic
        ChatRooms {
          items {
            id
            chatRoomId
            userId
            chatRoom {
              id
              name
              image
              users {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Texts {
                items {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
                  chatroomID
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Attachments {
                items {
                  id
                  storageKey
                  duration
                  type
                  textID
                  chatroomID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              LastMessage {
                id
                text
                hasAttachment
                createdAt
                userID
                Attachments {
                  nextToken
                  __typename
                }
                chatroomID
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              chatRoomLastMessageId
              __typename
            }
            user {
              id
              name
              dob
              email
              isBusiness
              follows
              experience
              genre
              bio
              Posts {
                items {
                  id
                  caption
                  type
                  comment
                  likes
                  userID
                  mediaSrc
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              profilePic
              ChatRooms {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Texts {
                items {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
                  chatroomID
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Texts {
          items {
            id
            text
            hasAttachment
            createdAt
            userID
            Attachments {
              items {
                id
                storageKey
                duration
                type
                textID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            chatroomID
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      mediaSrc
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      caption
      type
      comment
      likes
      userID
      User {
        id
        name
        dob
        email
        isBusiness
        follows
        experience
        genre
        bio
        Posts {
          items {
            id
            caption
            type
            comment
            likes
            userID
            User {
              id
              name
              dob
              email
              isBusiness
              follows
              experience
              genre
              bio
              Posts {
                items {
                  id
                  caption
                  type
                  comment
                  likes
                  userID
                  mediaSrc
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              profilePic
              ChatRooms {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Texts {
                items {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
                  chatroomID
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            mediaSrc
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        profilePic
        ChatRooms {
          items {
            id
            chatRoomId
            userId
            chatRoom {
              id
              name
              image
              users {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Texts {
                items {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
                  chatroomID
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Attachments {
                items {
                  id
                  storageKey
                  duration
                  type
                  textID
                  chatroomID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              LastMessage {
                id
                text
                hasAttachment
                createdAt
                userID
                Attachments {
                  nextToken
                  __typename
                }
                chatroomID
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              chatRoomLastMessageId
              __typename
            }
            user {
              id
              name
              dob
              email
              isBusiness
              follows
              experience
              genre
              bio
              Posts {
                items {
                  id
                  caption
                  type
                  comment
                  likes
                  userID
                  mediaSrc
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              profilePic
              ChatRooms {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Texts {
                items {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
                  chatroomID
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Texts {
          items {
            id
            text
            hasAttachment
            createdAt
            userID
            Attachments {
              items {
                id
                storageKey
                duration
                type
                textID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            chatroomID
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      mediaSrc
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      dob
      email
      isBusiness
      follows
      experience
      genre
      bio
      Posts {
        items {
          id
          caption
          type
          comment
          likes
          userID
          User {
            id
            name
            dob
            email
            isBusiness
            follows
            experience
            genre
            bio
            Posts {
              items {
                id
                caption
                type
                comment
                likes
                userID
                User {
                  id
                  name
                  dob
                  email
                  isBusiness
                  follows
                  experience
                  genre
                  bio
                  profilePic
                  createdAt
                  updatedAt
                  __typename
                }
                mediaSrc
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            profilePic
            ChatRooms {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  name
                  image
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  __typename
                }
                user {
                  id
                  name
                  dob
                  email
                  isBusiness
                  follows
                  experience
                  genre
                  bio
                  profilePic
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Texts {
              items {
                id
                text
                hasAttachment
                createdAt
                userID
                Attachments {
                  nextToken
                  __typename
                }
                chatroomID
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          mediaSrc
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      profilePic
      ChatRooms {
        items {
          id
          chatRoomId
          userId
          chatRoom {
            id
            name
            image
            users {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  name
                  image
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  __typename
                }
                user {
                  id
                  name
                  dob
                  email
                  isBusiness
                  follows
                  experience
                  genre
                  bio
                  profilePic
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Texts {
              items {
                id
                text
                hasAttachment
                createdAt
                userID
                Attachments {
                  nextToken
                  __typename
                }
                chatroomID
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Attachments {
              items {
                id
                storageKey
                duration
                type
                textID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            LastMessage {
              id
              text
              hasAttachment
              createdAt
              userID
              Attachments {
                items {
                  id
                  storageKey
                  duration
                  type
                  textID
                  chatroomID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              chatroomID
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          user {
            id
            name
            dob
            email
            isBusiness
            follows
            experience
            genre
            bio
            Posts {
              items {
                id
                caption
                type
                comment
                likes
                userID
                User {
                  id
                  name
                  dob
                  email
                  isBusiness
                  follows
                  experience
                  genre
                  bio
                  profilePic
                  createdAt
                  updatedAt
                  __typename
                }
                mediaSrc
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            profilePic
            ChatRooms {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  name
                  image
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  __typename
                }
                user {
                  id
                  name
                  dob
                  email
                  isBusiness
                  follows
                  experience
                  genre
                  bio
                  profilePic
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Texts {
              items {
                id
                text
                hasAttachment
                createdAt
                userID
                Attachments {
                  nextToken
                  __typename
                }
                chatroomID
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Texts {
        items {
          id
          text
          hasAttachment
          createdAt
          userID
          Attachments {
            items {
              id
              storageKey
              duration
              type
              textID
              chatroomID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          chatroomID
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      dob
      email
      isBusiness
      follows
      experience
      genre
      bio
      Posts {
        items {
          id
          caption
          type
          comment
          likes
          userID
          User {
            id
            name
            dob
            email
            isBusiness
            follows
            experience
            genre
            bio
            Posts {
              items {
                id
                caption
                type
                comment
                likes
                userID
                User {
                  id
                  name
                  dob
                  email
                  isBusiness
                  follows
                  experience
                  genre
                  bio
                  profilePic
                  createdAt
                  updatedAt
                  __typename
                }
                mediaSrc
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            profilePic
            ChatRooms {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  name
                  image
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  __typename
                }
                user {
                  id
                  name
                  dob
                  email
                  isBusiness
                  follows
                  experience
                  genre
                  bio
                  profilePic
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Texts {
              items {
                id
                text
                hasAttachment
                createdAt
                userID
                Attachments {
                  nextToken
                  __typename
                }
                chatroomID
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          mediaSrc
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      profilePic
      ChatRooms {
        items {
          id
          chatRoomId
          userId
          chatRoom {
            id
            name
            image
            users {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  name
                  image
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  __typename
                }
                user {
                  id
                  name
                  dob
                  email
                  isBusiness
                  follows
                  experience
                  genre
                  bio
                  profilePic
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Texts {
              items {
                id
                text
                hasAttachment
                createdAt
                userID
                Attachments {
                  nextToken
                  __typename
                }
                chatroomID
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Attachments {
              items {
                id
                storageKey
                duration
                type
                textID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            LastMessage {
              id
              text
              hasAttachment
              createdAt
              userID
              Attachments {
                items {
                  id
                  storageKey
                  duration
                  type
                  textID
                  chatroomID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              chatroomID
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          user {
            id
            name
            dob
            email
            isBusiness
            follows
            experience
            genre
            bio
            Posts {
              items {
                id
                caption
                type
                comment
                likes
                userID
                User {
                  id
                  name
                  dob
                  email
                  isBusiness
                  follows
                  experience
                  genre
                  bio
                  profilePic
                  createdAt
                  updatedAt
                  __typename
                }
                mediaSrc
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            profilePic
            ChatRooms {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  name
                  image
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  __typename
                }
                user {
                  id
                  name
                  dob
                  email
                  isBusiness
                  follows
                  experience
                  genre
                  bio
                  profilePic
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Texts {
              items {
                id
                text
                hasAttachment
                createdAt
                userID
                Attachments {
                  nextToken
                  __typename
                }
                chatroomID
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Texts {
        items {
          id
          text
          hasAttachment
          createdAt
          userID
          Attachments {
            items {
              id
              storageKey
              duration
              type
              textID
              chatroomID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          chatroomID
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      dob
      email
      isBusiness
      follows
      experience
      genre
      bio
      Posts {
        items {
          id
          caption
          type
          comment
          likes
          userID
          User {
            id
            name
            dob
            email
            isBusiness
            follows
            experience
            genre
            bio
            Posts {
              items {
                id
                caption
                type
                comment
                likes
                userID
                User {
                  id
                  name
                  dob
                  email
                  isBusiness
                  follows
                  experience
                  genre
                  bio
                  profilePic
                  createdAt
                  updatedAt
                  __typename
                }
                mediaSrc
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            profilePic
            ChatRooms {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  name
                  image
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  __typename
                }
                user {
                  id
                  name
                  dob
                  email
                  isBusiness
                  follows
                  experience
                  genre
                  bio
                  profilePic
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Texts {
              items {
                id
                text
                hasAttachment
                createdAt
                userID
                Attachments {
                  nextToken
                  __typename
                }
                chatroomID
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          mediaSrc
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      profilePic
      ChatRooms {
        items {
          id
          chatRoomId
          userId
          chatRoom {
            id
            name
            image
            users {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  name
                  image
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  __typename
                }
                user {
                  id
                  name
                  dob
                  email
                  isBusiness
                  follows
                  experience
                  genre
                  bio
                  profilePic
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Texts {
              items {
                id
                text
                hasAttachment
                createdAt
                userID
                Attachments {
                  nextToken
                  __typename
                }
                chatroomID
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Attachments {
              items {
                id
                storageKey
                duration
                type
                textID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            LastMessage {
              id
              text
              hasAttachment
              createdAt
              userID
              Attachments {
                items {
                  id
                  storageKey
                  duration
                  type
                  textID
                  chatroomID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              chatroomID
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          user {
            id
            name
            dob
            email
            isBusiness
            follows
            experience
            genre
            bio
            Posts {
              items {
                id
                caption
                type
                comment
                likes
                userID
                User {
                  id
                  name
                  dob
                  email
                  isBusiness
                  follows
                  experience
                  genre
                  bio
                  profilePic
                  createdAt
                  updatedAt
                  __typename
                }
                mediaSrc
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            profilePic
            ChatRooms {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  name
                  image
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  __typename
                }
                user {
                  id
                  name
                  dob
                  email
                  isBusiness
                  follows
                  experience
                  genre
                  bio
                  profilePic
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Texts {
              items {
                id
                text
                hasAttachment
                createdAt
                userID
                Attachments {
                  nextToken
                  __typename
                }
                chatroomID
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Texts {
        items {
          id
          text
          hasAttachment
          createdAt
          userID
          Attachments {
            items {
              id
              storageKey
              duration
              type
              textID
              chatroomID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          chatroomID
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUserChatRoom = /* GraphQL */ `
  mutation CreateUserChatRoom(
    $input: CreateUserChatRoomInput!
    $condition: ModelUserChatRoomConditionInput
  ) {
    createUserChatRoom(input: $input, condition: $condition) {
      id
      chatRoomId
      userId
      chatRoom {
        id
        name
        image
        users {
          items {
            id
            chatRoomId
            userId
            chatRoom {
              id
              name
              image
              users {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Texts {
                items {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
                  chatroomID
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Attachments {
                items {
                  id
                  storageKey
                  duration
                  type
                  textID
                  chatroomID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              LastMessage {
                id
                text
                hasAttachment
                createdAt
                userID
                Attachments {
                  nextToken
                  __typename
                }
                chatroomID
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              chatRoomLastMessageId
              __typename
            }
            user {
              id
              name
              dob
              email
              isBusiness
              follows
              experience
              genre
              bio
              Posts {
                items {
                  id
                  caption
                  type
                  comment
                  likes
                  userID
                  mediaSrc
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              profilePic
              ChatRooms {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Texts {
                items {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
                  chatroomID
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Texts {
          items {
            id
            text
            hasAttachment
            createdAt
            userID
            Attachments {
              items {
                id
                storageKey
                duration
                type
                textID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            chatroomID
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Attachments {
          items {
            id
            storageKey
            duration
            type
            textID
            chatroomID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        LastMessage {
          id
          text
          hasAttachment
          createdAt
          userID
          Attachments {
            items {
              id
              storageKey
              duration
              type
              textID
              chatroomID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          chatroomID
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
        __typename
      }
      user {
        id
        name
        dob
        email
        isBusiness
        follows
        experience
        genre
        bio
        Posts {
          items {
            id
            caption
            type
            comment
            likes
            userID
            User {
              id
              name
              dob
              email
              isBusiness
              follows
              experience
              genre
              bio
              Posts {
                items {
                  id
                  caption
                  type
                  comment
                  likes
                  userID
                  mediaSrc
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              profilePic
              ChatRooms {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Texts {
                items {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
                  chatroomID
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            mediaSrc
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        profilePic
        ChatRooms {
          items {
            id
            chatRoomId
            userId
            chatRoom {
              id
              name
              image
              users {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Texts {
                items {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
                  chatroomID
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Attachments {
                items {
                  id
                  storageKey
                  duration
                  type
                  textID
                  chatroomID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              LastMessage {
                id
                text
                hasAttachment
                createdAt
                userID
                Attachments {
                  nextToken
                  __typename
                }
                chatroomID
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              chatRoomLastMessageId
              __typename
            }
            user {
              id
              name
              dob
              email
              isBusiness
              follows
              experience
              genre
              bio
              Posts {
                items {
                  id
                  caption
                  type
                  comment
                  likes
                  userID
                  mediaSrc
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              profilePic
              ChatRooms {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Texts {
                items {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
                  chatroomID
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Texts {
          items {
            id
            text
            hasAttachment
            createdAt
            userID
            Attachments {
              items {
                id
                storageKey
                duration
                type
                textID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            chatroomID
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUserChatRoom = /* GraphQL */ `
  mutation UpdateUserChatRoom(
    $input: UpdateUserChatRoomInput!
    $condition: ModelUserChatRoomConditionInput
  ) {
    updateUserChatRoom(input: $input, condition: $condition) {
      id
      chatRoomId
      userId
      chatRoom {
        id
        name
        image
        users {
          items {
            id
            chatRoomId
            userId
            chatRoom {
              id
              name
              image
              users {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Texts {
                items {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
                  chatroomID
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Attachments {
                items {
                  id
                  storageKey
                  duration
                  type
                  textID
                  chatroomID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              LastMessage {
                id
                text
                hasAttachment
                createdAt
                userID
                Attachments {
                  nextToken
                  __typename
                }
                chatroomID
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              chatRoomLastMessageId
              __typename
            }
            user {
              id
              name
              dob
              email
              isBusiness
              follows
              experience
              genre
              bio
              Posts {
                items {
                  id
                  caption
                  type
                  comment
                  likes
                  userID
                  mediaSrc
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              profilePic
              ChatRooms {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Texts {
                items {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
                  chatroomID
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Texts {
          items {
            id
            text
            hasAttachment
            createdAt
            userID
            Attachments {
              items {
                id
                storageKey
                duration
                type
                textID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            chatroomID
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Attachments {
          items {
            id
            storageKey
            duration
            type
            textID
            chatroomID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        LastMessage {
          id
          text
          hasAttachment
          createdAt
          userID
          Attachments {
            items {
              id
              storageKey
              duration
              type
              textID
              chatroomID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          chatroomID
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
        __typename
      }
      user {
        id
        name
        dob
        email
        isBusiness
        follows
        experience
        genre
        bio
        Posts {
          items {
            id
            caption
            type
            comment
            likes
            userID
            User {
              id
              name
              dob
              email
              isBusiness
              follows
              experience
              genre
              bio
              Posts {
                items {
                  id
                  caption
                  type
                  comment
                  likes
                  userID
                  mediaSrc
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              profilePic
              ChatRooms {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Texts {
                items {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
                  chatroomID
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            mediaSrc
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        profilePic
        ChatRooms {
          items {
            id
            chatRoomId
            userId
            chatRoom {
              id
              name
              image
              users {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Texts {
                items {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
                  chatroomID
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Attachments {
                items {
                  id
                  storageKey
                  duration
                  type
                  textID
                  chatroomID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              LastMessage {
                id
                text
                hasAttachment
                createdAt
                userID
                Attachments {
                  nextToken
                  __typename
                }
                chatroomID
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              chatRoomLastMessageId
              __typename
            }
            user {
              id
              name
              dob
              email
              isBusiness
              follows
              experience
              genre
              bio
              Posts {
                items {
                  id
                  caption
                  type
                  comment
                  likes
                  userID
                  mediaSrc
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              profilePic
              ChatRooms {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Texts {
                items {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
                  chatroomID
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Texts {
          items {
            id
            text
            hasAttachment
            createdAt
            userID
            Attachments {
              items {
                id
                storageKey
                duration
                type
                textID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            chatroomID
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUserChatRoom = /* GraphQL */ `
  mutation DeleteUserChatRoom(
    $input: DeleteUserChatRoomInput!
    $condition: ModelUserChatRoomConditionInput
  ) {
    deleteUserChatRoom(input: $input, condition: $condition) {
      id
      chatRoomId
      userId
      chatRoom {
        id
        name
        image
        users {
          items {
            id
            chatRoomId
            userId
            chatRoom {
              id
              name
              image
              users {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Texts {
                items {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
                  chatroomID
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Attachments {
                items {
                  id
                  storageKey
                  duration
                  type
                  textID
                  chatroomID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              LastMessage {
                id
                text
                hasAttachment
                createdAt
                userID
                Attachments {
                  nextToken
                  __typename
                }
                chatroomID
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              chatRoomLastMessageId
              __typename
            }
            user {
              id
              name
              dob
              email
              isBusiness
              follows
              experience
              genre
              bio
              Posts {
                items {
                  id
                  caption
                  type
                  comment
                  likes
                  userID
                  mediaSrc
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              profilePic
              ChatRooms {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Texts {
                items {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
                  chatroomID
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Texts {
          items {
            id
            text
            hasAttachment
            createdAt
            userID
            Attachments {
              items {
                id
                storageKey
                duration
                type
                textID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            chatroomID
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Attachments {
          items {
            id
            storageKey
            duration
            type
            textID
            chatroomID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        LastMessage {
          id
          text
          hasAttachment
          createdAt
          userID
          Attachments {
            items {
              id
              storageKey
              duration
              type
              textID
              chatroomID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          chatroomID
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
        __typename
      }
      user {
        id
        name
        dob
        email
        isBusiness
        follows
        experience
        genre
        bio
        Posts {
          items {
            id
            caption
            type
            comment
            likes
            userID
            User {
              id
              name
              dob
              email
              isBusiness
              follows
              experience
              genre
              bio
              Posts {
                items {
                  id
                  caption
                  type
                  comment
                  likes
                  userID
                  mediaSrc
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              profilePic
              ChatRooms {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Texts {
                items {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
                  chatroomID
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            mediaSrc
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        profilePic
        ChatRooms {
          items {
            id
            chatRoomId
            userId
            chatRoom {
              id
              name
              image
              users {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Texts {
                items {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
                  chatroomID
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Attachments {
                items {
                  id
                  storageKey
                  duration
                  type
                  textID
                  chatroomID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              LastMessage {
                id
                text
                hasAttachment
                createdAt
                userID
                Attachments {
                  nextToken
                  __typename
                }
                chatroomID
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              chatRoomLastMessageId
              __typename
            }
            user {
              id
              name
              dob
              email
              isBusiness
              follows
              experience
              genre
              bio
              Posts {
                items {
                  id
                  caption
                  type
                  comment
                  likes
                  userID
                  mediaSrc
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              profilePic
              ChatRooms {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Texts {
                items {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
                  chatroomID
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Texts {
          items {
            id
            text
            hasAttachment
            createdAt
            userID
            Attachments {
              items {
                id
                storageKey
                duration
                type
                textID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            chatroomID
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
