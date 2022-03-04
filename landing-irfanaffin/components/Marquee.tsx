import { FunctionComponent } from "react";

import Marquee from "react-fast-marquee";

const Slider: FunctionComponent = () => {
  return (
    <nav className="py-3 bg-gradient-to-r from-[#7a1a7b] mx-auto to-[#8032bb] w-full">
      <Marquee className="w-full" gradient={false} speed={100}>
        <div className="space-x-12 inline-flex items-center first:ml-10">
          <h2 className="uppercase text-sm text-white tracking-[0.2em] font-poppins font-light whitespace-nowrap">
            <span className="mr-1">🤍</span> Discover & collect extraordinary
            digital art and rare nft's🎯🔥
          </h2>
          <h2 className="uppercase text-sm text-white tracking-[0.2em] font-poppins font-light whitespace-nowrap">
            <span className="mr-1">🤍</span> Discover & collect extraordinary
            digital art and rare nft's🎯🔥
          </h2>
          <h2 className="uppercase text-sm text-white tracking-[0.2em] font-poppins font-light whitespace-nowrap">
            <span className="mr-1">🤍</span> Discover & collect extraordinary
            digital art and rare nft's🎯🔥
          </h2>
        </div>
      </Marquee>
    </nav>
  );
};

export default Slider;
