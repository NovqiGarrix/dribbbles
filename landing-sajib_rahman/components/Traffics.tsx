import { FunctionComponent } from "react";

import Image from "next/image";

const Traffics: FunctionComponent = (props) => {
  return (
    <div className="mx-auto px-40 mb-36">
      <div
        className="text-center font-poppins w-[50%] mx-auto"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2
          className="text-gray-800 text-5xl font-semibold mb-5"
          data-aos="slide-right"
          data-aos-duration="1000"
        >
          Pay for qualified traffic marketing agency
        </h2>
        <p
          className="text-gray-500 text-base mb-10"
          data-aos="slide-right"
          data-aos-duration="1000"
        >
          Track performance of hundreds (or thousands) of you traffic-driving
          keywords across 170+ search engines.
        </p>
      </div>

      <div className="" data-aos="zoom-in" data-aos-duration="1000">
        <Image
          src="/pay-traffic.png"
          width={1200}
          height={800}
          objectFit="fill"
          className="drop-shadow-lg"
        />
      </div>
    </div>
  );
};

export default Traffics;
