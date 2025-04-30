'use client'; // Required for Framer Motion and interactivity

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from "react-icons/fa6";

export default function HeroSection() {

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
      {/* Animated background (optional) */}

      {/* Gradient background */}
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
          Full-stack developer specializing in:
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
        <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm md:text-base">
              Ruby on Rails
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm md:text-base">
              Next.js
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm md:text-base">
              React
            </span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm md:text-base">
              PostgreSQL
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl"
        >
          I build robust backends with Rails and dynamic frontends with Next.js,
          delivering complete web solutions from database to UI.
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
          <a
            href="https://wa.me/523141352209?text=Hello%20Uno%20Dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
            aria-label="Email"
          >
            <FaWhatsapp className="text-gray-800 dark:text-gray-200 text-xl" />
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