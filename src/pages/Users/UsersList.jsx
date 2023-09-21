import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import UserCard from "../../components/Users/UserCard";
import { useAppStore } from "../../context/AppContext";
import { userServices } from "../../services";

function UsersList() {
  const { isLoading, data: users, error } = useSelector((state) => state.users);

  useEffect(() => {
    !users && getUsers();
  }, []);

  const getUsers = async () => {
    await userServices.fetchClasses();
  };

  const { title } = useAppStore();

  if (isLoading) {
    return <strong>Loading...</strong>;
  }

  if (error) {
    return <strong>{JSON.stringify(error)}</strong>;
  }

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-white">
            {title}
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {!isLoading &&
            users.map((user) => <UserCard key={user.id} user={user} />)}
        </div>
      </div>
    </section>
  );
}

export default UsersList;
