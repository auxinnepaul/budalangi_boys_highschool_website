"use client";

import React from "react";
import Image from "next/image";
import PageWrapper from "@/components/Container/PageWrapper";
import { Gamepad2, GraduationCap, Heart, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AboutUsHero from "./hero";
import CulturalDiversity from "./culturalDiversity";
import { RiCommunityFill, RiParentLine } from "react-icons/ri";
import { MdVolunteerActivism } from "react-icons/md";

export default function AboutUsPage() {
  return (
    <PageWrapper>
      <section className="">
        <AboutUsHero />
        <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
          <div className="w-screen h-[500px] lg:w-1/2 lg:h-auto">
            <Image
              className="h-full w-full object-cover"
              src="/element5-digital-OyCl7Y4y0Bk-unsplash.jpg"
              height={1700}
              width={2250}
              alt="Winding mountain road"
            />
          </div>

          <div className="max-w-lg bg-white dark:bg-black border md:max-w-4xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
            <div className="flex flex-col p-10">
              <h2 className="text-2xl font-medium uppercase text-primary md:text-4xl">
                About Our School
              </h2>
              <p className="mt-4 custom-paragraph">
                St. Benedict's Boys' High School is a Catholic-sponsored
                boys-only high school located in Budalangi, Busia County, in
                Western Kenya. The school is known for its academic excellence
                and is committed to providing quality education to its students.
                It provides a wide range of subjects, including Mathematics,
                English, Kiswahili, Biology, Chemistry, Physics, Geography,
                History, Business Studies, Agriculture, and Computer Studies.
                The school has a team of experienced and dedicated teachers who
                are committed to helping students excel academically. As a
                Catholic-sponsored school, St. Benedict's Boys' High School also
                places a strong emphasis on spiritual development. The school
                offers regular religious activities and retreats to help
                students grow in their faith.
              </p>

              <div className="mt-8"></div>
            </div>
          </div>
        </div>
      </section>
      <section id="missionVisionGoalSection" className="mt-60">
        <div className="">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold">
              Our Mission Vision & Our Values
            </h1>
            <p className="mt-2 custom-paragraph">
              Empowering minds, nurturing character, and inspiring future
              leaders through quality education and transformative experiences.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100"></div>
            <div className="mt-16 grid divide-x divide-y  divide-gray-700 overflow-hidden  rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-3  lg:divide-y-0 ">
              <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl  hover:shadow-gray-600/10">
                <div className="relative space-y-8 py-12 p-8">
                  <img
                    src="https://www.svgrepo.com/show/164986/logo.svg"
                    loading="lazy"
                    width="200"
                    height="200"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                      Mission
                    </h5>
                    <p className="text-gray-300">
                      To provide a holistic education that fosters academic
                      excellence, vibrant extracurricular participation, and
                      character growth.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                <div className="relative space-y-8 py-12 p-8">
                  <img
                    src="https://www.svgrepo.com/show/120853/logo.svg"
                    loading="lazy"
                    width="200"
                    height="200"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                      Vision
                    </h5>
                    <p className="text-gray-300">
                      To inspire students to reach their full potential and
                      become impactful leaders in their communities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                <div className="relative space-y-8 py-12 p-8">
                  <img
                    src="https://www.svgrepo.com/show/120852/logo.svg"
                    loading="lazy"
                    width="200"
                    height="200"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                      Our Values
                    </h5>
                    <p className="text-gray-300">
                      We are guided by core values such as integrity,
                      inclusivity, innovation, community, and excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="whatWeExelIn" className="py-10 md:py-20">
        <div className="relative overflow-hidden pt-16 pb-32 space-y-24">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold">What We Excel In</h1>
            <p className="mt-2 custom-paragraph">
              Empowering minds, nurturing character, and inspiring future
              leaders through quality education and transformative experiences.
            </p>
          </div>

          {/* Education Section */}
          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                      <GraduationCap className="text-white" />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight">
                      Quality Education
                    </h2>
                    <p className="mt-4 custom-paragraph">
                      We provide a well-rounded education that goes beyond
                      academics, focusing on developing critical thinking,
                      creativity, and problem-solving skills. Our approach
                      nurtures curiosity and prepares students for lifelong
                      learning.
                    </p>

                    <div className="mt-6">
                      <Link href="/the-school/academics">
                        <Button
                          className="relative box-border inline-flex h-12 cursor-pointer touch-manipulation items-center justify-center overflow-hidden whitespace-nowrap rounded-md border-0 bg-gradient-to-r from-sky-500 to-blue-600 px-4 font-mono leading-none text-white no-underline shadow-[rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,rgba(58,65,111,0.5)_0_-3px_0_inset] transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-[rgba(45,35,66,0.4)_0_4px_8px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#3c4fe0_0_-3px_0_inset] focus:shadow-[#3c4fe0_0_0_0_1.5px_inset,rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#3c4fe0_0_-3px_0_inset] active:translate-y-0.5 active:shadow-[#3c4fe0_0_3px_7px_inset]"
                          role="button"
                        >
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <Image
                    loading="lazy"
                    width="647"
                    height="486"
                    alt=""
                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="/undraw_educator_re_ju47.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* extraCurricular Activities Section */}
          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                      <Gamepad2 className="text-white" />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight">
                      Extracurricular Activities
                    </h2>
                    <p className="mt-4 tcustom-paragraph">
                      We believe in the holistic development of our students
                      through a diverse range of extracurricular activities,
                      including drama, football, music, debate, science club,
                      art, dance, and community service, encouraging teamwork,
                      leadership, and the pursuit of personal passions.
                    </p>
                    <div className="mt-6">
                      <Link href="/the-school/extracurricular">
                        <Button
                          className="relative box-border inline-flex h-12 cursor-pointer touch-manipulation items-center justify-center overflow-hidden whitespace-nowrap rounded-md border-0 bg-gradient-to-r from-sky-500 to-blue-600 px-4 font-mono leading-none text-white no-underline shadow-[rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,rgba(58,65,111,0.5)_0_-3px_0_inset] transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-[rgba(45,35,66,0.4)_0_4px_8px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#3c4fe0_0_-3px_0_inset] focus:shadow-[#3c4fe0_0_0_0_1.5px_inset,rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#3c4fe0_0_-3px_0_inset] active:translate-y-0.5 active:shadow-[#3c4fe0_0_3px_7px_inset]"
                          role="button"
                        >
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <Image
                    alt="Inbox user interface"
                    loading="lazy"
                    width="647"
                    height="486"
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="/undraw_fans_re_cri3.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/*  Co-curricular Activities Section */}
          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                      <Star className="text-white" />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight">
                      Co-curricular Activities
                    </h2>
                    <p className="mt-4 custom-paragraph">
                      Our co-curricular activities are designed to complement
                      academic learning. They include clubs, societies, and
                      workshops that provide practical skills and personal
                      development opportunities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <Image
                    loading="lazy"
                    width="647"
                    height="486"
                    alt=""
                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="/undraw_teaching_re_g7e3.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Character Transformation Section */}
          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                      <Heart className="text-white" />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight">
                      Character Transformation
                    </h2>
                    <p className="mt-4 tcustom-paragraph">
                      Our mission extends beyond academics. We emphasize
                      character building, fostering integrity, empathy, and
                      respect, preparing students to be conscientious citizens
                      and leaders.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <Image
                    alt="Inbox user interface"
                    loading="lazy"
                    width="647"
                    height="486"
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="/undraw_character_drawing_re_s2lj.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CulturalDiversity />

      <section id="partnerships" className="py-12 md:py-20">
        <div className="items-center max-w-[1400px] px-2 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24">
          <div className="col-span-2 mb-8">
            <p className="text-lg font-medium text-primary">We are bonded</p>
            <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
              Building Strong Partnerships
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              We believe that collaboration with parents and the community is
              key to enriching the educational experience. Our school thrives on
              strong partnerships that support student achievement and foster a
              nurturing environment.
            </p>
            <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700"></div>
          </div>
          <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            <div>
              <RiParentLine className="w-10 h-10 mb-2 text-primary md:w-12 md:h-12" />
              <h3 className="mb-2 text-2xl font-bold dark:text-white">
                Parent Engagement Programs
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Get involved through various programs and activities designed to
                include parents in the educational journey and school
                decision-making processes.
              </p>
            </div>
            <div>
              <RiCommunityFill className="w-10 h-10 mb-2 text-primary md:w-12 md:h-12" />
              <h3 className="mb-2 text-2xl font-bold dark:text-white">
                Community Partnerships
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Collaborate with local organizations and businesses to enhance
                student programs and school initiatives, strengthening ties with
                the wider community.
              </p>
            </div>
            <div>
              <MdVolunteerActivism className="w-10 h-10 mb-2 text-primary md:w-12 md:h-12" />
              <h3 className="mb-2 text-2xl font-bold dark:text-white">
                Volunteer Opportunities
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Explore various ways to contribute your time and skills to
                support our school’s mission and enhance the educational
                experience for all students.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-2xl my-4 mx-auto p-2">
          <div className="border border-indigo-500 p-4 md:p-6 rounded-lg text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need to know more about us?
            </h2>

            <p className="text-lg mb-4 text-gray-700">Reach out to us</p>
            <div className="mt-6">
              <Link href="/contact">
                <Button
                  className="relative box-border inline-flex h-12 cursor-pointer touch-manipulation items-center justify-center overflow-hidden whitespace-nowrap rounded-md border-0 bg-gradient-to-r from-sky-500 to-primary px-4 font-mono leading-none text-white no-underline shadow-[rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,rgba(58,65,111,0.5)_0_-3px_0_inset] transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-[rgba(45,35,66,0.4)_0_4px_8px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#3c4fe0_0_-3px_0_inset] focus:shadow-[#3c4fe0_0_0_0_1.5px_inset,rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#3c4fe0_0_-3px_0_inset] active:translate-y-0.5 active:shadow-[#3c4fe0_0_3px_7px_inset]"
                  role="button"
                >
                  Contact us
                </Button>
              </Link>
            </div>

            <p className="text-sm py-2 text-gray-500">
              We will be glad to help.
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
