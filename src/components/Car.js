import axios from "axios";
import React, { useEffect, useState } from "react";

const Car = () => {
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    async function PostsData() {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(data.data);
    }
    PostsData();
  }, []);
  return (
    <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-between py-6 bg-blue-200 mx-auto px-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex justify-start gap-4 items-center bg-gray-100 rounded-md px-4 py-2 "
        >
          <div className="flex flex-col gap-2">
            <p className="bg-red-400 text-white px-2 flex items-center justify-center">
              {post.userId}
            </p>
            <p className="bg-blue-400 px-2 flex items-center justify-center">
              {post.id}
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-base font-semibold">{post.title}</p>
            <p className="text-sm tracking-wide">{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Car;
