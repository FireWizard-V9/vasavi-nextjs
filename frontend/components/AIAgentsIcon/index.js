// components/AIAgentIcon.jsx
"use client";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import AIAgentsPopup from "../AIAgents";

export default function AIAgentIcon({ productInfo }) {
  const [showAIPopup, setShowAIPopup] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowAIPopup(true)}
        className="w-10 h-10 rounded-full bg-black text-white flex flex-col items-center justify-center hover:bg-gray-800 transition-colors fixed bottom-8 right-8 z-40 shadow-lg"
        aria-label="Open AI Fashion Assistant"
      >
        <Sparkles size={20} />
      </button>

      {showAIPopup && (
        <AIAgentsPopup 
          onClose={() => setShowAIPopup(false)} 
          productInfo={productInfo}
        />
      )}
    </>
  );
}