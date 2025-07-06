import React from "react";
import Navbar from './Navbar';
import { motion } from 'framer-motion';

function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-700 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute right-10 top-1/2 w-96 h-96 bg-green-700 rounded-full blur-3xl opacity-30 transform -translate-y-1/2"></div>
      <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20"></div>

      <Navbar />

      {/* Hero Section */}
      <motion.div 
        className="relative z-10 text-white text-center pt-40 pb-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.h1 
          className="text-6xl font-bold mb-6 font-extralight"
          variants={scaleIn}
        >
          About Yumi Finance
        </motion.h1>
        <motion.p 
          className="text-xl font-semibold  mt-10 font-extralight max-w-4xl mx-auto px-6 leading-relaxed "
          variants={fadeInUp}
        >
          Yumi Finance is the first fully on-chain "Buy now, pay later" solution
          that pays you back. We allow users to pay in 6 weeks with 4 bi-weekly
          zero-interest installments, as well as longer-term financing plans.
        </motion.p>
      </motion.div>

      {/* Features Section */}
      <motion.div 
        className="relative z-10 py-20 px-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-white text-center font-extralight mb-16"
            variants={fadeInUp}
          >
            Why Choose Yumi Finance?
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8 hover:scale-105 transition duration-300 ease-in-out">
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              variants={fadeInLeft}
            >
              <div className="text-green-400 text-4xl mb-4 font-extralight">💳</div>
              <h3 className="text-2xl font-bold text-white mb-4 hover:text-blue-400 font-extralight">Zero Interest</h3>
              <p className="text-gray-300 leading-relaxed font-extralight">
                Enjoy 4 bi-weekly installments with absolutely zero interest charges. 
                Pay only what you owe, nothing more.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              variants={fadeInUp}
            >
              <div className="text-blue-400 text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4 hover:text-blue-400 font-extralight">Instant Approval</h3>
              <p className="text-gray-300 leading-relaxed font-extralight">
                Get approved instantly with our advanced on-chain verification system. 
                No lengthy paperwork or waiting periods.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              variants={fadeInRight}
            >
              <div className="text-purple-400 text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-white mb-4 hover:text-blue-400 font-extralight">Secure & Transparent</h3>
              <p className="text-gray-300 leading-relaxed font-extralight">
                Built on blockchain technology ensuring complete transparency and 
                security for all your transactions.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="relative z-10 py-20 px-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-16 font-extralight"
            variants={fadeInUp}
          >
            Our Impact
          </motion.h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div variants={fadeInUp}>
              <div className="text-4xl font-bold text-green-400 mb-2 font-extralight">10K+</div>
              <div className="text-gray-300 font-extralight">Happy Customers</div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-4xl font-bold text-blue-400 mb-2 font-extralight">$50M+</div>
              <div className="text-gray-300 font-extralight">Total Volume</div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-4xl font-bold text-purple-400 mb-2 font-extralight">99.9%</div>
              <div className="text-gray-300 font-extralight">Uptime</div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-4xl font-bold text-yellow-400 mb-2 font-extralight">24/7</div>
              <div className="text-gray-300 font-extralight">Support</div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="relative z-10 py-20 px-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold text-white mb-6 font-extralight"
            variants={fadeInUp}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8 font-extralight"
            variants={fadeInUp}
          >
            Join thousands of users who are already enjoying the benefits of 
            Yumi Finance's innovative payment solutions.
          </motion.p>
          <motion.button 
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 font-extralight"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Shopping Now
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
