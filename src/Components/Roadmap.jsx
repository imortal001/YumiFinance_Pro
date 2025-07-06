import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import Footer from './Footer';

const roadmap = [
  {
    quarter: 'Q2 2025',
    desc: 'Getting pre-signups for the buy now, pay later product & partnerships with crypto cards. Onboarding initial merchants. Securing TVL commits',
  },
  {
    quarter: 'Q3 2025',
    desc: 'Releasing "Buy Now, Pay Later + Pay with Yield". Moving agile in small iterations, onboarding merchants in batches.',
  },
  {
    quarter: 'Q4 2025',
    desc: 'Implementing custom underwriting and risk-management; switch from Plaid to a zk solution.',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7 }
  })
};

const Roadmap = () => (
  <div className="relative min-h-screen bg-black overflow-x-hidden flex flex-col">
    {/* Background Elements */}
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-700 rounded-full blur-3xl opacity-30"></div>
    <div className="absolute right-10 top-1/2 w-96 h-96 bg-green-700 rounded-full blur-3xl opacity-30 transform -translate-y-1/2"></div>
    <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
    <Navbar />
    <section className="relative z-10 py-20 px-4 max-w-7xl mx-auto flex-1">
      <div className="flex justify-end mb-12">
        <h2 className="text-5xl font-extralight" style={{ color: '#B6FF7A' }}>Roadmap</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
        {roadmap.map((item, idx) => (
          <motion.div
            key={item.quarter}
            custom={idx + 1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-[#18191A] rounded-3xl p-8 w-full md:w-1/3 shadow-2xl border border-[#333] min-h-[200px] flex flex-col justify-start"
          >
            <h3 className="text-3xl mb-4 font-extralight" style={{ color: '#B6FF7A' }}>{item.quarter}</h3>
            <p className="text-white/80 text-base font-extralight">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
    <Footer />
  </div>
);

export default Roadmap; 