'use client';
import { useState, useEffect } from 'react';

const Footer = () => {

  return (
    <footer
      className="p-4 text-center dark:bg-gray-800 dark:text-white bg-gray-100 text-gray-800"
    >
      <p><span>Uno Dev</span> &copy; {new Date().getFullYear()} | Turning coffee into clean code since 2017</p>
    </footer>
  );
};

export default Footer;