import { Post } from "./post.jsx";
import { Header } from "./Header.jsx";

import "../styles/Feed.css";
import { useState, useEffect } from "react";

import { generateClient } from "aws-amplify/api";
import { listPosts } from "../graphql/queries.js";


export function Feed(props) {
	const [postJsx, setPostJsx] = useState(null);
  const client = generateClient();

  useEffect(() => {
    const fetchPosts = async () => {

			if (postJsx == null) {
				const listPostResponse = await client.graphql({
					query: listPosts,
				});
				// console.log(listPostResponse.data.listPosts.items);
				// setPosts(listPostResponse.data.listPosts.items);
				setPostJsx(listPostResponse.data.listPosts.items.map((post, idx) => generatePostJsx(post, idx)));
			}
    };
    fetchPosts();
  });

  const generatePostJsx = (post, idx) => {
    return (
      <div key={idx}>
        <Post post={post} setOtherUser={props.setOtherUser} setPage={props.setPage}/>
      </div>
    );
  };

  // Function to handle navigation to CreatePost
  const goToCreatePost = () => {
    props.setPage("createPost");
  };

  return (
    <div>
      <Header setPage={props.setPage} />
      <div id="feed-page">
        <div id="posts">
          {postJsx != null && postJsx.length > 0 && postJsx}
        </div>
        <div id="feed-sidebar">
          <button onClick={goToCreatePost}>Create Post</button>
        </div>      </div>
    </div>
  );
}
