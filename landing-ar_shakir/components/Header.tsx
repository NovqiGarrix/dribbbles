import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

const Header: FunctionComponent = () => {
  return (
    <header className="flex items-center justify-between mb-14">
      <div
        className="relative"
        data-aos="zoom-out"
        data-aos-duration="500"
        data-aos-delay="500"
      >
        <div className="w-20 z-10">
          <Image
            src="/vercel.svg"
            width={1920}
            height={1080}
            objectFit="contain"
            loading="lazy"
          />
        </div>
        <div className="w-20 bg-red-400 h-6 absolute top-7 z-0 filter blur-md opacity-40"></div>
      </div>

      <div className="flex items-center justify-between font-poppins space-x-14">
        <Link href="/" scroll>
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="cursor-pointer text-sm text-gray-500 hover:text-gray-600 transition duration-100 font-semibold"
          >
            About Us
          </h2>
        </Link>
        <Link href="/" scroll>
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            className="cursor-pointer text-sm text-gray-500 hover:text-gray-600 transition duration-100 font-semibold"
          >
            Our Service
          </h2>
        </Link>
        <Link href="/" scroll>
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            className="cursor-pointer text-sm text-gray-500 hover:text-gray-600 transition duration-100 font-semibold"
          >
            The Team
          </h2>
        </Link>
        <Link href="/" scroll>
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
            className="cursor-pointer text-sm text-gray-500 hover:text-gray-600 transition duration-100 font-semibold"
          >
            Portfolio
          </h2>
        </Link>
        <button
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="500"
          className="outline-none border-none py-3 px-5 rounded-full bg-blue-600 text-sm shadow-2xl shadow-blue-200 text-white hover:bg-blue-700 transition duration-100 hover:shadow-blue-400"
        >
          Get in Touch
        </button>
      </div>
    </header>
  );
};

export default Header;
