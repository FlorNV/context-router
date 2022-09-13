import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

const Private = () => {
  const { user } = useUserContext();
  console.log(user);
  return (
    <div className="text-center p-5">
      <h1 className="mb-5">Private</h1>
      <div>
        <img src={user.avatar} alt="avatar" />
        <h2>
          {user.first_name} {user.last_name}
        </h2>
        <p>{user.email}</p>
      </div>
      <Link to="/private/logout" className="btn btn-danger">Logout</Link>
    </div>
  );
};

export default Private;
