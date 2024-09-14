"use client";

import React from "react";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { AnimatedNumber } from "../motion-primitives/animated-number";

export default function StatsSection() {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  if (isInView && value === 0) {
    setValue(70);
  }
  if (isInView && value2 === 0) {
    setValue2(12);
  }
  if (isInView && value3 === 0) {
    setValue3(500);
  }
  if (isInView && value4 === 0) {
    setValue4(50000);
  }

  return (
    <section className="py-28 my-10 md:my-20 bg-gray-900">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl xl:mx-auto xl:text-center">
          <h3 className="text-white text-3xl font-semibold sm:text-4xl">
            Our students are always happy
          </h3>
          <p className="mt-3 text-gray-300">Some numbers</p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div ref={ref}>
              <h4 className="text-4xl text-white font-semibold">
                <AnimatedNumber
                  className="inline-flex items-center font-mono text-2xl md:text-5xl font-light"
                  springOptions={{
                    bounce: 0,
                    duration: 10000,
                  }}
                  value={value}
                />
                <span className=" text-2xl md:text-5xl "> %</span>
              </h4>
              <p className="mt-3 text-gray-400 font-medium">
                College/University Acceptance Rate - Our graduates are
                well-prepared for higher education.
              </p>
            </div>
            <div>
              <h4 className="text-4xl text-white font-semibold">
                <span className=" text-2xl md:text-5xl ">1:</span>

                <AnimatedNumber
                  className="inline-flex items-center font-mono text-2xl  md:text-5xl font-light"
                  springOptions={{
                    bounce: 0,
                    duration: 10000,
                  }}
                  value={value2}
                />
              </h4>
              <p className="mt-3 text-gray-400 font-medium">
                Student-Teacher Ratio - Personalized attention for every
                student.
              </p>
            </div>
            <div>
              <h4 className="text-4xl text-white font-semibold">
                <AnimatedNumber
                  className="inline-flex items-center font-mono text-2xl  md:text-5xl font-light"
                  springOptions={{
                    bounce: 0,
                    duration: 10000,
                  }}
                  value={value3}
                />
                <span className=" text-2xl md:text-5xl ">+</span>
              </h4>
              <p className="mt-3 text-gray-400 font-medium">
                Cups won across various sports.
              </p>
            </div>
            <div>
              <h4 className="text-4xl text-white font-semibold">
                <AnimatedNumber
                  className="inline-flex items-center font-mono text-2xl  md:text-5xl font-light"
                  springOptions={{
                    bounce: 0,
                    duration: 10000,
                  }}
                  value={value4}
                />
                <span className=" text-2xl md:text-5xl ">+</span>
              </h4>
              <p className="mt-3 text-gray-400 font-medium">
                Students learned in our school.
              </p>
            </div>
          </div>
          {/* <ul className="flex-wrap gap-x-12 gap-y-10 items-center space-y-8 sm:space-y-0 sm:flex xl:justify-center">
            {stats.map((item, idx) => (
              <li key={idx} className="sm:max-w-[15rem]">
                <h4 className="text-4xl text-white font-semibold">
                  <AnimatedNumber
                    className="inline-flex items-center font-mono text-2xl font-light text-zinc-800 dark:text-zinc-50"
                    springOptions={{
                      bounce: 0,
                      duration: 10000,
                    }}
                    value={item.data}
                  />
                  {item.data}
                </h4>
                <p className="mt-3 text-gray-400 font-medium">{item.desc}</p>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
      <div
        className="absolute inset-0 max-w-md mx-auto h-80 blur-[118px] sm:h-72"
        style={{
          background:
            "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
        }}
      ></div>
    </section>
  );
}
