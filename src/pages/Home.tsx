import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Github, Linkedin, Mail, ArrowRight, Download, MessageCircle, GraduationCap, Briefcase, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ContactForm } from "@/components/ContactForm"
import heroAvatar from "@/assets/photo-cv.jpeg"
import pdf from "../../public/pdf 5.pdf"

export default function Home() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/ISAASPWDI", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/stevens-aliaga-arauco-05bb39226/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:stivensaliaga@gmail.com", label: "Email" },
  ]
  const homeCards = [
    {
      icon: GraduationCap,
      title: "Educación",
      items: [
        { degree: "Ingeniería de Sistemas", description: "Universidad Nacional del Centro del Perú • 2021 - 2026" },
        { degree: "Curso: Node.js de Cero a Experto", description: "Udemy • 2025" },
        { degree: "Curso: Universidad Java", description: "Udemy • 2025" }
      ]
    },
    {
      icon: Briefcase,
      title: "Experiencia",
      items: [
        { degree: "Practicante backend developer", description: "Tecnovedades Web • Ago 2024 – Ago 2025 (1 año)" },
        { degree: "Practicante backend developer", description: "Holinsys • Feb 2022 – Oct 2022 (8 meses)" }
      ]
    },
    {
      icon: MapPin,
      title: "Ubicación",
      items: [
        { degree: "Disponible para trabajar a nivel mundial" },
        { description: "Abierto a oportunidades en remoto" },
        { description: "Disponibilidad para reubicación si es necesario" }
      ]
    }

  ]

  return (
    <div className="hero-section overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] mb-16 lg:mb-20">

          {/* Left Section - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center lg:block space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-center lg:block"
            >
              <h1 className="text-center text-foreground lg:text-start text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
                Hola, Soy <br />
                Stevens Aliaga
              </h1>
              <p className="text-center lg:text-start text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-6 leading-relaxed">
                Backend developer & System Engineer Student
              </p>
              <p className=" text-center lg:text-start text-base lg:text-lg text-muted-foreground max-w-lg">
                Con una profunda pasión por mi carrera. Estoy constantemente en busca de nuevas oportunidades de aprendizaje y me entusiasma explorar tecnologías de vanguardia que me permitan innovar y superar desafíos.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center space-x-4 lg:space-x-6"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    className="group relative p-2.5 lg:p-3 bg-card/60 hover:bg-primary/10 border border-border/50 rounded-xl transition-all duration-300 hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <Icon className="h-5 w-5 lg:h-6 lg:w-6 text-muted-foreground group-hover:text-primary transition-colors" />
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
                <Button className="btn-primary group transition-transform duration-500 w-full sm:w-auto">
                  Ver mi trabajo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="/CV_STEVENS_ALIAGA_ARAUCO.pdf" download="CV_STEVENS_ALIAGA_ARAUCO.pdf">
                <Button variant="outline" className="btn-secondary hover:bg-primary/10 group transition-all duration-300 w-full sm:w-auto">
                  <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-500" />
                  Descargar CV
                </Button>
              </a>


            </motion.div>
          </motion.div>

          {/* Right Section - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center order-1 pt-20 lg:pt-0 lg:order-2 mb-8 lg:mb-0"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Contenedor circular principal - tamaño responsivo */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                <motion.img
                  src={heroAvatar}
                  alt="Stevens Aliaga - Full Stack Developer"
                  className="w-full h-full object-cover"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />

                {/* Overlay circular con gradiente sutil */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-full" />
              </div>

              {/* Elementos flotantes - tamaños y posiciones ajustadas para móvil */}
              <motion.div
                className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                  x: [0, 5, 0],
                  y: [0, -3, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div
                className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-lg"
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0],
                  x: [0, -4, 0],
                  y: [0, 3, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />

              {/* Elementos flotantes adicionales - posiciones controladas */}
              <motion.div
                className="absolute -top-4 right-8 sm:-top-8 sm:right-12 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-400/25 to-purple-400/25 rounded-full blur-md"
                animate={{
                  scale: [0.8, 1.3, 1.1, 0.9, 0.8],
                  rotate: [0, -120, -240, -360],
                  x: [0, 8, -3, 5, 0],
                  y: [0, 5, -4, 6, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="absolute top-12 -left-4 sm:top-16 sm:-left-8 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-full blur-sm"
                animate={{
                  scale: [1, 0.7, 1.2, 0.8, 1],
                  rotate: [0, 90, 180, 270, 360],
                  x: [0, -6, -4, -8, 0],
                  y: [0, 8, 4, 10, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />

              <motion.div
                className="absolute bottom-16 -left-5 sm:bottom-20 sm:-left-10 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-pink-400/20 to-red-400/20 rounded-full blur-lg"
                animate={{
                  scale: [1.1, 0.9, 1.3, 1.0, 1.1],
                  rotate: [180, 90, 0, -90, -180],
                  x: [0, 4, -3, 6, 0],
                  y: [0, -5, 3, -8, 0]
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="absolute top-24 -right-6 sm:top-32 sm:-right-12 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-400/25 to-orange-400/25 rounded-full blur-md"
                animate={{
                  scale: [0.9, 1.4, 1.1, 1.2, 0.9],
                  rotate: [90, 270, 450, 630, 810],
                  x: [0, -5, 3, -8, 0],
                  y: [0, 4, -6, 3, 0]
                }}
                transition={{
                  duration: 11,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="absolute bottom-6 right-12 sm:bottom-8 sm:right-20 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-indigo-400/30 to-cyan-400/30 rounded-full blur-sm"
                animate={{
                  scale: [1.2, 0.8, 1.5, 0.6, 1.2],
                  rotate: [0, -180, -360, -540, -720],
                  x: [0, 6, 4, 9, 0],
                  y: [0, -4, 5, -6, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />

              {/* Anillos orbitales - tamaños ajustados */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/20"
                style={{
                  width: 'calc(100% + 40px)',
                  height: 'calc(100% + 40px)',
                  top: '-20px',
                  left: '-20px'
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 lg:w-3 lg:h-3 bg-primary/60 rounded-full shadow-lg" />
              </motion.div>

              {/* Segundo anillo orbital */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-accent/25 border-dashed"
                style={{
                  width: 'calc(100% + 60px)',
                  height: 'calc(100% + 60px)',
                  top: '-30px',
                  left: '-30px'
                }}
                animate={{ rotate: -360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="absolute bottom-0 right-1/4 w-2 h-2 lg:w-2.5 lg:h-2.5 bg-accent/70 rounded-full shadow-lg" />
                <div className="absolute top-1/4 left-0 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-accent/50 rounded-full shadow-md" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6 mb-16 lg:mb-20">
          {homeCards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
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
              </motion.div>
            )
          })}
        </div>


        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 lg:mt-20 text-center"
        >
          <p className="text-muted-foreground mb-6 lg:mb-8">Explora mi trayectoria en la tecnología y el aprendizaje</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 max-w-3xl mx-auto">
            {[
              { number: "15+", label: "Projects Completed" },
              { number: "1+", label: "Years Experience" },
              { number: "10+", label: "Technologies Learned" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="card-elevated p-4 lg:p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              >
                <div className="text-2xl lg:text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-sm lg:text-base text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16 lg:mt-20 relative overflow-hidden"
        >
          {/* Floating particles around contact form - solo en desktop */}
          <div className="hidden lg:block">
            <motion.div
              className="absolute top-10 left-10 w-4 h-4 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-sm"
              animate={{
                scale: [1, 1.5, 0.8, 1.2, 1],
                rotate: [0, 360, 180, 720],
                x: [0, 20, -10, 15, 0],
                y: [0, -15, 10, -8, 0]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div
              className="absolute top-32 right-16 w-6 h-6 bg-gradient-to-br from-green-400/15 to-teal-400/15 rounded-full blur-md"
              animate={{
                scale: [1.2, 0.7, 1.4, 0.9, 1.2],
                rotate: [180, 540, 270, 630, 900],
                x: [0, -25, 8, -18, 0],
                y: [0, 20, -12, 18, 0]
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />

            <motion.div
              className="absolute bottom-20 left-20 w-8 h-8 bg-gradient-to-br from-pink-400/18 to-red-400/18 rounded-full blur-lg"
              animate={{
                scale: [0.9, 1.6, 1.0, 1.3, 0.9],
                rotate: [270, 630, 450, 810, 1080],
                x: [0, 12, -20, 8, 0],
                y: [0, -18, 8, -25, 0]
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div
              className="absolute top-64 left-32 w-5 h-5 bg-gradient-to-br from-yellow-400/22 to-orange-400/22 rounded-full blur-sm"
              animate={{
                scale: [1.3, 0.6, 1.7, 1.1, 1.3],
                rotate: [90, 450, 270, 720, 810],
                x: [0, -8, 18, -12, 0],
                y: [0, 22, -5, 16, 0]
              }}
              transition={{
                duration: 13,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />

            <motion.div
              className="absolute bottom-40 right-8 w-7 h-7 bg-gradient-to-br from-indigo-400/25 to-cyan-400/25 rounded-full blur-md"
              animate={{
                scale: [1.1, 1.8, 0.7, 1.4, 1.1],
                rotate: [0, -270, -540, -810, -1080],
                x: [0, 22, -15, 25, 0],
                y: [0, 12, -20, 15, 0]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div
              className="absolute top-48 right-32 w-3 h-3 bg-gradient-to-br from-purple-400/20 to-violet-400/20 rounded-full blur-sm"
              animate={{
                scale: [0.8, 1.4, 1.0, 0.6, 0.8],
                rotate: [360, 180, 0, -180, -360],
                x: [0, -14, 6, -20, 0],
                y: [0, 18, -8, 14, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-gradient">Trabajemos juntos</h2>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 lg:mb-8">
                  ¿Listo para dar vida a tus ideas? Siempre estoy entusiasmado por discutir nuevos proyectos, colaborar en soluciones innovadoras o simplemente conectar con otros desarrolladores y posibles empleadores.
                </p>
              </motion.div>

              {/* Animated availability indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="space-y-3 lg:space-y-4 mb-6 lg:mb-8"
              >
                <motion.div
                  className="flex items-center space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-sm lg:text-base text-muted-foreground group-hover:text-foreground transition-colors">
                    Disponible para oportunidades de tiempo completo
                  </span>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <span className="text-sm lg:text-base text-muted-foreground group-hover:text-foreground transition-colors">
                    Comprometido con el aprendizaje continuo
                  </span>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                  <span className="text-sm lg:text-base text-muted-foreground group-hover:text-foreground transition-colors">
                    Orientado al trabajo en equipo y la innovación
                  </span>
                </motion.div>
              </motion.div>


              {/* Contact methods with icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4"
              >
                <motion.div
                  className="flex items-center space-x-3 p-3 lg:p-4 bg-card hover:bg-card/80 border border-border rounded-lg transition-all duration-300 group cursor-pointer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <MessageCircle className="h-4 w-4 lg:h-5 lg:w-5 text-primary group-hover:text-primary transition-colors duration-300" />
                  </motion.div>
                  <div>
                    <div className="font-medium text-xs lg:text-sm text-foreground">Respuesta rápida</div>
                    <div className="text-xs text-muted-foreground">Normalmente en menos de 24 horas</div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-3 p-3 lg:p-4 bg-card hover:bg-card/80 border border-border rounded-lg transition-all duration-300 group cursor-pointer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="flex-shrink-0"
                  >
                    <Mail className="h-4 w-4 lg:h-5 lg:w-5 text-primary group-hover:text-primary transition-colors duration-300" />
                  </motion.div>
                  <div>
                    <div className="font-medium text-xs lg:text-sm text-foreground">Profesionalismo</div>
                    <div className="text-xs text-muted-foreground">Comunicación clara y detallada</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative elements for the left section - solo en desktop */}
              <div className="hidden lg:block">
                <motion.div
                  className="absolute -left-6 top-20 w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    x: [0, 8, 0],
                    y: [0, -5, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <motion.div
                  className="absolute -right-4 bottom-10 w-8 h-8 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-lg"
                  animate={{
                    scale: [1.2, 0.8, 1.2],
                    rotate: [0, 180, 360],
                    x: [0, -6, 0],
                    y: [0, 8, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              </div>
            </div>

            <div className="relative">
              {/* Additional particles around contact form - solo en desktop */}
              <div className="hidden lg:block">
                <motion.div
                  className="absolute -top-8 -left-8 w-6 h-6 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-md"
                  animate={{
                    scale: [1, 1.4, 0.9, 1.2, 1],
                    rotate: [0, 270, 180, 450, 720],
                    x: [0, 15, -8, 12, 0],
                    y: [0, -12, 6, -10, 0]
                  }}
                  transition={{
                    duration: 11,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <motion.div
                  className="absolute -top-4 right-12 w-4 h-4 bg-gradient-to-br from-rose-400/25 to-pink-400/25 rounded-full blur-sm"
                  animate={{
                    scale: [0.8, 1.6, 1.1, 0.7, 0.8],
                    rotate: [90, 450, 270, 630, 810],
                    x: [0, -18, 5, -15, 0],
                    y: [0, 14, -10, 16, 0]
                  }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />

                <motion.div
                  className="absolute top-20 -right-10 w-7 h-7 bg-gradient-to-br from-amber-400/18 to-yellow-400/18 rounded-full blur-lg"
                  animate={{
                    scale: [1.1, 0.6, 1.5, 1.0, 1.1],
                    rotate: [180, 540, 360, 720, 900],
                    x: [0, 10, -12, 8, 0],
                    y: [0, -8, 15, -6, 0]
                  }}
                  transition={{
                    duration: 13,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <motion.div
                  className="absolute bottom-16 -left-6 w-5 h-5 bg-gradient-to-br from-violet-400/22 to-indigo-400/22 rounded-full blur-md"
                  animate={{
                    scale: [0.9, 1.3, 1.0, 1.7, 0.9],
                    rotate: [0, -180, -360, -540, -720],
                    x: [0, 16, -6, 20, 0],
                    y: [0, 10, -14, 8, 0]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />

                <motion.div
                  className="absolute bottom-8 right-20 w-3 h-3 bg-gradient-to-br from-cyan-400/28 to-blue-400/28 rounded-full blur-sm"
                  animate={{
                    scale: [1.4, 0.8, 1.2, 0.5, 1.4],
                    rotate: [45, 405, 225, 585, 765],
                    x: [0, -10, 14, -8, 0],
                    y: [0, 12, -4, 18, 0]
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <motion.div
                  className="absolute top-48 left-8 w-4 h-4 bg-gradient-to-br from-lime-400/20 to-green-400/20 rounded-full blur-md"
                  animate={{
                    scale: [1.2, 1.8, 0.6, 1.5, 1.2],
                    rotate: [270, 90, 450, 180, 630],
                    x: [0, 8, -16, 12, 0],
                    y: [0, -6, 12, -10, 0]
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              </div>

              <ContactForm />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}