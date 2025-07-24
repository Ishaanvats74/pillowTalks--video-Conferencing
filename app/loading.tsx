'use client'
import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export default function LoadingScreen() {
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "Connecting to secure server...",
    "Initializing audio & video engine...",
    "Establishing encrypted connection...",
    "Launching your private room...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white flex-col gap-6">
      <div className="text-4xl font-bold tracking-wide text-white/90 animate-fade-in">
        SassyTalks
      </div>
      <Loader2 className="animate-spin w-12 h-12 text-white/80" />
      <p className="text-sm text-gray-400 animate-pulse">
        {messages[messageIndex]}
      </p>
      <p className="text-xs text-gray-600 absolute bottom-6">© 2025 SassyTalks Inc.</p>
    </div>
  );
}
