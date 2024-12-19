import { useState } from "react";

export default function Case3() {
  const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);

  const clearItems = () => {
    setItems([]);
  };

  return (
    <main className="p-6 ">
      <h1 className="text-2xl font-bold mb-4">Your Items</h1>
      {items.length > 0 ? (
        <ul className="list-disc pl-5">
          {items.map((item, index) => (
            <li key={index} className="mb-2 ">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No items available.</p>
      )}
      <button
        onClick={clearItems}
        className="mt-4 px-4 py-2 bg-indigo-500  rounded"
      >
        Clear Items
      </button>
    </main>
  );
}
