import React, { useState } from "react";
import { Amplify } from "aws-amplify";
import { generateClient } from 'aws-amplify/api';
import amplifyconfig from '../amplifyconfiguration.json';
import { createPost as createPostMutation } from "../graphql/mutations";

Amplify.configure(amplifyconfig);
const client = generateClient();

async function createPostAsync(postDetails) {
  const { id, caption, type, comment, likes, mediaSrc, userID } = postDetails;
console.log('postDetails',postDetails);
  try {
    const response = await client.graphql({
      mutation: createPostMutation,
      variables: {
        input: {
          id,
          caption,
          type,
          comment,
          likes,
          mediaSrc,
          userID
        },
        condition: null  // Assuming you don't need any condition
      }
    });

    console.log('Post created successfully:', response);

    // Implement logic to handle the post creation, e.g., update UI or navigate back to the feed
    // Example: props.setPage("feed");
  } catch (error) {
    console.error('Error creating post:', error);
    // Handle error accordingly
  }
}



export function CreatePost(props) {
  const [bio, setBio] = useState("");
  const [image, setImage] = useState(null);

  // Assuming you have the userId available in props
  const userId = props.userId;

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    console.log("Uploading image:", file);
    setImage(file);
  };

  const createPost = () => {
    // Get the necessary information from the component's state
    const postDetails = {
      id: "be37ff0f-f199-4c9b-87cf-dummy-e5570ce92735",
      caption: bio,
      type: "IMAGE",
      comment: "", // You mentioned you don't care about the value for comment
      likes: 0,    // You mentioned you don't care about the value for likes
      mediaSrc: "https://source.unsplash.com/random?nature",
      userID: userId
    };
  
    // Call the asynchronous function
    console.log('submit clicked');
    createPostAsync(postDetails);
    // You can add logic here if needed, but keep in mind that this function returns immediately
  };

  const cancelCreatePost = () => {
    props.setPage("feed");
  };

  return (
    <div>
      <h2>Create Post</h2>
      <label htmlFor="bio">Bio:</label>
      <input
        type="text"
        id="bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <br />
      <label htmlFor="image">Image:</label>
      <input
        type="file"
        id="image"
        onChange={handleImageUpload}
        style={{ display: 'block', margin: '10px 0' }}
      />
      <br />
      <button onClick={createPost}>Create Post</button>
      <button onClick={cancelCreatePost}>Cancel</button>
    </div>
  );
}


  //     // Call the GraphQL mutation to create a post
  //     const userId = 'edc3fefdca2tv'; // Replace with the actual user ID
  //     const postResponse = await client.graphql({
  //       query: createPost,
  //       variables: {
  //         input: {
  //           userID: userId,
  //           caption: bio,
  //           User: {
  //             name: 'name12',
  //           },
  //         },
  //       },
  //     });
      
  