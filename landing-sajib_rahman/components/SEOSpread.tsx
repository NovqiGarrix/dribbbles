import { FunctionComponent } from "react";
import Image from "next/image";

import { SearchIcon } from "@heroicons/react/outline";

const SEOSpread: FunctionComponent = () => {
  return (
    <div className="flex items-center justify-center flex-col w-1/2 mx-auto mb-24">
      <div
        className="p-3 bg-white rounded-full shadow-xl mb-8"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <SearchIcon
          className="w-8 text-gray-900"
          data-aos="zoom-out"
          data-aos-duration="1500"
        />
      </div>

      <h2
        className="text-5xl font-semibold text-gray-900 text-center font-poppins mb-5"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        Every SEO analysis and marketing tool you need <br /> on board
      </h2>

      <p
        className="text-gray-500 text-base font-poppins text-center"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        Real time ranking positions of your website's keywords <br /> across
        major search engines.
      </p>

      <div className="w-5/6 -mt-8" data-aos="zoom-in" data-aos-duration="1500">
        <Image
          src="/meta-spread.png"
          width={1000}
          height={1000}
          objectFit="contain"
        />
      </div>

      <p
        className="text-gray-500 text-base font-poppins text-center -mt-8 mb-5"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        Real time ranking positions of your website's keywords <br /> across
        major search engines. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quod, tempore.
      </p>

      <h5
        className="text-sm text-pink-500 cursor-pointer underline font-poppins"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Start two week free trial
      </h5>
    </div>
  );
};

export default SEOSpread;
