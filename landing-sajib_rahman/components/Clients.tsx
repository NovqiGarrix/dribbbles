import { FunctionComponent } from "react";

import Image from "next/image";

const Clients: FunctionComponent = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-28 mb-24">
      <div
        className="flex justify-between mb-20"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <h3
          className="text-gray-800 text-4xl font-medium font-poppins"
          data-aos="slide-right"
          data-aos-duration="1500"
        >
          Our Clients
        </h3>

        <div
          className="block font-poppins w-2/6"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h5
            className="text-gray-600 text-lg mb-5 font-medium"
            data-aos="slide-left"
            data-aos-duration="1500"
          >
            We worked with
          </h5>
          <p
            className="text-gray-400 text-sm "
            data-aos="slide-left"
            data-aos-delay="100"
            data-aos-duration="1500"
          >
            Our favourite brands are our friends! We help them to achieve their
            goals, they help us too stay sharp.
          </p>
        </div>
      </div>

      <div
        className="flex justify-center space-x-20 items-center"
        style={{ filter: "grayscale(100%)" }}
      >
        <div className="slack w-36" data-aos="fade-up" data-aos-duration="1000">
          <Image
            src="/slack.png"
            width={2080}
            height={1080}
            objectFit="cover"
            loading="lazy"
            className="opacity-80"
          />
        </div>

        <div
          className="netlix w-36"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Image
            src="/netflix-logo.png"
            width={1920}
            height={1200}
            objectFit="contain"
            loading="lazy"
            className="opacity-80"
          />
        </div>

        <div
          className="google w-36"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Image
            src="/google-logo.png"
            width={1920}
            height={1200}
            objectFit="contain"
            loading="lazy"
            className="opacity-80"
          />
        </div>

        <div
          className="amazon w-36"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Image
            src="/amazon.png"
            width={1920}
            height={1200}
            objectFit="contain"
            loading="lazy"
            className="opacity-80"
          />
        </div>

        <div
          className="microsoft w-36"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Image
            src="/microsoft.png"
            width={2000}
            height={1200}
            objectFit="contain"
            loading="lazy"
            className="opacity-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
