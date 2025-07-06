import React from "react";
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import Footer from "./Footer";

function HomePage() {
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
    <div className="flex flex-col min-h-screen bg-black overflow-x-hidden">
    {/* Background Elements */}
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-700 rounded-full blur-3xl opacity-30"></div>
    <div className="absolute right-10 top-1/2 w-96 h-96 bg-green-700 rounded-full blur-3xl opacity-30 transform -translate-y-1/2"></div>
    <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20"></div>

    <Navbar />

    {/* Main Content (Hero) */}
    <motion.div 
      className="relative z-10 text-white text-center pt-40 pb-20 flex-grow"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <motion.h1 
        className="text-6xl font-bold font-extralight mb-6"
        variants={scaleIn}
      >
        Yumi Finance
        <motion.p variants={fadeInUp} className="text-xl font-mono mt-5">
          Buy Now Pay Later Pay Back with Yield
        </motion.p>
      </motion.h1>
    </motion.div>

    {/* Footer at bottom */}
    <Footer />
  </div>
  );
}

export default HomePage;
