import { MdOutlineStarPurple500 } from "react-icons/md";
import { motion } from "motion/react"; // eslint-disable-line
const Community = () => {
  const reviews = [
    {
      id: "1",
      text: "Between PH traffic and navigating stalls, you lose a whole Saturday morning just for soup ingredients",
      tag: "Hours Lost",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3ea40b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-timer w-10 h-10" aria-hidden="true"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
    },
    {
      id: "2",
      text: "If you don't 'know' the market, you often end up paying double. Transparency is hard to find.",
      tag: "Price Haggling",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3ea40b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-down w-10 h-10" aria-hidden="true"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
    },
    {
      id: "3",
      text: "Carrying heavy bags in the scorching sun or sudden rain. It shouldn't be this hard.",
      tag: "The Physical Strain",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3ea40b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-alert w-10 h-10" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
    },
  ];
  return (
    <section className="mt-14 bg-[#e8f5e24d] pb-16">
      <div className="w-[93%] m-auto pt-18">
        <motion.h1
        initial={{ opacity: 0, y: -45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center sm:text-4xl text-2xl font-bold pb-4">
        Why bother going to the market?
        </motion.h1>
        <motion.p 
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-gray-500 text-center sm:text-lg text-base pb-10">We know the struggle of grocery shopping in Port Harcourt. It's time-consuming, draining, and often frustrating</motion.p>
        <div className="flex gap-6 flex-wrap">
          {reviews.map((review) => (
            <motion.div
            initial={{ opacity: 0, x: -55 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
            key={review.id} className="bg-white grow basis-50 px-7 py-5 rounded-2xl">
              <div className="flex">
              {review.icon}
              </div>
              <div className="my-2">
                <p className="text-2xl font-semibold">{review.tag}</p>
              </div>
              <div className="py-2">
                <p className="italic md:text-base text-sm text-gray-500">&quot;{review.text}&quot;</p>
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
