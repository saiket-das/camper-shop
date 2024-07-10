import { Link } from "react-router-dom";
import AppRoutes from "../../../utils/AppRoutes";

const Hero = () => {
  return (
    <div className="relative isolate px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-20 sm:py-12 md:py-12 lg:py-20">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Adventure awaits. Gear up now!{" "}
            <a href="#" className="font-semibold text-primary">
              <span aria-hidden="true" className="absolute inset-0" />
              Shop Now <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Unleash{" "}
            <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
              Your Spirit
            </span>{" "}
            of Adventure
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore our selection and get ready to embrace the beauty of nature.
            Your next adventure starts here!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to={AppRoutes.PRODUCTS}
              className="rounded-md bg-primary px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </Link>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
