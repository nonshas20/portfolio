"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiGithub, FiFacebook, FiCheck, FiX } from "react-icons/fi";

const socialLinks = [
  {
    name: "Email",
    icon: <FiMail className="text-2xl" />,
    href: "mailto:johnshannonrodriguez20@gmail.com",
    color: "from-pink-500 to-rose-500",
    particleColor: "rgba(244, 114, 182, 0.2)" // pink-400 with opacity
  },
  {
    name: "GitHub",
    icon: <FiGithub className="text-2xl" />,
    href: "https://github.com/nonshas20",
    color: "from-purple-500 to-indigo-500",
    particleColor: "rgba(139, 92, 246, 0.2)" // purple-500 with opacity
  },
  {
    name: "Facebook",
    icon: <FiFacebook className="text-2xl" />,
    href: "https://www.facebook.com/johnshannon.rodriguez/",
    color: "from-blue-500 to-cyan-500",
    particleColor: "rgba(59, 130, 246, 0.2)" // blue-500 with opacity
  }
];

interface NotificationProps {
  type: "success" | "error";
  message: string;
}

const Contact = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<NotificationProps | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setNotification({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setNotification({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setNotification(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary via-accent to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Social Links Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-8">Find me on</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative group p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm
                    hover:bg-gray-800/80 transition-all duration-300`}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${link.color} 
                      flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                      {link.icon}
                    </div>
                    <h4 className="text-white font-medium">{link.name}</h4>
                  </div>
                  
                  {/* Glowing effect and particles */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <>
                        {/* Glow effect */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-10 rounded-xl blur-xl`}
                        />
                        
                        {/* Particles */}
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ 
                              opacity: 0,
                              scale: 0,
                              x: 0,
                              y: 0
                            }}
                            animate={{ 
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0.5],
                              x: [0, (Math.random() - 0.5) * 100],
                              y: [0, (Math.random() - 0.5) * 100]
                            }}
                            transition={{
                              duration: 1.5,
                              delay: i * 0.1,
                              repeat: Infinity,
                              repeatDelay: 0.5
                            }}
                            className="absolute w-2 h-2 rounded-full"
                            style={{
                              left: '50%',
                              top: '50%',
                              background: link.particleColor,
                              filter: 'blur(1px)'
                            }}
                          />
                        ))}
                      </>
                    )}
                  </AnimatePresence>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-xl blur-xl" />
            <motion.form
              onSubmit={handleSubmit}
              className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div>
                <label className="block text-white mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all duration-300"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-white mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all duration-300"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-white mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all duration-300 resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg bg-gradient-to-r from-secondary to-accent text-white font-medium
                  hover:shadow-lg hover:shadow-secondary/50 transition-all duration-300 relative overflow-hidden
                  ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                <span className={`flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-0' : ''}`}>
                  Send Message
                </span>
                {isSubmitting && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
              </motion.button>
            </motion.form>
          </div>
        </div>

        {/* Notification */}
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`fixed bottom-8 right-8 max-w-md p-4 rounded-lg shadow-lg backdrop-blur-sm
                ${notification.type === 'success' ? 'bg-green-500/90' : 'bg-red-500/90'}`}
            >
              <div className="flex items-center gap-3">
                {notification.type === 'success' ? (
                  <FiCheck className="text-white text-xl" />
                ) : (
                  <FiX className="text-white text-xl" />
                )}
                <p className="text-white">{notification.message}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact; 