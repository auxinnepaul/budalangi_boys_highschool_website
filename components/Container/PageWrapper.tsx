import React from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "../ScrollToTop";
// import Footer from "@/components/layout/footer";
// import ScrollButton from "../scrollButton";
// import { ThemeToggleSide } from "../pagesTheme-toggle";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark:bg-black bg-white">
      <Navbar />
      {/* <main className="mx- auto max-w-[1600px] px-2 items-center"> */}
      <main className="mx-auto max-w-[1400px] px-4 items-center py-16 md:py-20">
        {children}
      </main>

      {/* <BreadcrumbLinks />  */}
      {/* <ThemeToggleSide />
      <ScrollButton />
      */}
      {/* <ScrollToTop /> */}
      <Footer />
    </div>
  );
}
