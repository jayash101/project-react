import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="flex w-screen flex-col items-center gap-4">
      <h2 className="mb-2 py-4 text-center text-3xl font-medium text-teal-500">
        Login
      </h2>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-1/5 rounded-sm py-2 indent-2 text-white bg-gray-600"
      />

      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-1/5 rounded-sm py-2 indent-2 text-white bg-gray-600"
      />

      <button
        className="rounded bg-green-300 px-3 py-2 text-white"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
