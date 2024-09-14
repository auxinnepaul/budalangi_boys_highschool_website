import PageWrapper from "@/components/Container/PageWrapper";
import { TextEffect } from "@/components/motion-primitives/text-effects";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Theater, Basketball, Football, Rugby, TableTennis, Running } from "lucide-react"
import Image from "next/image";
import Link from "next/link";

export default function ExtracurricularActivitiesPage() {
  return (
    <PageWrapper>
      <div className=" py-12 md:py-36">
        <section className="relative overflow-hidden border-b w-full dark:border-gray-700 dark:bg-black">
          <div className="px-6 py-8 sm:px-6 md:py-20">
            <div className="max-w-2xl mx-auto text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Beyond Academics
                </h1>
                <TextEffect
                  per="word"
                  as="h3"
                  preset="slide"
                  className="mt-4 text-lg md:text-xl text-gray-600 dark:text-white max-w-3xl mx-auto"
                >
                  Discover how our school has become a game-changer in regional
                  and national competitions, fostering talent and building
                  champions.
                </TextEffect>
              </div>
            </div>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 z-10 top-1/2  h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fill-opacity="0.7"
            ></circle>
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stop-color="#3b82f6"></stop>
                <stop offset="1" stop-color="#1d4ed8"></stop>
              </radialGradient>
            </defs>
          </svg>
        </section>

        <section id="activities" className="w-full py-12 md:py-40">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-start">
            Our Curricular Activities
          </h2>
          <div className="relative z-40 mx-auto mt-12">
            <div className="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
              <div className="block w-full py-10 text-start border lg:w-1/3">
                <Card className="border border-none bg-white dark:bg-black">
                  <CardHeader>
                    {/* <Theater className="w-8 h-8 mb-2" /> */}
                    <CardTitle>Drama</CardTitle>
                    <CardDescription>
                      Unleashing creativity on stage
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Our drama program has become a beacon of artistic
                      expression in the region. Students have the opportunity to
                      explore various aspects of theater, from acting to stage
                      design. Our annual productions have garnered critical
                      acclaim, with our students winning multiple awards at the
                      National Schools Drama Festival. The confidence and public
                      speaking skills developed here have proven invaluable in
                      all areas of our students' lives.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="block w-full py-10 text-start border lg:w-1/3">
                <Card className="border border-none bg-white dark:bg-black">
                  <CardHeader>
                    {/* <Basketball className="w-8 h-8 mb-2" /> */}
                    <CardTitle>Basketball</CardTitle>
                    <CardDescription>Shooting for excellence</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Our basketball teams have become a force to be reckoned
                      with, both in boys' and girls' categories. With
                      state-of-the-art facilities and dedicated coaching, we've
                      nurtured several players who have gone on to play at
                      national levels. Our annual inter-school tournament
                      attracts talent scouts from across the country, opening
                      doors for our students to pursue sports scholarships and
                      professional careers.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="block w-full py-10 text-start border lg:w-1/3">
                <Card className="border border-none bg-white dark:bg-black">
                  <CardHeader>
                    {/* <Football className="w-8 h-8 mb-2" /> */}
                    <CardTitle>Football</CardTitle>
                    <CardDescription>
                      Kicking goals, on and off the field
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Football at our school is more than just a game; it's a
                      passion that unites our community. Our teams have
                      consistently reached regional finals and have twice been
                      crowned national champions in the last five years. The
                      discipline, teamwork, and strategic thinking fostered on
                      the football field have helped our students excel in their
                      academic pursuits as well.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="block w-full py-10 text-start border lg:w-1/3">
                <Card className="border border-none bg-white dark:bg-black">
                  <CardHeader>
                    {/* <Rugby className="w-8 h-8 mb-2" /> */}
                    <CardTitle>Rugby</CardTitle>
                    <CardDescription>
                      Building strength and character
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Our rugby program has grown from strength to strength,
                      becoming a cornerstone of our school's sporting
                      achievement. With a focus on technique, fitness, and
                      sportsmanship, we've developed a reputation for producing
                      well-rounded players. Our teams have represented the
                      region in national tournaments, bringing home trophies and
                      invaluable experiences that shape our students'
                      characters.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="block w-full py-10 text-start border lg:w-1/3">
                <Card className="border border-none bg-white dark:bg-black">
                  <CardHeader>
                    {/* <TableTennis className="w-8 h-8 mb-2" /> */}
                    <CardTitle>Table Tennis</CardTitle>
                    <CardDescription>
                      Mastering precision and agility
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Table tennis might seem like a niche sport, but at our
                      school, it's a beloved tradition. Our dedicated training
                      program has produced regional champions and national
                      contenders. The focus, quick decision-making, and hand-eye
                      coordination developed through table tennis have proven
                      beneficial in improving our students' overall academic
                      performance and concentration.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="block w-full py-10 text-start border lg:w-1/3">
                <Card className="border border-none bg-white dark:bg-black">
                  <CardHeader>
                    {/* <Running className="w-8 h-8 mb-2" /> */}
                    <CardTitle>Athletics</CardTitle>
                    <CardDescription>Sprinting towards success</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Our athletics program is the pride of the school, with a
                      track record of producing national-level athletes. From
                      sprints to long-distance running, javelin to high jump,
                      our students have excelled across disciplines. The
                      dedication and perseverance instilled through athletics
                      have helped our students push boundaries in all aspects of
                      their lives, embodying our school's spirit of continuous
                      improvement.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section id="achievements" className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              Our Proud Achievements
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold">Regional Dominance</h3>
                <p>
                  For the past five years, our school has consistently ranked in
                  the top 3 across all major sports and cultural activities in
                  the region. This unprecedented success has made us the school
                  to beat in inter-school competitions.
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold">National Recognition</h3>
                <p>
                  Our students have represented our school and region in various
                  national-level competitions, bringing home numerous accolades.
                  From drama festivals to athletic meets, our name has become
                  synonymous with excellence.
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold">Individual Stars</h3>
                <p>
                  Several of our alumni have gone on to represent the country in
                  international competitions, including the Olympics. Their
                  success stories serve as an inspiration to our current
                  students, showing them that with hard work and dedication, the
                  sky's the limit.
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold">Community Impact</h3>
                <p>
                  Our success in curricular activities has had a positive ripple
                  effect on the entire community. We've seen increased
                  engagement from parents, local businesses sponsoring our
                  teams, and a general uplift in the area's sporting and
                  cultural scene.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Join Our Winning Team
            </h2>
            <p className="mx-auto max-w-[700px] custom-paragraph mb-8">
              Whether you're a budding athlete, a drama enthusiast, a coach, or
              someone looking to discover their hidden talents, our school
              provides the perfect platform for you to shine. Come be a part of
              our success story!
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
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
