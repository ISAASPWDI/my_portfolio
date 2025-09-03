import { motion, useInView } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { 
  Trophy, 
  TrendingUp, 
  Users, 
  Lightbulb, 
  Target, 
  Heart,
  Edit3,
  Save
} from "lucide-react"
import { useState, useRef } from "react"

export default function Reflection() {
  const [isEditing, setIsEditing] = useState(false)
  const [personalReflection, setPersonalReflection] = useState(
    "This learning journey has been transformative, pushing me beyond my comfort zone and helping me develop both technical skills and problem-solving mindset. Each challenge has taught me something valuable about persistence, creativity, and the importance of continuous learning in technology."
  )
  
  const growthRef = useRef(null)
  const isInView = useInView(growthRef, { once: true, amount: 0.3 })

  const growthAreas = [
    {
      icon: Trophy,
      title: "Technical Mastery",
      description: "Progressed from basic HTML/CSS to full-stack development",
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "Git"],
      improvement: 95
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Developed systematic approach to breaking down complex problems",
      skills: ["Debugging", "Algorithm Design", "System Architecture"],
      improvement: 85
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Enhanced ability to work effectively in team environments", 
      skills: ["Code Reviews", "Documentation", "Communication"],
      improvement: 80
    },
    {
      icon: TrendingUp,
      title: "Project Management",
      description: "Learned to manage timelines, scope, and deliverables effectively",
      skills: ["Planning", "Agile Methods", "Version Control"],
      improvement: 75
    }
  ]

  const teamContributions = [
    {
      title: "Fresh Perspective",
      description: "Bring new ideas and modern approaches to established practices",
      icon: "💡"
    },
    {
      title: "Rapid Learning",
      description: "Quick to adapt to new technologies and methodologies",
      icon: "🚀"
    },
    {
      title: "Detail-Oriented",
      description: "Meticulous attention to code quality and user experience",
      icon: "🔍"
    },
    {
      title: "Collaborative Spirit",
      description: "Enthusiastic about knowledge sharing and peer learning",
      icon: "🤝"
    },
    {
      title: "Problem Solver",
      description: "Persistent in finding elegant solutions to complex challenges",
      icon: "🧩"
    },
    {
      title: "Growth Mindset",
      description: "Continuously seeking feedback and opportunities to improve",
      icon: "📈"
    }
  ]

  const futureGoals = [
    "Master advanced React patterns and state management",
    "Develop expertise in cloud technologies (AWS, Docker)",
    "Contribute to open source projects",
    "Learn machine learning and AI integration",
    "Build scalable applications with microservices",
    "Mentor other aspiring developers"
  ]

  const handleSaveReflection = () => {
    setIsEditing(false)
    // In a real app, you'd save this to a database
    console.log('Reflection saved:', personalReflection)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30 relative overflow-hidden">
      {/* Partículas flotantes con desenfoque */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/25 to-purple-500/25 rounded-full blur-xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.4, 0.8, 1.2, 1],
            x: [0, 30, -15, 25, 0],
            y: [0, -20, 15, -10, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-green-400/30 to-teal-500/30 rounded-full blur-2xl"
          animate={{
            scale: [0.5, 1.8, 1, 0.7, 1.3, 0.5],
            rotate: [180, 0, 360, 180],
            x: [0, -25, 15, -35, 0],
            y: [0, 25, -10, 30, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute bottom-40 left-1/4 w-12 h-28 bg-gradient-to-t from-pink-400/20 to-red-500/25 rounded-full blur-xl"
          animate={{
            rotate: [0, 180, 360],
            scaleY: [1, 1.5, 0.6, 1.2, 1],
            scaleX: [1, 0.8, 1.3, 1],
            x: [0, 20, -15, 25, 0],
            y: [0, -30, 10, -20, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-1/3 right-1/3 w-14 h-14 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-full blur-2xl"
          animate={{
            rotate: [0, -360, -720],
            scale: [1, 0.6, 1.6, 0.9, 1],
            x: [0, 40, -20, 35, 0],
            y: [0, 20, -30, 25, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />

        <motion.div
          className="absolute top-60 left-1/2 w-24 h-6 bg-gradient-to-r from-indigo-400/25 to-cyan-500/25 rounded-full blur-xl"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scaleX: [1, 0.4, 1.8, 0.7, 1],
            scaleY: [1, 1.5, 1, 1.3, 1],
            x: [0, -50, 30, -40, 0],
            y: [0, 40, -20, 35, 0]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-20 right-10 w-18 h-18 bg-gradient-to-br from-purple-400/20 to-pink-500/25 rounded-full blur-2xl"
          animate={{
            scale: [0.8, 1.6, 1.1, 0.9, 0.8],
            rotate: [45, 405, 225, 585, 45],
            x: [0, -30, 20, -15, 0],
            y: [0, 15, -25, 10, 0]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-10 left-1/3 w-10 h-10 bg-gradient-to-br from-emerald-400/25 to-lime-500/30 rounded-full blur-xl"
          animate={{
            scale: [1.2, 0.6, 1.4, 0.8, 1.2],
            rotate: [0, 270, 180, 450, 720],
            x: [0, 25, -20, 30, 0],
            y: [0, -15, 25, -5, 0]
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />

        <motion.div
          className="absolute bottom-60 left-20 w-8 h-20 bg-gradient-to-t from-amber-400/20 to-yellow-500/25 rounded-full blur-xl"
          animate={{
            rotate: [90, 270, 450, 630, 810],
            scaleY: [1, 1.4, 0.7, 1.1, 1],
            scaleX: [1, 0.9, 1.2, 1],
            x: [0, 15, -25, 10, 0],
            y: [0, 20, -15, 30, 0]
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Partículas adicionales más pequeñas */}
        <motion.div
          className="absolute top-32 right-1/4 w-6 h-6 bg-gradient-to-br from-rose-400/30 to-violet-500/30 rounded-full blur-lg"
          animate={{
            scale: [0.8, 1.3, 0.9, 1.1, 0.8],
            x: [0, 15, -10, 20, 0],
            y: [0, -10, 20, -15, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-32 right-1/3 w-8 h-8 bg-gradient-to-br from-cyan-400/25 to-blue-500/30 rounded-full blur-lg"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 0.7, 1.2, 1],
            x: [0, -20, 10, -15, 0],
            y: [0, 25, -15, 20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />

        <motion.div
          className="absolute top-72 left-10 w-5 h-15 bg-gradient-to-t from-orange-400/25 to-red-500/30 rounded-full blur-lg"
          animate={{
            rotate: [0, 270, 540],
            scaleY: [1, 1.3, 0.8, 1],
            x: [0, 20, -10, 0],
            y: [0, -25, 15, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-1/4 left-2/3 w-7 h-7 bg-gradient-to-br from-lime-400/30 to-emerald-500/25 rounded-full blur-lg"
          animate={{
            scale: [1, 0.5, 1.4, 0.9, 1],
            rotate: [0, 360, 180, 540],
            x: [0, -15, 25, -10, 0],
            y: [0, 30, -20, 15, 0]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Final Reflection</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive look at my growth, achievements, and how I can contribute 
            to your team's success
          </p>
        </motion.div>

        {/* Personal Reflection */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="card-elevated p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gradient flex items-center">
                <Heart className="h-8 w-8 mr-3 text-primary" />
                My Learning Journey
              </h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => isEditing ? handleSaveReflection() : setIsEditing(true)}
                className="flex items-center gap-2"
              >
                {isEditing ? (
                  <>
                    <Save className="h-4 w-4" />
                    Save
                  </>
                ) : (
                  <>
                    <Edit3 className="h-4 w-4" />
                    Edit
                  </>
                )}
              </Button>
            </div>
            
            {isEditing ? (
              <Textarea
                value={personalReflection}
                onChange={(e) => setPersonalReflection(e.target.value)}
                className="min-h-[200px] text-lg leading-relaxed resize-none"
                placeholder="Share your thoughts on your learning journey..."
              />
            ) : (
              <p className="text-lg text-muted-foreground leading-relaxed">
                {personalReflection}
              </p>
            )}
          </Card>
        </motion.section>

        {/* Growth Areas */}
        <motion.section
          ref={growthRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient">Areas of Growth</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {growthAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="card-elevated p-6 h-full">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl mr-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1">{area.title}</h3>
                        <div className="flex items-center">
                          <div className="flex-1 bg-secondary rounded-full h-2 mr-3 overflow-hidden">
                            <motion.div 
                              className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${area.improvement}%` } : { width: 0 }}
                              transition={{ 
                                duration: 2, 
                                delay: 1 + index * 0.3,
                                ease: "easeOut"
                              }}
                            />
                          </div>
                          <motion.span 
                            className="text-sm font-medium text-primary"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: 1.5 + index * 0.3 
                            }}
                          >
                            {area.improvement}%
                          </motion.span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{area.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {area.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Team Contributions */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient">How I Can Contribute to Your Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamContributions.map((contribution, index) => (
              <motion.div
                key={contribution.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <Card className="card-elevated p-6 h-full text-center hover:shadow-[var(--shadow-medium)] transition-all duration-300">
                  <div className="text-3xl mb-4">{contribution.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{contribution.title}</h3>
                  <p className="text-muted-foreground text-sm">{contribution.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Future Goals */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <Card className="card-elevated p-8">
            <h2 className="text-3xl font-bold mb-6 text-gradient flex items-center">
              <Target className="h-8 w-8 mr-3 text-primary" />
              Future Learning Goals
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {futureGoals.map((goal, index) => (
                <motion.div
                  key={goal}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-muted-foreground">{goal}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <Card className="card-elevated p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Ready to Make an Impact</h3>
            <p className="text-muted-foreground mb-6">
              I'm excited to bring my passion for learning, problem-solving skills, and fresh perspective 
              to a dynamic development team. Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contact@example.com" className="btn-primary inline-flex items-center justify-center">
                Let's Connect
              </a>
              <a href="/projects" className="btn-secondary inline-flex items-center justify-center">
                View My Work
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}