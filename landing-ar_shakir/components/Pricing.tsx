import { FunctionComponent } from "react";

const Pricing: FunctionComponent = () => {
  return (
    <div className="pricing-bg-color py-16 px-28 pb-28 w-full mb-36 flex justify-center">
      <div
        className="card bg-white rounded-xl shadow-lg shadow-gray-200 p-10 pb-14 w-2/4 text-center font-poppins"
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        <h2 className="text-4xl font-semibold text-gray-600 mb-5">Pricing</h2>

        <div className="flex items-center justify-around relative">
          <div className="text-center">
            <h5 className="text-lg text-gray-400 mb-2">Starter</h5>
            <h2 className="text-2xl text-gray-700 font-bold">$4,000/mo</h2>
          </div>
          <div className="text-center">
            <h5 className="text-lg text-gray-400 mb-2">Business</h5>
            <h2 className="text-2xl text-gray-700 font-bold">$7,500/mo</h2>
          </div>

          {/* Ready to get started? */}
          <div
            className="absolute top-20 -right-32 drop-shadow-2xl flex items-center justify-between py-6 px-10 space-x-14 bg-white rounded-lg"
            data-aos="slide-left"
            data-aos-duration="1000"
          >
            <h5 className="text-gray-500 font-medium">Ready to get started?</h5>

            <div className="drop-shadow-lg">
              <button className="outline-none border-none py-3 font-medium px-5 rounded bg-blue-600 shadow-2xl shadow-blue-200 text-gray-200 hover:bg-blue-700 transition duration-100 hover:shadow-blue-400 font-poppins text-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
