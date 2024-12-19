import { useState } from "react";

export default function Case9() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <button
        onClick={toggleVisibility}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        {isVisible ? "Hide Box" : "Show Box"}
      </button>

      <div
        className={`w-32 h-32 bg-green-500 rounded shadow-lg transition-all duration-500 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
        style={{
          display: isVisible || isVisible === undefined ? "block" : "hidden",
        }}
      ></div>
    </main>
  );
}
