"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiAward, FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

const timelineData = {
  education: [
    {
      period: "2020 - Present",
      title: "Bachelor of Science in Information Technology",
      institution: "Polytechnic University of the Philippines - Parañaque",
      description: "Consistent President's Lister | BSIT Program",
      icon: "🎓",
      location: "Parañaque City",
      achievements: ["President's Lister from 1st to 4th Year", "Academic Excellence Award", "Dean's Lister"],
      skills: ["Programming", "Web Development", "Database Management", "System Analysis"],
      gpa: "1.25",
      awards: [
        { year: "2023", title: "Academic Excellence Award" },
        { year: "2022", title: "Dean's Lister" },
        { year: "2021", title: "President's Lister" }
      ]
    },
    {
      period: "2018 - 2020",
      title: "Senior High School",
      institution: "Ramon Pascual Institute",
      description: "Science, Technology, Engineering & Mathematics",
      icon: "📚",
      location: "Parañaque City",
      achievements: ["Rubik's Cube Champion (Grade 10)", "Academic Excellence"],
      skills: ["Mathematics", "Physics", "Computer Science"],
      gpa: "95%",
      awards: [
        { year: "2020", title: "STEM Excellence Award" },
        { year: "2019", title: "Mathematics Competition Winner" }
      ]
    },
    {
      period: "2012 - 2018",
      title: "Elementary & Junior High School",
      institution: "Fourth Estate Elementary School",
      description: "Grade School & Junior High Education",
      icon: "🏫",
      location: "Parañaque City",
      achievements: ["Consistent Honor Student", "Academic Achievement Awards"],
      skills: ["Basic Sciences", "Mathematics", "English"],
      gpa: "92%",
      awards: [
        { year: "2018", title: "Academic Excellence" },
        { year: "2017", title: "Best in Mathematics" }
      ]
    }
  ],
  experience: [
    {
      period: "2022 - Present",
      title: "Operations Assistant",
      institution: "DHTech Parañaque City",
      description: "Part-time Technical Operations & Support",
      icon: "💼",
      location: "Parañaque City",
      achievements: [
        "Technical support and operations management",
        "System maintenance and optimization",
        "Client coordination and problem resolution"
      ],
      skills: ["Technical Support", "Operations Management", "System Maintenance"],
      projects: [
        "Implemented new system optimization protocols",
        "Reduced ticket resolution time by 30%",
        "Trained 5 new team members"
      ],
      responsibilities: [
        "Managing daily technical operations",
        "Providing technical support to clients",
        "System maintenance and updates"
      ]
    },
    {
      period: "2023",
      title: "Barista",
      institution: "Starbucks - Pres Ave",
      description: "Part-time Coffee Master",
      icon: "☕",
      location: "Parañaque City",
      achievements: [
        "Customer service excellence",
        "Beverage preparation expertise",
        "Team collaboration and support"
      ],
      skills: ["Customer Service", "Beverage Preparation", "Team Collaboration"],
      projects: [
        "Trained 3 new baristas",
        "Implemented new drink preparation methods",
        "Improved customer satisfaction ratings"
      ],
      responsibilities: [
        "Preparing beverages to company standards",
        "Providing excellent customer service",
        "Maintaining store cleanliness"
      ]
    },
    {
      period: "2022 - Present",
      title: "Store Assistant",
      institution: "Burger Buddies",
      description: "Family Business Support",
      icon: "🍔",
      location: "Parañaque City",
      achievements: [
        "Store operations management",
        "Customer service",
        "Inventory management"
      ],
      skills: ["Operations Management", "Customer Service", "Inventory Control"],
      projects: [
        "Implemented new inventory system",
        "Improved order processing efficiency",
        "Developed staff training program"
      ],
      responsibilities: [
        "Managing daily store operations",
        "Handling customer inquiries",
        "Maintaining inventory levels"
      ]
    }
  ]
};

const skillsData = {
  technical: [
    { name: "React/Next.js", proficiency: 90 },
    { name: "TypeScript/JavaScript", proficiency: 85 },
    { name: "Node.js", proficiency: 80 },
    { name: "Java", proficiency: 85 },
    { name: "C#", proficiency: 75 },
    { name: "HTML/CSS", proficiency: 90 },
    { name: "SQL/MongoDB", proficiency: 80 },
    { name: "Git/GitHub", proficiency: 85 }
  ],
  soft: [
    { name: "Problem Solving", proficiency: 90 },
    { name: "Team Collaboration", proficiency: 85 },
    { name: "Communication", proficiency: 85 },
    { name: "Project Management", proficiency: 80 }
  ]
};

