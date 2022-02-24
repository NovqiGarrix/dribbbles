import { FunctionComponent } from "react";

import Link from "next/link";

import FacebookIcon from "../public/facebook-icon.svg";
import InstagramIcon from "../public/instagram-icon.svg";
import LinkedinIcon from "../public/linkedin-icon.svg";

import Image from "next/image";

const Footer: FunctionComponent = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 py-16 px-32 font-poppins">
      <div className="mb-14 flex justify-between">
        <div className="w-80">
          {/* Title */}
          <div className="flex items-center space-x-5">
            <div className="relative">
              <div className="w-20 z-10">
                <Image
                  src="/vercel.svg"
                  width={1920}
                  height={1080}
                  objectFit="contain"
                  loading="lazy"
                />
              </div>
              <div className="w-20 bg-red-400 h-4 absolute top-7 z-0 filter blur-md opacity-40"></div>
            </div>

            <h3 className="text-lg font-semibold text-gray-600">
              The Next Design
            </h3>
          </div>

          <p className="text-gray-400 text-sm mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea beatae
            quaerat libero ipsam omnis dolorum?
          </p>

          <div className="flex items-center space-x-3">
            {/* Facebook */}
            <div className="facebook p-2 bg-black rounded cursor-pointer">
              <FacebookIcon className="text-white w-5 h-5" />
            </div>

            {/* Instagram */}
            <div className="facebook p-2 bg-black rounded cursor-pointer">
              <InstagramIcon className="text-white w-5 h-5" />
            </div>
            {/* Linkedin */}
            <div className="facebook p-2 bg-black rounded cursor-pointer">
              <LinkedinIcon className="text-white w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold text-gray-600 mb-4">Company</h3>

          <Link href="#" scroll>
            <span className="text-sm text-gray-500 font-medium cursor-pointer">
              About
            </span>
          </Link>

          <Link href="#" scroll>
            <span className="text-sm text-gray-500 font-medium cursor-pointer">
              Term of Use
            </span>
          </Link>

          <Link href="#" scroll>
            <span className="text-sm text-gray-500 font-medium cursor-pointer">
              Privacy Policy
            </span>
          </Link>

          <Link href="#" scroll>
            <span className="text-sm text-gray-500 font-medium cursor-pointer">
              How it Works
            </span>
          </Link>

          <Link href="#" scroll>
            <span className="text-sm text-gray-500 font-medium cursor-pointer">
              Contact Us
            </span>
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold text-gray-600 mb-4">Get Help</h3>

          <Link href="#" scroll>
            <span className="text-sm text-gray-500 font-medium cursor-pointer">
              Support Center
            </span>
          </Link>

          <Link href="#" scroll>
            <span className="text-sm text-gray-500 font-medium cursor-pointer">
              24h Service
            </span>
          </Link>

          <Link href="#" scroll>
            <span className="text-sm text-gray-500 font-medium cursor-pointer">
              Quick Chat
            </span>
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold text-gray-600 mb-4">Support</h3>

          <Link href="#" scroll>
            <span className="text-sm text-gray-500 font-medium cursor-pointer">
              FAQ
            </span>
          </Link>

          <Link href="#" scroll>
            <span className="text-sm text-gray-500 font-medium cursor-pointer">
              Policy
            </span>
          </Link>

          <Link href="#" scroll>
            <span className="text-sm text-gray-500 font-medium cursor-pointer">
              Business
            </span>
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold text-gray-600 mb-4">Contact</h3>

          <Link href="#" scroll>
            <span className="text-sm text-gray-500 font-medium cursor-pointer">
              Whatsapp
            </span>
          </Link>

          <Link href="#" scroll>
            <span className="text-sm text-gray-500 font-medium cursor-pointer">
              Support 24h
            </span>
          </Link>
        </div>
      </div>

      <div className="ring-1 ring-gray-200 w-full"></div>
    </footer>
  );
};

export default Footer;
