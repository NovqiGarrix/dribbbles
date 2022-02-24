import { FunctionComponent } from "react";

import Image from "next/image";
import { ContactUs } from ".";

const TeamBenefits: FunctionComponent = (props) => {
  return (
    <div className="mx-auto px-36 mb-24">
      <div className="mb-32">
        <div
          className="text-center font-poppins w-[38%] mx-auto mb-20"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-gray-800 text-5xl font-semibold">
            Benefits for the whole team
          </h2>
        </div>

        <div className="flex justify-center items-center space-x-36">
          <div
            className="block w-[30%] font-poppins"
            data-aos="slide-right"
            data-aos-duration="1000"
          >
            <h3
              className="text-4xl text-gray-700 font-semibold mb-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Avoid frequent check-ins
            </h3>
            <p
              className="text-base text-gray-500 mb-5"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              Data driven content marketing, web design & white label WordPress
              development. Find out more about our growth solutions.
            </p>
            <p
              className="text-base text-gray-500 "
              data-aos="fade-up"
              data-aos-duration="500"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
              qui odit, dolores ea labore perspiciatis? Maiores est sapiente nam
              atque.
            </p>
          </div>

          <div
            className="w-[50%]"
            data-aos="slide-left"
            data-aos-duration="1000"
          >
            <Image
              src="/team-benefits.png"
              width={1000}
              height={1000}
              objectFit="contain"
              className="drop-shadow-xl"
              data-aos="zoom-out"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </div>

      <ContactUs />
    </div>
  );
};

export default TeamBenefits;
