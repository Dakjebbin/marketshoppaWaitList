import React from "react";

const Slots = () => {
  return (
    <div>
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="container mx-auto">
          <div className="bg-black rounded-[4rem] p-12 lg:p-24 relative">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-users w-64 h-64 text-white"
                aria-hidden="true"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="mb-16  max-w-3xl">
                  <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
                    Join the Inner Circle
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-300">
                    We're launching soon in Port Harcourt. Join the waitlist
                    today and enjoy exclusive early-bird benefits.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex gap-3 items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#3ea40b"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check w-6 h-6 text-primary shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      First 500 get 50% off service fees for 3 months.
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#3ea40b"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check w-6 h-6 text-primary shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Priority delivery slots during launch week.
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#3ea40b"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check w-6 h-6 text-primary shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Input on our initial product roadmap.
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#3ea40b"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check w-6 h-6 text-primary shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Exclusive access to 'Market-Day' flash deals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-10 rounded-[3rem] border border-white/10 text-center">
                <div className="mb-8">
                  <span className="text-[#f3eb9f] font-display text-4xl font-black">
                    ONLY 92
                  </span>
                  <p className="text-gray-400 mt-2">
                    Slots left for Early Bird discounts
                  </p>
                </div>
                <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden mb-8">
                  <div className="bg-[#3ea40b] h-full w-[82%]"></div>
                </div>
                <a href="#waitlist">
                <button
                  type="button"
                  className="px-8 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 bg-[#3ea40b] text-white hover:shadow-xl hover:scale-105 active:scale-95 shadow-lg shadow-[#3ea40b56] w-full py-5"
                >
                  Secure My Slot Now
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slots;
