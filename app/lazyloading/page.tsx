"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
const HeavyComponent = dynamic(() => import("../components/HeavyComponent"), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

const HeavyPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <main>
      <h1>Heavy Page</h1>
      <button onClick={() => setIsVisible(true)}>Show</button>
      {isVisible && <HeavyComponent />}
    </main>
  );
};

export default HeavyPage;
