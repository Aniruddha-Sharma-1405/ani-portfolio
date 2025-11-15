import { motion } from "motion/react";
import { ExternalLink, Github, X } from "lucide-react";
import { useState } from "react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);


  const projects = [
    {
      title: "NLP based Sentiment Analysis of Twitter posts",
      description: "Scrapping tweets from the internet based on specific parameters and analysing them using Natural Langugage Processing.",
      technologies: ["Machine Learning", "Python", "Natural Language Processing", "Data Processing"],
      gradient: "from-pink-600/20 to-pink-900/20",
      githubLink: "https://github.com/Aniruddha-Sharma-1405/Extracting-and-Processing-Socialable-Data-from-the-Internet",
      detailedDescription: `Python-Based Data Pre-processing, Machine Learning, and NLP-Based Sentiment Analysis of Tweets
      

Key Features:

-> Efficient tweet data collection using Twitter API and Tweepy integration
-> Advanced data pre-processing with tokenization, stop-word removal, and lemmatization using NLTK and SpaCy
-> Feature extraction through TF-IDF and Word2Vec embeddings for semantic representation
-> Sentiment classification using Logistic Regression, SVM, and LSTM deep learning models
-> Hyperparameter tuning with GridSearchCV and performance evaluation using precision, recall, and F1-score
-> End-to-end pipeline automation using Python and Scikit-learn for repeatable experiments
-> Real-time visualization and sentiment trend analysis through Matplotlib and Seaborn dashboards
-> The platform demonstrates robust use of natural language processing and supervised learning techniques to derive meaningful insights from large-scale social media data, following modular and reusable design principles.`,
      challenges: "Handling noisy and unstructured tweet data, managing imbalanced sentiment classes, and optimizing model performance for real-time inference.",
      outcome: "Achieved over 90% sentiment classification accuracy and enabled faster, automated analytics of large text datasets, improving decision-making and trend tracking efficiency.",
    },
    {
      title: "AI Chat bot for Banking services [2023]",
      description: "Hackathon-winning project, AI banking chatbot",
      technologies: ["Python", "TensorFlow", "Python Web dev", "Flask"],
      gradient: "from-blue-600/20 to-blue-900/20",
      githubLink: "https://github.com/Aniruddha-Sharma-1405/AiChatBot",
      detailedDescription: `Key Features:

-> 24/7 customer support for account inquiries, payments, and transaction histories using advanced Natural Language Processing
-> Seamless integration with core banking systems via secure APIs for real-time data access [Scope]
-> Personalized financial guidance and actionable insights, leveraging customer behavior analytics
-> Automated fraud detection alerts and transaction monitoring implemented with machine learning models
-> End-to-end encryption to ensure data security and privacy compliance
-> Continuous learning from user interactions, improving response accuracy and customer satisfaction
-> The platform exemplifies best practices in resilient, modular AI development, enabling rapid iteration and smooth communication between distributed services while ensuring robust security and compliance mechanisms.​`,
      challenges: "Maintaining sensitive financial data privacy, integrating with legacy banking systems, and balancing automated responses with seamless human escalation for complex user needs.​",
      outcome: "Dramatically reduced customer query response times, enhanced user engagement, and delivered a reliable, scalable banking experience that contributed to winning the hackathon.",
    },
    {
      title: "Peer-to-Peer Lending System using Private Enterprise Blockchain",
      description: "NLP-based chatbot with context awareness and multi-language support, integrated with enterprise backend systems.",
      technologies: ["R3 Corda","Web Development", "RESTful APIs", "PHP"],
      gradient: "from-pink-600/20 to-blue-900/20",
      githubLink: "https://github.com/Aniruddha-Sharma-1405/P2P-Lending_System",
      detailedDescription: `Key Features:

-> Secure, permissioned peer-to-peer lending platform built on R3 Corda distributed ledger technology
-> Real-time transaction validation and settlement between lenders and borrowers without a central authority
-> Smart contract-driven loan agreements, ensuring compliance with pre-defined rules and regulatory requirements
-> Privacy-preserving design: only involved parties see transaction details, enhancing data confidentiality
-> Automated workflow orchestration for loan origination, disbursement, and repayment
-> Built-in notary services for uniqueness and validity consensus, preventing double-spending and fraud
-> Scalable architecture supporting high transaction volumes and dynamic network growth
-> Integration with existing banking and financial systems for seamless liquidity management
-> The platform demonstrates best practices in enterprise blockchain development, emphasizing secure, auditable, and compliant financial transactions within a decentralized environment.​​`,
      challenges: "Ensuring regulatory compliance across jurisdictions, maintaining privacy while enabling auditability, and integrating with legacy financial infrastructure.​",
      outcome: "Enabled transparent, efficient, and secure peer-to-peer lending with reduced operational overhead and improved trust among participants.",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
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
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-600 to-blue-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl border border-pink-900/30 hover:border-pink-600/50 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(index)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />
              
              <div className="relative p-8 bg-black/50 backdrop-blur-sm h-full flex flex-col">
                <h3 className="text-xl mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-pink-950/50 border border-pink-800/50 rounded-full text-sm text-pink-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="text-sm text-pink-400 group-hover:text-pink-300 transition-colors duration-200">
                  Click to view details →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject !== null && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
            onClick={() => setSelectedProject(null)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 z-50 overflow-hidden"
          >
            <div className="h-full bg-gradient-to-br from-pink-950/95 to-black/95 border border-pink-600/50 rounded-2xl shadow-2xl shadow-pink-900/50 flex flex-col">
              <div className="flex items-start justify-between p-6 md:p-8 border-b border-pink-900/30">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl mb-3 bg-gradient-to-r from-pink-200 to-blue-300 bg-clip-text text-transparent">
                    {projects[selectedProject].title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-pink-950/50 border border-pink-800/50 rounded-full text-sm text-pink-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="ml-4 p-2 text-gray-400 hover:text-white hover:bg-pink-900/30 rounded-lg transition-colors duration-200"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <div className="max-w-4xl">
                  <div className="mb-8">
                    <h4 className="text-xl text-pink-300 mb-3">Project Overview</h4>
                    <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                      {projects[selectedProject].detailedDescription}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl text-blue-300 mb-3">Challenges</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {projects[selectedProject].challenges}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl text-pink-300 mb-3">Outcome</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {projects[selectedProject].outcome}
                    </p>
                  </div>

                  <div className="flex gap-4 pt-6">
                    <a
                      href={projects[selectedProject].githubLink}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-600 to-pink-800 hover:from-pink-700 hover:to-pink-900 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/50"
                    >
                      <Github size={18} />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </section>
  );
}