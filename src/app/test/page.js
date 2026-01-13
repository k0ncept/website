"use client";

import { useEffect, useRef } from "react";
import makeEvasive from "evasive-button";

export default function TestPage() {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      const cleanup = makeEvasive(buttonRef.current, {
        detectionRadius: 140,
        escapeDistance: 280,
        edgePadding: 60,
        tauntProbability: 0.75,
        showShadow: true,
        screenShake: true,
        onEscape: () => {
          console.log("Button escaped!");
        },
        onCatch: () => {
          console.log("Button caught!");
        },
        caughtText: "Wait... HOW?!",
      });

      return cleanup;
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold mb-8">Evasive Button Test</h1>
        <p className="text-gray-400 mb-8">
          Try to click the button below - it will evade your cursor!
        </p>
        <button
          ref={buttonRef}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors cursor-pointer"
        >
          Try to Click Me!
        </button>
      </div>
    </div>
  );
}

