import React from "react";
import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <Link
      to={user.name}
      state={user}
      className="p-4 lg:w-1/4 md:w-1/2 hover:scale-105 transition-all cursor-pointer"
    >
      <div className="h-full flex flex-col items-center text-center">
        <img
          alt="team"
          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
          src="https://dummyimage.com/200x200"
        />
        <div className="w-full">
          <h2 className="title-font font-medium text-lg text-white">
            {user.name}
          </h2>
          <h3 className="text-gray-500 mb-3">{user.email}</h3>
        </div>
      </div>
    </Link>
  );
}

export default UserCard;
