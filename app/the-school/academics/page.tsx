import PageWrapper from "@/components/Container/PageWrapper";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  GraduationCap,
  Users,
  Calendar,
  Award,
  Globe,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { DivEvent } from "@tsparticles/engine";

interface Department {
  id: number;
  name: string;
  head: string;
  description: string;
  courses: string[];
  faculty: string[];
}

const departments: Department[] = [
  {
    id: 1,
    name: "Mathematics",
    head: "Dr. John Doe",
    description:
      "Focusing on developing critical thinking and problem-solving skills.",
    courses: ["Algebra", "Calculus", "Geometry", "Statistics"],
    faculty: ["Jane Smith", "Alice Johnson", "Robert Brown"],
  },
  {
    id: 2,
    name: "Science",
    head: "Dr. Emily White",
    description:
      "Offering a range of courses in Physics, Chemistry, and Biology.",
    courses: ["Physics", "Chemistry", "Biology", "Environmental Science"],
    faculty: ["Mark Wilson", "Linda Green", "Paul Adams"],
  },
  {
    id: 3,
    name: "Languages",
    head: "Dr. Nancy Lee",
    description:
      "Providing a comprehensive curriculum in English, French, and Spanish.",
    courses: ["English Literature", "French", "Spanish"],
    faculty: ["Michael Scott", "Sarah Connor", "Timothy Edwards"],
  },
  {
    id: 4,
    name: "History",
    head: "Dr. Richard Moore",
    description:
      "Teaching history from ancient to modern times, fostering analytical skills.",
    courses: ["World History", "American History", "Ancient Civilizations"],
    faculty: ["Christina James", "Tom Harris", "Emily Davis"],
  },
];

