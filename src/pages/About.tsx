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
      {/* Floating particles with blur effect */}
      {/* Floating particles with blur effect */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  {/* Existing particles (keep them) */}
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

  {/* === NUEVAS PARTÍCULAS === */}

  {/* 11. Pequeña arriba a la derecha */}
  <motion.div
    className="absolute top-16 right-1/4 w-5 h-5 bg-gradient-to-br from-pink-300/30 to-purple-400/30 rounded-full blur-md"
    animate={{
      scale: [0.5, 1.1, 0.7, 1],
      y: [0, -10, 15, -5, 0],
      x: [0, 10, -5, 12, 0]
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  {/* 12. Vertical delgada en centro izquierda */}
  <motion.div
    className="absolute top-1/2 left-8 w-3 h-16 bg-gradient-to-b from-yellow-300/20 to-transparent rounded-full blur-xl"
    animate={{
      scaleY: [1, 1.8, 1.2, 1.5, 1],
      y: [0, -30, 20, -40, 0]
    }}
    transition={{
      duration: 11,
      repeat: Infinity,
      ease: "easeOut"
    }}
  />

  {/* 13. Pequeña en esquina inferior derecha */}
  <motion.div
    className="absolute bottom-16 right-16 w-7 h-7 bg-gradient-to-br from-teal-300/35 to-cyan-400/30 rounded-full blur-lg"
    animate={{
      rotate: [0, 120, 240, 360],
      scale: [1, 0.8, 1.3, 1],
      x: [0, -15, 10, -5, 0],
      y: [0, 10, -20, 15, 0]
    }}
    transition={{
      duration: 13,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  {/* 14. Horizontal delgada cerca del centro */}
  <motion.div
    className="absolute top-3/4 left-1/2 w-20 h-3 bg-gradient-to-r from-green-300/20 to-blue-400/25 rounded-full blur-lg"
    animate={{
      rotate: [0, 45, 90],
      scaleX: [1, 0.5, 1.2, 1],
      x: [0, 30, -20, 25, 0],
      y: [0, -15, 20, -10, 0]
    }}
    transition={{
      duration: 17,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  {/* 15. Partícula lenta en esquina superior izquierda */}
  <motion.div
    className="absolute top-24 left-1/4 w-9 h-9 bg-gradient-to-br from-indigo-300/25 to-purple-400/25 rounded-full blur-xl"
    animate={{
      scale: [1, 1.2, 0.9, 1.1, 1],
      y: [0, -12, 18, -8, 0],
      x: [0, 8, -10, 12, 0]
    }}
    transition={{
      duration: 19,
      repeat: Infinity,
      ease: "easeOut"
    }}
  />

  {/* 16. Pequeña en medio derecha */}
  <motion.div
    className="absolute top-1/3 right-12 w-4 h-4 bg-gradient-to-br from-orange-300/30 to-red-400/30 rounded-full blur-md"
    animate={{
      scale: [0.7, 1.2, 0.8, 1],
      y: [0, 15, -10, 20, 0],
      x: [0, -8, 12, -5, 0]
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  {/* 17. Partícula ovalada en diagonal */}
  <motion.div
    className="absolute top-2/3 left-1/3 w-10 h-4 bg-gradient-to-r from-pink-300/20 to-purple-400/20 rounded-full blur-lg"
    animate={{
      rotate: [0, 60, 120, 180],
      scale: [1, 1.3, 0.9, 1.1, 1],
      x: [0, 20, -15, 10, 0],
      y: [0, -25, 15, -20, 0]
    }}
    transition={{
      duration: 14,
      repeat: Infinity,
      ease: "easeOut"
    }}
  />

  {/* 18. Partícula muy tenue en fondo */}
  <motion.div
    className="absolute top-1/4 left-1/2 w-12 h-12 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl"
    animate={{
      scale: [1, 1.5, 1],
      opacity: [0.1, 0.2, 0.15, 0.1]
    }}
    transition={{
      duration: 25,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  {/* 19. Pequeña y rápida en movimiento errático */}
  <motion.div
    className="absolute bottom-48 right-1/2 w-3 h-3 bg-gradient-to-br from-lime-300/40 to-green-400/40 rounded-full blur-md"
    animate={{
      x: [0, 35, -20, 30, 0],
      y: [0, -20, 25, -15, 0],
      scale: [0.8, 1.4, 1, 0.9, 0.8]
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  {/* 20. Partícula vertical alta en centro inferior */}
  <motion.div
    className="absolute bottom-10 left-3/4 w-2 h-24 bg-gradient-to-t from-cyan-300/20 to-transparent rounded-full blur-2xl"
    animate={{
      scaleY: [1, 1.6, 1.1, 1.4, 1],
      y: [0, -40, 30, -35, 0]
    }}
    transition={{
      duration: 12,
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
            {/* Floating particles with blur effect */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  {/* Existing particles (keep them) */}


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

  {/* === NUEVAS PARTÍCULAS === */}

  {/* 11. Pequeña arriba a la derecha */}
  <motion.div
    className="absolute top-16 right-1/4 w-5 h-5 bg-gradient-to-br from-pink-300/30 to-purple-400/30 rounded-full blur-md"
    animate={{
      scale: [0.5, 1.1, 0.7, 1],
      y: [0, -10, 15, -5, 0],
      x: [0, 10, -5, 12, 0]
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  {/* 12. Vertical delgada en centro izquierda */}
  <motion.div
    className="absolute top-1/2 left-8 w-3 h-16 bg-gradient-to-b from-yellow-300/20 to-transparent rounded-full blur-xl"
    animate={{
      scaleY: [1, 1.8, 1.2, 1.5, 1],
      y: [0, -30, 20, -40, 0]
    }}
    transition={{
      duration: 11,
      repeat: Infinity,
      ease: "easeOut"
    }}
  />

  {/* 13. Pequeña en esquina inferior derecha */}
  <motion.div
    className="absolute bottom-16 right-16 w-7 h-7 bg-gradient-to-br from-teal-300/35 to-cyan-400/30 rounded-full blur-lg"
    animate={{
      rotate: [0, 120, 240, 360],
      scale: [1, 0.8, 1.3, 1],
      x: [0, -15, 10, -5, 0],
      y: [0, 10, -20, 15, 0]
    }}
    transition={{
      duration: 13,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  {/* 14. Horizontal delgada cerca del centro */}
  <motion.div
    className="absolute top-3/4 left-1/2 w-20 h-3 bg-gradient-to-r from-green-300/20 to-blue-400/25 rounded-full blur-lg"
    animate={{
      rotate: [0, 45, 90],
      scaleX: [1, 0.5, 1.2, 1],
      x: [0, 30, -20, 25, 0],
      y: [0, -15, 20, -10, 0]
    }}
    transition={{
      duration: 17,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  {/* 15. Partícula lenta en esquina superior izquierda */}
  <motion.div
    className="absolute top-24 left-1/4 w-9 h-9 bg-gradient-to-br from-indigo-300/25 to-purple-400/25 rounded-full blur-xl"
    animate={{
      scale: [1, 1.2, 0.9, 1.1, 1],
      y: [0, -12, 18, -8, 0],
      x: [0, 8, -10, 12, 0]
    }}
    transition={{
      duration: 19,
      repeat: Infinity,
      ease: "easeOut"
    }}
  />

  {/* 16. Pequeña en medio derecha */}
  <motion.div
    className="absolute top-1/3 right-12 w-4 h-4 bg-gradient-to-br from-orange-300/30 to-red-400/30 rounded-full blur-md"
    animate={{
      scale: [0.7, 1.2, 0.8, 1],
      y: [0, 15, -10, 20, 0],
      x: [0, -8, 12, -5, 0]
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  {/* 17. Partícula ovalada en diagonal */}
  <motion.div
    className="absolute top-2/3 left-1/3 w-10 h-4 bg-gradient-to-r from-pink-300/20 to-purple-400/20 rounded-full blur-lg"
    animate={{
      rotate: [0, 60, 120, 180],
      scale: [1, 1.3, 0.9, 1.1, 1],
      x: [0, 20, -15, 10, 0],
      y: [0, -25, 15, -20, 0]
    }}
    transition={{
      duration: 14,
      repeat: Infinity,
      ease: "easeOut"
    }}
  />

  {/* 18. Partícula muy tenue en fondo */}
  <motion.div
    className="absolute top-1/4 left-1/2 w-12 h-12 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl"
    animate={{
      scale: [1, 1.5, 1],
      opacity: [0.1, 0.2, 0.15, 0.1]
    }}
    transition={{
      duration: 25,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  {/* 19. Pequeña y rápida en movimiento errático */}
  <motion.div
    className="absolute bottom-48 right-1/2 w-3 h-3 bg-gradient-to-br from-lime-300/40 to-green-400/40 rounded-full blur-md"
    animate={{
      x: [0, 35, -20, 30, 0],
      y: [0, -20, 25, -15, 0],
      scale: [0.8, 1.4, 1, 0.9, 0.8]
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  {/* 20. Partícula vertical alta en centro inferior */}
  <motion.div
    className="absolute bottom-10 left-3/4 w-2 h-24 bg-gradient-to-t from-cyan-300/20 to-transparent rounded-full blur-2xl"
    animate={{
      scaleY: [1, 1.6, 1.1, 1.4, 1],
      y: [0, -40, 30, -35, 0]
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeOut"
    }}
  />
</div>
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