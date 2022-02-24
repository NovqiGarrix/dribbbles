import { FunctionComponent } from "react";
import Image from "next/image";

import { ArrowRightIcon } from "@heroicons/react/outline";

const Monitor: FunctionComponent = () => {
  return (
    <div className="flex items-center mb-10 justify-center w-full">
      <div className="block font-poppins px-2 w-1/3">
        <h5
          className="text-green-500 text-lg font-bold tracking-wide uppercase mb-2"
          data-aos="slide-right"
          data-aos-duration="1500"
        >
          Monitor
        </h5>

        <h2
          className="text-gray-700 text-4xl font-semibold mb-8"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Introducing best mobile carousels
        </h2>

        <p
          className="text-gray-400 font-medium mb-12"
          data-aos="fade"
          data-aos-duration="1500"
        >
          Before this ship is really back. Round, round, all around the world.
          Round, round, all around the world. Round, round, all around the
          world.
        </p>

        <div
          className="flex items-center space-x-10 font-semibold text-base text-blue-500"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <p>Learn more about publishing</p>
          <ArrowRightIcon className="w-5" />
        </div>
      </div>

      <div className="w-2/5">
        <div className="w-full drop-shadow-2xl">
          <Image
            src="/monitor.png"
            width={1000}
            height={1000}
            objectFit="contain"
            data-aos="slide-left"
            data-aos-duration="1500"
          />
        </div>
      </div>
    </div>
  );
};

export default Monitor;
