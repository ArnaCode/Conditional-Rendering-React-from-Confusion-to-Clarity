import { useState } from "react";

interface User {
  name: string;
  email: string;
}

export default function Case2() {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = () => {
    setUser({ name: "Alice Johnson", email: "alice@example.com" });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <main className="p-6  min-h-screen">
      {user ? (
        <header>
          <h1 className="text-2xl font-bold ">Welcome, {user.name}!</h1>
          <p>Email: {user.email}</p>
          <button
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-red-500  rounded"
          >
            Logout
          </button>
        </header>
      ) : (
        <section>
          <h1 className="text-2xl font-bold ">Please log in.</h1>
          <button
            onClick={handleLogin}
            className="mt-4 px-4 py-2 bg-green-500  rounded"
          >
            Login
          </button>
        </section>
      )}
    </main>
  );
}
