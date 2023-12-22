import React, { useState } from "react";
import { Amplify } from "aws-amplify";
import { generateClient } from 'aws-amplify/api';
import amplifyconfig from '../amplifyconfiguration.json';
import { createPost as createPostMutation } from "../graphql/mutations";
import { uploadFilesToS3 } from '../utils.js';

Amplify.configure(amplifyconfig);
const client = generateClient();

async function createPostAsync(postDetails) {
  //const { id, caption, type, comment, likes, mediaSrc, userID } = postDetails;
console.log('postDetails',postDetails);
  try {
    const response = await client.graphql({
      query: createPostMutation,
      variables: { input: postDetails  }
    });

    console.log('Post created successfully:', response);
    props.setPage("feed");

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
  const [imageKey, setImageKey] = useState(null);
  const [imageTypeKey, setImageTypeKey] = useState(null);

  // Assuming you have the userId available in props
  const userId = props.userId;

  const handleImageUpload = async (event) => {
    console.log('handleImg')
    const file = event.target.files;

    try {
      const result = await uploadFilesToS3(file);
      console.log('file-eh');
      console.log(result);
      //{james-wainscoat-skrGqiYSIK4-unsplash_1703275877908_de0731bf-63fa-47c3-9ec8-cfae852b1a5a.jpeg: 'IMAGE'}
      const imageKeyVal=Object.keys(result)[0];
      //const imageKeyVal=Object.keys(result)[0];
      const typeValue = result[imageKeyVal];
      setImageKey(imageKeyVal);
      setImageTypeKey(typeValue);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const generateRandomId = () => {
    // Generate a random alphanumeric ID of length 8
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    for (let i = 0; i < 12; i++) {
      randomId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomId;
  };
  const [generatedId, setGeneratedId] = useState(generateRandomId()); // Initialize with a random ID

  const createPost = () => {
    // Get the necessary information from the component's state
     const postDetails = {
      "id": generatedId,
      "caption": bio,
      "type": imageTypeKey,
      "likes": 10,
      "userID": props.user.id,
      "mediaSrc": imageKey
    }
    // "comment": {
    //   "awsJSON": "{\"key\": \"value\", \"otherKey\": \"-\"}"
    // },
    //   id: "be37ff0f-f199-4c9b-87cf-dummy-e5570ce92735",
    //   caption: bio,
    //   type: "IMAGE",
    //   comment: {'comment': '-'}, // You mentioned you don't care about the value for comment
    //   likes: 0,    // You mentioned you don't care about the value for likes
    //   mediaSrc: "https://source.unsplash.com/random?nature",
    //   userID: '123@userId'
    // };
  
    // Call the asynchronous function
    console.log('submit clicked');
    createPostAsync(postDetails);
    props.setPage("feed");
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
      
  