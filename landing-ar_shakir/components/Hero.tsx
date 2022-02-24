import { FunctionComponent, useEffect, useState } from "react";
import Image from "next/image";
import { CollectionIcon, ArrowNarrowRightIcon } from "@heroicons/react/solid";

const HeroSession: FunctionComponent = () => {
  const typedText =
    "Get the most accurate leads, sales people training and conversions, tools, and more -- all within the same one billing.";
  const [typingText, setTypingText] = useState("");
  const [prevTypedIndex, setPrevTypedIndex] = useState(0);

  useEffect(() => {
    if (prevTypedIndex - 1 === typedText.length) return;
    const typesTimeout = setTimeout(() => {
      setTypingText(typedText.slice(0, prevTypedIndex));
      setPrevTypedIndex((prev) => prev + 1);
    }, 80);

    return () => clearTimeout(typesTimeout);
  }, [prevTypedIndex]);

  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="inline-block">
          {/* Jump */}
          <div
            className="flex space-x-2 text-blue-700 mb-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <CollectionIcon className="w-6" />
            <h5 className="font-medium text-lg font-poppins">
              Jump start your growth
            </h5>
          </div>

          {/* Hero Title */}
          <div
            className="font-poppins text-6xl font-semibold flex items-end mb-10"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="" data-aos="fade-left" data-aos-duration="1500">
              We boost the growth for{" "}
              <span className="font-bold text-blue-600">Startup</span> to
              Fortune 500 Companies
            </h2>
          </div>

          {/* Hero desc */}
          <div
            className="w-4/5 mb-10"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <p
              className="text-2xl text-gray-700 font-poppins blinking-cursor h-32"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {typingText}
            </p>
          </div>

          <div className="" data-aos="fade-up" data-aos-duration="1000">
            <form
              action="#"
              method="POST"
              className="flex items-center justify-between w-11/12 space-x-6"
              data-aos="zoom-out"
              data-aos-duration="1500"
            >
              <input
                type="text"
                className="border font-poppins border-gray-300 rounded-xl py-4 px-5 block text-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600 placeholder-gray-500 w-full"
                placeholder="Email address"
              />

              <button
                type="submit"
                className="bg-blue-600 rounded-xl outline-none border-none py-4 px-14 focus:ring-offset-1 hover:bg-blue-700"
              >
                <ArrowNarrowRightIcon className="transform -rotate-45 text-white w-7" />
              </button>
            </form>
          </div>
        </div>

        <div className="" data-aos="fade-up" data-aos-duration="1000">
          <div
            className="w-10/12 -mt-5 drop-shadow-2xl"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <Image
              src="/hero-image.png"
              width={1000}
              height={1000}
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Partnership */}
      <div className="flex justify-around items-center">
        <div
          className="block border-t-2 border-gray-400"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3 className="text-md text-gray-600 font-poppins font-medium mt-1">
            Proud partern at Hubspot & Segment
          </h3>
        </div>

        <div
          className="slack w-28"
          style={{ filter: "grayscale(100%)" }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Image
            src="/slack.png"
            width={2080}
            height={1080}
            objectFit="cover"
            loading="lazy"
            className="opacity-30"
          />
        </div>

        <div
          className="amazon w-28"
          style={{ filter: "grayscale(100%)" }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Image
            src="/amazon.png"
            width={1920}
            height={1200}
            objectFit="contain"
            loading="lazy"
            className="opacity-30"
          />
        </div>

        <div
          className="woo-commerce w-28"
          style={{ filter: "grayscale(100%)" }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Image
            src="/woo.png"
            width={1920}
            height={1200}
            objectFit="contain"
            loading="lazy"
            className="opacity-30"
          />
        </div>

        <div
          className="typescript w-28"
          style={{ filter: "grayscale(100%)" }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Image
            src="/typescript.png"
            width={1920}
            height={1200}
            objectFit="contain"
            loading="lazy"
            className="opacity-30"
          />
        </div>

        <div
          className="microsoft w-28"
          style={{ filter: "grayscale(100%)" }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Image
            src="/microsoft.png"
            width={1920}
            height={1200}
            objectFit="contain"
            loading="lazy"
            className="opacity-30"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSession;
