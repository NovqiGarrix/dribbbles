import { FunctionComponent } from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";

const Subscribe: FunctionComponent = () => {
  return (
    <div
      className="w-full flex items-center justify-center mb-36 drop-shadow-xl"
      data-aos="zoom-out"
      data-aos-duration="1000"
    >
      <div className="subscribe flex w-2/3 rounded-3xl p-16 justify-around items-center space-x-24">
        <div className="block font-poppins w-2/6">
          <h4
            className="text-white text-3xl font-medium mb-5"
            data-aos="slide-up"
            data-aos-duration="1000"
          >
            Subscribe newsletter
          </h4>
          <p
            className="text-gray-100 text-sm"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Best cooks and best delivery guys at all your service. Hot tasty
            food
          </p>
        </div>

        <div className="block font-poppins w-2/4">
          <form
            className="flex relative font-poppins bg-white rounded-xl pl-6 w-full hover:shadow-xl focus-within::shadow-xl focus-within:bg-gray-50 duration-100 transition-all"
            data-aos="slide-left"
            data-aos-duration="1000"
          >
            <input
              type="text"
              className="flex-grow text-sm outline-none placeholder-gray-400 text-gray-500 bg-transparent py-5 w-full"
              placeholder="Enter your email address.."
            />
            <button
              type="submit"
              className="space-x-5 flex items-center justify-center px-4 bg-green-400 rounded-r-xl outline-none border-none"
            >
              <h5 className="text-gray-100 text-sm font-medium">Discover</h5>
              <div className="rounded bg-white p-2">
                <ChevronRightIcon className="w-3 text-green-400 " />
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
