import PageWrapper from "@/components/Container/PageWrapper";
import AchievementsCarousel from "@/components/landingPage/achievementsSection";
import BelowHero from "@/components/landingPage/belowHero";
import CTAsection from "@/components/landingPage/cta";
import FacilitiesSection from "@/components/landingPage/facilitiesSection";
import FeatureSection from "@/components/landingPage/feature";
import HeroSection from "@/components/landingPage/hero";
import StatsSection from "@/components/landingPage/stats";
import { Testimonials } from "@/components/landingPage/Testimonials";
import React from "react";

export default function HomePage() {
  return (
    <PageWrapper>
      <HeroSection />
      <BelowHero />
      <FacilitiesSection />
      <FeatureSection />
      <AchievementsCarousel />
      <StatsSection />
      <Testimonials />
      <CTAsection />
    </PageWrapper>
  );
}
