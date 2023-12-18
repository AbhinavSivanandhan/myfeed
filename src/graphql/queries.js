/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAttachment = /* GraphQL */ `
  query GetAttachment($id: ID!) {
    getAttachment(id: $id) {
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
export const listAttachments = /* GraphQL */ `
  query ListAttachments(
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttachments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const attachmentsByTextID = /* GraphQL */ `
  query AttachmentsByTextID(
    $textID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attachmentsByTextID(
      textID: $textID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const attachmentsByChatroomID = /* GraphQL */ `
  query AttachmentsByChatroomID(
    $chatroomID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attachmentsByChatroomID(
      chatroomID: $chatroomID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
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
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getText = /* GraphQL */ `
  query GetText($id: ID!) {
    getText(id: $id) {
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
export const listTexts = /* GraphQL */ `
  query ListTexts(
    $filter: ModelTextFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTexts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const textsByUserID = /* GraphQL */ `
  query TextsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTextFilterInput
    $limit: Int
    $nextToken: String
  ) {
    textsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const textsByChatroomID = /* GraphQL */ `
  query TextsByChatroomID(
    $chatroomID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTextFilterInput
    $limit: Int
    $nextToken: String
  ) {
    textsByChatroomID(
      chatroomID: $chatroomID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
                Posts {
                  nextToken
                  __typename
                }
                profilePic
                ChatRooms {
                  nextToken
                  __typename
                }
                Texts {
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
                  nextToken
                  __typename
                }
                Texts {
                  nextToken
                  __typename
                }
                Attachments {
                  nextToken
                  __typename
                }
                LastMessage {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
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
                  nextToken
                  __typename
                }
                profilePic
                ChatRooms {
                  nextToken
                  __typename
                }
                Texts {
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
      nextToken
      __typename
    }
  }
`;
export const postsByUserID = /* GraphQL */ `
  query PostsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
                Posts {
                  nextToken
                  __typename
                }
                profilePic
                ChatRooms {
                  nextToken
                  __typename
                }
                Texts {
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
                  nextToken
                  __typename
                }
                Texts {
                  nextToken
                  __typename
                }
                Attachments {
                  nextToken
                  __typename
                }
                LastMessage {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
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
                  nextToken
                  __typename
                }
                profilePic
                ChatRooms {
                  nextToken
                  __typename
                }
                Texts {
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
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getUserChatRoom = /* GraphQL */ `
  query GetUserChatRoom($id: ID!) {
    getUserChatRoom(id: $id) {
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
export const listUserChatRooms = /* GraphQL */ `
  query ListUserChatRooms(
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
                users {
                  nextToken
                  __typename
                }
                Texts {
                  nextToken
                  __typename
                }
                Attachments {
                  nextToken
                  __typename
                }
                LastMessage {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
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
                  nextToken
                  __typename
                }
                profilePic
                ChatRooms {
                  nextToken
                  __typename
                }
                Texts {
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
                  nextToken
                  __typename
                }
                profilePic
                ChatRooms {
                  nextToken
                  __typename
                }
                Texts {
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
                  nextToken
                  __typename
                }
                Texts {
                  nextToken
                  __typename
                }
                Attachments {
                  nextToken
                  __typename
                }
                LastMessage {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
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
                  nextToken
                  __typename
                }
                profilePic
                ChatRooms {
                  nextToken
                  __typename
                }
                Texts {
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
      nextToken
      __typename
    }
  }
`;
export const userChatRoomsByChatRoomId = /* GraphQL */ `
  query UserChatRoomsByChatRoomId(
    $chatRoomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userChatRoomsByChatRoomId(
      chatRoomId: $chatRoomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
                users {
                  nextToken
                  __typename
                }
                Texts {
                  nextToken
                  __typename
                }
                Attachments {
                  nextToken
                  __typename
                }
                LastMessage {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
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
                  nextToken
                  __typename
                }
                profilePic
                ChatRooms {
                  nextToken
                  __typename
                }
                Texts {
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
                  nextToken
                  __typename
                }
                profilePic
                ChatRooms {
                  nextToken
                  __typename
                }
                Texts {
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
                  nextToken
                  __typename
                }
                Texts {
                  nextToken
                  __typename
                }
                Attachments {
                  nextToken
                  __typename
                }
                LastMessage {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
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
                  nextToken
                  __typename
                }
                profilePic
                ChatRooms {
                  nextToken
                  __typename
                }
                Texts {
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
      nextToken
      __typename
    }
  }
`;
export const userChatRoomsByUserId = /* GraphQL */ `
  query UserChatRoomsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userChatRoomsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
                users {
                  nextToken
                  __typename
                }
                Texts {
                  nextToken
                  __typename
                }
                Attachments {
                  nextToken
                  __typename
                }
                LastMessage {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
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
                  nextToken
                  __typename
                }
                profilePic
                ChatRooms {
                  nextToken
                  __typename
                }
                Texts {
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
                  nextToken
                  __typename
                }
                profilePic
                ChatRooms {
                  nextToken
                  __typename
                }
                Texts {
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
                  nextToken
                  __typename
                }
                Texts {
                  nextToken
                  __typename
                }
                Attachments {
                  nextToken
                  __typename
                }
                LastMessage {
                  id
                  text
                  hasAttachment
                  createdAt
                  userID
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
                  nextToken
                  __typename
                }
                profilePic
                ChatRooms {
                  nextToken
                  __typename
                }
                Texts {
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
      nextToken
      __typename
    }
  }
`;
