import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      category: "Backend Development",
      skills: [
        { name: "SpringBoot", level: 70 },
        { name: "Java", level: 80 },
        { name: "RESTful APIs", level: 90 },
        { name: "Microservices", level: 80 },
      ],
    },
    {
      category: "AI & Machine Learning",
      skills: [
        { name: "Python", level: 80 },
        { name: "TensorFlow", level: 40 },
        { name: "Machine Learning", level: 50 },
        { name: "NLP", level: 50 },
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Docker", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "Git", level: 90 },
        { name: "AWS", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-600 to-blue-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-pink-950/30 to-black border border-pink-900/30 rounded-xl"
            >
              <h3 className="text-xl mb-6 text-white">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-pink-600 to-blue-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}