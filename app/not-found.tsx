import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto space-y-3 text-center">
          <h3 className="text-indigo-600 font-semibold">404 Error</h3>
          <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
            Page not found
          </p>
          <p className="text-gray-600">
            Sorry, the page you are looking for could not be found.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button className=" mt-4 hover:text-black hover:bg-white focus:outline-none focus:ring">
              <Link
                href="/"
                className=" inline-block rounded px-5 py-3 text-sm font-medium"
              >
                Go Back Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
