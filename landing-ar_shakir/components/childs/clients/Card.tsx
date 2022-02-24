import React, { FunctionComponent } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { AnnotationIcon } from "@heroicons/react/outline";

import Image from "next/image";

interface IClientsCard {
  profile: string;
  clientName: string;
  clientSay: string;
}

const Card: FunctionComponent<IClientsCard> = (prop) => {
  const { profile, clientName, clientSay } = prop;

  return (
    <div className="relative bg-white border-2 border-gray-50 rounded-2xl bg-none flex items-center justify-center py-14 px-8 flex-col group transition duration-100 cursor-pointer">
      <div className="w-16 mb-2 drop-shadow-xl">
        <Image
          src={profile}
          width={1080}
          height={1080}
          objectFit="cover"
          className="rounded-full"
        />
      </div>

      <div className="absolute left-20 top-20">
        <AnnotationIcon className="w-20 text-gray-50 opacity-80" />
      </div>

      <div className="flex mb-1">
        {Array(5)
          .fill(2)
          .map((_, key) => (
            <StarIcon key={key} className="w-5 text-blue-500" />
          ))}
      </div>
      <h3 className="text-gray-700 font-semibold font-poppins text-xl mb-5">
        {clientName}
      </h3>
      <p className="text-gray-400 text-base font-poppins text-center">
        {clientSay}
      </p>
    </div>
  );
};

export default Card;
