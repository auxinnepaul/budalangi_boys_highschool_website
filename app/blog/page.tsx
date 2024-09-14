import PageWrapper from "@/components/Container/PageWrapper";
import React from "react";

export default function page() {
  return (
    <PageWrapper>
      <div className="min-h-screen  flex flex-col items-center justify-center relative px-4 my-16 md:my-20">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30 bg-[url('https://images.unsplash.com/photo-1604093882750-3ed498f3178b')]"></div>
        <h1 className="text-5xl md:text-7xl text-white font-bold mb-8 z-10">
          Coming Soon
        </h1>
      </div>
    </PageWrapper>
  );
}
