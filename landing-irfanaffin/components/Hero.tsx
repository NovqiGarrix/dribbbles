import { FunctionComponent } from "react";
import Image from "next/image";

import { PlayIcon } from "@heroicons/react/solid";
import { CheckIcon } from "@heroicons/react/outline";

const Hero: FunctionComponent = () => {
  return (
    <div className="bg-gradient-to-tr from-gray-50 to-[#f9eff9] w-full flex items-center px-32 justify-between py-16">
      <div className="w-[75%]">
        <div
          className="font-poppins"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h5
            className="mb-3 text-base font-semibold text-gray-800"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Collect your trending NFT's
          </h5>

          <h2
            className="text-5xl font-semibold mb-10"
            data-aos="slide-right"
            data-aos-duration="1000"
          >
            Discover & Collect{" "}
            <span
              className="text-[#7a1a7b] leading-relaxed"
              data-aos="zoom-out"
              data-aos-duration="1000"
            >
              Extraordinary
            </span>{" "}
            Digital Art and Rare NFT's 🎯🔥
          </h2>

          <p
            className="text-[15px] text-gray-600 w-[75%] mb-7"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Get started with the easiest and most secure palform to buy and
            trade digital art and NFT's
          </p>
        </div>

        <div
          className="flex items-center space-x-6 mb-12"
          data-aos="fade"
          data-aos-duration="1000"
        >
          <button
            type="button"
            data-aos="slide-right"
            data-aos-duration="1000"
            className="focus:ring-2 focus:ring-offset-2 focus:ring-[#7a1a7b] bg-gradient-to-r from-[#7a1a7b] to-[#8032bb] hover:shadow-lg shadow-gray-50 px-10 text-gray-100 py-4 font-normal font-poppins  text-[14px] rounded-full duration-150"
          >
            Explore More
          </button>

          <button
            type="button"
            data-aos="slide-left"
            data-aos-duration="1000"
            className="hover:ring-2 hover:ring-offset-2 hover:ring-[#7a1a7b] flex items-center space-x-3 group pr-5 py-1 hover:bg-white hover:rounded-full transition-all duration-150"
          >
            <div className="px-2 py-2 bg-white rounded-full group-hover:rounded-l-full group-hover:rounded-r-none group-hover:pl-4 transition-all duration-150">
              <PlayIcon className="text-gray-900 w-6 h-6" />
            </div>

            <span className="text-gray-900 font-semibold font-poppins text-[14px]">
              Watch Video
            </span>
          </button>
        </div>

        <div
          className="flex items-center space-x-8"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="relative -space-x-4 inline-flex items-center">
            <div
              className="w-10"
              data-aos="slide-right"
              data-aos-duration="1000"
            >
              <Image
                src="/nft-profile-skull-skate.png"
                width={1000}
                height={1000}
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div
              className="w-10"
              data-aos="slide-right"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <Image
                src="/nft-profile-red-boy.png"
                width={1000}
                height={1000}
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div
              className="w-10"
              data-aos="slide-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <Image
                src="/nft-profile-skull.png"
                width={1000}
                height={1000}
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div
              className="w-10"
              data-aos="slide-right"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <Image
                src="/nft-profile-yellow-guy.png"
                width={1000}
                height={1000}
                objectFit="cover"
                className="rounded-full"
              />
            </div>

            <span className="-right-2 bottom-1 absolute bg-gradient-to-b rounded-full from-orange-500 via-orange-500 to-yellow-200 px-1 py-1">
              <CheckIcon className="w-3 text-white" />
            </span>
          </div>

          <div className="block" data-aos="slide-left" data-aos-duration="1000">
            <h5 className="text-gray-800 text-[14px] font-poppins font-bold">
              25+
            </h5>
            <h5 className="text-gray-500 font-poppins font-medium text-[14px]">
              The Best NFT Authors
            </h5>
          </div>
        </div>
      </div>

      <div className="ml-20" data-aos="zoom-out" data-aos-duration="1500">
        <div className="w-[84%]" data-aos="fade-up" data-aos-duration="1000">
          <Image
            src="/hero-image.png"
            width={1000}
            height={1000}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
