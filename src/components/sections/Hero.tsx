// Hero Component for BuildSmart Homepage using ReactJS (TypeScript) and Tailwind CSS

import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center bg-[url('/images/bg.jpg')]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Empowering Smarter Construction
        </motion.h1>
        <motion.p 
          className="text-lg md:text-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          Real-Time Project Management for a Seamless Build
        </motion.p>
        <motion.div 
          className="flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300">
            Explore Our Platform
          </button>
          <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300">
            Request a Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
