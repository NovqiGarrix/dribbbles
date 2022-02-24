import { FunctionComponent } from "react";

import {
  LightningBoltIcon,
  PaperAirplaneIcon,
  FireIcon,
  CollectionIcon,
} from "@heroicons/react/solid";

const Benefits: FunctionComponent = () => {
  const benefits = [
    {
      Icon: LightningBoltIcon,
      label: "AI-Based Keyword Gruping",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consequuntur quaerat quis quibusdam",
    },
    {
      Icon: PaperAirplaneIcon,
      label: "Automated Keyword Grouping",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consequuntur quaerat quis quibusdam",
    },
    {
      Icon: FireIcon,
      label: "Faster Than The Competitor",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consequuntur quaerat quis quibusdam",
    },
    {
      Icon: CollectionIcon,
      label: "Free Migration from 40+ Tools",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consequuntur quaerat quis quibusdam",
    },
  ];

  return (
    <div
      className="block w-full mb-20"
      data-aos="zoom-out"
      data-aos-duration="1000"
    >
      <h2
        className="text-gray-800 font-bold text-5xl font-poppins mb-12"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        The Benefits you will get with Meta
      </h2>

      <div className="grid grid-cols-4 justify-between w-full">
        {benefits.map((val, key) => (
          <div
            key={key}
            className="block"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={String(key * 100)}
          >
            <val.Icon className="pl-5 text-indigo-500 w-16 mb-2" />

            <div className="flex space-x-3 items-center font-poppins mb-2">
              <span className="-mt-1 font-medium text-indigo-500">|</span>
              <h5 className="text-base text-gray-800 font-medium">
                {val.label}
              </h5>
            </div>

            <p className="pl-5 text-gray-500 font-poppins text-base">
              {val.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
