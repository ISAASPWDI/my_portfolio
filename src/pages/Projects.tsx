import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "StudySync",
      description:
        "Academic matchmaking application inspired by Tinder, developed with Flutter for the frontend, Nest.js and TypeScript for the backend, MongoDB as the database, and a supervised ML model using KNN built with Python and FastAPI. Includes secure authentication with Google, GitHub, and JWT.",
      image: "/images/projects/studysync.jpg",
      technologies: [
        "Flutter",
        "Nest.js",
        "TypeScript",
        "MongoDB",
        "Python",
        "FastAPI",
        "Docker",
        "JWT",
        "Google Auth",
        "GitHub Auth",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/ISAASPWDI/studysync-backend",
      date: "2025",
      status: "Completed",
    },
    {
      title: "Clothing E-Commerce Platform",
      description:
        "Full-stack application developed with Next.js, React, Redux, Node.js, Prisma, and MySQL, following Clean Architecture principles in the backend with GraphQL and secure authentication using JWT.",
      image: "/images/projects/first.jpg",
      technologies: [
        "Tailwind CSS",
        "React",
        "Redux",
        "Next.js",
        "Node.js",
        "GraphQL",
        "MySQL",
        "Prisma",
        "JWT",
        "MercadoPago",
      ],
      liveUrl: "#nosource",
      githubUrl: "https://github.com/ISAASPWDI/clothing_ecommerce_backend",
      date: "2024",
      status: "Completed",
    },
    {
      title: "AI-Powered COVID-19 Detection System",
      description:
        "Medical diagnostic support system that analyzes chest X-ray images using Deep Learning. It integrates the COV-ADSX model into a hospital-oriented architecture, featuring secure doctor authentication, patient management, and real-time generation of diagnostic results with heatmaps for clinical visualization.",
      image: "/images/projects/covid-detection-app.jpg",
      technologies: [
        "React",
        "Flask",
        "Python",
        "TensorFlow",
        "Keras",
        "XGBoost",
        "OpenCV",
        "MySQL",
        "JWT",
        "SQLAlchemy",
      ],
      liveUrl: "https://covid-detection-app.netlify.app/", 
      githubUrl: "https://github.com/tu-usuario/covid-detection-flask-react",
      date: "2026",
      status: "Completed",
    },
    {
      title: "Educational Empowerment Platform",
      description:
        "Full-stack application developed with Flutter, Node.js, Express.js, and PostgreSQL, following Clean Architecture principles in the backend and secure authentication using Google and JWT.",
      image: "/images/projects/escogebien.jpg",
      technologies: [
        "Flutter",
        "Google Auth",
        "JWT",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Clean Architecture",
      ],
      liveUrl: "#nosource",
      githubUrl: "https://github.com/ISAASPWDI/escogebien-backend",
      date: "2025",
      status: "Completed",
    },
    {
      title: "UNCP Library System",
      description:
        "Full-stack application developed with HTML, CSS, Bootstrap, JavaScript, Node.js, Express.js, and SQL Server, converted into a desktop app with Electron, featuring PDF report generation using PDFKit.",
      image: "/images/projects/biblioteca.jpg",
      technologies: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "JavaScript",
        "Node.js",
        "Express.js",
        "SQL Server",
        "Electron",
        "PDFKit",
      ],
      liveUrl: "#nosource",
      githubUrl: "https://github.com/ISAASPWDI/sistema-de-biblioteca-UNCP",
      date: "2024",
      status: "Completed",
    },
    {
      title: "Graduation Management System",
      description:
        "Full-stack graduation management system featuring student registration, administration modules, real-time chat, and national identity verification. Developed using a microservices architecture and NoSQL database.",
      image: "/images/projects/graduated-app.jpg",
      technologies: [
        "React",
        "JavaScript",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "HTML5",
        "CSS3",
      ],
      liveUrl: "#nosource",
      githubUrl: "https://github.com/ISAASPWDI/graduated-app",
      date: "2025",
      status: "Completed",
    },
    {
      title: "Personal Digital Space",
      description:
        "Full-stack personal management application with modules for notes, memories, timelines, and compliments. Developed using modern technologies and a relational database.",
      image: "/images/projects/personal-app.jpg",
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "HTML5",
        "CSS3",
      ],
      liveUrl: "https://special-app-fy2.netlify.app",
      githubUrl: "https://github.com/ISAASPWDI/love-app-backend",
      date: "2024",
      status: "Completed",
    },
    {
      title: "Attendance Tracking System",
      description:
        "Full-stack application for attendance registration and management, developed with Angular and TypeScript on the frontend, and Java with Spring Boot, Spring Security, JPA, and PostgreSQL on the backend. Includes secure authentication using JWT and deployment with Docker.",
      image: "/images/projects/scholar-attendance.jpg",
      technologies: [
        "Angular",
        "TypeScript",
        "Java",
        "Spring Boot",
        "Spring Security",
        "JPA",
        "PostgreSQL",
        "JWT",
        "Docker",
      ],
      liveUrl: "#nosource",
      githubUrl: "https://github.com/ISAASPWDI/attendance-app",
      date: "2025",
      status: "Completed",
    },
    {
      title: "Notes App",
      description:
        "Full-stack application for note management and categorization (active/archived). Developed with React, Vite, and Tailwind CSS on the frontend, and Java with Spring Boot, Spring Data JPA, and PostgreSQL on the backend. Includes containerized database management with Docker and an automated deployment script.",
      image: "/images/projects/notes-app.jpg",
      technologies: [
        "React",
        "Vite",
        "TypeScript",
        "Tailwind CSS",
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "PostgreSQL",
        "Docker",
        "Shell Script",
      ],
      liveUrl: "https://notes-app-ensolvers.netlify.app/",
      githubUrl: "https://github.com/hirelens-challenges/aliaga-cc5641.git",
      date: "2025",
      status: "Completed",
    },
    {
      title: "Bank Application System",
      description:
        "Full-stack banking system with a robust Spring Boot backend. Includes account management, secure transfers, payment processing, transaction history, and email notifications. Developed with enterprise architecture and a relational database.",
      image: "/images/projects/bank-app.jpg",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Spring Data JPA",
        "MySQL",
        "Maven",
        "JavaMail",
        "JWT",
      ],
      liveUrl: "#nosource",
      githubUrl: "https://github.com/ISAASPWDI/bank-app-backend",
      date: "2025",
      status: "Completed",
    },
    {
      title: "JavaScript Projects",
      description:
        "Collection of web applications developed with Node.js, Express.js, HTML5, CSS3, and Vanilla JavaScript. Includes projects such as task lists, shopping carts, calculators, and forms, featuring Regex validation, modular architecture, and responsive design.",
      image: "/images/projects/little-projects.jpg",
      technologies: [
        "Node.js",
        "Express.js",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Regex",
        "Responsive Design",
      ],
      liveUrl: "https://personalprojectsaa.netlify.app/",
      githubUrl: "https://github.com/ISAASPWDI/personalProjects",
      date: "2023",
      status: "Completed",
    },

    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce application for managing a wide range of products, developed with React, Redux, and Tailwind CSS on the frontend, and Java with Spring Boot, Spring Security, Spring Data, and MySQL on the backend. Includes JWT authentication, REST microservices architecture, AWS deployment, and Docker containerization.",
      image: "/images/projects/java-ecommerce.jpg",
      technologies: [
        "React",
        "Redux",
        "Tailwind CSS",
        "Java",
        "Spring Boot",
        "Spring Security",
        "Spring Data",
        "MySQL",
        "JWT",
        "AWS",
        "Docker",
      ],
      liveUrl: "#",
      githubUrl: "#",
      date: "2025",
      status: "In Progress",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 hover:bg-green-100'
      case 'In Progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-100'
      case 'Planning': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 hover:bg-yellow-100'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">

        <div className="text-center mb-16 animate-[fadeInUp_0.8s_ease-out]">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">My projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my completed projects, current work, and future ideas.
            Each project represents a step forward in my journey as a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="h-full animate-[fadeInUp_0.6s_ease-out_both]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="card-elevated overflow-hidden h-full group hover:shadow-xl transition-all duration-500 flex flex-col">
                <div className="relative overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 flex gap-2 transition-all ease-in-out duration-300 hover:scale-110">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
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

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <Button
                      size="sm"
                      className="flex-1 group"
                      asChild={project.liveUrl !== '#'}
                      disabled={project.liveUrl === '#'}
                    >
                      {project.liveUrl === '#nosource' ? (
                        <span className="flex bg-muted-foreground hover:bg-muted-foreground">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Not available
                        </span>
                      ) : project.liveUrl !== '#' ? (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      ) : (
                        <span className="flex">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Coming Soon
                        </span>
                      )}
                    </Button>

                    <Button
                      size="sm"
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
            </div>
          ))}
        </div>

        <div className="mt-20 text-center animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
          <Card className="card-elevated p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Shall We Collaborate?</h3>
            <p className="text-muted-foreground mb-6">
              I'm open to participating in innovative projects and contributing value alongside talented and visionary teams.
              If you're looking for commitment, creativity, and results, we can achieve great things together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:stivensaliaga@gmail.com" className="btn-primary inline-flex items-center justify-center">
                Start a Project
              </a>
              <a href="/about" className="btn-secondary inline-flex items-center justify-center">
                Learn More About Me
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}