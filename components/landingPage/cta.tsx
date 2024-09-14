import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function CTAsection() {
  return (
    <div className="py-10 md:py-20">
      <div className="max-w-[1400px] mx-auto px-2">
        <div className="relative mx-auto max-w-5xl">
          <div
            className="rounded-xl p-1"
            style={{
              backgroundImage:
                "linear-gradient(to right bottom, rgb(79, 70, 229) 0%, rgb(165, 56, 164) 50%, rgb(220, 38, 38) 100%)",
            }}
          >
            <div className="rounded-lg bg-black/80 backdrop-blur">
              <div className="flex w-full flex-wrap items-center justify-between gap-4 px-8 py-10 sm:px-16 lg:flex-nowrap">
                <div className="lg:max-w-xl">
                  <h2 className="block w-full pb-2 bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                    Discover the Future of Learning
                  </h2>
                  <p className="my-4 bg-transparent font-medium leading-relaxed tracking-wide text-gray-400">
                    We provide a nurturing environment where students excel
                    academically, socially, and personally. Our programs are
                    designed to prepare students for a bright future, whether in
                    college or their career paths.
                  </p>
                  <p className="bg-transparent font-medium leading-relaxed tracking-wide text-gray-400">
                    Explore our diverse curriculum, extracurricular activities,
                    and state-of-the-art facilities. Schedule a visit today to
                    see what makes us unique!
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-6">
                  <Link href="/contact">
                    <Button className="bg-violet-600 text-white flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-300 px-8 py-3 text-xs sm:text-sm">
                      Schedule a Visit
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button className="flex items-center justify-center whitespace-nowrap rounded-md border border-zinc-700 bg-zinc-900 text-center text-white backdrop-blur transition-all hover:bg-zinc-800 px-8 py-3 text-xs sm:text-sm">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
