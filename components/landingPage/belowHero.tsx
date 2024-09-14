"use client";

import React from "react";
import { motion } from "framer-motion";
import { InView } from "../motion-primitives/inView";
import Link from "next/link";
import { Button } from "../ui/button";
import { BookOpen, GraduationCap, LogIn } from "lucide-react";

export default function belowHero() {
  return (
    <div className="py-10 md:py-10">
      <div>
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="font-sans text-4xl font-bold text-black dark:text-gray-200  max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl">
            A High School: Where Excellence Meets Opportunity
          </div>
          <div className="h-10"></div>

          <p className="max-w-4xl font-serif text-xl text-gray-800 dark:text-gray-400 md:text-2xl">
            We are committed to fostering a nurturing environment where students
            can thrive both academically and personally. Our dedicated
            educators, innovative programs, and vibrant community work together
            to inspire and empower every student to reach their full potential
            and become future leaders.
          </p>
        </InView>
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="grid gap-8 md:grid-cols-2 py-10">
            <div className="flex flex-col justify-center">
              <p className="self-start inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600">
                Education made easy
              </p>
              <h2 className="text-4xl font-bold">
                Looking for Where to Shape Your Son's Future?
              </h2>
              <div className="h-6"></div>
              <p className="custom-paragraph md:pr-10">
                Discover a place where excellence meets opportunity and dreams
                take flight. Here, we nurture growth not only through education
                but also through character development, career preparation,
                love, social skills, and extracurricular activities.
              </p>
              <div className="h-8"></div>
              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-800">
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-400">
                    Foster Holistic Development
                  </p>
                  <div className="h-4"></div>
                  <p className="font-serif custom-paragraph2">
                    We aim to cultivate well-rounded individuals by integrating
                    academic excellence with character building, emotional
                    intelligence, and social responsibility
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-400">
                    Prepare for Future Success
                  </p>
                  <div className="h-4"></div>
                  <p className="font-serif custom-paragraph2">
                    Our focus is on equipping students with the skills,
                    knowledge, and confidence needed to excel in their future
                    careers and personal lives.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <InView
                variants={{
                  hidden: {
                    opacity: 0,
                    x: 100,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                viewOptions={{ margin: "0px 0px -350px 0px" }}
              >
                <div className="-mr-24 rounded-lg md:rounded-l-full bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-gray-900 dark:to-black h-96 hidden md:block"></div>
              </InView>
            </div>
          </div>
        </InView>
        <div className="h-32 md:h-40"></div>

        <InView
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
              scale: 0.95,
              filter: "blur(4px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          viewOptions={{ margin: "0px 0px -350px 0px" }}
        >
          <div className="font-serif text-4xl text-center">
            <p className="self-start inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600">
              How we transform you
            </p>
            <h1 className="text-4xl md:text-6xl font-bold">
              The Student Journey
            </h1>
            <h2 className="py-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
              Launch your education journey in 3 easy steps
            </h2>
            <span>From Joining to Certification</span>
          </div>
        </InView>
        <div className="h-32 md:h-20"></div>
        <InView
          viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
        >
          <section className="py-2">
            <div className="mx-auto max-w-[1400px] px-2">
              <ul className="grid grid-cols-1 gap-10 lg:grid-cols-3">
                <li className="flex-start group relative flex lg:flex-col">
                  <span
                    className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                    aria-hidden="true"
                  ></span>
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-primary">
                    <LogIn className="h-5 w-5 text-gray-600 group-hover:text-white " />
                  </div>
                  <div className="ml-6 lg:ml-0 lg:mt-10">
                    {/* Card 1 */}
                    <motion.div
                      variants={{
                        hidden: {
                          opacity: 0,
                          scale: 0.8,
                          filter: "blur(10px)",
                        },
                        visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
                      }}
                      className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-br from-gray-900 to-black"
                    >
                      <p className="flex items-center justify-center text-4xl font-semibold text-indigo-400 bg-indigo-800 rounded-full shadow-lg w-14 h-14">
                        1
                      </p>
                      <div className="h-6"></div>
                      <p className="font-serif text-white text-3xl">
                        Orientation and Integration
                      </p>
                    </motion.div>
                  </div>
                </li>
                <li className="flex-start group relative flex lg:flex-col">
                  <span
                    className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                    aria-hidden="true"
                  ></span>
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-primary">
                    <BookOpen className="h-5 w-5 text-gray-600 group-hover:text-white " />
                  </div>
                  <div className="ml-6 lg:ml-0 lg:mt-10">
                    {/* Card 2 */}
                    <motion.div
                      variants={{
                        hidden: {
                          opacity: 0,
                          scale: 0.8,
                          filter: "blur(10px)",
                        },
                        visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
                      }}
                      className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-b from-gray-900 to-black"
                    >
                      <p className="flex items-center justify-center text-4xl font-semibold text-green-400 bg-green-800 rounded-full shadow-lg w-14 h-14">
                        2
                      </p>
                      <div className="h-6"></div>
                      <p className="font-serif text-white text-3xl">
                        Academic and Personal Development
                      </p>
                    </motion.div>
                  </div>
                </li>
                <li className="flex-start group relative flex lg:flex-col">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-primary">
                    <GraduationCap className="h-5 w-5 text-gray-600 group-hover:text-white " />
                  </div>
                  <div className="ml-6 lg:ml-0 lg:mt-10">
                    {/* Card 3 */}
                    <motion.div
                      variants={{
                        hidden: {
                          opacity: 0,
                          scale: 0.8,
                          filter: "blur(10px)",
                        },
                        visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
                      }}
                      className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-bl from-gray-900 to-black"
                    >
                      <p className="flex items-center justify-center text-4xl font-semibold text-pink-400 bg-pink-800 rounded-full shadow-lg w-14 h-14">
                        3
                      </p>
                      <div className="h-6"></div>
                      <p className="font-serif text-white text-3xl">
                        Certification and Transition
                      </p>
                    </motion.div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </InView>

        <div className="h-28"></div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col justify-center md:col-span-2">
            <InView
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                  scale: 0.95,
                  filter: "blur(4px)",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              viewOptions={{ margin: "0px 0px -350px 0px" }}
            >
              <p className="self-start inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600">
                We are humans
              </p>
              <h2 className="text-4xl font-bold">
                Packed with Love, We Work Together
              </h2>
              <div className="h-6"></div>
              <p className="font-serif custom-paragraph md:pr-10">
                Our school fosters a strong sense of unity and collaboration
                among staff, teachers, and students. By working together with
                mutual respect and support, we create a nurturing environment
                where everyone thrives and grows as a community.
              </p>
            </InView>
            <div className="h-8"></div>
            <InView
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                  scale: 0.95,
                  filter: "blur(4px)",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              viewOptions={{ margin: "0px 0px -350px 0px" }}
            >
              <div className="grid gap-6 pt-8 border-t border-gray-800 lg:grid-cols-3">
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-400">
                    Foster Collaborative Learning{" "}
                  </p>
                  <div className="h-4"></div>
                  <p className="font-serif custom-paragraph2">
                    Encouraging teamwork and communication among students to
                    enhance their learning experiences and achieve academic
                    success together.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-400">
                    Promote Personal Growth
                  </p>
                  <div className="h-4"></div>
                  <p className="font-serif custom-paragraph2">
                    Supporting the individual development of each student by
                    providing opportunities for self-discovery, leadership, and
                    personal achievement
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-400">
                    Build Strong Community Ties
                  </p>
                  <div className="h-4"></div>
                  <p className="font-serif custom-paragraph2">
                    Creating lasting relationships and a sense of belonging by
                    actively involving families, teachers, and local partners in
                    the educational journey.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/the-school/schoolLife">
                  <Button
                    className="relative box-border inline-flex h-12 cursor-pointer touch-manipulation items-center justify-center overflow-hidden whitespace-nowrap rounded-md border-0 bg-gradient-to-r from-sky-500 to-primary px-4 font-mono leading-none text-white no-underline shadow-[rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,rgba(58,65,111,0.5)_0_-3px_0_inset] transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-[rgba(45,35,66,0.4)_0_4px_8px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#3c4fe0_0_-3px_0_inset] focus:shadow-[#3c4fe0_0_0_0_1.5px_inset,rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#3c4fe0_0_-3px_0_inset] active:translate-y-0.5 active:shadow-[#3c4fe0_0_3px_7px_inset]"
                    role="button"
                  >
                    School Life
                  </Button>
                </Link>
              </div>
            </InView>
          </div>
          <div>
            <InView
              variants={{
                hidden: {
                  opacity: 0,
                  x: 100,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              viewOptions={{ margin: "0px 0px -350px 0px" }}
            >
              <div className="-mr-24 rounded-lg md:rounded-l-full bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-gray-900 dark:to-black h-96 hidden md:block"></div>
            </InView>
          </div>
        </div>
      </div>
    </div>
  );
}
