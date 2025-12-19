import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, BookOpen, Video, Globe, Code, Users, Star, Palette, Server, Trophy } from "lucide-react"

export default function Resources() {
const resourceCategories = [
  {
    title: "Libros y Documentación",
    icon: BookOpen,
    color: "text-blue-600",
    resources: [
      {
        title: "You Don't Know JS (Serie de Libros)",
        author: "Kyle Simpson",
        description: "Profundización en los fundamentos de JavaScript y conceptos avanzados",
        url: "https://github.com/getify/You-Dont-Know-JS",
        type: "Book",
        rating: 5,
        tags: ["JavaScript", "Fundamentos"]
      },
      {
        title: "Documentación de React",
        author: "Equipo de React",
        description: "Documentación oficial de React con tutoriales y referencia de API",
        url: "https://react.dev/",
        type: "Documentation",
        rating: 5,
        tags: ["React", "Referencia"]
      },
      {
        title: "Documentación de NestJS",
        author: "Kamil Mysliwiec",
        description: "Un framework progresivo de NodeJS para construir aplicaciones del lado del servidor eficientes, confiables y escalables.",
        url: "https://docs.nestjs.com/",
        type: "Documentation",
        rating: 5,
        tags: ["NestJS", "NodeJS", "TypeScript"]
      },
      {
        title: "MDN Web Docs",
        author: "Mozilla",
        description: "Documentación y tutoriales completos sobre desarrollo web",
        url: "https://developer.mozilla.org/",
        type: "Documentation",
        rating: 5,
        tags: ["Desarrollo Web", "Referencia"]
      },
      {
        title: "Documentación de Bootstrap",
        author: "Bootstrap Team",
        description: "Framework CSS más popular para desarrollo responsive",
        url: "https://getbootstrap.com/docs/",
        type: "Documentation",
        rating: 5,
        tags: ["CSS", "Bootstrap", "Frontend"]
      },
      {
        title: "Documentación de Tailwind CSS",
        author: "Tailwind Labs",
        description: "Framework CSS utility-first para diseño web moderno",
        url: "https://tailwindcss.com/docs",
        type: "Documentation",
        rating: 5,
        tags: ["CSS", "Tailwind", "Frontend"]
      },
      {
        title: "Documentación de Django",
        author: "Django Software Foundation",
        description: "Framework web de Python de alto nivel que fomenta el desarrollo rápido",
        url: "https://docs.djangoproject.com/",
        type: "Documentation",
        rating: 5,
        tags: ["Python", "Django", "Backend"]
      },
      {
        title: "Documentación de TypeScript",
        author: "Microsoft",
        description: "Superset tipado de JavaScript que compila a JavaScript plano",
        url: "https://www.typescriptlang.org/docs/",
        type: "Documentation",
        rating: 5,
        tags: ["TypeScript", "JavaScript"]
      }
    ]
  },
  {
    title: "Cursos en Video y Tutoriales",
    icon: Video,
    color: "text-red-600",
    resources: [
      {
        title: "Curso Completo de JavaScript 2024",
        author: "Jonas Schmedtmann",
        description: "De cero a experto: Node.js, ES6+, NPM, Parcel, Babel",
        url: "https://www.udemy.com/course/the-complete-javascript-course/",
        type: "Course",
        rating: 5,
        tags: ["JavaScript", "Curso Completo"]
      },
      {
        title: "React - De cero a experto",
        author: "Fernando Herrera",
        description: "Aprende React, Redux, React Hooks, React Router y más",
        url: "https://www.udemy.com/course/react-cero-experto/",
        type: "Course",
        rating: 5,
        tags: ["React", "Redux"]
      },
      {
        title: "NodeJS - De cero a experto",
        author: "Fernando Herrera",
        description: "Clean Architecture, DDD, WebHooks, WebSockets, Tareas automáticas, Despliegues, TypeScript",
        url: "https://www.udemy.com/course/nodejs-de-cero-a-experto/",
        type: "Course",
        rating: 5,
        tags: ["NodeJS", "Backend"]
      },
      {
        title: "JonMircha Youtube",
        author: "Jonmircha",
        description: "Tutoriales de programación gratuitos y cursos completos",
        url: "https://www.youtube.com/@jonmircha",
        type: "YouTube",
        rating: 5,
        tags: ["Gratis", "Tutoriales"]
      },
      {
        title: "Dave Gray Youtube",
        author: "Dave Gray",
        description: "Tutoriales de desarrollo web con cursos completos de HTML, CSS, JavaScript, React, Node.js",
        url: "https://www.youtube.com/@DaveGrayTeachesCode",
        type: "YouTube",
        rating: 5,
        tags: ["Gratis", "Tutoriales"]
      },
      {
        title: "HTML y CSS Curso Completo",
        author: "freeCodeCamp",
        description: "Curso completo de HTML5 y CSS3 desde cero",
        url: "https://www.youtube.com/watch?v=mU6anWqZJcc",
        type: "YouTube",
        rating: 5,
        tags: ["HTML", "CSS", "Frontend"]
      },
      {
        title: "Django para Principiantes",
        author: "Corey Schafer",
        description: "Serie completa de Django desde conceptos básicos hasta avanzados",
        url: "https://www.youtube.com/watch?v=UmljXZIypDc&list=PL-osiE80TeTtoQCKZ03TU5fNfx2UY6U4p",
        type: "YouTube",
        rating: 5,
        tags: ["Django", "Python", "Backend"]
      },
      {
        title: "Python para Todos",
        author: "freeCodeCamp Español",
        description: "Curso completo de Python desde cero",
        url: "https://www.youtube.com/watch?v=rfscVS0vtbw",
        type: "YouTube",
        rating: 5,
        tags: ["Python", "Programación"]
      },
      {
        title: "APIs REST con Django",
        author: "Django Rest Framework",
        description: "Tutorial oficial para crear APIs RESTful con Django",
        url: "https://www.django-rest-framework.org/tutorial/quickstart/",
        type: "Course",
        rating: 5,
        tags: ["Django", "REST API", "Backend"]
      },
      {
        title: "Flexbox CSS - Guía Completa",
        author: "Fazt",
        description: "Tutorial completo sobre Flexbox para diseño responsive",
        url: "https://www.youtube.com/watch?v=AAWLPwQVjnY",
        type: "YouTube",
        rating: 4,
        tags: ["CSS", "Flexbox", "Diseño"]
      },
      {
        title: "Grid CSS - Curso Completo",
        author: "Fazt",
        description: "Aprende CSS Grid Layout desde cero",
        url: "https://www.youtube.com/watch?v=QBOUSrMqlSQ",
        type: "YouTube",
        rating: 4,
        tags: ["CSS", "Grid", "Diseño"]
      },
      {
        title: "Microservicios con Docker y Kubernetes",
        author: "Pelado Nerd",
        description: "Implementación de arquitectura de microservicios",
        url: "https://www.youtube.com/watch?v=oTf0KxK1QNo",
        type: "YouTube",
        rating: 4,
        tags: ["Microservicios", "Docker", "Kubernetes"]
      }
    ]
  },
  {
    title: "Herramientas y Plataformas",
    icon: Code,
    color: "text-green-600",
    resources: [
      {
        title: "Visual Studio Code",
        author: "Microsoft",
        description: "Editor de código potente y gratuito con extenso ecosistema de extensiones",
        url: "https://code.visualstudio.com/",
        type: "Tool",
        rating: 5,
        tags: ["Editor", "IDE"]
      },
      {
        title: "GitHub",
        author: "GitHub",
        description: "Control de versiones, colaboración y plataforma de alojamiento de código",
        url: "https://github.com/",
        type: "Platform",
        rating: 5,
        tags: ["Git", "Colaboración"]
      },
      {
        title: "CodePen",
        author: "CodePen",
        description: "Editor de código online y entorno de aprendizaje para frontend",
        url: "https://codepen.io/",
        type: "Platform",
        rating: 4,
        tags: ["Frontend", "Playground"]
      },
      {
        title: "Figma",
        author: "Figma",
        description: "Herramienta de diseño colaborativo para diseño UI/UX y prototipado",
        url: "https://www.figma.com/",
        type: "Tool",
        rating: 5,
        tags: ["Diseño", "UI/UX"]
      },
      {
        title: "HackerRank",
        author: "HackerRank",
        description: "Plataforma para practicar programación y resolver desafíos algorítmicos",
        url: "https://www.hackerrank.com/",
        type: "Platform",
        rating: 5,
        tags: ["Práctica", "Algoritmos"]
      },
      {
        title: "Postman",
        author: "Postman",
        description: "Plataforma de colaboración para desarrollo y testing de APIs",
        url: "https://www.postman.com/",
        type: "Tool",
        rating: 5,
        tags: ["API", "Testing"]
      },
      {
        title: "Docker Hub",
        author: "Docker",
        description: "Repositorio de contenedores Docker para despliegue de aplicaciones",
        url: "https://hub.docker.com/",
        type: "Platform",
        rating: 5,
        tags: ["Docker", "Contenedores"]
      },
      {
        title: "Vercel",
        author: "Vercel",
        description: "Plataforma de despliegue para aplicaciones frontend y fullstack",
        url: "https://vercel.com/",
        type: "Platform",
        rating: 5,
        tags: ["Despliegue", "Frontend"]
      },
      {
        title: "Netlify",
        author: "Netlify",
        description: "Plataforma de hosting y serverless para aplicaciones web modernas",
        url: "https://www.netlify.com/",
        type: "Platform",
        rating: 5,
        tags: ["Hosting", "Serverless"]
      },
      {
        title: "Railway",
        author: "Railway",
        description: "Plataforma de despliegue para aplicaciones backend y bases de datos",
        url: "https://railway.app/",
        type: "Platform",
        rating: 4,
        tags: ["Backend", "Despliegue"]
      }
    ]
  },
  {
    title: "Recursos Frontend",
    icon: Palette,
    color: "text-purple-600",
    resources: [
      {
        title: "Can I Use",
        author: "Alexis Deveria",
        description: "Verificador de compatibilidad de características web entre navegadores",
        url: "https://caniuse.com/",
        type: "Tool",
        rating: 5,
        tags: ["Compatibilidad", "Frontend"]
      },
      {
        title: "CSS-Tricks",
        author: "CSS-Tricks",
        description: "Artículos y tutoriales sobre CSS, diseño web y desarrollo frontend",
        url: "https://css-tricks.com/",
        type: "Platform",
        rating: 5,
        tags: ["CSS", "Tutoriales"]
      },
      {
        title: "Flexbox Froggy",
        author: "Codepip",
        description: "Juego interactivo para aprender CSS Flexbox",
        url: "https://flexboxfroggy.com/#es",
        type: "Platform",
        rating: 4,
        tags: ["CSS", "Flexbox", "Interactivo"]
      },
      {
        title: "Grid Garden",
        author: "Codepip",
        description: "Juego interactivo para aprender CSS Grid",
        url: "https://cssgridgarden.com/#es",
        type: "Platform",
        rating: 4,
        tags: ["CSS", "Grid", "Interactivo"]
      },
      {
        title: "Font Awesome",
        author: "Fonticons",
        description: "Biblioteca de iconos vectoriales para web",
        url: "https://fontawesome.com/",
        type: "Tool",
        rating: 5,
        tags: ["Iconos", "Frontend"]
      },
      {
        title: "Google Fonts",
        author: "Google",
        description: "Biblioteca de fuentes web gratuitas",
        url: "https://fonts.google.com/",
        type: "Tool",
        rating: 5,
        tags: ["Tipografía", "Diseño"]
      }
    ]
  },
  {
    title: "Recursos Backend y APIs",
    icon: Server,
    color: "text-orange-600",
    resources: [
      {
        title: "RESTful API Design",
        author: "Microsoft",
        description: "Guía de mejores prácticas para diseño de APIs REST",
        url: "https://learn.microsoft.com/es-es/azure/architecture/best-practices/api-design",
        type: "Documentation",
        rating: 5,
        tags: ["REST", "API", "Diseño"]
      },
      {
        title: "JWT.io",
        author: "Auth0",
        description: "Información y herramientas para JSON Web Tokens",
        url: "https://jwt.io/",
        type: "Tool",
        rating: 5,
        tags: ["Autenticación", "Seguridad"]
      },
      {
        title: "Django REST Framework",
        author: "Django REST Framework",
        description: "Framework potente para construir Web APIs con Django",
        url: "https://www.django-rest-framework.org/",
        type: "Documentation",
        rating: 5,
        tags: ["Django", "REST", "Python"]
      },
      {
        title: "Python.org",
        author: "Python Software Foundation",
        description: "Documentación oficial de Python",
        url: "https://docs.python.org/es/3/",
        type: "Documentation",
        rating: 5,
        tags: ["Python", "Programación"]
      },
      {
        title: "FastAPI",
        author: "Sebastián Ramírez",
        description: "Framework moderno y rápido para construir APIs con Python",
        url: "https://fastapi.tiangolo.com/es/",
        type: "Documentation",
        rating: 5,
        tags: ["Python", "API", "Backend"]
      }
    ]
  },
  {
    title: "Práctica y Desafíos",
    icon: Trophy,
    color: "text-yellow-600",
    resources: [
      {
        title: "Frontend Mentor",
        author: "Frontend Mentor",
        description: "Desafíos de desarrollo frontend con diseños profesionales",
        url: "https://www.frontendmentor.io/",
        type: "Platform",
        rating: 5,
        tags: ["Frontend", "Práctica", "Diseño"]
      },
      {
        title: "JavaScript30",
        author: "Wes Bos",
        description: "30 desafíos de JavaScript en 30 días",
        url: "https://javascript30.com/",
        type: "Course",
        rating: 5,
        tags: ["JavaScript", "Práctica"]
      },
      {
        title: "Exercism",
        author: "Exercism",
        description: "Plataforma de práctica de código con mentores",
        url: "https://exercism.org/",
        type: "Platform",
        rating: 4,
        tags: ["Práctica", "Múltiples Lenguajes"]
      },
      {
        title: "LeetCode",
        author: "LeetCode",
        description: "Plataforma para practicar algoritmos y estructuras de datos",
        url: "https://leetcode.com/",
        type: "Platform",
        rating: 5,
        tags: ["Algoritmos", "Práctica"]
      }
    ]
  }
];
  
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Book': return BookOpen
      case 'Course': return Video
      case 'YouTube': return Video
      case 'Tool': return Code
      case 'Platform': return Globe
      case 'Community': return Users
      default: return Globe
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Book': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'Course': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      case 'YouTube': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      case 'Tool': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'Platform': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
      case 'Community': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
      case 'Documentation': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30 relative overflow-hidden">
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
            <span className="text-gradient">Recursos de aprendizaje</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Una colección de libros, cursos, herramientas y comunidades que han formado mi vieaje de aprendizaje y guía continua para mi desarrollo.
          </p>
        </motion.div>

        {/* Resource Categories */}
        <div className="space-y-12">
          {resourceCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            return (
              <motion.section
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <div className="flex items-center mb-8">
                  <div className={`p-3 bg-card rounded-xl mr-4 ${category.color}`}>
                    <CategoryIcon className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-gradient">{category.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.resources.map((resource, resourceIndex) => {
                    const TypeIcon = getTypeIcon(resource.type)
                    return (
                      <motion.div
                        key={resource.title}
                        initial={{ opacity: 0, x: resourceIndex % 2 === 0 ? -30 : 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: categoryIndex * 0.2 + resourceIndex * 0.1 }}
                      >
                        <Card className="card-elevated p-6 h-full group hover:shadow-[var(--shadow-medium)] transition-all duration-300">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-start space-x-3 flex-1">
                              <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                                <TypeIcon className="h-5 w-5 text-primary" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                                  {resource.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-2">by {resource.author}</p>
                                <div className="flex items-center mb-3">
                                  {renderStars(resource.rating)}
                                </div>
                              </div>
                            </div>
                            <Badge className={getTypeColor(resource.type)}>
                              {resource.type}
                            </Badge>
                          </div>

                          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                            {resource.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {resource.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                            asChild
                          >
                            <a href={resource.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Visit Resource
                            </a>
                          </Button>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.section>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <Card className="card-elevated p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Aprendizaje Continuo </h3>
            <p className="text-muted-foreground mb-6">
              Estos recursos han sido un instrumento en mi crecimiento profesional como desarrollador. Yo creo en el poder del aprendizaje continuo y siempre me mantengo curioso ante nuevas tecnologías.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/notebook" className="btn-primary inline-flex items-center justify-center">
                Ver mi viaje de aprendizaje
              </a>
              <a href="/projects" className="btn-secondary inline-flex items-center justify-center">
                Ver lo que he construido
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}