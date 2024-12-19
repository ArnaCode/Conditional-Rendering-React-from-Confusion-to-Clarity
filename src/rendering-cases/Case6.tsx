import React, { Suspense } from "react";

const HeavyComponent = React.lazy(() => import("./HeavyComponent"));

export default function Case6() {
  return (
    <main className="p-6  min-h-screen flex flex-col items-center justify-center">
      <Suspense
        fallback={
          <p className="text-xl text-gray-600">
            Loading component, please wait...
          </p>
        }
      >
        <HeavyComponent />
      </Suspense>
    </main>
  );
}
