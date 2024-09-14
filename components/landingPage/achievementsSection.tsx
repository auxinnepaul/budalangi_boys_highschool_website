import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";

const achievements = [
  {
    id: 1,
    title: "Best sub-county school",
    description:
      "Our students excelled in the recent national examinations, securing top positions in various subjects across the region.",
  },
  {
    id: 2,
    title: "Inter-School Sports Champions",
    description:
      "The school’s football team won the inter-school sports championship, showcasing skill, teamwork, and dedication.",
  },
  {
    id: 3,
    title: "Science Fair Winners",
    description:
      "Students displayed innovative projects at the regional science fair, winning several accolades for their creativity and innovation.",
  },
  {
    id: 4,
    title: "Best Teachers in the Region",
    description:
      "Our school boasts four of the region's top educators, recognized for their exceptional teaching skills and commitment to student success.",
  },
  {
    id: 5,
    title: "Contest Winners",
    description:
      "Five of our students have excelled in various competitions, demonstrating their outstanding abilities in academics, arts, and sports.",
  },
  {
    id: 6,
    title: "Rugby Champions",
    description:
      "Our rugby team has secured the title of best rugby team in the region, showcasing their strength, agility, and teamwork.",
  },
  {
    id: 7,
    title: "National-Level Music Performers",
    description:
      "Seven of our students have achieved national recognition for their exceptional musical talents, representing our school at the highest level.",
  },
];

export default function AchievementsCarousel() {
  return (
    <section className="py-16 ">
      <div className="max-w-[1400px] mx-auto px-2">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Our Recent Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Celebrating Excellence in Academics, Sports, and Beyond
          </p>
        </div>

        {/* Achievements Carousel */}
        <div className="px-6">
          <Carousel>
            <CarouselContent className="-ml-1">
              {achievements.map((achievement) => (
                <CarouselItem
                  key={achievement.id}
                  className="pl-1 md:basis-1/2 lg:basis-1/3 p-4"
                >
                  <Card className="p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="flex flex-col items-center justify-center space-y-4">
                      <h3 className="text-2xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-2">
                        {achievement.title}
                      </h3>
                      <p className="custom-paragraph text-center max-w-2xl">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* <Carousel className="">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-2xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel> */}
      </div>
    </section>
  );
}
