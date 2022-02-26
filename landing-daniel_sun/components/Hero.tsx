import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero: FunctionComponent = () => {
  return (
    <div className="px-24">
      <div className="flex items-center justify-between space-x-20 mb-5">
        <div className="-z-0 p-1 rounded-xl bg-[#f6f1ec] dark:shadow-xl dark:shadow-stone-50/20">
          <div className="w-full ">
            <Image
              src="/hero-image1.png"
              width={1000}
              height={450}
              objectFit="contain"
            />
          </div>
        </div>

        <div className="block font-poppins w-[60%]">
          <h2 className="text-6xl pl-20 text-black font-semibold mb-10 dark:text-stone-100">
            The handiest
          </h2>
          <h2 className="text-6xl text-black font-semibold mb-10 dark:text-stone-100">
            way to organize
          </h2>
          <h2 className="text-6xl text-black font-semibold mb-10 dark:text-stone-100">
            teamwork
          </h2>
        </div>
      </div>

      <div className="flex items-center justify-between ">
        <div className="w-[30%]">
          <p className="font-poppins text-base text-slate-600 font-medium w-[63%] mb-20 dark:text-stone-100">
            Selecto is all about the team. Set goals and prioritize them, assign
            people to tasks, and get things done in time.
          </p>

          <Link href="#">
            <a className="text-white bg-blue-600 py-5 px-7 text-[14px] font-medium hover:shadow-xl dark:text-slate-700 dark:bg-white">
              Try Selecto for free
            </a>
          </Link>
        </div>

        <div className="p-1 px-5 rounded-xl bg-[#f6f1ec] dark:shadow-xl dark:shadow-stone-50/20">
          <Image
            src="/hero-image2.png"
            width={800}
            height={300}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
