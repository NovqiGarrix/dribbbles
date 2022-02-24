import { FunctionComponent, useState } from "react";
import Link from "next/link";

import { ChevronDownIcon } from "@heroicons/react/outline";
import DropdownMenu from "./childs/Header/DropdownMenu";

export type DropdownMenus = "features" | "resources" | "tools";

const Header: FunctionComponent = () => {
  const [dropdownMenus, setDropdownMenus] = useState({
    features: false,
    resources: false,
    tools: false,
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

  const resourcesMenu = [
    { href: "#", label: "Dribbble.com" },
    { href: "#", label: "Freepik" },
  ];

  const toolsMenu = [
    { href: "#", label: "AI Based on Python" },
    { href: "#", label: "FFnet" },
  ];

  return (
    <header className="flex items-center justify-between bg-blue-700 px-24 py-5 mb-20">
      <div className="font-poppins" data-aos="fade-up" data-aos-duration="1000">
        <h1
          className="text-white text-3xl font-semibold"
          data-aos="slide-right"
          data-aos-duration="1000"
        >
          Meta.
        </h1>
      </div>

      <div className="flex items-center justify-between text-gray-100 font-poppins space-x-12">
        <div
          className="cursor-pointer flex space-x-2 group transition-all duration-150 relative"
          onMouseOver={() => handleSetDropdownMenus("features", "open")}
          onMouseLeave={() => handleSetDropdownMenus("features", "close")}
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-sm hover:text-white transition duration-100 font-normal">
            Features
          </h2>

          <ChevronDownIcon className="w-5 text-white group-hover:animate-bounce" />
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
            className="cursor-pointer text-sm hover:text-white transition duration-100 font-normal"
          >
            Pricing
          </h2>
        </Link>

        {/* Resources */}
        <div
          className="cursor-pointer flex space-x-2 group transition-all duration-150 relative"
          onMouseOver={() => handleSetDropdownMenus("resources", "open")}
          onMouseLeave={() => handleSetDropdownMenus("resources", "close")}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <h2 className="text-sm hover:text-white transition duration-100 font-normal">
            Resources
          </h2>

          <ChevronDownIcon className="w-5 text-white group-hover:animate-bounce" />
          <DropdownMenu
            dropdownMenus={dropdownMenus}
            menus={resourcesMenu}
            menuName="resources"
          />
        </div>

        {/* Company */}
        <Link href="/" scroll>
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="cursor-pointer text-sm hover:text-white transition duration-100 font-normal"
          >
            Company
          </h2>
        </Link>

        {/* Tools */}
        <div
          className="cursor-pointer flex space-x-2 group transition-all duration-150 relative"
          onMouseOver={() => handleSetDropdownMenus("tools", "open")}
          onMouseLeave={() => handleSetDropdownMenus("tools", "close")}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-sm hover:text-white transition duration-100 font-normal"
          >
            Tools
          </h2>

          <ChevronDownIcon className="w-5 text-white group-hover:animate-bounce" />
          <DropdownMenu
            dropdownMenus={dropdownMenus}
            menus={toolsMenu}
            menuName="tools"
          />
        </div>
      </div>

      {/* Right Side */}
      <div
        className="flex space-x-6 font-poppins items-center"
        data-aos="zoom-out-up"
        data-aos-duration="1000"
      >
        <Link href="#" data-aos="fade-up" data-aos-duration="1000">
          <a className="text-white text-[16px] font-light">Log in</a>
        </Link>

        <Link href="#" data-aos="fade-up" data-aos-duration="1000">
          <a className="text-gray-500 bg-white rounded-full py-2 px-7 text-[16px] font-medium hover:bg-gray-50 hover:shadow-xl ring-1 duration-75 transition-all ring-offset-1 ring-indigo-600">
            Log in
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
