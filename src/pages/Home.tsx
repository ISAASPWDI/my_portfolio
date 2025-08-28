import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Github, Linkedin, Mail, ArrowRight, Download, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ContactForm } from "@/components/ContactForm"
import heroAvatar from "@/assets/hero-avatar.jpg"

export default function Home() {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
  ]

  return (
    <div className="hero-section">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Section - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-6xl lg:text-7xl font-bold mb-4">
                <span className="text-foreground">Hello, I'm</span>
                <br />
                <span className="text-gradient">Alex Johnson</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-6 leading-relaxed">
                Full Stack Developer & Computer Science Student
              </p>
              <p className="text-lg text-muted-foreground max-w-lg">
                Passionate about creating innovative solutions and learning cutting-edge technologies. 
                Currently pursuing my Computer Science degree while building real-world applications.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center space-x-6"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="group relative p-3 bg-card/60 hover:bg-primary/10 border border-border/50 rounded-xl transition-all duration-300 hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                )
              })}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/projects">
                <Button className="btn-primary group">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" className="btn-secondary group">
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Section - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="card-elevated p-6 max-w-md">
                <motion.img
                  src={heroAvatar}
                  alt="Alex Johnson - Full Stack Developer"
                  className="w-full h-auto rounded-lg shadow-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </Card>
              
              {/* Floating elements for visual interest */}
              <motion.div
                className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-lg"
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Quick Stats or Skills Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground mb-8">Explore my journey through technology and learning</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "2+", label: "Years Experience" },
              { number: "15+", label: "Technologies Learned" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="card-elevated p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              >
                <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gradient">Let's Work Together</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Ready to bring your ideas to life? I'm always excited to discuss new projects, 
                collaborate on innovative solutions, or simply connect with fellow developers 
                and potential employers.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">Available for full-time opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">Open to freelance projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">Interested in mentorship opportunities</span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </div>
  )
}