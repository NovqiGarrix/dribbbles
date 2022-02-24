import { FunctionComponent } from "react";

import {
  CheckCircleIcon,
  CodeIcon,
  CogIcon,
  LightningBoltIcon,
  SpeakerphoneIcon,
} from "@heroicons/react/solid";
import Card from "./childs/support/Card";

const Support: FunctionComponent = () => {
  const supports = [
    {
      Icon: CodeIcon,
      iconColor: "text-purple-700",
      label: "Web Design",
      desc: "One for all and all for one, Muskehounds are always ready.",
    },
    {
      Icon: LightningBoltIcon,
      iconColor: "text-yellow-500",
      label: "Ad-Creatives",
      desc: "Alphabet Village and the subline of her own road.",
    },
    {
      Icon: CogIcon,
      iconColor: "text-red-500",
      label: "Automation",
      desc: "Little Blind text should turn around and return.",
    },
    {
      Icon: SpeakerphoneIcon,
      iconColor: "text-cyan-500",
      label: "Infographics",
      desc: "Nothing the copy said could convince her.",
    },
  ];

  return (
    <div className="flex items-center mb-40 justify-center w-full">
      <div
        className="block font-poppins px-2 w-1/3"
        data-aos="slide-right"
        data-aos-duration="1000"
      >
        <h2
          className="text-gray-800 text-5xl font-bold mb-7"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Future of support with new shape
        </h2>

        <p
          className="text-gray-400 font-medium mb-8"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Discuss your goals, determine success<br></br> metrics, identify
          problems
        </p>

        <div
          className="space-y-2 mb-14"
          data-aos="slide-down"
          data-aos-duration="1000"
        >
          <div className="flex items-center space-x-4 font-semibold text-base">
            <CheckCircleIcon className="w-7 text-blue-800" />
            <p className="text-gray-500 font-normal font-poppins">
              UX Design content strategy
            </p>
          </div>

          <div className="flex items-center space-x-4 font-semibold text-base">
            <CheckCircleIcon className="w-7 text-blue-800" />
            <p className="text-gray-500 font-normal font-poppins">
              Development bring
            </p>
          </div>
        </div>

        <div
          className="mb-32 drop-shadow-xl"
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          <button className="outline-none text-base border-none py-5 font-medium px-9 rounded-full bg-blue-600 shadow-2xl shadow-blue-200 text-gray-50 hover:bg-blue-700 transition duration-100 hover:shadow-blue-400 font-poppins">
            Get started
          </button>
        </div>
      </div>

      <div
        className="w-5/12 grid grid-cols-2 gap-10"
        data-aos="zoom-out"
        data-aos-duration="1500"
      >
        {supports.map((support, key) => (
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay={String(key * 100)}
            key={key}
          >
            <Card
              label={support.label}
              desc={support.desc}
              Icon={support.Icon}
              iconColor={support.iconColor}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;

// One for all and all for one, Muskehounds are always ready
