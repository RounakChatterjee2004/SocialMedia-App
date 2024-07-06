import { useEffect, useState } from "react";
import Post from "../post/post";
import Share from "../share/share";
import "./feed.css";
import axios from "axios";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = username
          ? await axios.get(`/posts/profile/${username}`)
          : await axios.get("/posts/timeline/:userId");

        // Ensure the response data is an array before setting it to state
        if (Array.isArray(res.data)) {
          setPosts(res.data);
        } else {
          console.error("Unexpected response data format:", res.data);
          setPosts([]);
        }
      } catch (err) {
        console.error("Failed to fetch posts:", err);
        setPosts([]);
      }
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.length > 0 ? (
          posts.map((p) => <Post key={p._id} post={p} />)
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </div>
  );
}
