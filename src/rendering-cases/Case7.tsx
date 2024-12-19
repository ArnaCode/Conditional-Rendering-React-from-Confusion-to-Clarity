import { useEffect, useState } from "react";

function useScreenSize() {
  const getScreenSize = () => {
    const width = window.innerWidth;
    if (width < 640) return "mobile";
    if (width >= 640 && width < 768) return "tablet";
    return "desktop";
  };

  const [screenSize, setScreenSize] = useState(getScreenSize);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setScreenSize(getScreenSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { screenSize, width };
}

export default function Case7() {
  const { screenSize, width } = useScreenSize();

  return (
    <main className="min-h-screen p-6 relative">
      <div className="absolute top-4 right-4 bg-gray-200 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full shadow-md">
        {`${width}px (${screenSize})`}
      </div>

      {screenSize === "mobile" && (
        <section className="text-center">
          <h1 className="text-xl font-bold">Mobile Layout</h1>
          <p>This layout is optimized for small screens.</p>
        </section>
      )}
      {screenSize === "tablet" && (
        <section className="text-center">
          <h1 className="text-xl font-bold">Tablet Layout</h1>
          <p>This layout is optimized for medium screens.</p>
        </section>
      )}
      {screenSize === "desktop" && (
        <section className="text-center">
          <h1 className="text-2xl font-bold">Desktop Layout</h1>
          <p>You have more screen space. Enjoy the expanded layout!</p>
        </section>
      )}
    </main>
  );
}