const Timeline = () => {
  const [activeTab, setActiveTab] = useState<"education" | "experience" | "skills">("education");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="timeline" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black" />
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
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
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
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
            Education & Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic journey and professional experience
          </p>
        </motion.div>

        <div className="flex justify-center mb-12 space-x-4">
          {["education", "experience", "skills"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => {
                setActiveTab(tab as "education" | "experience" | "skills");
                setSelectedItem(null);
              }}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all ${
                activeTab === tab
                  ? "bg-secondary text-white shadow-lg scale-105"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              whileHover={{ scale: activeTab === tab ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto" ref={ref}>
          <AnimatePresence mode="wait">
            {activeTab === "skills" ? (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-12"
              >
                {/* Download CV Button */}
                <motion.div
                  className="flex justify-center mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.a
                    href="/JohnShannonRodriguez_CV.pdf"
                    download
                    className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-accent rounded-full text-white font-medium hover:shadow-lg hover:shadow-secondary/20 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download CV
                  </motion.a>
                </motion.div>

                {/* Technical Skills */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillsData.technical.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="text-white">{skill.name}</span>
                          <span className="text-secondary">{skill.proficiency}%</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-secondary to-accent"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Soft Skills */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-white mb-6">Soft Skills</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillsData.soft.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="text-white">{skill.name}</span>
                          <span className="text-accent">{skill.proficiency}%</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-accent to-purple-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: activeTab === "education" ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: activeTab === "education" ? 20 : -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {timelineData[activeTab].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        duration: 0.6,
                        delay: index * 0.2
                      }
                    } : { opacity: 0, y: 50 }}
                    className="relative"
                  >
                    <motion.div
                      className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg cursor-pointer 
                        transform transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/20
                        ${selectedItem === index ? 'ring-2 ring-secondary scale-[1.02]' : ''}`}
                      onClick={() => setSelectedItem(selectedItem === index ? null : index)}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <motion.span 
                          className="text-3xl"
                          animate={{ rotate: selectedItem === index ? 360 : 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          {item.icon}
                        </motion.span>
                        <div className="flex-1">
                          <div className="flex justify-between items-start flex-wrap gap-2">
                            <div>
                              <h3 className="text-xl font-semibold text-white group-hover:text-secondary transition-colors">
                                {item.title}
                              </h3>
                              <p className="text-secondary font-medium flex items-center gap-2">
                                <span>{item.institution}</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                                <span className="flex items-center text-gray-400 text-sm">
                                  <FiMapPin className="mr-1" /> {item.location}
                                </span>
                              </p>
                            </div>
                            <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full flex items-center">
                              <FiCalendar className="mr-2" /> {item.period}
                            </span>
                          </div>
                          
                          <AnimatePresence>
                            {selectedItem === index && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-6 space-y-6"
                              >
                                {/* Skills Section */}
                                <div>
                                  <h4 className="text-white font-medium mb-3 flex items-center">
                                    <FiAward className="mr-2" /> Skills & Expertise
                                  </h4>
                                  <div className="flex flex-wrap gap-2">
                                    {item.skills.map((skill, i) => (
                                      <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="px-3 py-1 rounded-full text-sm bg-secondary/10 text-secondary"
                                      >
                                        {skill}
                                      </motion.span>
                                    ))}
                                  </div>
                                </div>

                                {/* Achievements Section */}
                                <div>
                                  <h4 className="text-white font-medium mb-3 flex items-center">
                                    <FiBriefcase className="mr-2" /> Key Achievements
                                  </h4>
                                  <ul className="space-y-2">
                                    {item.achievements.map((achievement, i) => (
                                      <motion.li
                                        key={achievement}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center text-gray-300"
                                      >
                                        <motion.span 
                                          className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"
                                          animate={{ scale: [1, 1.5, 1] }}
                                          transition={{ duration: 1, repeat: Infinity }}
                                        />
                                        {achievement}
                                      </motion.li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Additional Info Section */}
                                {activeTab === "education" && item.gpa && (
                                  <div className="bg-gray-700/30 rounded-lg p-4">
                                    <h4 className="text-white font-medium mb-2">Academic Performance</h4>
                                    <p className="text-secondary">GPA/Average: {item.gpa}</p>
                                    {item.awards && (
                                      <div className="mt-3">
                                        <h5 className="text-white font-medium mb-2">Awards & Honors</h5>
                                        <ul className="space-y-1">
                                          {item.awards.map((award, i) => (
                                            <motion.li
                                              key={award.title}
                                              initial={{ opacity: 0 }}
                                              animate={{ opacity: 1 }}
                                              transition={{ delay: i * 0.1 }}
                                              className="text-gray-300 text-sm"
                                            >
                                              {award.year}: {award.title}
                                            </motion.li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                  </div>
                                )}

                                {/* Projects/Responsibilities Section for Experience */}
                                {activeTab === "experience" && (
                                  <>
                                    {item.projects && (
                                      <div className="space-y-3">
                                        <h4 className="text-white font-medium">Key Projects</h4>
                                        <ul className="space-y-2">
                                          {item.projects.map((project, i) => (
                                            <motion.li
                                              key={project}
                                              initial={{ opacity: 0, x: -20 }}
                                              animate={{ opacity: 1, x: 0 }}
                                              transition={{ delay: i * 0.1 }}
                                              className="flex items-center text-gray-300"
                                            >
                                              <motion.span 
                                                className="w-1.5 h-1.5 bg-accent rounded-full mr-3"
                                                animate={{ scale: [1, 1.5, 1] }}
                                                transition={{ duration: 1, repeat: Infinity }}
                                              />
                                              {project}
                                            </motion.li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                    
                                    {item.responsibilities && (
                                      <div className="space-y-3">
                                        <h4 className="text-white font-medium">Core Responsibilities</h4>
                                        <ul className="space-y-2">
                                          {item.responsibilities.map((responsibility, i) => (
                                            <motion.li
                                              key={responsibility}
                                              initial={{ opacity: 0, x: -20 }}
                                              animate={{ opacity: 1, x: 0 }}
                                              transition={{ delay: i * 0.1 }}
                                              className="flex items-center text-gray-300"
                                            >
                                              <motion.span 
                                                className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"
                                                animate={{ scale: [1, 1.5, 1] }}
                                                transition={{ duration: 1, repeat: Infinity }}
                                              />
                                              {responsibility}
                                            </motion.li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                  </>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Timeline connector */}
                    {index < timelineData[activeTab].length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 40 }}
                        className="absolute left-10 bottom-0 w-0.5 -mb-6 z-0"
                        style={{ transformOrigin: "top" }}
                      >
                        <div className="h-full bg-gradient-to-b from-secondary to-accent" />
                        <motion.div
                          className="absolute inset-0 bg-white"
                          animate={{
                            y: ["0%", "100%"],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          style={{ opacity: 0.2 }}
                        />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Timeline; 