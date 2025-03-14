import { LoadingSpinner } from "@/components/ui/loading-spinner";
import React from "react";

const Loading = () => {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center">
      <LoadingSpinner />
    </main>
  );
};

export default Loading;
