import { motion } from "motion/react"; //eslint-disable-line
import axios from "axios"
import { useState } from "react";
import toast from "react-hot-toast";

const Wait = () => {
    const [email, setEmail] = useState("")
    const [fullName, setFullName] = useState("")
    const [area, setArea] = useState("")
    const [loading, setLoading] = useState(false)

    const baseUrl = import.meta.env.VITE_BASE_URL || "/api"

    const handleSubmit = async (e) => {
        e.preventDefault();
try {
    setLoading(true)
    const response = await axios.post(`${baseUrl}/auth/waitlist`,{
        email,
        fullName,
        area
    },{
        withCredentials:true
    })
console.log(response);


    if(response.status === 201){
        toast.success("You have successfully been added to the waitlist")
        setEmail("")
        setFullName("")
        setArea("")
    }

} catch (error) {
    if (error instanceof axios.AxiosError) {
        toast.error(
           error?.response?.data?.message
         );
       } else {
         toast.error("reg error => ", error.message);
       }
}finally{
    setLoading(false)
}
    }
    
  return (
    <div>
      <section id="waitlist" className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.8,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold text-black">
                Ready to reclaim your Saturdays?
              </h2>
              <p className="text-xl text-gray-600">
                Enter your details and be the first to know when we go live in
                your neighborhood.
              </p>
            </motion.div>
            <form onSubmit={handleSubmit} className="bg-[#f3eb9f4d] p-8 md:p-12 rounded-[3.5rem] border border-[#f3eb9f] space-y-6">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <motion.div
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 1, ease: "easeOut" }}
                 viewport={{ once: true, amount: 0.4 }}
                className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">
                    Full Name
                  </label>
                  <input
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Ebube Williams"
                    className="w-full px-6 py-4 rounded-2xl border-none outline-none focus:ring-2 focus:ring-[#3ea40b] shadow-sm"
                    type="text"
                  />
                </motion.div>
                <motion.div
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 1, ease: "easeOut" }}
                 viewport={{ once: true, amount: 0.4 }}
                 className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">
                    Email Address
                  </label>
                  <input
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. ebube@workmail.com"
                    className="w-full px-6 py-4 rounded-2xl border-none outline-none focus:ring-2 focus:ring-[#3ea40b] shadow-sm"
                    type="email"
                  />
                </motion.div>
              </div>
              <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, ease: "easeOut" }}
               viewport={{ once: true, amount: 0.4 }}
               className="space-y-2 text-left">
                <label className="text-sm font-bold text-gray-700 ml-2">
                  Your Neighborhood (In Port Harcourt)
                </label>
                <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl border-none outline-none focus:ring-2 focus:ring-[#3ea40b] shadow-sm appearance-none bg-white"
                >
                  <option value="">Select your area...</option>
                  <option value="GRA">GRA Phases 1-3</option>
                  <option value="Woji">Woji</option>
                  <option value="D-Line">D-Line</option>
                  <option value="Peter-Odili">Peter Odili Road</option>
                  <option value="Ada-George">Ada George</option>
                  <option value="Elelenwo">Elelenwo</option>
                  <option value="Other">Other</option>
                </select>
              </motion.div>
              <motion.button
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, ease: "easeOut" }}
               viewport={{ once: true, amount: 0.4 }}
                type="submit"
                disabled={loading}
                className="px-8 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 bg-[#3ea40b] text-white hover:shadow-xl hover:scale-105 active:scale-95 shadow-lg shadow-[#3ea40b71] w-full py-5 text-xl"
              >
                {loading ? "Loading..." : "Join the Waitlist"}
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
                  className="lucide lucide-arrow-right w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </motion.button>
              <p className="text-xs text-gray-500 italic">
                No spam, just early access. We promise.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wait;
