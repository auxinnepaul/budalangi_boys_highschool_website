import PageWrapper from "@/components/Container/PageWrapper";
import { TextEffect } from "@/components/motion-primitives/text-effects";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SchoolLife() {
  return (
    <PageWrapper>
      <div className="py-10 md:py-20">
        <div className="bg-gray-50 dark:bg-black">
          <section>
            <div className="relative">
              <div
                className="absolute m-auto blur-[160px] max-w-xs h-[13rem] top-12 inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #7C3AED 0%, rgba(152, 103, 240, 0.984375) 0.01%, rgba(237, 78, 80, 0.2) 100%)",
                }}
              ></div>
              <div className="relative">
                <div className="custom-screen py-28 relative">
                  <div className="relative z-10 duration-1000 delay-150 opacity-1">
                    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                      <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white">
                          Experience School Life Like Never Before
                        </h1>
                        <TextEffect
                          per="char"
                          preset="fade"
                          className="mt-4 text-lg md:text-xl text-gray-600 dark:text-white max-w-3xl mx-auto"
                        >
                          Explore the dynamic environment where teachers, school
                          workers, and students come together to create a
                          vibrant and supportive community.
                        </TextEffect>
                      </div>
                    </div>
                  </div>
                  <img
                    src="https://i.ibb.co/8D7rcYv/download.webp"
                    width="2880"
                    height="1358"
                    decoding="async"
                    data-nimg="1"
                    className="w-full h-full object-cover m-auto absolute inset-0 pointer-events-none"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold">
                Guided by School Policies and Values
              </h1>
              <p className="mt-2 custom-paragraph max-w-3xl text-center mx-auto">
                At our school, a thriving educational environment is built on a
                foundation of clear policies and shared values. Our commitment
                to excellence, respect, and integrity guides every member of our
                school community—students, teachers, and staff alike.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Core Values and Principles
              </h2>
              <div className="mt-4 custom-paragraph">
                Our core values define how we interact with one another and
                shape the culture of our school. These values are:
                <ul className="list-disc list-inside mt-2">
                  <li>
                    <strong>Respect:</strong> Fostering an environment where
                    everyone is treated with dignity and consideration.
                  </li>
                  <li>
                    <strong>Integrity:</strong> Upholding honesty and ethical
                    behavior in all actions, ensuring trust and accountability.
                  </li>
                  <li>
                    <strong>Excellence:</strong> Striving for excellence in
                    every aspect of our work, from academic achievements to
                    personal growth.
                  </li>
                  <li>
                    <strong>Collaboration:</strong> Valuing teamwork and
                    collaboration, recognizing that working together leads to
                    greater success.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12">
              <h2 className="text-3xl font-bold tracking-tight">
                School Policies
              </h2>
              <div className="mt-4 custom-paragraph">
                Our school policies ensure that our values are translated into
                everyday practices. Key policies include:
                <ul className="list-disc list-inside mt-2">
                  <li>
                    <strong>Behavioral Expectations:</strong> Guidelines for
                    respectful and responsible behavior, promoting a safe and
                    positive learning environment.
                  </li>
                  <li>
                    <strong>Academic Integrity:</strong> Upholding honesty and
                    fairness in academic work, fostering trust and fairness.
                  </li>
                  <li>
                    <strong>Inclusivity and Diversity:</strong> Commitment to
                    creating an inclusive environment where diversity is
                    celebrated.
                  </li>
                  <li>
                    <strong>Health and Safety:</strong> Measures to ensure the
                    well-being of students and staff, including emergency
                    procedures and health guidelines.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12">
              <h2 className="text-3xl font-bold tracking-tight">
                Impact on Daily Interactions
              </h2>
              <div className="mt-4 custom-paragraph">
                These policies and values guide our daily interactions, helping
                us to:
                <ul className="list-disc list-inside mt-2">
                  <li>
                    <strong>Foster a Positive Culture:</strong> Creating a
                    supportive and respectful atmosphere where everyone can
                    thrive.
                  </li>
                  <li>
                    <strong>Promote Effective Communication:</strong> Enabling
                    open and constructive communication between all members of
                    the school community.
                  </li>
                  <li>
                    <strong>Ensure Fairness and Equity:</strong> Maintaining a
                    fair and equitable environment where all individuals are
                    treated with respect.
                  </li>
                  <li>
                    <strong>Support Personal and Academic Growth:</strong>{" "}
                    Upholding high standards and ethical practices to support
                    growth and development.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-20">
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold py-3">
                Our Principal
              </h1>
              <h1 className="text-4xl md:text-5xl font-bold">
                Leading with Vision and Dedication
              </h1>
              <p className="mt-2 text-lg md:text-xl">
                Meet Our Principal, the Visionary Leader Who Ensures Excellence
                in Every Aspect of Our School
              </p>
            </div>
            <div className="dark:bg-zinc-700 rounded-lg shadow-2xl p-6 lg:p-12">
              <div className="text-center">
                <h2 className="text-3xl font-semibold dark:text-white">
                  A Pillar of Excellence
                </h2>
                <p className="mt-4 custom-paragraph dark:text-white">
                  He is the cornerstone of our school's success, guiding us with
                  a clear vision and unwavering commitment. With a focus on both
                  academic excellence and a nurturing environment, the principal
                  oversees daily operations, supports teachers and staff, and
                  ensures that every student receives the best possible
                  education. By fostering a collaborative atmosphere,
                  implementing innovative strategies, and maintaining open
                  communication with parents and the community, our principal
                  ensures that our school thrives and evolves.
                </p>
                <div className="mt-6">
                  <Link href="/the-school/schoolManagement">
                    <Button
                      className="relative box-border inline-flex h-12 cursor-pointer touch-manipulation items-center justify-center overflow-hidden whitespace-nowrap rounded-md border-0 bg-gradient-to-r from-sky-500 to-primary px-4 font-mono leading-none text-white no-underline shadow-[rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,rgba(58,65,111,0.5)_0_-3px_0_inset] transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-[rgba(45,35,66,0.4)_0_4px_8px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#3c4fe0_0_-3px_0_inset] focus:shadow-[#3c4fe0_0_0_0_1.5px_inset,rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#3c4fe0_0_-3px_0_inset] active:translate-y-0.5 active:shadow-[#3c4fe0_0_3px_7px_inset]"
                      role="button"
                    >
                      Read more about our management
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden pt-16 pb-32 space-y-24">
          {/* Teachers' Life at School Section */}
          <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                <div className="text-center mb-12">
                  <h1 className="text-4xl md:text-6xl font-bold">
                    Teachers' Life at School
                  </h1>
                  <p className="mt-2 custom-paragraph">
                    Discover the daily routines, professional growth, and
                    personal stories of our dedicated teachers who inspire and
                    educate our students. Our teachers bring a wealth of
                    experience and passion to the classroom, creating an
                    engaging learning environment that supports both academic
                    and personal development.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">
                    A Day in the Life
                  </h2>
                  <div className="mt-4 custom-paragraph">
                    Our teachers manage a variety of responsibilities each day,
                    ensuring that students receive a rich and supportive
                    educational experience. Their typical day includes:
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        Planning and delivering engaging lessons that cater to
                        diverse learning styles
                      </li>
                      <li>
                        Providing individualized support to students to address
                        their unique needs
                      </li>
                      <li>
                        Collaborating with colleagues to develop and refine
                        curriculum and teaching strategies
                      </li>
                      <li>
                        Participating in school meetings and professional
                        development to stay current with best practices
                      </li>
                      <li>
                        Engaging with parents and guardians to discuss student
                        progress and address any concerns
                      </li>
                    </ul>
                    Through these activities, our teachers create a dynamic and
                    inclusive learning environment where every student can
                    thrive.
                  </div>
                </div>
                <div className="mt-12">
                  <h3 className="text-2xl font-semibold">
                    Professional Growth and Development
                  </h3>
                  <div className="mt-4 custom-paragraph">
                    We are committed to supporting our teachers' professional
                    growth through:
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        <strong>Ongoing Training:</strong> Regular workshops and
                        seminars to enhance teaching skills and knowledge.
                      </li>
                      <li>
                        <strong>Mentorship Programs:</strong> Opportunities for
                        new teachers to receive guidance from experienced
                        educators.
                      </li>
                      <li>
                        <strong>Advanced Degrees and Certifications:</strong>{" "}
                        Support for teachers pursuing further education and
                        specialized certifications.
                      </li>
                      <li>
                        <strong>Professional Learning Communities:</strong>{" "}
                        Collaborative groups where teachers can share best
                        practices and strategies.
                      </li>
                    </ul>
                    These initiatives ensure that our teachers continue to grow
                    professionally and bring innovative approaches to their
                    teaching.
                  </div>
                </div>
                <div className="mt-12">
                  <h3 className="text-2xl font-semibold">
                    Personal Stories and Achievements
                  </h3>
                  <div className="mt-4 custom-paragraph">
                    Our teachers are not only educators but also inspiring
                    individuals with unique stories and accomplishments:
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        <strong>Inspirational Journeys:</strong> Many of our
                        teachers have remarkable backgrounds and experiences
                        that enrich their teaching.
                      </li>
                      <li>
                        <strong>
                          Achievements in and out of the Classroom:
                        </strong>{" "}
                        From publishing educational research to winning teaching
                        awards and contributing to community projects.
                      </li>
                      <li>
                        <strong>Personal Passions:</strong> Teachers often bring
                        their personal interests and hobbies into the classroom,
                        creating a vibrant and engaging learning environment.
                      </li>
                    </ul>
                    These stories and achievements highlight the dedication and
                    passion our teachers bring to their roles, making a
                    significant impact on our school community.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* School Workers' Life at School Section */}
          <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                <div className="text-center mb-12">
                  <h1 className="text-4xl md:text-6xl font-bold">
                    School Workers' Life at School
                  </h1>
                  <p className="mt-2 custom-paragraph">
                    Explore the essential roles of our school workers who ensure
                    the smooth operation and supportive environment of our
                    school. From administrative staff to maintenance personnel,
                    their efforts are crucial in creating a positive and
                    efficient school experience for everyone.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">
                    Behind the Scenes
                  </h2>
                  <div className="mt-4 custom-paragraph">
                    Our school workers are the backbone of our institution,
                    handling a diverse range of responsibilities that keep the
                    school running smoothly. Their roles include:
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        <strong>Administrative Staff:</strong> Managing student
                        records, coordinating school events, and providing
                        support for both staff and students.
                      </li>
                      <li>
                        <strong>Maintenance Personnel:</strong> Ensuring that
                        the school facilities are clean, safe, and
                        well-maintained. This includes handling repairs,
                        managing custodial tasks, and maintaining grounds.
                      </li>
                      <li>
                        <strong>Support Staff:</strong> Assisting in the
                        cafeteria, supervising playground activities, and
                        providing general support to enhance the school
                        environment.
                      </li>
                      <li>
                        <strong>Security Staff:</strong> Keeping the school
                        secure and safe, monitoring the premises, and responding
                        to any emergencies.
                      </li>
                    </ul>
                    Each team member plays a crucial part in creating a
                    welcoming and functional environment for students and staff
                    alike.
                  </div>
                </div>
                <div className="mt-12">
                  <h3 className="text-2xl font-semibold">
                    Key Responsibilities and Contributions
                  </h3>
                  <div className="mt-4 custom-paragraph">
                    The dedicated efforts of our school workers significantly
                    impact the daily experience at our school. Key
                    responsibilities include:
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        <strong>Administrative Efficiency:</strong> Streamlining
                        processes and ensuring effective communication between
                        different departments.
                      </li>
                      <li>
                        <strong>Facility Management:</strong> Maintaining a high
                        standard of cleanliness and functionality in all school
                        facilities.
                      </li>
                      <li>
                        <strong>Event Support:</strong> Assisting with the
                        organization and execution of school events, from
                        academic programs to extracurricular activities.
                      </li>
                      <li>
                        <strong>Safety Measures:</strong> Implementing and
                        overseeing safety protocols to ensure a secure
                        environment for everyone.
                      </li>
                    </ul>
                    Their commitment to excellence and efficiency helps create a
                    supportive and productive school environment where students
                    and staff can thrive.
                  </div>
                </div>
                <div className="mt-12">
                  <h3 className="text-2xl font-semibold">
                    Personal Stories and Achievements
                  </h3>
                  <div className="mt-4 custom-paragraph">
                    The contributions of our school workers extend beyond their
                    professional duties. Many have remarkable personal stories
                    and achievements, such as:
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        <strong>Long-Term Dedication:</strong> Years of
                        dedicated service to the school community, demonstrating
                        unwavering commitment and reliability.
                      </li>
                      <li>
                        <strong>Special Skills and Talents:</strong> Unique
                        skills and talents that enrich the school environment,
                        from organizing community outreach programs to leading
                        school-wide initiatives.
                      </li>
                      <li>
                        <strong>Community Involvement:</strong> Active
                        participation in local community events and projects,
                        further extending their impact beyond the school.
                      </li>
                    </ul>
                    These stories highlight the diverse contributions and
                    personal dedication of our school workers, showcasing their
                    essential role in our school community.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Student Life at School Section */}
          <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                <div className="text-center mb-12">
                  <h1 className="text-4xl md:text-6xl font-bold">
                    Student Life at School
                  </h1>
                  <p className="mt-2 custom-paragraph">
                    Dive into the vibrant student life that encompasses
                    academics, extracurricular activities, social interactions,
                    and personal growth opportunities. Our school provides a
                    nurturing environment where students are encouraged to
                    explore their interests, develop new skills, and build
                    lasting relationships.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">
                    A Holistic Experience
                  </h2>
                  <p className="mt-4 custom-paragraph">
                    Our students engage in a well-rounded experience that
                    integrates rigorous academic coursework with a diverse range
                    of extracurricular activities. This holistic approach
                    supports not only academic achievement but also personal
                    development and social growth.
                  </p>
                </div>
                <div className="mt-12">
                  <h3 className="text-2xl font-semibold">
                    Daily Life and Routine
                  </h3>
                  <div className="mt-4 custom-paragraph">
                    Students start their day with a structured schedule that
                    balances academic classes, physical education, and creative
                    pursuits. Each day includes:
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        Morning assemblies to set a positive tone for the day
                      </li>
                      <li>
                        Core subjects and specialized classes tailored to
                        student interests
                      </li>
                      <li>
                        Scheduled breaks and lunch periods to refresh and
                        socialize
                      </li>
                      <li>
                        Afternoon sessions with a mix of academic and
                        extracurricular activities
                      </li>
                    </ul>
                    This routine fosters discipline, engagement, and a sense of
                    community among students.
                  </div>
                </div>
                <div className="mt-12">
                  <h3 className="text-2xl font-semibold">
                    Student Support Services
                  </h3>
                  <div className="mt-4 custom-paragraph">
                    Our comprehensive support services ensure that every student
                    receives the help they need to thrive:
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        <strong>Academic Counseling:</strong> Personalized
                        guidance to help students navigate their educational
                        journey, set goals, and achieve academic success.
                      </li>
                      <li>
                        <strong>Mental Health Resources:</strong> Access to
                        professional counselors and wellness programs that
                        promote emotional well-being and resilience.
                      </li>
                      <li>
                        <strong>Special Education Services:</strong> Tailored
                        support for students with diverse learning needs,
                        including individualized education plans and specialized
                        instruction.
                      </li>
                      <li>
                        <strong>Health Services:</strong> On-site medical
                        support to address health concerns and promote a healthy
                        school environment.
                      </li>
                    </ul>
                    These services are designed to support every aspect of a
                    student’s development and ensure a positive and productive
                    school experience.
                  </div>
                </div>
                <div className="mt-12">
                  <h3 className="text-2xl font-semibold">
                    Student Achievements and Recognition
                  </h3>
                  <div className="mt-4 custom-paragraph">
                    We celebrate and recognize the outstanding achievements of
                    our students in various fields:
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        <strong>Academic Excellence:</strong> Awards and honors
                        for top academic performers and those who demonstrate
                        exceptional intellectual curiosity and skill.
                      </li>
                      <li>
                        <strong>Athletic Accomplishments:</strong> Recognition
                        of achievements in sports, including championships,
                        individual awards, and sportsmanship.
                      </li>
                      <li>
                        <strong>Artistic and Creative Talents:</strong>{" "}
                        Showcasing contributions in visual arts, music, theater,
                        and other creative disciplines through exhibitions and
                        performances.
                      </li>
                      <li>
                        <strong>Community Service:</strong> Acknowledgment of
                        students who make significant contributions to their
                        communities through volunteer work and service projects.
                      </li>
                    </ul>
                    These recognitions highlight the diverse talents and
                    contributions of our students, fostering a sense of pride
                    and accomplishment.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
