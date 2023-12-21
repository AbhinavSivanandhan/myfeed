import { useEffect, useState } from "react";
import "./App.css";

import { Amplify } from "aws-amplify";
import amplifyconfig from "./amplifyconfiguration.json";
Amplify.configure(amplifyconfig);

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import { generateClient } from "aws-amplify/api";
import { getUser } from "./graphql/queries.js";
import { createUser } from "./graphql/mutations.js";

import { Feed } from "./components/Feed.jsx";
import { UpdateProfile } from "./components/Form.jsx";
import { Profile } from "./components/Profile.jsx";
import { Chat } from "./components/Chat.jsx";
import { CreatePost } from "./components/CreatePost.jsx";

function App({ signOut, user }) {
  const client = generateClient();

  const [page, setPage] = useState("feed");
  const [userInfo, setUserInfo] = useState(null);
  const [otherUser, setOtherUser] = useState(null);

  useEffect(() => {
    const syncUser = async () => {
      const userData = await client.graphql({
        query: getUser,
        variables: { id: user.userId },
      });

      console.log(userData.data);

      /**
       * * Aditi: When you create a new account, userData.data.getuser should be null and that should
       * * trigger your update user page, create a new account and check if that quantity really is null or not.
       * * if that's not null there will be some other thing that will be null because the user striaght up doesn't exist
       * * in our database
       *
       * * If you run out of emails, go to our data on Amplify's databse, remove a user which was created using your email id.
       * * why will this work? this only checks if the current account exists in our database. it doesn't check if it exists in cognito or not
       * TODO: So, no need to create user via cognito, just delete the user with your email id from the database
       * ! Absoutely make sure when you log in via Cognito, it's using an email id that doesn't exist in the pur database
       *
       * * On submit use setPage("feed"); you'll have to do it probably as props.setPage("feed")
       */

      if (userData.data.getuser === null) {
        const createUserResponse = await client.graphql({
          query: createUser,
          variables: { input: { id: user.userId, name: "Please enter name" } },
        });
        console.log(createUserResponse);
        setPage("updateProfile");
        setUserInfo(createUserResponse.data.createUser);
      } else if (userData.data.getUser.name == "Please enter name") {
        setPage("updateProfile");
        setUserInfo(userData.data.getUser);
      } else {
        setPage("feed");
        setUserInfo(userData.data.getUser);
      }
    };

    if (userInfo == null) {
      syncUser();
    }
  });

  return (
    <>
      {page == "feed" && (
        <Feed user={userInfo} setPage={setPage} setOtherUser={setOtherUser} />
      )}
      {page == "updateProfile" && (
        <UpdateProfile user={userInfo} setPage={setPage} />
      )}
      {page == "chat" && (
        <Chat user={userInfo} signOut={signOut} otherUser={otherUser} />
      )}
      {page == "profile" && (
        <Profile user={userInfo} otherUser={otherUser} setPage={setPage} />
      )}
      {page === "createPost" && (
        <CreatePost user={userInfo} setPage={setPage} />
      )}
      {/**
       * Abhinav: Follow the pattern above and create a render for createPost.jsx
        maybe {page == "createPost" && <CreatePost user={userInfo} setPage={setPage} />}

        Then create a button in Feed.jsx that sets the page to "createPost"
        like line 62 in this file (app.jsx) sets the page to feed, you can set it to createPost
        and then create a button in Feed.jsx that sets the page to "feed"; you'll probably have to use it as props.setPage("feed")
        setPage("createPost");

        export function createPost(props) {}

        and don't forget to import it. 
      */}
    </>
  );
}

export default withAuthenticator(App);
