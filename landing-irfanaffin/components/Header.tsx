import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

import { SocialIcon } from "react-social-icons";

const Header: FunctionComponent = () => {
  return (
    <header className="flex items-center justify-between bg-transparent px-32 py-8 z-30 relative bg-white">
      <div
        className="font-poppins flex items-center space-x-3 w-[11%]"
        data-aos="slide-right"
        data-aos-duration="1000"
      >
        <div className="w-24" data-aos="fade-down" data-aos-duration="1000">
          <Image
            src="/vercel.svg"
            width={1000}
            height={300}
            objectFit="contain"
          />
        </div>
      </div>

      <div className="flex items-center justify-between text-gray-100 font-poppins space-x-12">
        <Link href="/" scroll>
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="cursor-pointer text-[15px] hover:text-black text-gray-800 dark:text-white transition duration-100 font-semibold"
          >
            Explore
          </h2>
        </Link>

        <Link href="/" scroll>
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="cursor-pointer text-[15px] hover:text-black text-gray-800 dark:text-white transition duration-100 font-semibold"
          >
            Stastistics
          </h2>
        </Link>

        <Link href="/" scroll>
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="cursor-pointer text-[15px] hover:text-black text-gray-800 dark:text-white transition duration-100 font-semibold"
          >
            Resources
          </h2>
        </Link>

        <Link href="/" scroll>
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="cursor-pointer text-[15px] hover:text-black text-gray-800 dark:text-white transition duration-100 font-semibold"
          >
            Create
          </h2>
        </Link>
      </div>

      {/* Right Side */}
      <div
        className="flex space-x-3 font-poppins items-center"
        data-aos="zoom-out-up"
        data-aos-duration="1000"
      >
        <Link href="#" passHref data-aos="fade-up" data-aos-duration="1000">
          <a className="text-gray-900 hover:text-black text-[14px] font-light dark:text-white">
            <SocialIcon
              network="twitter"
              fgColor="#000"
              bgColor="#fff"
              className="!w-8 !h-8"
            />
          </a>
        </Link>
        <Link href="#" passHref data-aos="fade-up" data-aos-duration="1000">
          <a className="text-gray-900 hover:text-black text-[14px] font-light dark:text-white">
            <SocialIcon
              network="discord"
              fgColor="#000"
              bgColor="#fff"
              className="!w-8 !h-8"
            />
          </a>
        </Link>
        <Link href="#" passHref data-aos="fade-up" data-aos-duration="1000">
          <a className="text-gray-900 hover:text-black text-[14px] font-light dark:text-white">
            <SocialIcon
              network="telegram"
              fgColor="#000"
              bgColor="#fff"
              className="!w-8 !h-8"
            />
          </a>
        </Link>
        <Link href="#" passHref data-aos="fade-up" data-aos-duration="1000">
          <a className="text-gray-900 hover:text-black text-[14px] font-light dark:text-white">
            <SocialIcon
              network="reddit"
              fgColor="#000"
              bgColor="#fff"
              className="!w-8 !h-8"
            />
          </a>
        </Link>
        <Link href="#" passHref data-aos="fade-up" data-aos-duration="1000">
          <a className="text-gray-900 hover:text-black text-[14px] font-light dark:text-white">
            <SocialIcon
              network="instagram"
              fgColor="#000"
              bgColor="#fff"
              className="!w-8 !h-8"
            />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
