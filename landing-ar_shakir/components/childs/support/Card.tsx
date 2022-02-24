import React, { FunctionComponent } from "react";

import Link from "next/link";

interface ISupportCard {
  Icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  iconColor: string;
  label: string;
  desc: string;
}

const Card: FunctionComponent<ISupportCard> = (props) => {
  const { Icon, iconColor, label, desc } = props;

  return (
    <div className="border border-gray-200 rounded-xl bg-none flex py-10 px-8 flex-col hover:shadow-2xl transition duration-100 group-hover:bg-white cursor-pointer">
      <div className="mb-10">
        <Icon className={`w-12 ${iconColor} transform`} />
      </div>

      <h3 className="text-gray-600 font-semibold font-poppins text-2xl mb-3">
        {label}
      </h3>
      <p className="text-gray-400 text-sm font-poppins font-medium leading-normal mb-5">
        {desc}
      </p>

      <Link href="#">
        <h5 className="uppercase text-purple-800 text-base font-semibold font-poppins tracking-wide">
          Learn more
        </h5>
      </Link>
    </div>
  );
};

export default Card;
