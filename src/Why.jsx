import { RiVerifiedBadgeLine } from "react-icons/ri";
import { assets } from "./assets/assests";
import { motion } from "motion/react"; //eslint-disable-line

const Why = () => {
  return (
    <section className="w-[92%] m-auto bg-[#f3eb9f66] max-w-300 mt-20 rounded-4xl sm:px-14 px-8 py-12 flex xl:flex-row flex-col gap-14">
      <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-150 ">
        <p className="text-3xl font-bold">Introducing MarketShoppa</p>
        <p className="sm:text-lg text-base mt-5 text-gray-700 leading-6">
        The bridge between the open market's freshness and your doorstep&apos;s convenience
        </p>
        <div className="flex flex-col justify-center gap-7 mt-5">
          <div className="flex items-center gap-3" >
            <span className="bg-[#3ea40b] text-white px-2 py-2 font-semibold rounded-full flex items-center justify-center">
             01
            </span>
            <div className="flex flex-col ">
              <p className="font-semibold text-xl">Send Your List</p>
            <p className="md:text-base text-sm text-gray-500">
            Type out exactly what you need—even specific requests like 'medium-sized yams' or 'very red tomatoes'.
            </p>
            </div>
          </div>

          <div className="flex items-center gap-3" >
            <span className="bg-[#3ea40b] text-white px-2 py-2 font-semibold rounded-full flex items-center justify-center">
             02
            </span>
            <div className="flex flex-col ">
              <p className="font-semibold text-xl">We shop at local prices</p>
            <p className="md:text-base text-sm text-gray-500">
            Our pro shoppers hit the market at dawn to find the best quality and negotiate for the best prices.
            </p>
            </div>
          </div>

          <div className="flex items-center gap-3" >
            <span className="bg-[#3ea40b] text-white px-2 py-2 font-semibold rounded-full flex items-center justify-center">
             03
            </span>
            <div className="flex flex-col ">
              <p className="font-semibold text-xl">Delivered to your door</p>
            <p className="md:text-base text-sm text-gray-500">
            Receive your items alongside the original market receipts. No hidden markups, ever.
            </p>
            </div>
          </div>

        </div>
      </motion.div>
      <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="flex flex-col items-center justify-center gap-5">
        <div className="flex md:gap-6 gap-3 items-center justify-center">
          <div className="md:w-90 w-50">
            <img src={assets.wait} alt="vibrant picture" className="w-full rounded-2xl"/>
          </div>
          <div className="bg-black md:pl-8 pl-4 md:pr-10 pr-6 flex flex-col md:py-6 py-3 md:rounded-3xl rounded-2xl">
            <p className="md:text-2xl text-base mb-2 text-white font-semibold">Transparent</p>
            <p className="md:text-sm text-[8px] text-gray-300">Original receipts provided for every single item.</p>
          </div>
        </div>

        <div className="flex md:gap-6 gap-3 items-center">
          <div className="bg-[#3ea40b] md:pl-8 pl-4 md:pr-24 pr-6 pt-4 md:pb-8 pb-5 rounded-3xl">
            <p className="md:text-2xl text-base text-nowrap mb-2 font-semibold text-white">100% Fresh</p>
            <p className="md:text-sm text-[10px] text-gray-900">Picked the same morning we deliver to you.</p>
          </div>
          <div className="md:w-90 w-50 md:h-40 h-30">
          <img src={assets.potato} alt="vibrant picture" className="w-full h-full object-cover rounded-2xl"/>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Why;
