import { FunctionComponent, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { CheckIcon } from "@heroicons/react/solid";

const HeroSession: FunctionComponent = () => {
  return (
    <div className="mb-28">
      <div className="grid grid-cols-2">
        <div className="inline-block">
          {/* Hero Title */}
          <div
            className="font-poppins text-7xl font-semibold flex items-end mb-10"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="" data-aos="fade-left" data-aos-duration="1500">
              Discover thousands of keywords
            </h2>
          </div>

          {/* Hero desc */}
          <div
            className="w-4/5 mb-10"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div>
              <p
                className="text-xl text-gray-700 font-poppins blinking-cursor h-32 font-medium"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                The most powerful rank tracker in the indurstry. Track thousands
                to millions of keywords across any location.
              </p>
            </div>

            <div className="space-y-2 font-poppins">
              <div className="flex space-x-2 items-center">
                <CheckIcon className="w-5 text-gray-800" />
                <p className="text-gray-800  text-xl font-medium">
                  SEO solution to help you rank higher
                </p>
              </div>
              <div className="flex space-x-2 items-center">
                <CheckIcon className="w-5 text-gray-800" />
                <p className="text-gray-800  text-xl font-medium">
                  Drive qualified traffic to your website
                </p>
              </div>
            </div>
          </div>

          <div className="" data-aos="fade-up" data-aos-duration="1000">
            <Link href="#" data-aos="zoom-out" data-aos-duration="1000">
              <a
                type="submit"
                className="bg-blue-600 rounded-full font-poppins outline-none border-none py-3 px-10 focus:ring-offset-1 hover:bg-blue-700 text-white font-light"
              >
                Sign in
              </a>
            </Link>
          </div>
        </div>

        <div className="ml-20" data-aos="fade-up" data-aos-duration="1000">
          <div
            className="w-10/12 mt-5 drop-shadow-2xl"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <Image
              src="/hero-image.png"
              width={1000}
              height={1000}
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSession;
