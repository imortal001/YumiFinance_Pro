import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7 }
  })
};

const partnerships = [
  {
    title: 'Crypto cards:',
    items: [
      { name: 'ether.fi', bold: false },
      { name: 'holyheld', bold: true },
      { name: 'Holders', bold: false },
      { name: 'COCA', bold: false },
    ],
    color: 'text-white',
  },
  {
    title: 'Payment solutions:',
    items: [
      { name: 'Gnosis', bold: true },
      { name: 'Pay', bold: false },
    ],
    color: 'text-white',
  },
  {
    title: 'Yield infrastructure:',
    items: [
      { name: 'Sprout', bold: false },
      { name: 'SUPERFORM', bold: true },
      { name: 'CapMoney', bold: false },
    ],
    color: 'text-[#B6FF7A]',
  },
  {
    title: 'Underwriting & servicing protocols',
    items: [
      { name: '3Jane', bold: false },
      { name: 'credifi', bold: true },
    ],
    color: 'text-white',
  },
];

const Partnership = () => (
  <div className="relative min-h-screen bg-black overflow-x-hidden">
    {/* Background Elements */}
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-700 rounded-full blur-3xl opacity-30"></div>
    <div className="absolute right-10 top-1/2 w-96 h-96 bg-green-700 rounded-full blur-3xl opacity-30 transform -translate-y-1/2"></div>
    <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
    <Navbar />
    <section className="relative z-10 py-20 px-4 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extralight text-center text-white mb-16"
      >
        Go to Market & Strategic Partnerships
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-12 mb-12">
        {/* Left: Liquidity Acquisition */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex-1"
        >
          <h3 className="text-[#B6FF7A] text-xl font-semibold mb-4">Liquidity Acquisition</h3>
          <div className="mb-6">
            <span className="text-white font-bold">Pre-launch TVL commits</span>
            <p className="text-gray-300 text-sm mt-1">Secure 500k$+ in TVL commits from Hedge Funds & Family offices</p>
          </div>
          <div>
            <span className="text-white font-bold">Early LP benefits</span>
            <p className="text-gray-300 text-sm mt-1">Attract DeFi yield farmers & liquid funds post-launch. LPs earn double points in Season 1</p>
          </div>
        </motion.div>
        {/* Right: Merchant & User Acquisition */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex-1"
        >
          <h3 className="text-[#B6FF7A] text-xl font-semibold mb-4">Merchant & User Acquisition</h3>
          <div className="mb-6">
            <span className="text-white font-bold">Initial Merchants</span>
            <p className="text-gray-300 text-sm mt-1">Target merchants that already accept crypto, as the easiest group to acquire.<br/>Target merchants in the AI/SaaS vertical with a subscription model, as the perfect target to showcase our "pay with yield".</p>
          </div>
          <div className="mb-6">
            <span className="text-white font-bold">Crypto card & payment providers partnerships</span>
            <p className="text-gray-300 text-sm mt-1">Partner with major crypto cards, offering cashback to their users.<br/>Partner with payment solutions like OKX Pay, Gnosis Circles offering native "buy now, pay later" to their supported merchants</p>
          </div>
          <div>
            <span className="text-white font-bold">Klarna vampire attack</span>
            <p className="text-gray-300 text-sm mt-1">Users: Invite 5 of your friends who used Klarna before, and we pay your last instalment(up to 25$) for you.<br/>Merchants: every referred merchant gives the referrer 0.1% fee rebate for 6 months.</p>
          </div>
        </motion.div>
      </div>
      <hr className="border-gray-700 mb-12" />
      {/* Partnerships grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {partnerships.map((col, idx) => (
          <motion.div
            key={col.title}
            custom={idx + 1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className=""
          >
            <h4 className={`mb-4 text-lg font-semibold ${col.color}`}>{col.title}</h4>
            <ul className="space-y-2">
              {col.items.map((item, i) => (
                <li key={item.name} className={`text-white text-base ${item.bold ? 'font-bold italic' : ''}`}>{item.name}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Partnership; 