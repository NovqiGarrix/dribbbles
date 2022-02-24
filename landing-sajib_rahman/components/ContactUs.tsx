import { FunctionComponent } from "react";

const ContactUs: FunctionComponent = () => {
  return (
    <div className="flex justify-around items-center overflow-hidden">
      <div
        className="font-poppins w-[38%]"
        data-aos="slide-right"
        data-aos-duration="1000"
      >
        <h3 className="text-xl font-medium leading-relaxed text-gray-800 mb-5">
          Raise your visibility, improve your rankings, and attract more
          visitors. We can help.
        </h3>

        <h5 className="text-blue-600 text-xl">yourmail@meta.net</h5>
      </div>

      <div
        className="h-24 border border-gray-300"
        data-aos="zoom-out"
        data-aos-duration="1000"
      ></div>

      <div
        className="flex items-center space-x-5 w-[45%] font-poppins"
        data-aos="slide-right"
        data-aos-duration="1000"
      >
        <div className="w-1/2">
          <span className="text-gray-400 text-sm">Drrices</span>
          <h5 className="text-gray-700 text-base font-medium">
            2000 Simcoe Street North Oshawa, Ontario L1G 0C5
          </h5>
        </div>
        <div className="w-1/2">
          <span className="text-gray-400 text-sm">Social Media</span>
          <h5 className="text-gray-700 text-base font-medium">Facebook</h5>
          <h5 className="text-gray-700 text-base font-medium">Twitter</h5>
          <h5 className="text-gray-700 text-base font-medium">Linkedin</h5>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
