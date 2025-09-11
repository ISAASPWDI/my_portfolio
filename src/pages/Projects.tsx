import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application with React, Node.js, and PostgreSQL. Features include user authentication, product catalog, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/example/ecommerce",
      date: "2024",
      status: "Completed"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with real-time data, forecasts, and beautiful visualizations. Built with React and integrated with multiple weather APIs.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["React", "TypeScript", "Chart.js", "Weather API", "CSS3"],
      liveUrl: "https://example-weather.com",
      githubUrl: "https://github.com/example/weather",
      date: "2024",
      status: "Completed"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "Firebase", "Vuetify", "Socket.io"],
      liveUrl: "https://example-tasks.com",
      githubUrl: "https://github.com/example/tasks",
      date: "2023",
      status: "Completed"
    },
    {
      title: "AI Chat Interface",
      description: "Modern chat interface with AI integration, real-time messaging, and beautiful UI. Currently being enhanced with advanced features.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      technologies: ["React", "OpenAI API", "WebSocket", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "https://github.com/example/ai-chat",
      date: "2024",
      status: "In Progress"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects, skills, and experience. Built with modern technologies and optimized for performance.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      liveUrl: "#",
      githubUrl: "https://github.com/example/portfolio",
      date: "2024",
      status: "Completed"
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course management, progress tracking, and interactive learning modules. Designed for scalability and user engagement.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
      liveUrl: "#",
      githubUrl: "https://github.com/example/lms",
      date: "2024",
      status: "Planning"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'In Progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'Planning': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30 relative overflow-hidden">
      {/* Partículas flotantes con colores vibrantes y variados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Partícula coral-magenta grande */}
        <motion.div
          className="absolute top-16 left-8 w-28 h-28 bg-gradient-to-br from-coral-400/30 to-fuchsia-600/35 rounded-full blur-2xl"
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
          className="absolute top-44 right-16 w-20 h-20 bg-gradient-to-br from-turquoise-400/35 to-aqua-600/40 rounded-full blur-xl"
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
          className="absolute bottom-36 left-1/5 w-16 h-36 bg-gradient-to-t from-lavender-500/25 to-violet-700/35 rounded-full blur-xl"
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
          className="absolute top-1/4 right-1/4 w-22 h-22 bg-gradient-to-br from-gold-400/40 to-amber-700/35 rounded-full blur-2xl"
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
          className="absolute top-64 left-1/2 w-32 h-10 bg-gradient-to-r from-mint-500/30 to-green-700/35 rounded-full blur-xl"
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
          className="absolute bottom-16 right-8 w-24 h-24 bg-gradient-to-br from-crimson-500/30 to-rose-700/35 rounded-full blur-2xl"
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
          className="absolute top-8 left-2/5 w-14 h-14 bg-gradient-to-br from-slate-500/30 to-steel-600/35 rounded-full blur-xl"
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
          className="absolute bottom-56 left-16 w-12 h-28 bg-gradient-to-t from-peach-500/25 to-coral-700/35 rounded-full blur-xl"
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

        {/* Partículas medianas con colores únicos */}
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

        {/* Partículas pequeñas con colores metálicos y neones */}
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

        {/* Partículas micro con colores saturados */}
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
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Partículas flotantes con más colores vibrantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Partícula azul-púrpura grande */}
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

          {/* Partícula verde-teal mediana */}
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

          {/* Partícula rosa-roja elíptica */}
          <motion.div
            className="absolute bottom-40 left-1/4 w-14 h-32 bg-gradient-to-t from-pink-500/25 to-red-600/30 rounded-full blur-xl"
            animate={{
              rotate: [0, 180, 360],
              scaleY: [1, 1.6, 0.5, 1.3, 1],
              scaleX: [1, 0.7, 1.4, 1],
              x: [0, 25, -20, 30, 0],
              y: [0, -35, 15, -25, 0]
            }}
            transition={{
              duration: 19,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Partícula amarillo-naranja */}
          <motion.div
            className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-br from-yellow-400/35 to-orange-600/35 rounded-full blur-2xl"
            animate={{
              rotate: [0, -360, -720],
              scale: [1, 0.5, 1.8, 0.9, 1],
              x: [0, 45, -25, 40, 0],
              y: [0, 25, -35, 30, 0]
            }}
            transition={{
              duration: 21,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />

          {/* Partícula índigo-cian horizontal */}
          <motion.div
            className="absolute top-60 left-1/2 w-28 h-8 bg-gradient-to-r from-indigo-500/30 to-cyan-600/30 rounded-full blur-xl"
            animate={{
              rotate: [0, 90, 180, 270, 360],
              scaleX: [1, 0.3, 2, 0.8, 1],
              scaleY: [1, 1.6, 1, 1.4, 1],
              x: [0, -55, 35, -45, 0],
              y: [0, 45, -25, 40, 0]
            }}
            transition={{
              duration: 17,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Partícula violeta-magenta */}
          <motion.div
            className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-br from-violet-500/25 to-fuchsia-600/30 rounded-full blur-2xl"
            animate={{
              scale: [0.7, 1.7, 1.2, 0.9, 0.7],
              rotate: [50, 410, 230, 590, 50],
              x: [0, -35, 25, -20, 0],
              y: [0, 20, -30, 15, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Partícula lime-verde brillante */}
          <motion.div
            className="absolute top-10 left-1/3 w-12 h-12 bg-gradient-to-br from-lime-400/30 to-emerald-600/35 rounded-full blur-xl"
            animate={{
              scale: [1.3, 0.5, 1.5, 0.8, 1.3],
              rotate: [0, 300, 180, 480, 720],
              x: [0, 30, -25, 35, 0],
              y: [0, -20, 30, -10, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />

          {/* Partícula ámbar vertical */}
          <motion.div
            className="absolute bottom-60 left-20 w-10 h-24 bg-gradient-to-t from-amber-500/25 to-yellow-600/30 rounded-full blur-xl"
            animate={{
              rotate: [90, 270, 450, 630, 810],
              scaleY: [1, 1.5, 0.6, 1.2, 1],
              scaleX: [1, 0.8, 1.3, 1],
              x: [0, 20, -30, 15, 0],
              y: [0, 25, -20, 35, 0]
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Partículas adicionales más vibrantes */}
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
            className="absolute bottom-32 right-1/3 w-10 h-10 bg-gradient-to-br from-sky-500/30 to-blue-600/35 rounded-full blur-lg"
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 0.6, 1.3, 1],
              x: [0, -25, 15, -20, 0],
              y: [0, 30, -20, 25, 0]
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />

          <motion.div
            className="absolute top-72 left-10 w-6 h-18 bg-gradient-to-t from-orange-500/30 to-red-600/35 rounded-full blur-lg"
            animate={{
              rotate: [0, 270, 540],
              scaleY: [1, 1.4, 0.7, 1],
              x: [0, 25, -15, 0],
              y: [0, -30, 20, 0]
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="absolute top-1/4 left-2/3 w-9 h-9 bg-gradient-to-br from-teal-500/35 to-cyan-600/35 rounded-full blur-lg"
            animate={{
              scale: [1, 0.4, 1.5, 0.9, 1],
              rotate: [0, 360, 180, 540],
              x: [0, -20, 30, -15, 0],
              y: [0, 35, -25, 20, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />

          {/* Partículas pequeñas dispersas con colores únicos */}
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

          <motion.div
            className="absolute bottom-1/4 left-1/2 w-7 h-7 bg-gradient-to-br from-green-600/35 to-lime-600/40 rounded-full blur-md"
            animate={{
              rotate: [0, 240, 480],
              scale: [1.1, 0.7, 1.3, 1.1],
              x: [0, -18, 22, 0],
              y: [0, 28, -15, 0]
            }}
            transition={{
              duration: 9,
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
              <span className="text-gradient">Mis proyectos</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Una muestra de mis proyectos completados, el trabajo actual y las ideas futuras.
              Cada proyecto representa un paso en mi camino como desarrollador.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="card-elevated overflow-hidden h-full group hover:shadow-xl transition-all duration-500">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.date}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 group"
                        asChild={project.liveUrl !== '#'}
                        disabled={project.liveUrl === '#'}
                      >
                        {project.liveUrl !== '#' ? (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        ) : (
                          <span>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Coming Soon
                          </span>
                        )}
                      </Button>

                      <Button
                        size="sm"
                        variant="outline"
                        asChild={project.githubUrl !== '#'}
                        disabled={project.githubUrl === '#'}
                      >
                        {project.githubUrl !== '#' ? (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        ) : (
                          <span>
                            <Github className="h-4 w-4" />
                          </span>
                        )}
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <Card className="card-elevated p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Want to Collaborate?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always looking for exciting projects to work on and talented people to collaborate with.
                Let's create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:contact@example.com" className="btn-primary inline-flex items-center justify-center">
                  Start a Project
                </a>
                <a href="/about" className="btn-secondary inline-flex items-center justify-center">
                  Learn More About Me
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}