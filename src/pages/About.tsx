import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code2, 
  Lightbulb, 
  Target, 
  Heart, 
  Laptop, 
  Users, 
  BookOpen, 
  Trophy 
} from "lucide-react"

export default function About() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", 
    "PostgreSQL", "Git", "Docker", "AWS", "Tailwind CSS"
  ]

  const interests = [
    { icon: Code2, title: "Full Stack Development", description: "Creating end-to-end solutions" },
    { icon: Lightbulb, title: "Problem Solving", description: "Finding elegant solutions to complex challenges" },
    { icon: BookOpen, title: "Continuous Learning", description: "Always exploring new technologies" },
    { icon: Users, title: "Collaboration", description: "Working effectively in teams" }
  ]

  const values = [
    { icon: Target, title: "Excellence", description: "Striving for high-quality, maintainable code" },
    { icon: Heart, title: "Passion", description: "Genuine enthusiasm for technology and innovation" },
    { icon: Laptop, title: "Adaptability", description: "Embracing change and new methodologies" },
    { icon: Trophy, title: "Growth", description: "Committed to personal and professional development" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30">
      <div className="container mx-auto px-4 py-20">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">About Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get to know who I am, what drives me, and the values that guide my work as a developer
          </p>
        </motion.div>

        {/* Who I Am Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <Card className="card-elevated p-8 lg:p-12">
            <h2 className="text-3xl font-bold mb-6 text-gradient">Who I Am</h2>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm Alex Johnson, a passionate Computer Science student and aspiring full-stack developer 
                  with a deep love for creating innovative digital solutions. Currently in my third year 
                  at University, I've dedicated myself to mastering both the theoretical foundations 
                  and practical applications of software development.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My journey began with curiosity about how websites work, which quickly evolved into 
                  a passion for building complete applications from concept to deployment. I thrive on 
                  the challenge of solving complex problems and turning ideas into reality through code.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    >
                      <Badge variant="secondary" className="px-3 py-1 text-sm">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Interests Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient">My Interests</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => {
              const Icon = interest.icon
              return (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="card-elevated p-6 h-full hover:shadow-[var(--shadow-medium)] transition-all duration-300 group">
                    <div className="text-center">
                      <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{interest.title}</h3>
                      <p className="text-muted-foreground">{interest.description}</p>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient">My Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <Card className="card-elevated p-6 h-full hover:shadow-[var(--shadow-medium)] transition-all duration-300 group">
                    <div className="text-center">
                      <div className="inline-flex p-3 bg-accent/20 rounded-xl mb-4 group-hover:bg-accent/30 transition-colors">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <Card className="card-elevated p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Let's Connect</h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, 
              or simply chat about technology and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contact@example.com" className="btn-primary inline-flex items-center justify-center">
                Get In Touch
              </a>
              <a href="/projects" className="btn-secondary inline-flex items-center justify-center">
                View My Projects
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}