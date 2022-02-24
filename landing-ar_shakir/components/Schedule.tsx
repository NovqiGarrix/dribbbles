import { FunctionComponent } from "react";
import Image from "next/image";

import { ArrowRightIcon } from "@heroicons/react/outline";

const Schedule: FunctionComponent = () => {
  return (
    <div className="grid grid-cols-2 gap-5 items-center mb-10 justify-center">
      <div className="">
        <div
          className="w-3/4 ml-40 drop-shadow-2xl"
          data-aos="slide-right"
          data-aos-duration="1000"
        >
          <Image
            src="/schedule.png"
            width={1000}
            height={1000}
            objectFit="contain"
          />
        </div>
      </div>

      <div className="block font-poppins w-8/12 px-2">
        <h5
          className="text-orange-400 text-lg font-bold tracking-wide uppercase mb-2"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Schedule
        </h5>

        <h2
          className="text-gray-700 text-4xl font-semibold mb-8"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Great customer relationship starts here
        </h2>

        <p
          className="text-gray-400 font-medium mb-12"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          80 days around the world, we'll find a pot of gold just sitting where
          the rainbow's ending. Time - we'll fight against the time, and we'll
          fly on the white wings of the wind.
        </p>

        <div className="flex items-center space-x-10 font-semibold text-base text-blue-500">
          <p>Learn more about publishing</p>
          <ArrowRightIcon className="w-5" />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
