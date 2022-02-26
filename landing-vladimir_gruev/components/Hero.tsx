import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

import { FireIcon } from "@heroicons/react/solid";

const Hero: FunctionComponent = () => {
  return (
    <div>
      <div
        className="flex items-end justify-between"
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        <div
          className="font-poppins w-2/5 mb-10"
          data-aos="slide-right"
          data-aos-duration="1500"
        >
          <h2 className="text-7xl font-semibold leading-tight mb-5 text-gray-800">
            One app the world loves.
          </h2>
          <p
            className="text-lg font-medium text-gray-800"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Open a free account in minutes, right from your phone, and make your
            money go further
          </p>
        </div>

        <div className="w-[80%] -mt-20 mx-auto mr-20">
          <div className="w-[70%] -mt-12 mx-auto">
            <Image
              src="/hero-image.png"
              width={1500}
              height={1500}
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between -mt-3">
        <div className="font-poppins space-x-10 flex items-center">
          <Link href="#">
            <a
              type="button"
              className="font-normal outline-none border-none py-5 px-9 rounded-lg bg-[#52784f] text-[14px] text-gray-300 focus:ring-2 focus:outline-none ring-offset-2 focus:ring-[#52784f] "
            >
              Get started
            </a>
          </Link>

          <Link href="#">
            <a className="text-[15px] flex items-center text-gray-700 font-medium space-x-2 ">
              <div className="w-6 h-6 bg-[#f4d2eb] relative rounded-full">
                <FireIcon className="w-7 h-7 absolute right-2 bottom-0 text-black" />
              </div>

              <h5 className="text-sm text-gray-700">Now it's free</h5>
            </a>
          </Link>
        </div>

        <div
          className="flex items-center space-x-10 font-poppins"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h5 className="uppercase text-[10px] text-gray-700 tracking-[1em] font-bold">
            aws / facebook / ibm / microsoft
          </h5>

          <div className="w-28 shaped-smile">
            <Image
              src="/smile.png"
              width={1000}
              height={1000}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
