"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { TextEffect } from "../motion-primitives/text-effects";
import { AnimatedNumber } from "../motion-primitives/animated-number";
import { MoveRight } from "lucide-react";

export default function HeroSection() {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  useEffect(() => {
    setValue(60);
    setValue2(60000);
  }, []);
  return (
    <section className="py-10 md:py-20">
      <div className="mx-auto max-w-[1400px] px-2">
        <div className="relative py-12 bg-white sm:py-16 lg:py-20 shadow-2xl">
          <div className="absolute inset-0">
            <Image
              alt="hero image"
              src="/budalangi-high.jpeg"
              width={2432}
              height={1442}
              className="object-cover object-right w-full h-full lg:object-center"
            />
          </div>

          <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>

          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-lg mx-auto text-center xl:max-w-2xl">
              <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
                Welcome to Budalang'i Boys' High School
              </h1>

              <TextEffect
                per="word"
                as="h3"
                preset="slide"
                className="mt-6 max-w-lg mx-auto text-base font-normal leading-7 text-gray-300"
              >
                Your Journey to Excellence Starts Here.
              </TextEffect>

              <div className="flex flex-col sm:flex-row justify-center gap-4 lg:max-w-none max-w-md mx-auto lg:mx-0">
                <div className="mt-6">
                  <Link href="/aboutUs">
                    <Button
                      className="relative box-border inline-flex h-12 cursor-pointer touch-manipulation items-center justify-center overflow-hidden whitespace-nowrap rounded-md border-0 bg-gradient-to-r from-sky-500 to-primary px-4 font-mono leading-none text-white no-underline shadow-[rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,rgba(58,65,111,0.5)_0_-3px_0_inset] transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-[rgba(45,35,66,0.4)_0_4px_8px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#3c4fe0_0_-3px_0_inset] focus:shadow-[#3c4fe0_0_0_0_1.5px_inset,rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#3c4fe0_0_-3px_0_inset] active:translate-y-0.5 active:shadow-[#3c4fe0_0_3px_7px_inset]"
                      role="button"
                    >
                      Learn who we are
                    </Button>
                  </Link>
                </div>
                <div className="mt-6">
                  <Link href="/contact">
                    <Button
                      className="relative box-border inline-flex h-12 cursor-pointer touch-manipulation items-center justify-center overflow-hidden whitespace-nowrap rounded-md border-0 bg-gradient-to-r from-sky-500 to-primary px-4 font-mono leading-none text-white no-underline shadow-[rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,rgba(58,65,111,0.5)_0_-3px_0_inset] transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-[rgba(45,35,66,0.4)_0_4px_8px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#3c4fe0_0_-3px_0_inset] focus:shadow-[#3c4fe0_0_0_0_1.5px_inset,rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#3c4fe0_0_-3px_0_inset] active:translate-y-0.5 active:shadow-[#3c4fe0_0_3px_7px_inset]"
                      role="button"
                    >
                      Contact Us
                      <MoveRight className="mx-2" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="grid max-w-md grid-cols-2 mx-auto mt-8 md:mt-16 lg:mt-24 xl:mt-32 gap-x-6 grid-col-2">
                <div>
                  <AnimatedNumber
                    className="inline-flex items-center font-mono text-2xl md:text-6xl font-bold text-zinc-50"
                    springOptions={{
                      bounce: 0,
                      duration: 5000,
                    }}
                    value={value}
                  />
                  <p className="text-base font-normal leading-6 text-gray-300">
                    Years of Excellence
                  </p>
                </div>

                <div>
                  <AnimatedNumber
                    className="inline-flex items-center font-mono text-2xl md:text-6xl font-bold text-zinc-50"
                    springOptions={{
                      bounce: 0,
                      duration: 5000,
                    }}
                    value={value2}
                  />
                  <p className="mt-2 text-sm font-medium text-gray-300">
                    Students transitioned
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
