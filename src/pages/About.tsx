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
import { useTheme } from "@/providers/ThemeProvider"

export default function About() {
  const skills = [
    { name: "JavaScript", image: "/public/images/skills/js.png" },
    { name: "TypeScript", image: "/public/images/skills/ts.png" },
    { name: "React", image: "/public/images/skills/react.png" },
    { name: "Node.js", image: "/public/images/skills/nodejs.webp", imageDark: "/public/images/skills/nodejsdark.png" },
    { name: "Nest.js", image: "/public/images/skills/nestjs.svg" },
    { name: "Java", image: "/public/images/skills/java.png" },
    { name: "Spring Boot", image: "/public/images/skills/springboot.png" },
    // { name: "Python", image: "/public/images/skills/python.png" },
    { name: "PostgreSQL", image: "/public/images/skills/postgresql.svg" },
    { name: "MySQL", image: "/public/images/skills/mysql.png" },
    { name: "Git", image: "/public/images/skills/git.png" },
    { name: "Docker", image: "/public/images/skills/docker.png" },
    // { name: "AWS", image: "/public/images/skills/aws.png" },
    { name: "Tailwind CSS", image: "/public/images/skills/tailwind.png" },
    { name: "Next.js", image: "/public/images/skills/nextjs.svg", imageDark: "/public/images/skills/nextjsdark.png" },
    { name: "GraphQL", image: "/public/images/skills/graphql.png" }
  ]

  const getSkillImage = (skillName: string, theme: "light" | "dark"): string => {
    const skill = skills.find((s) => s.name === skillName);

    if (!skill) return "";

    if (theme === "dark" && skill.imageDark) {
      return skill.imageDark;
    }

    return skill.image;
  };
  const resolveTheme = (theme: "light" | "dark" | "system"): "light" | "dark" => {
    if (theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return theme;
  };


  const interests = [
    { icon: Code2, title: "Desarrollo Full Stack", description: "Diseño y construcción de aplicaciones completas, desde el frontend hasta el backend." },
    { icon: Lightbulb, title: "Resolución de Problemas", description: "Capacidad para analizar retos complejos y proponer soluciones eficientes e innovadoras." },
    { icon: BookOpen, title: "Aprendizaje Continuo", description: "Actualización constante en nuevas tecnologías y buenas prácticas de desarrollo." },
    { icon: Users, title: "Colaboración", description: "Experiencia trabajando en equipos multidisciplinarios con metodologías ágiles." }
  ]

  const values = [
    { icon: Target, title: "Excelencia", description: "Compromiso con código limpio, eficiente y fácil de mantener." },
    { icon: Heart, title: "Pasión", description: "Entusiasmo genuino por la innovación tecnológica." },
    { icon: Laptop, title: "Adaptabilidad", description: "Flexibilidad para aprender y aplicar nuevas herramientas." },
    { icon: Trophy, title: "Crecimiento", description: "Orientado al desarrollo profesional y a superar nuevos desafíos." }
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
            <span className="text-gradient">Sobre mí</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Aquí encontrarás una breve visión de mis intereses y valores como desarrollador.
            Me caracteriza la búsqueda de soluciones innovadoras, el aprendizaje continuo y
            la colaboración efectiva, principios que guían mi trabajo y mi crecimiento profesional.
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
            <h2 className="text-3xl font-bold mb-6 text-gradient">Quién soy</h2>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Soy Stevens Aliaga, un apasionado estudiante de Ingeniería de Sistemas y aspirante
                  a desarrollador full-stack con un profundo amor por crear soluciones digitales
                  innovadoras. Actualmente me encuentro desarrollando mis habilidades tanto en los
                  fundamentos teóricos como en las aplicaciones prácticas del desarrollo de software.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mi camino comenzó con la curiosidad sobre cómo funcionan los sitios web, lo cual
                  rápidamente evolucionó hacia una pasión por construir aplicaciones completas desde
                  el concepto hasta el despliegue. Me motiva el desafío de resolver problemas complejos
                  y convertir ideas en realidad a través del código.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-extrabold mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => {
                    const { theme } = useTheme(); // 👈 aquí traes el tema

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        className="group"
                      >
                        <div className="relative overflow-hidden rounded-lg border bg-card p-3 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                          <div className="flex items-center space-x-3">
                            <div className="relative w-8 h-8 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                              <img
                                src={getSkillImage(skill.name, resolveTheme(theme))}
                                alt={skill.name}
                                className="w-full h-full object-contain rounded-sm"
                              />
                              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 rounded-md blur-2xl transition-colors duration-300"></div>
                            </div>
                            <span className="text-sm font-medium truncate group-hover:text-primary transition-colors duration-300">
                              {skill.name}
                            </span>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-300"></div>
                        </div>
                      </motion.div>
                    )
                  })}
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
            <h3 className="text-2xl font-bold mb-4 text-gradient">Conectemos</h3>
            <p className="text-muted-foreground mb-6">
              Estoy abierto a conversar sobre nuevas oportunidades laborales, colaborar en proyectos
              innovadores o intercambiar ideas sobre tecnología y desarrollo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:stivensaliaga@gmail.com" className="btn-primary inline-flex items-center justify-center">
                Contáctame
              </a>
              <a href="/projects" className="btn-secondary inline-flex items-center justify-center">
                Ver Mis Proyectos
              </a>
            </div>
          </Card>

        </motion.div>
      </div>
    </div>
  )
}