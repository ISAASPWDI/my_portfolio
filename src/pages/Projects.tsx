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
            <span className="text-gradient">My Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my completed projects, current work, and upcoming ideas. 
            Each project represents a step in my journey as a developer.
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
              <Card className="card-elevated overflow-hidden h-full group hover:shadow-[var(--shadow-strong)] transition-all duration-500">
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
  )
}