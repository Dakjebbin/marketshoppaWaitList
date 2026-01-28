import { motion } from "motion/react"; //eslint-disable-line
import { GoVerified } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa6";
import { assets } from "./assets/assests";

const Hero = () => {
  return (
    <div>
      <div className="absolute z-0 right-0 bg-[#f3eb9f4d] md:h-125 h-120 md:w-125 w-55 md:top-26 top-48 rounded-l-full"></div>
      <div className="flex items-center justify-center h-auto">
        <div className="m-auto md:w-[95%] w-[92%] lg:flex-row flex-col flex gap-9 max-w-300 items-center mt-12">
          <div className="relative z-20 flex-1 max-w-150 justify-center flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-7"
            >
              <p className="mt-7 inline-flex items-center rounded-2xl sm:gap-3 gap-1 bg-[#e8f5e2] text-[#3ea40b] sm:text-sm text-[11px] font-semibold py-2 sm:px-4 px-2">
                {" "}
                <GoVerified size={12} /> COMING SOON TO PORT HARCOURT
              </p>
            </motion.div>

            <motion.div
             initial={{ opacity: 0, x: -40 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
            >
              <p className="text-4xl md:text-6xl font-bold">
                Market shopping, <br />{" "}
                <span className="italic text-[#3ea40b] decoration-[#F3EB9F] underline">
                  made smarter.
                </span>{" "}
              </p>

              <p className="mt-7 text-base md:text-xl text-gray-600 max-w-lg leading-relaxed">
                Skip the heat, the traffic, and the stress of Mile 1 or Oil
                Mill. Get fresh produce and household essentials delivered at
                real-time market prices.
              </p>
            </motion.div>

            <motion.div
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
            className="flex items-center mt-9 gap-5">
              <a href="#waitlist">
              <button className=" rounded-full cursor-pointer font-semibold transition-all duration-300 flex items-center justify-center gap-1 md:gap-2 bg-[#3ea40b] text-white hover:bg-opacity-90 shadow-lg shadow-green-50 px-4 md:px-8 py-4 text-sm md:text-lg">
                Join the waitlist <FaChevronRight size={13} />
              </button>
              </a>

              <a href="#howitworks">
              <button className="px-4 md:px-8 py-4 cursor-pointer rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-1 md:gap-2 text-[#3ea40b] hover:bg-[#e8f5e2] text-sm md:text-base">
                How it works
              </button>
              </a>
            </motion.div>
          </div>

          <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
          className="flex-1 relative z-20 rounded-3xl justify-center  items-center">
            <img
              className="max-w-full shadow-lg shadow-[#c7c7c760] rounded-3xl w-full h-auto rotate-3 hover:rotate-0 duration-500  transition-transform"
              // width={1000}
              // height={1000}
              src={assets.fruits}
              alt="background"
            ></img>
            {/* 
            <div className="absolute flex bg-white shadow-md px-4 py-4 gap-3 rounded-2xl animate-bounce duration-300 items-center shadow-[#83828273] bottom-2">
              <div className="bg-[#f3eb9f] rounded-full px-2 py-2 flex items-center">

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check text-[#3ea40b]" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
              </div>
              <div>
                <p className="text-sm font-bold">Trust Verified</p>
                <p className="text-sm text-gray-400">10k+ Orders Delivered</p>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
