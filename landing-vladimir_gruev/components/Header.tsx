import { FunctionComponent, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { ChevronDownIcon } from "@heroicons/react/solid";
import DropdownMenu from "./Header/DropdownMenu";

export type DropdownMenus = "solutions";

const Header: FunctionComponent = () => {
  const [dropdownMenus, setDropdownMenus] = useState({
    solutions: false,
  });

  const handleSetDropdownMenus = (
    name: DropdownMenus,
    status: "open" | "close"
  ) => {
    if (status === "open") {
      setDropdownMenus({ ...dropdownMenus, [name]: true });
      return;
    }

    setDropdownMenus({ ...dropdownMenus, [name]: false });
    return;
  };

  const solutionsMenu = [
    { href: "#", label: "Automatic Keyword Grouping" },
    { href: "#", label: "Lorem, ipsum dolor." },
  ];

  return (
    <header className="flex items-center justify-between mb-14 py-8 relative z-10">
      <div
        className="relative flex items-center justify-between font-poppins space-x-8"
        data-aos="zoom-out"
        data-aos-duration="500"
      >
        <div className="mr-1">
          <div className="w-20 h-12 z-10">
            <Image
              src="/vercel.svg"
              width={1920}
              height={1080}
              objectFit="contain"
              loading="lazy"
            />
          </div>
        </div>
        <Link href="/" scroll>
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="cursor-pointer text-sm text-gray-700 hover:text-black transition duration-100 font-medium"
          >
            Features
          </h2>
        </Link>
        <div
          className="cursor-pointer flex space-x-2 group transition-all duration-150 relative"
          onMouseOver={() => handleSetDropdownMenus("solutions", "open")}
          onMouseLeave={() => handleSetDropdownMenus("solutions", "close")}
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-sm hover:text-black text-gray-800 dark:text-white transition duration-100 font-medium">
            Features
          </h2>

          <ChevronDownIcon className="w-5 dark:text-white text-black group-hover:animate-bounce" />
          <DropdownMenu
            dropdownMenus={dropdownMenus}
            menus={solutionsMenu}
            menuName="solutions"
          />
        </div>
        <Link href="/" scroll>
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            className="cursor-pointer text-sm text-gray-700 hover:text-black transition duration-100 font-medium"
          >
            Resources
          </h2>
        </Link>
        <Link href="/" scroll>
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
            className="cursor-pointer text-sm text-gray-700 hover:text-black transition duration-100 font-medium"
          >
            Pricing
          </h2>
        </Link>
      </div>

      <div
        className="flex items-center justify-between font-poppins space-x-8"
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        <Link href="#">
          <a
            className="text-[15px] text-gray-700 font-medium"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Log-in
          </a>
        </Link>

        <Link href="#">
          <a
            data-aos="fade-up"
            data-aos-duration="1000"
            type="button"
            className="font-medium outline-none border-none py-3 px-6 rounded-lg bg-black text-[13px] text-gray-300 focus:ring-2 focus:outline-none ring-offset-2 focus:ring-gray-500 "
          >
            Sign up
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
