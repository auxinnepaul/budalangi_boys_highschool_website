import { CardSpotlight } from "@/components/aceternity/card-spotlight";
import React from "react";
import { PiStudent } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { RiMiniProgramFill } from "react-icons/ri";
import { FaSchoolLock } from "react-icons/fa6";
import { TbArrowGuide } from "react-icons/tb";
import { SiFuturelearn } from "react-icons/si";
import { InView } from "../motion-primitives/inView";
import Link from "next/link";
import { Button } from "../ui/button";

export default function FeatureSection() {
  return (
    <div className="py-8 md:py-8">
      <div className="max-w-[1400px] mx-auto px-2">
        <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 dark:from-black via-transparent to-transparent pb-12 pt-20 md:pt-20 sm:pb-16  lg:pb-24">
          <div className="relative z-10">
            <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
              <svg
                className="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                    width="200"
                    height="200"
                    x="50%"
                    y="50%"
                    patternUnits="userSpaceOnUse"
                    patternTransform="translate(-100 0)"
                  >
                    <path d="M.5 200V.5H200" fill="none"></path>
                  </pattern>
                </defs>
                <svg x="50%" y="50%" className="overflow-visible fill-blue-50">
                  <path
                    d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                    strokeWidth="0"
                  ></path>
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth="0"
                  fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
                ></rect>
              </svg>
            </div>
          </div>
          <div className="relative z-20 ">
            <div className="mx-auto max-w-[1400px] px-2">
              <InView
                variants={{
                  hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                viewOptions={{ margin: "0px 0px -200px 0px" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="mx-auto max-w-5xl lg:text-center flex flex-col justify-center items-center">
                  <h2 className="text-base md:text-2xl font-semibold leading-7 text-blue-100 bg-blue-600 px-3 rounded-lg uppercase mb-4 lg:mb-8">
                    Join Budalangi High and get access to all features
                  </h2>
                  <h1 className="lg:text-7xl text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    We Are the
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
                      Academic Giants
                    </span>
                  </h1>
                  <p className="mt-6 custom-paragraph max-w-3xl text-center">
                    Our institution stands out for its exceptional teaching,
                    cutting-edge programs, and serene learning environment,
                    fostering academic excellence and personal growth.
                  </p>
                  <div className="mt-6">
                    <Link href="/the-school/academics">
                      <Button
                        className="relative box-border inline-flex h-12 cursor-pointer touch-manipulation items-center justify-center overflow-hidden whitespace-nowrap rounded-md border-0 bg-gradient-to-r from-sky-500 to-primary px-4 font-mono leading-none text-white no-underline shadow-[rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,rgba(58,65,111,0.5)_0_-3px_0_inset] transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-[rgba(45,35,66,0.4)_0_4px_8px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#3c4fe0_0_-3px_0_inset] focus:shadow-[#3c4fe0_0_0_0_1.5px_inset,rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#3c4fe0_0_-3px_0_inset] active:translate-y-0.5 active:shadow-[#3c4fe0_0_3px_7px_inset]"
                        role="button"
                      >
                        Academics
                      </Button>
                    </Link>
                  </div>
                </div>
              </InView>
              <div className="mt-16 sm:mt-20 lg:mt-24">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none md:grid-cols-3">
                  <div className="text-white">
                    <CardSpotlight>
                      <PiStudent className="h-10 w-10 text-primary" />
                      <p className="text-xl font-bold relative z-20 mt-2 text-white">
                        Student-Centric Approach
                      </p>

                      <div className="text-neutral-200 mt-4 relative z-20">
                        We prioritize individual student needs by offering
                        personalized learning plans, mentorship, and guidance,
                        helping each student achieve their full potential.
                      </div>
                    </CardSpotlight>
                  </div>
                  <div className="">
                    <CardSpotlight className="text-white">
                      <GiTeacher className="h-10 w-10 text-primary" />
                      <p className="text-xl font-bold relative z-20 mt-2 text-white">
                        Experienced and Passionate Educators
                      </p>

                      <div className="text-neutral-200 mt-4 relative z-20">
                        Our team of highly qualified and passionate educators is
                        dedicated to inspiring and guiding students towards
                        achieving academic excellence.
                      </div>
                    </CardSpotlight>
                  </div>
                  <div className="">
                    <CardSpotlight className="text-white">
                      <RiMiniProgramFill className="h-10 w-10 text-primary" />
                      <p className="text-xl font-bold relative z-20 mt-2 text-white">
                        Best Program
                      </p>

                      <div className="text-neutral-200 mt-4 relative z-20">
                        We offer a comprehensive curriculum that is both
                        challenging and engaging, designed to equip students
                        with the knowledge and skills they need to excel in
                        their academic and professional pursuits.
                      </div>
                    </CardSpotlight>
                  </div>
                  <div className="">
                    <CardSpotlight className="text-white">
                      <FaSchoolLock className="h-10 w-10 text-primary" />
                      <p className="text-xl font-bold relative z-20 mt-2 text-white">
                        Safe and Inclusive Environment
                      </p>

                      <div className="text-neutral-200 mt-4 relative z-20">
                        We maintain a safe and inclusive environment where all
                        students feel valued and respected, fostering a culture
                        of diversity and acceptance.
                      </div>
                    </CardSpotlight>
                  </div>

                  <div className="">
                    <CardSpotlight className="text-white">
                      <TbArrowGuide className="h-10 w-10 text-primary" />
                      <p className="text-xl font-bold relative z-20 mt-2 text-white">
                        Mentorship and Guidance Programs
                      </p>

                      <div className="text-neutral-200 mt-4 relative z-20">
                        We provide students with regular mentorship sessions,
                        helping them navigate their academic and personal growth
                        journeys with confidence and clarity.
                      </div>
                    </CardSpotlight>
                  </div>

                  <div className="">
                    <CardSpotlight className="text-white">
                      <SiFuturelearn className="h-10 w-10 text-primary" />
                      <p className="text-xl font-bold relative z-20 mt-2 text-white">
                        Hands-On Learning Opportunities
                      </p>

                      <div className="text-neutral-200 mt-4 relative z-20">
                        Through practical labs, workshops, and field trips, we
                        emphasize hands-on learning that complements theoretical
                        knowledge, making education more effective and engaging.
                      </div>
                    </CardSpotlight>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
