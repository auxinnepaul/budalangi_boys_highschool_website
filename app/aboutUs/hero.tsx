"use client";

import React from "react";
import { LampContainer } from "@/components/aceternity/lamp";
import { motion } from "framer-motion";

export default function AboutUsHero() {
  return (
    <section id="aboutUs" className="max-w-[1900px] mx-auto py-20">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-900 dark:bg-black py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <div className="font-sans text-4xl font-bold text-gray-200  max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl">
            <p className="text-2xl md:text-4xl">About us</p>
            Unleash the Lion Within, <br />
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">Be the Light.</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className="">Be the Light.</span>
              </div>
            </div>
            <div className="h-10"></div>
            <p className="max-w-4xl text-xl text-gray-300 md:text-2xl">
              We are 'The Western Lion.' Guided by our motto, 'Be the Light,' we
              empower students to excel in academics, character, and leadership.
              Here, we roar when it comes to national exams and always lead as
              others follow in the region
            </p>
          </div>
        </motion.h1>
      </LampContainer>
    </section>
  );
}
