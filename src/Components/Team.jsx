import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import im1 from '../assets/im1.png';
import im2 from '../assets/im2.png';
import im3 from '../assets/im3.png';
import img2 from '../assets/img2.png';
const team = [
  {
    name: 'Mikhail',
    role: 'Co-Founder & CEO',
    desc: 'ex. founder @ miki.digital, ex. Ooga Booga, AirCanada',
    img: im1, // Using the second image as requested
  },
  {
    name: 'Vlad',
    role: 'Co-Founder & CTO',
    desc: '5+ year of experience building complex DeFi on EVM & TON.',
    img: im2,
  },
  {
    name: 'Alex',
    role: 'Strategic Advisor',
    desc: 'Co-Founder @ EVAA Protocol',
    img: im3,
  },
  {
    name: 'Kevin',
    role: 'Strategic Advisor',
    desc: 'Co-Founder @ Ooga Booga',
    img: img2,
  },
  {
    name: 'Dina',
    role: 'Strategic Advisor',
    desc: 'Partner @ Agnostic Fund ex. Bridgewater & ex. Goldman Quant',
    img: img2,
  },
  {
    name: 'Mark Hee',
    role: 'Legal Advisor',
    desc: 'Co-Founder @ Outlaw School of Law @ NUY & NUS',
    img: img2,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7 }
  })
};

const Team = () => (
  <div className="relative min-h-screen bg-black overflow-x-hidden">
    {/* Background Elements */}
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-700 rounded-full blur-3xl opacity-30"></div>
    <div className="absolute right-10 top-1/2 w-96 h-96 bg-green-700 rounded-full blur-3xl opacity-30 transform -translate-y-1/2"></div>
    <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
    <Navbar />
    <section className="relative z-10 py-20 px-4 max-w-7xl mx-auto">
      <div className="flex justify-end mb-12">
        <h2 className="text-5xl font-extralight" style={{ color: '#B6FF7A' }}>Team</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, idx) => (
          <motion.div
            key={member.name}
            custom={idx + 1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white/10 rounded-3xl p-8 flex flex-col items-center shadow-2xl border border-white/10 backdrop-blur-md"
          >
            <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-[#B6FF7A]" />
            <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
            <p className="text-[#B6FF7A] text-lg font-semibold mb-2">{member.role}</p>
            <p className="text-white/80 text-center text-sm font-extralight">{member.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Team; 