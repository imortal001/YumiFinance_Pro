import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

const phoneImages = [
  img1,
  img2,
  img3,
];

const userFlowSteps = [
  {
    title: 'Step 1: Select Yumi at checkout',
    img: phoneImages[0],
  },
  {
    title: 'Step 2: Soft credit check',
    img: phoneImages[1],
  },
  {
    title: 'Step 3: Pay with installments & yield',
    img: phoneImages[2],
  },
];

const Product = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-700 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute right-10 top-1/2 w-96 h-96 bg-green-700 rounded-full blur-3xl opacity-30 transform -translate-y-1/2"></div>
      <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20"></div>

      <Navbar />

      {/* User Flow Section */}
      <section className="relative z-10 py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-extralight text-center text-white mb-12">User flow</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {userFlowSteps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center w-full max-w-xs"
            >
              <span className="text-[#B6FF7A] text-lg md:text-xl font-medium mb-4 text-center">{step.title}</span>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#222] bg-[#18191A]">
                <img src={step.img} alt={step.title} className="w-[250px] h-[500px] object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it Works Section */}
      <section className="relative z-10 py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-extralight text-center text-white mb-4">How it works</h2>
        <p className="text-[#B6FF7A] text-xl font-extralight text-center mb-12">1000$ purchase example</p>
        <div className="flex flex-col items-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full max-w-5xl"
          >
            {/* Flowchart (simplified for code, can be styled further) */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              {/* Left: Yumi Yield SDK */}
              <div className="flex flex-col items-center">
                <div className="bg-[#18191A] rounded-full p-4 mb-2">
                  <span role="img" aria-label="vault" className="text-3xl">💸</span>
                </div>
                <span className="text-white text-base mb-1">Yumi Yield SDK</span>
                <span className="text-gray-400 text-xs mb-2">Deposits money to a yield vault</span>
                <span className="bg-[#B6FF7A] text-black rounded-full px-4 py-1 text-xs font-semibold mb-2">Deposit</span>
              </div>
              {/* Arrow */}
              <div className="hidden md:block text-[#B6FF7A] text-3xl">→</div>
              {/* Center: User */}
              <div className="flex flex-col items-center">
                <div className="bg-[#18191A] rounded-full p-4 mb-2">
                  <span role="img" aria-label="user" className="text-3xl">🧑‍💼</span>
                </div>
                <span className="text-white text-base mb-1">User</span>
                <span className="text-gray-400 text-xs mb-2">KYC and AI-underwriting</span>
                <span className="bg-[#B6FF7A] text-black rounded-full px-4 py-1 text-xs font-semibold mb-2">20 & 40 days later</span>
                <span className="bg-[#B6FF7A] text-black rounded-full px-4 py-1 text-xs font-semibold mb-2">60 days later</span>
              </div>
              {/* Arrow */}
              <div className="hidden md:block text-[#B6FF7A] text-3xl">→</div>
              {/* Right: Merchant */}
              <div className="flex flex-col items-center">
                <div className="bg-[#18191A] rounded-full p-4 mb-2">
                  <span role="img" aria-label="merchant" className="text-3xl">🏪</span>
                </div>
                <span className="text-white text-base mb-1">Merchant</span>
                <span className="text-gray-400 text-xs mb-2">Receives $1000 instantly</span>
                <span className="bg-[#B6FF7A] text-black rounded-full px-4 py-1 text-xs font-semibold mb-2">Pay Merchant $1000 Instantly</span>
              </div>
            </div>
            {/* Bottom flow */}
            <div className="flex flex-col items-center mt-12">
              <span className="bg-[#B6FF7A] text-black rounded-full px-6 py-2 text-base font-semibold mb-2">Pay off last installment with yield</span>
              <span className="text-white text-base">6. Pay $0 or $250 - yield</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Product; 