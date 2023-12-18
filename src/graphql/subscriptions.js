/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAttachment = /* GraphQL */ `
  subscription OnCreateAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onCreateAttachment(filter: $filter) {
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
export const onUpdateAttachment = /* GraphQL */ `
  subscription OnUpdateAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onUpdateAttachment(filter: $filter) {
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
export const onDeleteAttachment = /* GraphQL */ `
  subscription OnDeleteAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onDeleteAttachment(filter: $filter) {
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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onCreateChatRoom(filter: $filter) {
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onUpdateChatRoom(filter: $filter) {
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onDeleteChatRoom(filter: $filter) {
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
export const onCreateText = /* GraphQL */ `
  subscription OnCreateText($filter: ModelSubscriptionTextFilterInput) {
    onCreateText(filter: $filter) {
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
export const onUpdateText = /* GraphQL */ `
  subscription OnUpdateText($filter: ModelSubscriptionTextFilterInput) {
    onUpdateText(filter: $filter) {
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
export const onDeleteText = /* GraphQL */ `
  subscription OnDeleteText($filter: ModelSubscriptionTextFilterInput) {
    onDeleteText(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateUserChatRoom = /* GraphQL */ `
  subscription OnCreateUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onCreateUserChatRoom(filter: $filter) {
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
export const onUpdateUserChatRoom = /* GraphQL */ `
  subscription OnUpdateUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onUpdateUserChatRoom(filter: $filter) {
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
export const onDeleteUserChatRoom = /* GraphQL */ `
  subscription OnDeleteUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onDeleteUserChatRoom(filter: $filter) {
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
