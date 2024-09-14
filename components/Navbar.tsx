"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { Bird, Contact, AlignRight, X, Phone, Mail } from "lucide-react";
import { Separator } from "./ui/separator";

interface AccordionItem {
  title: string;
  href: string;
}

interface MobileAccordionItemProps {
  title: string;
  items: AccordionItem[];
  onClick: () => void;
}

const aboutUsContents: { title: string; href: string; description: string }[] =
  [
    {
      title: "About Us",
      href: "/aboutUs#aboutUsSection",
      description: "Learn more about who we are and what we stand for.",
    },
    {
      title: "Our Vision, Mission, and Goals",
      href: "/aboutUs#missionVisionGoalSection",
      description: "Read our vision, mission statement, and Our Values.",
    },
  ];

const schoolContents: { title: string; href: string; description: string }[] = [
  {
    title: "Management",
    href: "/the-school/schoolManagement",
    description: "Check out how our school is structured",
  },
  {
    title: "Academics",
    href: "/the-school/academics",
    description: "Explore our diverse academic programs and curriculum.",
  },
  {
    title: "Extracurricular",
    href: "/the-school/extracurricular",
    description: "Discover activities that enhance personal growth and skills.",
  },
  {
    title: "School Life",
    href: "/the-school/schoolLife",
    description:
      "Read about the experiences and vibrant life of our students, teachers, and staff.",
  },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      //   className={cn(
      //     "fixed  top-3 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
      //     isScrolled
      //       ? "bg-neutral-700/25 backdrop-blur-sm shadow-md dark:bg-black/80 dark:bg-opacity-50 h-14 sm:h-16"
      //       : "bg-transparent h-16 sm:h-24",
      //     "py-2 px-4 sm:px-6 lg:px-8"
      //   )}

      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-background/80 backdrop-blur-md h-28 sm:h-32"
          : "bg-background h-24 sm:h-28",
        "py-2 px-4 sm:px-6 lg:px-8"
      )}

      //   className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      //     isScrolled
      //       ? "bg-background/70 backdrop-blur-md h-14 sm:h-16"
      //       : "bg-background h-16 sm:h-24"
      //   }`}
    >
      {/* Top row */}
      <div className="max-w-[1400px] mx-auto flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <Image
                src="/budalangi-logo.png"
                width={1266}
                height={1224}
                alt="logo"
                className="w-10 relative h-10 "
              />
            </div>
            <Link
              href="/"
              className={`font-bold transition-all duration-300 ease-in-out ml-2 ${
                isScrolled ? "text-lg sm:text-xl" : "text-2xl sm:text-3xl"
              }`}
            >
              Budalang'i Boys' High
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center hover:text-blue-200">
              <Phone size={18} className="mr-1" />
              +254 741 312 721
            </div>
            <div className="flex items-center hover:text-blue-200">
              <Mail size={18} className="mr-1" />
              info@budoboyshigh.io
            </div>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <Button
                  variant="outline"
                  className={cn(
                    "bg-transparent ring-1 ring-slate-900/5 shadow-2xl space-y-3  hover:bg-primary hover:ring-sky-500 hover:text-white ",
                    pathname.startsWith("/contact") && "text-primary"
                  )}
                >
                  Contact Us
                </Button>
              </Link>
            </NavigationMenuItem>
          </div>
        </div>
        <Separator className="my-2" />
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="ml-10">
              <p
                className={`font-bold transition-all duration-300 ease-in-out ml-2 ${
                  isScrolled ? "text-base sm:text-lg" : "text-xl sm:text-2xl"
                }`}
              >
                "Be the Light"
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem className="">
                  <Link href="/" legacyBehavior passHref>
                    <Button variant="ghost" className="text-base">
                      Home
                    </Button>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "bg-transparent",
                      pathname.startsWith("/aboutUs") && "text-primary"
                    )}
                  >
                    <Link href="/aboutUs"> About Us</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-background dark:bg-black">
                      {aboutUsContents.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "bg-transparent",
                      pathname.startsWith("/the-school") && "text-primary"
                    )}
                  >
                    <Link href={"/the-school/academics"}>The School</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-background dark:bg-black">
                      {schoolContents.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <Button
                      variant="ghost"
                      className={cn(
                        "bg-transparent",
                        pathname.startsWith("/blog") && "text-primary"
                      )}
                    >
                      Blog
                    </Button>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-2 ">
            <ThemeToggle />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <AlignRight className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] dark:bg-black"
              >
                <ThemeToggle />
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-2 mt-4">
                  <Link href="/" onClick={closeMobileMenu}>
                    <div className="border-b border-border py-1">
                      <h3 className="font-semibold mb-2">Home</h3>
                    </div>
                  </Link>

                  <MobileAccordionItem
                    title="About Us"
                    items={aboutUsContents}
                    onClick={closeMobileMenu}
                  />
                  <MobileAccordionItem
                    title="The School"
                    items={schoolContents}
                    onClick={closeMobileMenu}
                  />

                  <Link
                    href="/blog"
                    onClick={closeMobileMenu}
                    className={cn(
                      "bg-transparent",
                      pathname.startsWith("/blog") && "text-primary"
                    )}
                  >
                    <div className="border-b border-border py-1">
                      <h3 className="font-semibold mb-2">blog</h3>
                    </div>
                  </Link>

                  <Link href="/contact" onClick={closeMobileMenu}>
                    <Button
                      variant="outline"
                      className="font-semibold mb-2 mt-4 text-center w-full"
                    >
                      <Contact className="w-4 h-4 mr-2" />
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-base font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug custom-paragraph2 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const MobileAccordionItem: React.FC<MobileAccordionItemProps> = ({
  title,
  items,
  onClick,
}) => (
  <div className="border-b border-border py-1">
    <h3 className="font-semibold mb-2">{title}</h3>
    <ul className="space-y-1 custom-paragraph2">
      {items.map((item) => (
        <li key={item.title}>
          <Link href={item.href} onClick={onClick}>
            <Button variant="ghost" className="w-full justify-start  text-sm">
              {item.title}
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
