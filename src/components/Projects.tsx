"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { FiGithub, FiExternalLink, FiFolder, FiX } from "react-icons/fi";
import Image from 'next/image';

const projectsData = [
  {
    title: "DisasterWatchPH",
    description: "A comprehensive disaster monitoring and alert system application designed specifically for the Philippines. This platform provides real-time alerts and monitoring capabilities to help citizens stay informed and safe during natural disasters.",
    image: "/disasterwatch.jpg",
    category: ["Web", "Frontend", "Backend"],
    technologies: ["React", "Node.js", "MongoDB", "Real-time Alerts"],
    liveUrl: "#",
    githubUrl: "https://github.com/ramusama09/DisasterWatchPH.git",
    featured: true,
    highlights: [
      "Real-time disaster monitoring system",
      "Integrated alert notifications",
      "Interactive disaster mapping",
      "User-friendly emergency response interface"
    ]
  },
  {
    title: "Leenk",
    description: "A sophisticated mobile application developed in Java, showcasing advanced Android development skills. This app demonstrates modern mobile development practices and user-centric design principles.",
    image: "/leenkbank.jpg",
    category: ["Mobile"],
    technologies: ["Java", "Android", "Mobile Development"],
    liveUrl: "#",
    githubUrl: "https://github.com/nonshas20/Leenk.git",
    featured: true,
    highlights: [
      "Native Android implementation",
      "Intuitive user interface",
      "Robust mobile architecture",
      "Performance-optimized features"
    ]
  },
  {
    title: "BurgerBuddies",
    description: "A cross-platform mobile application built with C# for efficient restaurant management. This solution streamlines operations and enhances customer service in the food service industry.",
    image: "/burgerbuddies.jpg",
    category: ["Mobile", "Frontend"],
    technologies: ["C#", "Xamarin", "iOS", "Android"],
    liveUrl: "#",
    githubUrl: "https://github.com/nonshas20/BurgerBuddies.git",
    featured: true,
    highlights: [
      "Cross-platform compatibility",
      "Restaurant management system",
      "Order processing automation",
      "Real-time inventory tracking"
    ]
  },
  {
    title: "DHTech Website",
    description: "A modern corporate website developed for DHTech Parañaque City, featuring a clean, professional design and responsive user interface. Built with cutting-edge web technologies for optimal performance.",
    image: "https://placehold.co/600x400",
    category: ["Web", "Frontend"],
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    highlights: [
      "Modern responsive design",
      "SEO-optimized architecture",
      "Performance-focused implementation",
      "Interactive UI components"
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary via-accent to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Explore my latest works and creative endeavors
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto" ref={ref}>
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: index * 0.2
                }
              } : { opacity: 0, y: 50 }}
              onClick={() => setSelectedProject(index)}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative group cursor-pointer"
            >
              <motion.div
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 z-10" />
                  <motion.div
                    className="absolute inset-0 bg-gray-900/60 z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div
                    className="w-full h-full bg-cover bg-center transform transition-transform duration-500"
                    style={{ 
                      backgroundImage: `url(${project.image})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <FiFolder className="text-secondary text-2xl" />
                    <div className="flex space-x-4">
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-gray-400 hover:text-secondary"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiGithub className="text-xl" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-gray-700/50 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-800 rounded-2xl w-full max-w-7xl max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-50"
                >
                  <FiX size={24} />
                </button>

                <div className="flex flex-col md:flex-row md:h-[80vh]">
                  {/* Image Section */}
                  <div className="w-full md:w-1/2 h-[300px] md:h-full relative">
                    <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent to-gray-800 z-10" />
                    <div
                      className="w-full h-full bg-cover bg-center transform hover:scale-110 transition-transform duration-500"
                      style={{ 
                        backgroundImage: `url(${projectsData[selectedProject].image})`,
                        position: 'absolute',
                        inset: 0
                      }}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="w-full md:w-1/2 p-6 md:p-8 md:overflow-y-auto">
                    <div className="md:sticky md:top-0 bg-gray-800 pt-4">
                      <h3 className="text-3xl font-bold text-white mb-4">
                        {projectsData[selectedProject].title}
                      </h3>

                      <div className="flex flex-wrap gap-3 mb-6">
                        {projectsData[selectedProject].technologies.map((tech) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {projectsData[selectedProject].description}
                      </p>

                      {/* Project Highlights Section */}
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white">Key Highlights</h4>
                        <ul className="list-none space-y-3">
                          {projectsData[selectedProject].highlights.map((highlight, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center gap-3 text-gray-300"
                            >
                              <span className="w-2 h-2 rounded-full bg-secondary" />
                              {highlight}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {projectsData[selectedProject].githubUrl !== "#" && (
                        <div className="flex flex-wrap gap-4 pt-6">
                          <motion.a
                            href={projectsData[selectedProject].githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-full font-medium hover:bg-opacity-90 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FiGithub /> View Source
                          </motion.a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects; 