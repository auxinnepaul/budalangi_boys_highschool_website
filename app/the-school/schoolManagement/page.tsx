import React from "react";
import Image from "next/image";
import {
  Briefcase,
  GraduationCap,
  Users,
  Calendar,
  Book,
  Award,
  ChevronDown,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/Container/PageWrapper";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface HierarchyLevel {
  title: string;
  description: string;
}

interface HierarchyNodeProps {
  title: string;
  small?: boolean;
  extraSmall?: boolean;
}

export default function SchoolManagement() {
  const features: Feature[] = [
    {
      icon: Briefcase,
      title: "Administrative Oversight",
      description: "Efficient management of school operations and policies",
    },
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description:
        "Fostering a culture of high academic standards and achievement",
    },
    {
      icon: Users,
      title: "Staff Development",
      description: "Continuous professional growth for teachers and staff",
    },
    {
      icon: Calendar,
      title: "Strategic Planning",
      description: "Long-term vision and goal-setting for school improvement",
    },
    {
      icon: Book,
      title: "Curriculum Leadership",
      description: "Guiding the development and implementation of curriculum",
    },
    {
      icon: Award,
      title: "Student Success",
      description: "Promoting a positive learning environment for all students",
    },
  ];

  return (
    <PageWrapper>
      <section className="py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-2">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              School Management
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
              Led by Our Esteemed Principal
            </p>
            <p className="mt-4 max-w-2xl custom-paragraph lg:mx-auto">
              Guiding our school towards excellence through visionary leadership
              and dedicated management.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <CardContent className="relative p-6 bg-white rounded-lg shadow-xl transition duration-200 group-hover:scale-105">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 text-indigo-600">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold leading-7 sm:text-3xl sm:truncate">
                  Meet Our Principal: Dr. James Baraza
                </h2>
                <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                  <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-white">
                    <GraduationCap
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-white"
                      aria-hidden="true"
                    />
                    Ph.D. in Educational Leadership
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-white">
                    <Briefcase
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-white"
                      aria-hidden="true"
                    />
                    20+ Years of Experience
                  </div>
                </div>
              </div>
              <div className="mt-5 flex lg:mt-0 lg:ml-4">
                <span className="hidden sm:block">
                  <Button variant="outline">View Profile</Button>
                </span>
              </div>
            </div>
            <div className="mt-8 lg:flex lg:items-center">
              <div className="lg:flex-shrink-0">
                <Image
                  alt="principal"
                  src="https://images.unsplash.com/photo-1637684666451-423047d6bf5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByaW5jaXBhbHxlbnwwfHwwfHx8MA%3D%3D"
                  width={2432}
                  height={1442}
                  className="h-64 w-64 rounded-full object-cover mx-auto lg:mx-0"
                />
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-8">
                <p className="text-lg text-gray-500 dark:text-white italic">
                  "Our goal is to create a nurturing environment where every
                  student can thrive academically, socially, and emotionally.
                  Through collaborative efforts with our dedicated staff,
                  supportive parents, and the wider community, we are committed
                  to preparing our students for future success and instilling in
                  them a lifelong love for learning."
                </p>
              </div>
            </div>
          </div>

          {/* Hierarchy Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-extrabold text-center mb-12">
              School Hierarchy
            </h2>
            <div className="container mx-auto px-4 py-8">
              <div className="relative wrap overflow-hidden">
                <div className="border-2-2 absolute border-opacity-20 border-gray-700 dark:border-zinc-600 h-full border left-1/2"></div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-12 h-12 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white">
                      1
                    </h1>
                  </div>
                  <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                    <h3 className="mb-3 font-bold text-gray-800 text-xl">
                      Principal
                    </h3>
                    <p className="text-gray-700 leading-tight">
                      Overall leadership and management of the school.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-12 h-12 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white">
                      2
                    </h1>
                  </div>
                  <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                    <h3 className="mb-3 font-bold text-gray-800 text-xl">
                      Deputy Principal
                    </h3>
                    <p className="text-gray-700 leading-tight">
                      In charge of discipline and deputizes the principal.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-12 h-12 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white">
                      3
                    </h1>
                  </div>
                  <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                    <h3 className="mb-3 font-bold text-gray-800 text-xl">
                      Heads of Departments
                    </h3>
                    <p className="text-gray-700 leading-tight">
                      Manage specific academic departments.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-12 h-12 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white">
                      4
                    </h1>
                  </div>
                  <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                    <h3 className="mb-3 font-bold text-gray-800 text-xl">
                      Section Heads
                    </h3>
                    <p className="text-gray-700 leading-tight">
                      Oversee areas like dormitory, games, etc.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-12 h-12 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white">
                      5
                    </h1>
                  </div>
                  <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                    <h3 className="mb-3 font-bold text-gray-800 text-xl">
                      Class Teachers
                    </h3>
                    <p className="text-gray-700 leading-tight">
                      Manage individual classes and student welfare.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-12 h-12 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white">
                      6
                    </h1>
                  </div>
                  <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                    <h3 className="mb-3 font-bold text-gray-800 text-xl">
                      School Captain
                    </h3>
                    <p className="text-gray-700 leading-tight">
                      Lead student representative.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-12 h-12 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white">
                      7
                    </h1>
                  </div>
                  <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                    <h3 className="mb-3 font-bold text-gray-800 text-xl">
                      Deputy School Captain
                    </h3>
                    <p className="text-gray-700 leading-tight">
                      Assists the school captain in duties.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-12 h-12 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white">
                      8
                    </h1>
                  </div>
                  <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                    <h3 className="mb-3 font-bold text-gray-800 text-xl">
                      Prefects
                    </h3>
                    <p className="text-gray-700 leading-tight">
                      Student leaders with specific responsibilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Hierarchy Diagram */}
          <div className="mt-24">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
              Organizational Structure
            </h2>
            <div className="flex justify-center">
              <Card className="p-8 max-w-[1400px] w-full dark:bg-black">
                <HierarchyTree />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

function HierarchyTree() {
  return (
    <div className="flex flex-col items-center">
      <HierarchyNode title="Principal" />
      <HierarchyLine />
      <HierarchyNode title="Deputy Principal" />
      <HierarchyLine />
      <div className="flex justify-center w-full">
        <div className="flex flex-col items-center mx-4">
          <HierarchyNode title="Heads of Departments" small />
          <HierarchyLine />
          <HierarchyNode title="Class Teachers" small />
        </div>
        <div className="flex flex-col items-center mx-4">
          <HierarchyNode title="Section Heads" small />
          <HierarchyLine />
          <div className="flex space-x-2">
            <HierarchyNode title="Dormitory" extraSmall />
            <HierarchyNode title="Games" extraSmall />
          </div>
        </div>
      </div>
      <HierarchyLine />
      <HierarchyNode title="School Captain" />
      <HierarchyLine />
      <HierarchyNode title="Deputy School Captain" />
      <HierarchyLine />
      <div className="flex justify-center w-full space-x-2">
        <HierarchyNode title="Prefects" small />
        <HierarchyNode title="Prefects" small />
        <HierarchyNode title="Prefects" small />
      </div>
    </div>
  );
}

function HierarchyNode({ title, small, extraSmall }: HierarchyNodeProps) {
  const baseClasses =
    "bg-indigo-500 text-white rounded-lg shadow-md flex items-center justify-center text-center p-2 font-semibold";
  const sizeClasses = extraSmall
    ? "w-24 h-12 text-xs"
    : small
    ? "w-32 h-16 text-sm"
    : "w-48 h-20";
  return <div className={`${baseClasses} ${sizeClasses}`}>{title}</div>;
}

function HierarchyLine() {
  return <div className="w-0.5 h-8 bg-indigo-500" aria-hidden="true"></div>;
}
