import React from "react";
import { useEffect, useState } from "react";


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300
${
  isScrolled
    ? "bg-white/30 backdrop-blur-sm shadow-md"
    : "bg-white/10 backdrop-blur-lg"
}`}
    >
      <header className="flex px-8 py-5 items-center justify-between">
        <div className="flex gap-2 items-center cursor-pointer">
          <div className="bg-[#3ea40b] fill-white inline-flex p-2 rounded-xl hover:rotate-6 duration-150 ease-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-bag text-black w-6 h-6"
              aria-hidden="true"
            >
              <path d="M16 10a4 4 0 0 1-8 0"></path>
              <path d="M3.103 6.034h17.794"></path>
              <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
            </svg>
          </div>

          <p className="font-bold text-xl">MarketShoppa</p>
        </div>
        <nav className="flex gap-6 items-center">
          {/* <button className="bg-[#3ea40b] text-white px-5 py-2 rounded-3xl font-semibold">
            Start Shopping
          </button> */}
<a href="#waitlist" className="cursor-pointer">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3ea40b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users text-primary" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
