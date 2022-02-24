import React, { FunctionComponent } from "react";

interface IServicesCard {
  Icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  iconColor: string;
  bgIcon: string;
  label: string;
  desc: string;
}

const Card: FunctionComponent<IServicesCard> = ({
  Icon,
  iconColor,
  bgIcon,
  label,
  desc,
}) => {
  return (
    <div className="border border-gray-200 rounded-xl bg-none flex items-center justify-center py-14 px-8 flex-col group hover:shadow-2xl transition duration-100 group-hover:bg-white cursor-pointer">
      <div className={`p-5 ${bgIcon} rounded-full mb-8`}>
        <Icon className={`w-12 ${iconColor} transform`} />
      </div>

      <h3 className="text-gray-700 font-semibold font-poppins text-xl mb-3">
        {label}
      </h3>
      <p className="text-gray-400 text-sm font-poppins text-center">{desc}</p>
    </div>
  );
};

export default Card;
