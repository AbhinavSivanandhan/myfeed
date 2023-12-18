import "../styles/profile.css";
import React, { useEffect, useState } from "react";

import { listPosts } from "../graphql/queries";
import { generateClient } from "aws-amplify/api";

export function Profile(props) {
  console.log("Profile page", props.otherUser);

  const userProfilePic = props.user.profilePic;

  /* Graph QL query for getting all posts */

  const client = generateClient();
  const [imgPosts, setImgPosts] = useState([]);
  //  const []
  useEffect(() => {
    // const fetchImgUrls = async() => {
    // const imageUrls = await client.graphql({
    //   query: listPosts,
    //   variables: {id: props.user.id}
    // });
    // return imageUrls;
    // }/

    // setImgPosts(fetchImgUrls());
    const userProfilePic = "https://via.placeholder.com/150";
    if (props.profilePic != "") {
      const userProfilePic = props.user.profilePic;
    }
  });

  const chatButton = () => {
    if (props) {
      props.setPage("chat");
    } else {
      console.log("need to setup user settings");
    }
  };

  return (
    <div className="profile">
      <header>
        <h1>Profile Page</h1>
      </header>
      <div className="profile-info">
        <div className="container">
          <div className="profile-details">
            <div className="profile-picture">
              <img src={userProfilePic} alt="Profile" />
            </div>
            <div>
              <h2>{props.otherUser.name}</h2>
              <p>{props.otherUser.bio}</p>
              <p>{props.otherUser.experience}</p>
            </div>
          </div>
          <div className="chat-button">
            <button onClick={chatButton}>Chat</button>
          </div>
        </div>
      </div>
    </div>
  );
}
