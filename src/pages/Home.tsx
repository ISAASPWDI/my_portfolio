import { Link } from "react-router-dom"
import { Github, Linkedin, Mail, ArrowRight, Download, MessageCircle, GraduationCap, Briefcase, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ContactForm } from "@/components/ContactForm"
import heroAvatar from "@/assets/photo-cv.jpeg"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function Home() {
  const avatarParticlesRef = useRef(null)

  useEffect(() => {
    // Partículas para el avatar solamente
    const createAvatarParticles = () => {
      const container = avatarParticlesRef.current
      if (!container) return

      const colors = ['#ef4444', '#3b82f6', '#22c55e', '#eab308', '#a855f7', '#ec4899', '#14b8a6', '#f97316']
      const particleCount = 30

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div')
        const size = Math.random() * 4 + 2
        const color = colors[Math.floor(Math.random() * colors.length)]
        
        particle.style.position = 'absolute'
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`
        particle.style.backgroundColor = color
        particle.style.borderRadius = '50%'
        particle.style.left = '50%'
        particle.style.top = '50%'
        particle.style.opacity = `${Math.random() * 0.6 + 0.3}`
        particle.style.pointerEvents = 'none'
        particle.style.filter = 'blur(0.5px)'
        
        const radius = 140 + Math.random() * 40
        const duration = Math.random() * 15 + 10
        const delay = Math.random() * 3
        
        particle.style.animation = `orbitParticle${i} ${duration}s ${delay}s infinite linear`
        
        const keyframes = `
          @keyframes orbitParticle${i} {
            0% { 
              transform: translate(-50%, -50%) rotate(0deg) translateX(${radius}px) rotate(0deg);
            }
            100% { 
              transform: translate(-50%, -50%) rotate(360deg) translateX(${radius}px) rotate(-360deg);
            }
          }
        `
        
        const style = document.createElement('style')
        style.textContent = keyframes
        document.head.appendChild(style)
        
        container.appendChild(particle)
      }
    }

    createAvatarParticles()
  }, [])

  const socialLinks = [
    { icon: Github, href: "https://github.com/ISAASPWDI", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/stevens-aliaga-arauco-05bb39226/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:stivensaliaga@gmail.com", label: "Email" },
  ]
  
  const homeCards = [
    {
      icon: GraduationCap,
      title: "Education",
      items: [
        { degree: "Systems Engineering", description: "Universidad Nacional del centro del Perú • 2021 - 2026" },
        { degree: "Course: Node.js from Zero to Expert", description: "Udemy • 2025" },
        { degree: "Course: Java University", description: "Udemy • 2025" },
        { degree: "Course: React.js from Zero to Expert", description: "Udemy • 2025" }
      ]
    },
    {
      icon: Briefcase,
      title: "Experience",
      items: [
        { degree: "Backend Developer Intern", description: "Tecnovedades Web • Aug 2024 – Aug 2025 (1 year)" },
        { degree: "Backend Developer Intern", description: "CasaMarket • Set 2023 – May 2024 (8 months)" }
      ]
    },
    {
      icon: MapPin,
      title: "Location",
      items: [
        { degree: "Available to work worldwide" },
        { description: "Open to remote opportunities" },
        { description: "Willing to relocate if necessary" }
      ]
    }
  ]

  return (
    <div className="hero-section overflow-hidden relative">
      {/* Partículas flotantes de fondo usando framer-motion */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Partícula coral-magenta grande */}
        <motion.div
          className="absolute top-16 left-8 w-28 h-28 bg-gradient-to-br from-pink-400/30 to-fuchsia-600/35 rounded-full blur-2xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.6, 0.6, 1.4, 1],
            x: [0, 40, -25, 35, 0],
            y: [0, -30, 25, -20, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Partícula turquesa-aqua */}
        <motion.div
          className="absolute top-44 right-16 w-20 h-20 bg-gradient-to-br from-teal-400/35 to-cyan-600/40 rounded-full blur-xl"
          animate={{
            scale: [0.5, 2.2, 1.2, 0.7, 1.5, 0.5],
            rotate: [200, 20, 380, 200],
            x: [0, -35, 25, -45, 0],
            y: [0, 35, -20, 40, 0]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Partícula lavanda-violeta elíptica */}
        <motion.div
          className="absolute bottom-36 left-1/5 w-16 h-36 bg-gradient-to-t from-purple-500/25 to-violet-700/35 rounded-full blur-xl"
          animate={{
            rotate: [0, 200, 400],
            scaleY: [1, 1.8, 0.4, 1.5, 1],
            scaleX: [1, 0.6, 1.5, 1],
            x: [0, 30, -25, 35, 0],
            y: [0, -40, 20, -30, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Partícula dorado-ámbar */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-22 h-22 bg-gradient-to-br from-yellow-400/40 to-amber-700/35 rounded-full blur-2xl"
          animate={{
            rotate: [0, -400, -800],
            scale: [1, 0.4, 2, 1, 1],
            x: [0, 50, -30, 45, 0],
            y: [0, 30, -40, 35, 0]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />

        {/* Partícula mint-verde horizontal */}
        <motion.div
          className="absolute top-64 left-1/2 w-32 h-10 bg-gradient-to-r from-emerald-500/30 to-green-700/35 rounded-full blur-xl"
          animate={{
            rotate: [0, 110, 200, 290, 400],
            scaleX: [1, 0.2, 2.2, 0.9, 1],
            scaleY: [1, 1.8, 1, 1.5, 1],
            x: [0, -60, 40, -50, 0],
            y: [0, 50, -30, 45, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Partícula crimson-rosa */}
        <motion.div
          className="absolute bottom-16 right-8 w-24 h-24 bg-gradient-to-br from-red-500/30 to-rose-700/35 rounded-full blur-2xl"
          animate={{
            scale: [0.6, 1.9, 1.3, 0.8, 0.6],
            rotate: [60, 420, 240, 600, 60],
            x: [0, -40, 30, -25, 0],
            y: [0, 25, -35, 20, 0]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Partícula slate-azul acero */}
        <motion.div
          className="absolute top-8 left-2/5 w-14 h-14 bg-gradient-to-br from-slate-500/30 to-blue-600/35 rounded-full blur-xl"
          animate={{
            scale: [1.4, 0.4, 1.6, 0.7, 1.4],
            rotate: [0, 320, 160, 500, 760],
            x: [0, 35, -30, 40, 0],
            y: [0, -25, 35, -15, 0]
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />

        {/* Partícula peach-coral vertical */}
        <motion.div
          className="absolute bottom-56 left-16 w-12 h-28 bg-gradient-to-t from-orange-500/25 to-pink-700/35 rounded-full blur-xl"
          animate={{
            rotate: [100, 280, 460, 640, 820],
            scaleY: [1, 1.6, 0.5, 1.3, 1],
            scaleX: [1, 0.7, 1.4, 1],
            x: [0, 25, -35, 20, 0],
            y: [0, 30, -25, 40, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Partículas medianas */}
        <motion.div
          className="absolute top-28 right-1/5 w-10 h-10 bg-gradient-to-br from-teal-600/40 to-emerald-700/35 rounded-full blur-lg"
          animate={{
            scale: [1, 1.5, 0.8, 1.3, 1],
            x: [0, 25, -15, 30, 0],
            y: [0, -20, 30, -25, 0]
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-28 right-1/4 w-12 h-12 bg-gradient-to-br from-indigo-600/35 to-purple-700/40 rounded-full blur-lg"
          animate={{
            rotate: [0, 200, 400],
            scale: [1, 0.5, 1.4, 1],
            x: [0, -30, 20, -25, 0],
            y: [0, 35, -25, 30, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />

        <motion.div
          className="absolute top-80 left-12 w-8 h-20 bg-gradient-to-t from-orange-600/30 to-red-700/40 rounded-full blur-lg"
          animate={{
            rotate: [0, 300, 600],
            scaleY: [1, 1.5, 0.6, 1],
            x: [0, 30, -20, 0],
            y: [0, -35, 25, 0]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-1/5 left-3/4 w-11 h-11 bg-gradient-to-br from-lime-600/40 to-green-800/35 rounded-full blur-lg"
          animate={{
            scale: [1, 0.3, 1.6, 0.8, 1],
            rotate: [0, 380, 200, 560],
            x: [0, -25, 35, -20, 0],
            y: [0, 40, -30, 25, 0]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />

        {/* Partículas pequeñas */}
        <motion.div
          className="absolute top-1/3 left-1/6 w-6 h-6 bg-gradient-to-br from-cyan-600/45 to-blue-800/40 rounded-full blur-md"
          animate={{
            scale: [0.7, 1.3, 0.9, 1.1, 0.7],
            x: [0, 15, -12, 18, 0],
            y: [0, -12, 20, -18, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-3/5 w-7 h-7 bg-gradient-to-br from-emerald-700/40 to-teal-800/45 rounded-full blur-md"
          animate={{
            rotate: [0, 280, 560],
            scale: [1.2, 0.6, 1.4, 1.2],
            x: [0, -22, 28, 0],
            y: [0, 32, -18, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />

        <motion.div
          className="absolute top-2/3 right-1/6 w-5 h-14 bg-gradient-to-t from-rose-700/35 to-pink-800/40 rounded-full blur-md"
          animate={{
            rotate: [45, 285, 525],
            scaleY: [1, 1.3, 0.8, 1],
            x: [0, 16, -14, 0],
            y: [0, -22, 18, 0]
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Partículas micro */}
        <motion.div
          className="absolute top-1/6 right-2/5 w-4 h-4 bg-gradient-to-br from-yellow-600/50 to-orange-800/45 rounded-full blur-sm"
          animate={{
            scale: [0.9, 1.1, 0.8, 1, 0.9],
            x: [0, 8, -6, 10, 0],
            y: [0, -6, 12, -8, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/6 left-4/5 w-3 h-8 bg-gradient-to-t from-purple-700/45 to-violet-800/50 rounded-full blur-sm"
          animate={{
            rotate: [0, 180, 360],
            scaleY: [1, 1.2, 0.9, 1],
            x: [0, -8, 6, 0],
            y: [0, 10, -8, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />

        {/* Partículas adicionales azul-púrpura */}
        <motion.div
          className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full blur-xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 0.7, 1.3, 1],
            x: [0, 35, -20, 30, 0],
            y: [0, -25, 20, -15, 0]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-40 right-20 w-18 h-18 bg-gradient-to-br from-emerald-400/35 to-teal-600/35 rounded-full blur-2xl"
          animate={{
            scale: [0.6, 2, 1.1, 0.8, 1.4, 0.6],
            rotate: [180, 0, 360, 180],
            x: [0, -30, 20, -40, 0],
            y: [0, 30, -15, 35, 0]
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute top-32 right-1/4 w-8 h-8 bg-gradient-to-br from-rose-500/35 to-pink-600/35 rounded-full blur-lg"
          animate={{
            scale: [0.9, 1.4, 1, 1.2, 0.9],
            x: [0, 20, -15, 25, 0],
            y: [0, -15, 25, -20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-1/2 right-16 w-5 h-5 bg-gradient-to-br from-indigo-600/40 to-purple-700/40 rounded-full blur-md"
          animate={{
            scale: [0.8, 1.2, 0.9, 1.1, 0.8],
            x: [0, 12, -8, 15, 0],
            y: [0, -8, 15, -12, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] mb-16 lg:mb-20">

          <div className="flex flex-col items-center lg:block space-y-6 lg:space-y-8 order-2 lg:order-1 animate-[fadeInLeft_0.8s_ease-out_0.2s_both]">
            <div className="flex flex-col items-center lg:block animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
              <h1 className="text-center text-foreground lg:text-start text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
                Hi, I&apos;m <br />
                Stevens Aliaga
              </h1>
              <p className="text-center lg:text-start text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-6 leading-relaxed">
                Backend developer & System Engineer Student
              </p>
              <p className="text-center lg:text-start text-base lg:text-lg text-muted-foreground max-w-lg">
                With a deep passion for my field, I'm constantly seeking new learning opportunities and excited to explore cutting-edge technologies that allow me to innovate and overcome challenges.
              </p>
            </div>

            <div className="flex items-center space-x-4 lg:space-x-6 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    className="group relative p-2.5 lg:p-3 bg-card/60 hover:bg-primary/10 border border-border/50 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95"
                     style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <Icon className="h-5 w-5 lg:h-6 lg:w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
              <Link to="/projects">
                <Button className="btn-primary group transition-transform duration-500 w-full sm:w-auto hover:scale-105">
                  View my work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="/CV_ALIAGA_ARAUCO_STEVENS.es.pdf" download="CV_STEVENS_ALIAGA_ARAUCO.es.pdf">
                <Button variant="outline" className="btn-secondary hover:bg-primary/10 group transition-all duration-300 w-full sm:w-auto">
                  <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-500" />
                  Download CV
                </Button>
              </a>
            </div>
          </div>

          <div className="flex justify-center order-1 pt-20 lg:pt-0 lg:order-2 mb-8 lg:mb-0 animate-[fadeInRight_0.8s_ease-out_0.4s_both]">
            <div className="relative transition-transform duration-300 hover:scale-105">
              {/* Partículas orbitales del avatar */}
              <div ref={avatarParticlesRef} className="absolute inset-0 pointer-events-none" 
                style={{
                  width: 'calc(100% + 80px)',
                  height: 'calc(100% + 80px)',
                  top: '-40px',
                  left: '-40px'
                }} 
              />
              
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                <img
                  src={heroAvatar}
                  alt="Stevens Aliaga - Full Stack Developer"
                  className="w-full h-full object-cover animate-[scaleIn_0.8s_ease-out_0.6s_both]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-full" />
              </div>

              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-[spin_20s_linear_infinite]"
                style={{
                  width: 'calc(100% + 40px)',
                  height: 'calc(100% + 40px)',
                  top: '-20px',
                  left: '-20px'
                }}>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 lg:w-3 lg:h-3 bg-primary/60 rounded-full shadow-lg" />
              </div>

              <div className="absolute inset-0 rounded-full border-2 border-accent/25 border-dashed animate-[spin_30s_linear_infinite_reverse]"
                style={{
                  width: 'calc(100% + 60px)',
                  height: 'calc(100% + 60px)',
                  top: '-30px',
                  left: '-30px'
                }}>
                <div className="absolute bottom-0 right-1/4 w-2 h-2 lg:w-2.5 lg:h-2.5 bg-accent/70 rounded-full shadow-lg" />
                <div className="absolute top-1/4 left-0 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-accent/50 rounded-full shadow-md" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6 mb-16 lg:mb-20">
          {homeCards.map((card, index) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="animate-[fadeInUp_0.6s_ease-out_both]"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <Card className="card-elevated p-4 lg:p-6 h-full hover:shadow-[var(--shadow-medium)] transition-all duration-300 group">
                  <div className="text-center">
                    <div className="inline-flex p-2.5 lg:p-3 bg-primary/10 rounded-xl mb-3 lg:mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-extrabold mb-2">{card.title}</h3>
                    {card.items.map((item, i) => (
                      <div key={i} className="mb-2">
                        {item.degree && (
                          <p className="font-semibold">{item.degree}</p>
                        )}
                        <p className="text-sm lg:text-base text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )
          })}
        </div>

        <div className="mt-16 lg:mt-20 text-center animate-[fadeInUp_0.8s_ease-out_1s_both]">
          <p className="text-muted-foreground mb-6 lg:mb-8">
            Explore my journey in technology and learning
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 max-w-3xl mx-auto">
            {[
              { number: "15+", label: "Projects Completed" },
              { number: "2+", label: "Years Experience" },
              { number: "10+", label: "Technologies Learned" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="card-elevated p-4 lg:p-6 animate-[fadeInUp_0.6s_ease-out_both]"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                <div className="text-2xl lg:text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-sm lg:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 lg:mt-20 relative overflow-hidden animate-[fadeInUp_0.8s_ease-out_1.4s_both]">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="relative">
              <div className="animate-[fadeInLeft_0.8s_ease-out_1.6s_both]">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-gradient">Let's work together</h2>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 lg:mb-8">
                  Ready to bring your ideas to life? I'm always excited to discuss new projects, collaborate on innovative solutions, or simply connect with fellow developers and potential employers.
                </p>
              </div>

              <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8 animate-[fadeInUp_0.8s_ease-out_1.8s_both]">
                <div className="flex items-center space-x-3 group hover:translate-x-1 transition-transform duration-300">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0 animate-pulse" />
                  <span className="text-sm lg:text-base text-muted-foreground group-hover:text-foreground transition-colors">
                    Open to full-time opportunities
                  </span>
                </div>

                <div className="flex items-center space-x-3 group hover:translate-x-1 transition-transform duration-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <span className="text-sm lg:text-base text-muted-foreground group-hover:text-foreground transition-colors">
                    Committed to continuous learning
                  </span>
                </div>

                <div className="flex items-center space-x-3 group hover:translate-x-1 transition-transform duration-300">
                  <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 animate-pulse" style={{ animationDelay: '1s' }} />
                  <span className="text-sm lg:text-base text-muted-foreground group-hover:text-foreground transition-colors">
                    Teamwork and innovation oriented
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 animate-[fadeInUp_0.8s_ease-out_2s_both]">
                <div className="flex items-center space-x-3 p-3 lg:p-4 bg-card hover:bg-card/80 border border-border rounded-lg transition-all duration-300 group cursor-pointer hover:scale-105 hover:-translate-y-0.5 active:scale-95">
                  <div className="flex-shrink-0">
                    <MessageCircle className="h-4 w-4 lg:h-5 lg:w-5 text-primary group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="font-medium text-xs lg:text-sm text-foreground">Fast response</div>
                    <div className="text-xs text-muted-foreground">Usually within 24 hours</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 lg:p-4 bg-card hover:bg-card/80 border border-border rounded-lg transition-all duration-300 group cursor-pointer hover:scale-105 hover:-translate-y-0.5 active:scale-95">
                  <div className="flex-shrink-0">
                    <Mail className="h-4 w-4 lg:h-5 lg:w-5 text-primary group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="font-medium text-xs lg:text-sm text-foreground">Professionalism</div>
                    <div className="text-xs text-muted-foreground">Clear and detailed communication</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <ContactForm />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}