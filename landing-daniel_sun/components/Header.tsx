import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import Link from "next/link";

import { ChevronDownIcon, SunIcon } from "@heroicons/react/outline";
import DropdownMenu from "./childs/Header/DropdownMenu";

export type DropdownMenus = "features" | "product";

interface IHeader {
  theme: string;
  handleSwitchTheme: () => void;
}

const Header: FunctionComponent<IHeader> = ({ theme, handleSwitchTheme }) => {
  const [dropdownMenus, setDropdownMenus] = useState({
    features: false,
    product: false,
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

  const featuresMenu = [
    { href: "#", label: "Automatic Keyword Grouping" },
    { href: "#", label: "Lorem, ipsum dolor." },
  ];

  const productMenu = [
    { href: "#", label: "Dribbble.com" },
    { href: "#", label: "Freepik" },
  ];

  return (
    <header className="flex items-center justify-between bg-transparent px-24 py-5 mb-5 z-30 relative">
      <div className="font-poppins inline-block">
        <div
          className={`rounded-full w-11 h-6 items-center bg-slate-700 focus:pointer-events-none dark:bg-stone-200 inline-flex flex-shrink-0 border-2 border-transparent cursor-pointer`}
          onClick={() => handleSwitchTheme()}
        >
          <div
            className={`rounded-full duration-200 transition-all ease-in-out bg-stone-200 dark:bg-slate-700 inline-block p-1 ${
              theme === "dark" ? "translate-x-5" : ""
            }`}
          >
            <SunIcon className="w-3 h-3 dark:text-stone-200" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-gray-100 font-poppins space-x-12">
        <div
          className="cursor-pointer flex space-x-2 group transition-all duration-150 relative"
          onMouseOver={() => handleSetDropdownMenus("product", "open")}
          onMouseLeave={() => handleSetDropdownMenus("product", "close")}
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-sm hover:text-black text-gray-800 dark:text-white transition duration-100 font-normal">
            Product
          </h2>

          <ChevronDownIcon className="w-5 dark:text-white text-black group-hover:animate-bounce" />
          <DropdownMenu
            dropdownMenus={dropdownMenus}
            menus={productMenu}
            menuName="product"
          />
        </div>

        <div
          className="cursor-pointer flex space-x-2 group transition-all duration-150 relative"
          onMouseOver={() => handleSetDropdownMenus("features", "open")}
          onMouseLeave={() => handleSetDropdownMenus("features", "close")}
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-sm hover:text-black text-gray-800 dark:text-white transition duration-100 font-normal">
            Features
          </h2>

          <ChevronDownIcon className="w-5 dark:text-white text-black group-hover:animate-bounce" />
          <DropdownMenu
            dropdownMenus={dropdownMenus}
            menus={featuresMenu}
            menuName="features"
          />
        </div>

        {/* Pricing */}
        <Link href="/" scroll>
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="cursor-pointer text-sm hover:text-black text-gray-800 dark:text-white transition duration-100 font-normal"
          >
            Pricing
          </h2>
        </Link>

        {/* Pricing */}
        <Link href="/" scroll>
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="cursor-pointer text-sm hover:text-black text-gray-800 dark:text-white transition duration-100 font-normal"
          >
            Company
          </h2>
        </Link>
      </div>

      {/* Right Side */}
      <div
        className="flex space-x-5 font-poppins items-center"
        data-aos="zoom-out-up"
        data-aos-duration="1000"
      >
        <Link href="#" data-aos="fade-up" data-aos-duration="1000">
          <a className="text-gray-900 hover:text-black text-[14px] font-light dark:text-white">
            Sign up
          </a>
        </Link>

        <Link href="#" data-aos="fade-up" data-aos-duration="1000">
          <a className="text-white bg-black py-3 px-5 text-[14px] font-medium hover:shadow-xl dark:text-slate-700 dark:bg-white">
            Get started
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
