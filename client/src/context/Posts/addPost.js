import { createContext, useState } from "react";
import axios from "axios";

const PostContext = createContext();
const url = "http://localhost:8080/focuswku/v1/posts";
// axios.interceptors.request.use((req) => {});

function PostProvider({ children }) {
  const [posts, setPost] = useState([]);

  //createPosts
  const createPosts = async (postData) => {
    try {
    //   console.log(postData);
      const respose = await axios.post(url, postData);
    //   console.log(postData);
      setPost({ ...posts, ...respose.data });
    } catch (err) {
      console.log(err);
    }
  };

  const postOperation = { createPosts };

  return (
    <PostContext.Provider value={postOperation}>
      {children}
    </PostContext.Provider>
  );
}

export { PostProvider };
export default PostContext;