export default function AcademicsPage() {
  return (
    <PageWrapper>
      <div className="py-8 md:py-20">
        <div className="max-w-[1400px] mx-auto px-2 py-10">
          <div className="relative overflow-hidden group h-[350px] md:h-[700px] bg-primary card-hidden">
            <Image
              src="https://images.unsplash.com/photo-1544830281-1d5169d6b2af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Academic background"
              layout="fill"
              objectFit="cover"
              className="transition-all delay-300 duration-400 ease-in group-hover:scale-105"
            />
            <div className="absolute p-8 z-40 gap-4 flex flex-col justify-end bg-opacity-45 h-full w-full bottom-0">
              <span className="text-[20px] sm:text-[24px] text-white md:text-[28px] font-canela">
                Welcome to Our Academics
              </span>
              <p className="group-hover:block text-white text-[14px] hidden">
                Empowering students through diverse academic programs that
                nurture critical thinking, creativity, and lifelong learning.
              </p>
              <Link href="/contact" className="flex items-center gap-2">
                <div className="flex group-hover:bg-secondary justify-center items-center rounded-full bg-primary min-h-10 min-w-10 max-h-10 max-w-10">
                  <Image
                    src="https://images.unsplash.com/photo-1544830281-1d5169d6b2af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={28}
                    height={32}
                    alt="Academic icon"
                    className="rounded-full overflow-hidden"
                  />
                </div>
                <h2 className="font-bold text-[16px] text-white">
                  Academics Page
                </h2>
              </Link>
            </div>
            <div className="absolute transition-all duration-400 ease-in bg-gradient-to-b from-transparent to-black min-h-[650px] text-white bottom-0 group-hover:bottom-0 group-hover:min-h-[900px] w-full z-30"></div>
          </div>

          {/* Curriculum Overview */}
          <section className="mb-16 py-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Curriculum Overview
            </h2>
            <p className="custom-paragraph mb-6">
              Our curriculum is designed to provide a comprehensive education
              experience that prepares students for college and future careers.
              We offer a range of subjects including Mathematics, Science,
              English, Social Studies, and Arts.
            </p>
            <div className="flex flex-wrap gap-4 p-6 justify-center text-lg font-serif">
              <div className="flex-grow border-l-8 border-primary rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12 bg-zinc-100 dark:bg-gray-900">
                Mathematics
                <div className="text-gray-500 font-thin text-sm pt-1">
                  <span className="text-xl">
                    Algebra, Geometry, Calculus, Statistics
                  </span>
                </div>
              </div>
              <div className="flex-grow border-l-8 border-primary rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12 bg-zinc-100 dark:bg-gray-900">
                Science
                <div className="text-gray-500 font-thin text-sm pt-1">
                  <span className="text-xl">
                    Biology, Chemistry, Physics, Environmental Science
                  </span>
                </div>
              </div>
              <div className="flex-grow border-l-8 border-primary rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12 bg-zinc-100 dark:bg-gray-900">
                English
                <div className="text-gray-500 font-thin text-sm pt-1">
                  <span className="text-xl">
                    Literature, Writing, Journalism, Creative Writing
                  </span>
                </div>
              </div>
              <div className="flex-grow border-l-8 border-primary rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12 bg-zinc-100 dark:bg-gray-900">
                Social Studies
                <div className="text-gray-500 font-thin text-sm pt-1">
                  <span className="text-xl">
                    History, Geography, Economics, Civics
                  </span>
                </div>
              </div>
              <div className="flex-grow border-l-8 border-primary rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12 bg-zinc-100 dark:bg-gray-900">
                Arts
                <div className="text-gray-500 font-thin text-sm pt-1">
                  <span className="text-xl">
                    Visual Arts, Music, Theater, Dance
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Academic Excellence */}
          <section className="w-full py-10 md:py16">
            <div className="px-4 md:px-6">
              <h2 className="text-center text-2xl md:text-5xl font-bold mb-8 text-gray-800 dark:text-white">
                Empowering Students Through Quality Education and Holistic
                Development
              </h2>

              <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                <Card>
                  <CardHeader>
                    <BookOpen className="w-8 h-8 mb-2" />
                    <CardTitle>Academic Excellence</CardTitle>
                    <CardDescription className="custom-paragraph2">
                      Providing a well-rounded education to prepare students for
                      their future.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Kenya Certificate of Secondary Education (KCSE)</li>
                      <li>
                        STEM Education (Science, Technology, Engineering,
                        Mathematics)
                      </li>
                      <li>Languages and Literature</li>
                      <li>Social Sciences and Humanities</li>
                      <li>Computer Studies and ICT</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Users className="w-8 h-8 mb-2" />
                    <CardTitle>Experienced and Supportive Teachers</CardTitle>
                    <CardDescription className="custom-paragraph2">
                      Learn from committed educators who inspire and guide every
                      student.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Our teachers are highly qualified and dedicated to
                      nurturing every student's potential, providing
                      personalized support and encouragement to excel both
                      academically and in life skills.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <GraduationCap className="w-8 h-8 mb-2" />
                    <CardTitle>
                      Co-curricular and Extracurricular Activities
                    </CardTitle>
                    <CardDescription className="custom-paragraph2">
                      A wide range of clubs, sports, and cultural activities to
                      enhance student growth.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Sports: Football, Basketball, Rugby, Athletics</li>
                      <li>Clubs: Drama, Debate, Science Club, Music</li>
                      <li>Community Service and Volunteering</li>
                      <li>Scouting and Girl Guides</li>
                      <li>Environmental Conservation Initiatives</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Departments */}
          <section className="py-12 md:py-24 lg:py-32">
            <h1 className="text-2xl md:text-5xl font-bold text-center mb-10">
              School Departments
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((department) => (
                <div key={department.id} className=" shadow-md rounded-lg p-6">
                  <h2 className="text-2xl font-semibold mb-2">
                    {department.name}
                  </h2>
                  <h3 className="text-md font-medium text-gray-600 dark:text-gray-400 mb-4">
                    Head: {department.head}
                  </h3>
                  <p className="custom-paragraph2 0 mb-4">
                    {department.description}
                  </p>
                  <h4 className="text-lg font-medium mb-2">Courses Offered:</h4>
                  <ul className="list-disc list-inside mb-4">
                    {department.courses.map((course, index) => (
                      <li key={index}>{course}</li>
                    ))}
                  </ul>
                  <h4 className="text-lg font-medium mb-2">Faculty Members:</h4>
                  <ul className="list-disc list-inside">
                    {department.faculty.map((member, index) => (
                      <li key={index}>{member}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Academic Support */}
          <section className="mb-16">
            <div className="lg:col-start-2 space-y-3">
              <h4 className="mt-2 text-2xl font-extrabold leading-8 sm:text-3xl sm:leading-9">
                Academic Support & Resources
              </h4>
              <p className="custom-paragraph">
                We provide a range of support services to help students succeed
                academically, including tutoring, study groups, and access to
                library resources.
              </p>
              <ul className=" space-y-3 font-medium">
                <li className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="ml-3 leading-5 custom-paragraph2">
                    Peer Tutoring Program
                  </p>
                </li>
                <li className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="ml-3 leading-5 custom-paragraph2">
                    Study Skills Workshops
                  </p>
                </li>
                <li className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="ml-3 leading-5 custom-paragraph2">
                    Online Learning Resources
                  </p>
                </li>
                <li className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="ml-3 leading-5 custom-paragraph2">
                    Access to Library and Research Tools
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* Extracurriculars */}
          <section className="mb-16">
            <div className="space-y">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Extracurricular Academics
              </h2>
              <p className="custom-paragraph mb-6">
                Beyond the classroom, we encourage students to engage in
                academic clubs and competitions to further their learning
                experience.
              </p>
              <ul className="list-disc list-inside space-y-2 custom-paragraph2">
                <li>Math Club, Science Club, Debate Team</li>
                <li>Robotics Team, Model United Nations</li>
                <li>National Honor Society</li>
              </ul>
              <p className="custom-paragraph mb-4">
                For more information about our Extracurricular programs, please
                got to Extracurricular page here.
              </p>
              <div className="mt-6">
                <Link href="/the-school/extracurricular">
                  <Button
                    className="relative box-border inline-flex h-12 cursor-pointer touch-manipulation items-center justify-center overflow-hidden whitespace-nowrap rounded-md border-0 bg-gradient-to-r from-sky-500 to-primary px-4 font-mono leading-none text-white no-underline shadow-[rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,rgba(58,65,111,0.5)_0_-3px_0_inset] transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-[rgba(45,35,66,0.4)_0_4px_8px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#3c4fe0_0_-3px_0_inset] focus:shadow-[#3c4fe0_0_0_0_1.5px_inset,rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#3c4fe0_0_-3px_0_inset] active:translate-y-0.5 active:shadow-[#3c4fe0_0_3px_7px_inset]"
                    role="button"
                  >
                    Extracurricular Page
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Contact Information
            </h2>
            <p className="custom-paragraph mb-4">
              For more information about our academic programs, please contact
              the school.
            </p>
            <div className="mt-6">
              <Link href="/contact">
                <Button
                  className="relative box-border inline-flex h-12 cursor-pointer touch-manipulation items-center justify-center overflow-hidden whitespace-nowrap rounded-md border-0 bg-gradient-to-r from-sky-500 to-primary px-4 font-mono leading-none text-white no-underline shadow-[rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,rgba(58,65,111,0.5)_0_-3px_0_inset] transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-[rgba(45,35,66,0.4)_0_4px_8px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#3c4fe0_0_-3px_0_inset] focus:shadow-[#3c4fe0_0_0_0_1.5px_inset,rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#3c4fe0_0_-3px_0_inset] active:translate-y-0.5 active:shadow-[#3c4fe0_0_3px_7px_inset]"
                  role="button"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </PageWrapper>
  );
}
