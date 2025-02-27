'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of your first project. Highlight the key features and technologies used.',
    image: '/project1.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Project 2',
    description: 'Description of your second project. What problems did it solve? What did you learn?',
    image: '/project2.jpg',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS'],
    link: '#'
  },
  {
    title: 'Project 3',
    description: 'Your third project showcase. What makes it special? What was your role?',
    image: '/project3.jpg',
    tags: ['Python', 'Django', 'PostgreSQL'],
    link: '#'
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-gradient"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden"
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-white/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 