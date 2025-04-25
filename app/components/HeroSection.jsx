'use client'; // Required for Framer Motion and interactivity

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function HeroSection() {

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
      {/* Animated background (optional) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
        className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-gray-800 dark:to-gray-900"
      />

      {/* Content container */}
      <div className="max-w-4xl mx-auto">
        {/* Name/Title */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Uno Dev</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
        >
          I build modern web experiences with Next.js and React
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4"
        >
          <a
            href="https://github.com/chucoyos"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
            aria-label="GitHub"
          >
            <FiGithub className="text-gray-800 dark:text-gray-200 text-xl" />
          </a>
          <a
            href="https://linkedin.com/in/j-jesus-gonzalez-sosa-3b3b5188"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="text-gray-800 dark:text-gray-200 text-xl" />
          </a>
          <a
            href="mailto:unodev@outlook.com"
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
            aria-label="Email"
          >
            <FiMail className="text-gray-800 dark:text-gray-200 text-xl" />
          </a>
        </motion.div>

        {/* Scroll indicator (optional) */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce w-6 h-6 border-2 border-gray-400 dark:border-gray-600 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}