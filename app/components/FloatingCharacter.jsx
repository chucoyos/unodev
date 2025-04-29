'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';

export default function FloatingCharacter() {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { delay: 1.5, duration: 0.8 }
      });
      
      controls.start({
        y: [0, -15, 0],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      });
    };
    sequence();
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="fixed top-24 left-12 z-50 hidden lg:block"
      style={{
        // Transparent container
        backgroundColor: 'transparent',
        // No background color affects children
        isolation: 'isolate'
      }}
       
    >
      <div className="relative w-32 h-32">
        <Image
          src="/boy.png"
          alt="Friendly character"
          fill
          className="object-contain"
          style={{
            // Ensure no background artifacts
            mixBlendMode: 'normal',
            // Prevent any div background bleeding
            pointerEvents: 'none' // Allows clicks through transparent areas
          }}
          
          priority
        />
      </div>
    </motion.div>
  );
}