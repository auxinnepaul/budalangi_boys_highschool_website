import React from "react";
import Image from "next/image";
import { FaFlask, FaSchool } from "react-icons/fa6";
import { MdGames } from "react-icons/md";
import { InView } from "../motion-primitives/inView";

const FacilitiesSection = () => {
  return (
    <section className="py-10 md:py-24">
      <div className="px-2 mx-auto max-w-[1400px]">
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="max-w-xl mx-auto text-center">
            <p className="text-sm tracking-widest text-blue-600 dark:text-sky-300 font-bold uppercase">
              A modern School
            </p>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-black dark:text-slate-50 sm:text-4xl lg:text-5xl">
              State-of-the-Art Facilities
            </h2>
            <p>
              Our School is equipped with top-notch facilities that support a
              range of educational and extracurricular activities. We provide an
              environment that fosters learning, creativity, and well-being.
            </p>
          </div>
        </InView>
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
            <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
              <div className="flex items-start">
                <FaSchool className="flex-shrink-0 text-primary w-9 h-9" />
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-black dark:text-slate-50">
                    Modern Classrooms
                  </h3>
                  <p className="mt-3 text-base text-gray-600 dark:text-slate-300">
                    Our classrooms are designed with flexibility and technology
                    in mind, ensuring an engaging and effective learning
                    environment for students.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FaFlask className="flex-shrink-0 text-primary w-9 h-9" />
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-black dark:text-slate-50">
                    Science and Technology Labs
                  </h3>
                  <p className="mt-3 text-base text-gray-600 dark:text-slate-300">
                    Equipped with cutting-edge tools and resources, our labs
                    provide students with hands-on learning experiences in
                    science and technology.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <MdGames className="flex-shrink-0 text-primary w-9 h-9" />
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-black dark:text-slate-50">
                    Recreational Facilities
                  </h3>
                  <p className="mt-3 text-base text-gray-600 dark:text-slate-300">
                    Enjoy our well-maintained sports fields, gymnasium, and
                    recreational areas that support physical fitness and
                    extracurricular activities.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <Image
                className="w-full rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dashboard screenshot"
                width={"1500"}
                height={"1300"}
              />
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
};

export default FacilitiesSection;
