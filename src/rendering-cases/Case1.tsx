import { useState } from "react";

export default function Case1() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <main className="flex flex-col items-center justify-center min-h-screen  p-4">
      <button
        onClick={toggleVisibility}
        className="mb-4 px-4 py-2 bg-blue-600 rounded"
      >
        {isVisible ? "Hide" : "Show"} Message
      </button>

      {isVisible && <p className="text-lg">This is a toggled message!</p>}
    </main>
  );
}
