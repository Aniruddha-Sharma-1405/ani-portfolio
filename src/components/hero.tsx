import { motion } from "motion/react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-pink-900/20" />
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <span className="text-pink-400 tracking-wider uppercase text-sm">Welcome to the home page of a world, I like to call my Second home</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-pink-200 via-blue-300 to-blue-400 bg-clip-text text-transparent">
            Aniruddha Sharma
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Software Engineer & AI Enthusiast
          </p>
          
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Crafting robust backend solutions while exploring the frontiers of artificial intelligence.
          </p>

          <div className="flex items-center justify-center gap-6 mb-12">
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-pink-600 to-pink-800 hover:from-pink-700 hover:to-pink-900 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/50"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-blue-600 hover:bg-blue-600/10 rounded-lg transition-all duration-300"
            >
              View Work
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/Aniruddha-Sharma-1405"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/aniruddha-sharma-85525a1a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:aniruddha.sharma1@example.com"
              className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about">
            <ChevronDown size={32} className="text-pink-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}