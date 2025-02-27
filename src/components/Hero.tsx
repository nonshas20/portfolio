"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const achievements = [
    "🏆 President's Lister (1st to 4th Year)",
    "🏅 Rubik's Cube Champion (Grade 10)",
    "🎓 BSIT Student at PUP Parañaque",
    "💼 Operations Assistant at DHTech",
    "☕ Former Barista at Starbucks",
  ];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20 bg-gray-900"
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(108, 92, 231, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(0, 184, 148, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, rgba(108, 92, 231, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, rgba(0, 184, 148, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto text-center z-10">
        <motion.div variants={itemVariants} className="mb-8">
          <Image
            src="/profile-pic.png"
            alt="John Shannon O. Rodriguez"
            width={200}
            height={200}
            className="rounded-full mx-auto border-4 border-secondary shadow-xl"
          />
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-lg md:text-xl text-secondary mb-4 font-medium"
        >
          👋 Hello, I'm
        </motion.h2>
        
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 hero-gradient"
        >
          John Shannon O. Rodriguez
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8"
        >
          A passionate Full-Stack Developer and BSIT student at PUP Parañaque Campus,
          creating innovative solutions and delivering exceptional digital experiences.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement}
              className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm md:text-base text-gray-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {achievement}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center"
        >
          <a href="#projects" className="button-primary">
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-secondary text-secondary rounded-full font-medium
                     transition-all duration-300 hover:bg-secondary hover:text-white hover:scale-105"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Floating shapes */}
        <motion.div
          className="absolute left-10 top-1/4 w-20 h-20 bg-secondary/20 rounded-full blur-xl"
          animate={{
            y: [-20, 20],
            x: [-10, 10],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute right-10 bottom-1/4 w-32 h-32 bg-accent/20 rounded-full blur-xl"
          animate={{
            y: [20, -20],
            x: [10, -10],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
    </motion.section>
  );
};

export default Hero; 