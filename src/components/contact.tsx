import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "aniruddha.sharma.official@gmail.com" },
    { icon: MapPin, label: "Location", value: "Pune, India" },
  ];

  return (
    <section id="contact" className="py-24 relative">
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
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-600 to-blue-600 mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-8 text-white">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-pink-950/50 to-black border border-pink-900/30 rounded-lg">
                    <item.icon className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{item.label}</p>
                    <p className="text-gray-300">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-gradient-to-br from-pink-950/30 to-black border border-pink-900/30 rounded-xl">
              <p className="text-gray-400 leading-relaxed">
                Whether you're looking to collaborate on a SpringBoot project, discuss AI innovations, 
                or explore new opportunities, I'm always open to connecting with fellow tech enthusiasts 
                and professionals.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-pink-950/20 border-pink-900/30 focus:border-pink-600 text-white placeholder:text-gray-600"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-pink-950/20 border-pink-900/30 focus:border-pink-600 text-white placeholder:text-gray-600"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={6}
                  className="bg-pink-950/20 border-pink-900/30 focus:border-pink-600 text-white placeholder:text-gray-600 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-600 to-pink-800 hover:from-pink-700 hover:to-pink-900 text-white"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 text-center text-gray-500 border-t border-pink-900/30 pt-8"
        >
          <p>Designed and Built with ❤️ Passion and Paitence 😊</p>
        </motion.div>
      </div>
    </section>
  );
}