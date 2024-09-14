import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-blue-900">
      <hr className="w-11/12 mx-auto" />

      <div className="mx-auto px-6 max-w-[1600px] text-white">
        <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link
              rel="noreferrer noopener"
              href="/"
              className="font-bold text-xl flex"
            >
              <Image
                src="/budalangi-logo.png"
                width={1266}
                height={1224}
                alt="logo"
                className="w-20 relative h-20 pr-2"
              />
              Budalangi High School <br /> "Idalangi"
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Follow US</h3>
            <div>
              <a
                rel="noreferrer noopener"
                href="#"
                className="opacity-60 hover:opacity-100"
              >
                Facebook
              </a>
            </div>

            <div>
              <a
                rel="noreferrer noopener"
                href="#"
                className="opacity-60 hover:opacity-100"
              >
                Twitter
              </a>
            </div>

            <div>
              <a
                rel="noreferrer noopener"
                href="#"
                className="opacity-60 hover:opacity-100"
              >
                x
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Platforms</h3>
            <div>
              <a
                rel="noreferrer noopener"
                href="#"
                className="opacity-60 hover:opacity-100"
              >
                Web
              </a>
            </div>

            <div>
              <a
                rel="noreferrer noopener"
                href="#"
                className="opacity-60 hover:opacity-100"
              >
                Mobile
              </a>
            </div>

            <div>
              <a
                rel="noreferrer noopener"
                href="#"
                className="opacity-60 hover:opacity-100"
              >
                Desktop
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">About Us</h3>
            <div>
              <a
                rel="noreferrer noopener"
                href="#"
                className="opacity-60 hover:opacity-100"
              >
                Who we are
              </a>
            </div>

            <div>
              <a
                rel="noreferrer noopener"
                href="#"
                className="opacity-60 hover:opacity-100"
              >
                Mission & Vision
              </a>
            </div>

            <div>
              <a
                rel="noreferrer noopener"
                href="#"
                className="opacity-60 hover:opacity-100"
              >
                What we excel
              </a>
            </div>
          </div>
        </section>

        <Separator />

        <section className=" pb-14 text-center mt-10 ">
          <div className="text-gray-300">
            <div className=" mx-auto px-4 py-4 text-center">
              © {new Date().getFullYear()} Budalang'i Boys High School Name. All
              rights reserved. Made By Auxinne Paul⛵.
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};
