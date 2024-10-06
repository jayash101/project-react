import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div className="mt-12 bg-gray-500 py-2 text-center">Please log in</div>
    );

  return (
    <div className="mt-12 bg-gray-500 py-2 text-center">
      Welcome {user.username}
    </div>
  );
}

export default Profile;
