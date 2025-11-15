import { motion } from "motion/react";
import { Code2, Brain, Rocket } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Backend Development",
      description: "Specialized in SpringBoot for building scalable enterprise applications",
    },
    {
      icon: Brain,
      title: "AI Enthusiast",
      description: "Exploring machine learning and AI integration in modern applications",
    },
    {
      icon: Rocket,
      title: "Innovation Driven",
      description: "Passionate about leveraging cutting-edge technologies to solve real problems",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-950/5 to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-600 to-blue-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-pink-950/30 to-black border border-pink-900/30 rounded-xl hover:border-pink-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-900/20"
            >
              <item.icon className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl mb-3 text-white">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-gray-400 leading-relaxed mb-6">
            I'm a software developer with a deep passion for creating robust, scalable backend systems using SpringBoot. 
            My journey in software development is complemented by a strong interest in artificial intelligence and machine learning.
          </p>
          <p className="text-gray-400 leading-relaxed">
            I believe in writing clean, maintainable code and staying at the forefront of technological innovation. 
            Whether it's architecting microservices or experimenting with the latest AI models, I'm driven by the challenge 
            of solving complex problems and building solutions that make a difference.
          </p>
        </motion.div>
      </div>
    </section>
  );
}