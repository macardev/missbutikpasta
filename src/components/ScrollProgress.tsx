"use client";

import { useScrollProgress } from "@/lib/hooks";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[60]">
      <div
        className="h-full bg-gradient-to-r from-pink to-pink-dark"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
