import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <ul className="flex flex-col items-center py-6 gap-2 justify-start">
        <Link to="/postdata">
          <li className="text-base font-semibold underline underline-offset-4">
            Post Data with Functional Components
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Home;
