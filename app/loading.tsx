import Spinner from "@/components/animata/progress ";
import React from "react";

export default function loading() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <Spinner
          childSize="h-6 w-6"
          className="bg-gradient-to-bl from-black to-primary"
          outerSize="h-8 w-8"
        />
        {/* <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
          <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-primary animate-spin"></div>
        </div> */}
      </div>
    </>
  );
}
