import { FunctionComponent } from "react";
import Image from "next/image";

const Services: FunctionComponent = () => {
  return (
    <div className="bg-gray-100 py-10 px-28 w-full mb-36">
      <div className="grid grid-cols-3 items-center space-x-28 justify-around">
        {/* Borderline */}
        <div className="block" data-aos="fade-right" data-aos-duration="1000">
          <h5 className="uppercase text-gray-400 font-semibold text-md mb-1">
            achieve more
          </h5>
          <h2 className="text-gray-900 text-3xl font-bold font-poppins">
            Purpose of a convoy is to keep your team
          </h2>
        </div>

        {/* Borderline */}
        <div
          className="flex items-center space-x-3"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div>
            <div className="p-1 rounded-full w-10 h-10 bg-purple-700 shadow-lg shadow-purple-300">
              <Image
                src="/chart-icon.png"
                width={1000}
                height={1000}
                objectFit="cover"
              />
            </div>

            <div style={{ height: "4rem" }}></div>
          </div>

          <div className="block">
            <h2 className="text-gray-800 font-semibold font-poppins text-xl">
              Built for impact
            </h2>

            <p className="font-poppins text-sm text-gray-500">
              We identify and nurture a truly diverse team of designers,
              developers, and marketers
            </p>
          </div>
        </div>

        {/* Borderline */}
        <div
          className="flex items-center space-x-3"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div>
            <div className="p-1 rounded-full w-10 h-10 bg-red-500 shadow-lg shadow-red-300">
              <Image
                src="/chart-icon.png"
                width={1000}
                height={1000}
                objectFit="cover"
              />
            </div>

            <div style={{ height: "4rem" }}></div>
          </div>

          <div className="block">
            <h2 className="text-gray-800 font-semibold font-poppins text-xl">
              In sync with you
            </h2>

            <p className="font-poppins text-sm text-gray-500">
              We work the way you do by adapting to your workflows and rhythm we
              aim to blend in for a seamless.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
