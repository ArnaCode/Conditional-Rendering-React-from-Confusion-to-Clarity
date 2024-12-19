import React, { useState } from "react";

export default function Case4() {
  const [username, setUsername] = useState("");

  const isValid = username.length >= 6;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <form className="p-6 flex flex-col gap-4 justify-center ">
      <label htmlFor="username" className="block text-xl font-bold mb-2">
        Username
      </label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2 text-black"
        placeholder="Enter your username"
      />
      {username && (
        <p className={`text-sm ${isValid ? "text-green-600" : "text-red-600"}`}>
          {isValid
            ? "Username looks good!"
            : "Username must be at least 6 characters long."}
        </p>
      )}
    </form>
  );
}
