import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostsData = () => {
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
    <div className="max-w-screen-xl mx-auto">
      <Link to="/">
        <h2 className="py-2 text-base font-semibold underline underline-offset-4">
          Back Home
        </h2>
      </Link>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-between py-6 bg-blue-200 mx-auto px-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex justify-start flex-col gap-2 items-center bg-gray-50 rounded-md px-6 py-4 shadow-lg hover:shadow-none duration-300 cursor-pointer"
          >
            <div className="flex flex-start w-full gap-2">
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
    </div>
  );
};

export default PostsData;
