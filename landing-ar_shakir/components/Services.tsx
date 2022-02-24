import { FunctionComponent } from "react";
import { SearchIcon, CogIcon, TrendingUpIcon } from "@heroicons/react/solid";

import Card from "./childs/services/Card";

const Services: FunctionComponent = () => {
  const services = [
    {
      Icon: SearchIcon,
      iconColor: "text-purple-600 rotate-90",
      bgIcon: "bg-purple-100",
      label: "Find out what you need",
      desc: "When you resell besnik, you build trust and increase",
    },
    {
      Icon: CogIcon,
      iconColor: "text-red-500",
      bgIcon: "bg-red-100",
      label: "Work out the details",
      desc: "Communication protocols apart from engagement models",
    },
    {
      Icon: TrendingUpIcon,
      iconColor: "text-yellow-500",
      bgIcon: "bg-orange-100",
      label: "We get to work fast",
      desc: "Protocols apart from engagement models, pricing billing",
    },
  ];

  return (
    <div className="w-full flex items-center flex-col justify-center">
      <div
        className="w-2/5 text-center font-poppins mb-14"
        data-aos="flip-left"
        data-aos-duration="1000"
      >
        <h2 className="mb-5 text-5xl text-gray-700 font-semibold">
          How can we help your business?
        </h2>
        <p
          className="text-sm text-gray-500"
          data-aos="slide-up"
          data-aos-duration="1000"
        >
          When you resell besnik, you build trust and increase
        </p>
      </div>

      <div className="w-4/5 mb-14">
        <div className="grid grid-cols-3 gap-10 justify-around items-center">
          {services.map((service, key) => (
            <div
              key={key}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={String(key * 100)}
            >
              <Card
                Icon={service.Icon}
                iconColor={service.iconColor}
                bgIcon={service.bgIcon}
                label={service.label}
                desc={service.desc}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="mb-32 drop-shadow-xl"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <button
          data-aos="zoom-out"
          data-aos-duration="1000"
          className="outline-none text-base border-none py-5 font-medium px-7 rounded-full bg-blue-600 shadow-2xl shadow-blue-200 text-gray-50 hover:bg-blue-700 transition duration-100 hover:shadow-blue-400 font-poppins"
        >
          Become a Partner
        </button>
      </div>
    </div>
  );
};

export default Services;
