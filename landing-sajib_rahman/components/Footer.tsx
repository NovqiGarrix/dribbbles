import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <footer className="flex items-center justify-between px-36 w-[85%] mx-auto py-10">
      <div className="font-poppins ">
        <h1
          className="text-gray-900 text-3xl font-semibold"
          data-aos="slide-right"
          data-aos-duration="1000"
        >
          Meta.
        </h1>
      </div>

      <div className="space-x-8">
        <span className="text-gray-400 text-base font-poppins">
          © 2022 All right reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
