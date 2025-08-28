import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com", 
      label: "GitHub",
      username: "alexjohnson" 
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/in/alexjohnson", 
      label: "LinkedIn",
      username: "Alex Johnson" 
    },
    { 
      icon: Mail, 
      href: "mailto:alex@example.com", 
      label: "Email",
      username: "alex@example.com" 
    },
  ]

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-gradient mb-2">Alex Johnson</h3>
            <p className="text-muted-foreground text-sm">
              Full Stack Developer & Computer Science Student
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="group relative p-3 bg-background/60 hover:bg-primary/10 border border-border/50 rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  title={`${social.label}: ${social.username}`}
                >
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.username}
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" fill="currentColor" /> 
              © {new Date().getFullYear()}
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </motion.div>
        </div>

        {/* Quick Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-border/50"
        >
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="/notebook" className="text-muted-foreground hover:text-primary transition-colors">
              Learning Notebook
            </a>
            <a href="/reflection" className="text-muted-foreground hover:text-primary transition-colors">
              Reflection
            </a>
            <a href="/resources" className="text-muted-foreground hover:text-primary transition-colors">
              Resources
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}