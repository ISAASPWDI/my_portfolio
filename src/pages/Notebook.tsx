import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, BookOpen, Code, Lightbulb, Target } from "lucide-react"
import { useState } from "react"

export default function Notebook() {
  const [openWeeks, setOpenWeeks] = useState<string[]>(['week-1'])

  const toggleWeek = (weekId: string) => {
    setOpenWeeks(prev =>
      prev.includes(weekId)
        ? prev.filter(id => id !== weekId)
        : [...prev, weekId]
    )
  }

const learningEntries = [
  {
    id: 'week-1',
    week: 1,
    title: "Fundamentos de Tecnologías Web",
    date: "Agosto 25-31, 2025",
    status: "Completed",
    topics: ["Sistemas Web", "Aplicaciones Web", "DNS y Protocolos", "Roles de Desarrollo", "Visual Studio Code"],
    learnings: [
      "Diferencias entre sistema web, aplicación web, sitio web y página web",
      "Comprensión del funcionamiento de DNS y protocolo TCP/IP",
      "Entendimiento profundo del protocolo HTTP y su importancia",
      "Roles clave: frontend, backend y fullstack developer",
      "Dominio de Visual Studio Code como herramienta principal"
    ],
    exercises: [
      "Configuración completa del entorno de desarrollo con VSC",
      "Instalación y configuración de extensiones esenciales",
      "Práctica de atajos de teclado para mejorar productividad",
      "Exploración de elementos de interfaz de usuario en VSC",
      "Creación del primer proyecto web básico"
    ],
    reflections: "Esta semana sentó las bases fundamentales para entender cómo funciona la web. La comprensión de los protocolos y la arquitectura web me permitió visualizar el panorama completo del desarrollo web. Visual Studio Code se convirtió en mi herramienta indispensable.",
    challenges: "Inicialmente fue abrumador entender todos los protocolos y conceptos técnicos, pero la práctica constante ayudó a consolidar el conocimiento.",
    nextGoals: ["Dominar HTML5 y XML", "Comprender la estructura DOM", "Aprender sobre SEO básico"]
  },
  {
    id: 'week-2',
    week: 2,
    title: "HTML5, XML y CSS3 Fundamentals",
    date: "Septiembre 1-7, 2025",
    status: "Completed",
    topics: ["HTML5 Estructura", "XML Markup", "Árbol DOM", "CSS3 Sintaxis", "Diseño Responsivo", "SEO"],
    learnings: [
      "Dominio de la estructura HTML5 y etiquetas semánticas principales",
      "Comprensión del árbol DOM y proceso de renderizado",
      "Sintaxis avanzada de CSS3 y sus nuevas características",
      "Implementación de flexbox y grid layout para diseños complejos",
      "Principios de SEO y compatibilidad entre navegadores",
      "Diferencias entre display block, inline e inline-block"
    ],
    exercises: [
      "Creación de páginas web semánticamente correctas con HTML5",
      "Implementación de layouts flexibles con Flexbox",
      "Desarrollo de diseños responsivos usando CSS Grid",
      "Optimización básica para motores de búsqueda",
      "Pruebas de compatibilidad en diferentes navegadores"
    ],
    reflections: "HTML y CSS dejaron de ser solo 'marcado y estilos' para convertirse en herramientas poderosas de estructuración y diseño. Flexbox y Grid revolucionaron mi forma de pensar los layouts, haciendo posible crear diseños que antes parecían imposibles.",
    challenges: "Grid Layout fue inicialmente confuso, especialmente la nomenclatura de líneas y áreas, pero con práctica se volvió intuitivo.",
    nextGoals: ["Explorar frameworks CSS como Bootstrap", "Profundizar en Tailwind CSS", "Mejorar habilidades de diseño responsivo"]
  },
  {
    id: 'week-3',
    week: 3,
    title: "Frameworks CSS: Bootstrap y Tailwind",
    date: "Septiembre 8-14, 2025",
    status: "Completed",
    topics: ["Bootstrap Layout", "Bootstrap Components", "Tailwind Utility-First", "Typography", "Flexbox Avanzado", "Application UI"],
    learnings: [
      "Sistema de grillas y componentes preconstruidos de Bootstrap",
      "Filosofía utility-first de Tailwind CSS y sus ventajas",
      "Tipografía avanzada: fonts, line-height, text styling",
      "Manejo profesional de backgrounds, borders y effects",
      "Sistema de espaciado consistente y responsive",
      "Creación de interfaces complejas con elementos reutilizables"
    ],
    exercises: [
      "Desarrollo completo de sitio web responsive con Bootstrap",
      "Migración de proyecto Bootstrap a Tailwind CSS",
      "Implementación de sistema de componentes UI consistente",
      "Creación de avatars, badges, dropdowns y button groups",
      "Desarrollo de layouts complejos con navigation y overlays"
    ],
    reflections: "Los frameworks CSS transformaron mi flujo de trabajo completamente. Bootstrap me dio rapidez para prototipar, mientras que Tailwind me otorgó control granular sin escribir CSS personalizado. La práctica calificada consolidó estos conocimientos de manera práctica.",
    challenges: "Adaptarme al paradigma utility-first de Tailwind requirió cambiar mi mentalidad, pero los resultados fueron extraordinarios en términos de mantenibilidad.",
    nextGoals: ["Dominar JavaScript vanilla", "Aprender TypeScript básico", "Entender manipulación del DOM"]
  },
  {
    id: 'week-4',
    week: 4,
    title: "JavaScript y TypeScript Fundamentals",
    date: "Septiembre 15-21, 2025",
    status: "Completed",
    topics: ["JavaScript Motores", "Variables y Operadores", "Funciones Avanzadas", "DOM Manipulation", "Canvas", "TypeScript Básico"],
    learnings: [
      "Funcionamiento interno de motores JavaScript y su optimización",
      "Tipos de datos avanzados: Numbers, Strings, Objects y Booleans",
      "Funciones: anónimas, arrow functions, closures y auto-invocadas",
      "Manipulación dinámica del DOM con métodos y propiedades",
      "Creación de animaciones y gráficos interactivos con Canvas",
      "Introducción a TypeScript para tipado estático"
    ],
    exercises: [
      "Desarrollo de calculadora interactiva con JavaScript puro",
      "Implementación de juego simple usando Canvas",
      "Creación de animaciones fluidas y efectos visuales",
      "Manipulación dinámica de estilos y elementos DOM",
      "Conversión de código JavaScript a TypeScript"
    ],
    reflections: "JavaScript se reveló como un lenguaje mucho más poderoso de lo que imaginaba. Las closures y funciones de orden superior abrieron nuevas posibilidades de programación. Canvas me permitió crear experiencias visuales impresionantes que combinan arte y código.",
    challenges: "Los conceptos de closures y el contexto 'this' fueron inicialmente confusos, pero la práctica intensiva con el laboratorio de animación ayudó a clarificarlos.",
    nextGoals: ["Aprender React framework", "Dominar JSX y componentes", "Entender Client Side Rendering"]
  },
  {
    id: 'week-5',
    week: 5,
    title: "Framework JavaScript - React Fundamentals",
    date: "Septiembre 22-28, 2025",
    status: "Completed",
    topics: ["Client Side Rendering", "Componentes JSX", "Props y Children", "Gestión de Dependencias", "Estilos en React"],
    learnings: [
      "Arquitectura y operación de frameworks de Client Side Rendering",
      "Desarrollo basado en componentes con JSX sintaxis",
      "Sistema de props para comunicación entre componentes",
      "Patrón children para composición flexible de componentes",
      "Gestión moderna de dependencias con npm/yarn",
      "Diferentes estrategias de estilos: inline, CSS modules, styled-components"
    ],
    exercises: [
      "Configuración de proyecto React desde cero",
      "Creación de biblioteca de componentes reutilizables",
      "Implementación de paso de datos complejos con props",
      "Desarrollo de layouts usando patrón children",
      "Integración de múltiples sistemas de estilos en un proyecto"
    ],
    reflections: "React cambió completamente mi perspectiva sobre el desarrollo frontend. El pensamiento en componentes y la unidireccionalidad de datos crearon un paradigma mucho más predecible y mantenible. JSX, aunque extraño al principio, se volvió natural rápidamente.",
    challenges: "Entender cuándo usar props vs children y cómo estructurar la jerarquía de componentes requirió mucha práctica y refactoring.",
    nextGoals: ["Dominar eventos en React", "Aprender renderizado condicional", "Implementar consumo de APIs"]
  },
  {
    id: 'week-6',
    week: 6,
    title: "React Avanzado: Eventos, APIs y Routing",
    date: "Septiembre 29 - Octubre 5, 2025",
    status: "Completed",
    topics: ["Eventos React", "Renderizado Condicional", "Renderizado Iterativo", "Formularios", "APIs", "Async/Await", "Axios"],
    learnings: [
      "Sistema de eventos sintéticos de React y event handling",
      "Renderizado condicional para interfaces dinámicas",
      "Renderizado de listas y manejo de keys únicas",
      "Formularios controlados y no controlados en React",
      "Consumo de APIs RESTful con fetch y Axios",
      "Programación asíncrona con Promesas y async/await",
      "Manejo de estados de carga y errores en peticiones"
    ],
    exercises: [
      "Aplicación de gestión de tareas con CRUD completo",
      "Implementación de formularios complejos con validación",
      "Consumo de API pública para mostrar datos dinámicos",
      "Sistema de filtrado y búsqueda en tiempo real",
      "Manejo de estados de loading, error y éxito"
    ],
    reflections: "Esta semana fue un salto cuántico en mi comprensión de React. Combinar eventos, renderizado condicional y APIs me permitió crear aplicaciones realmente interactivas y útiles. Axios simplificó enormemente el trabajo con APIs comparado con fetch nativo.",
    challenges: "Manejar los estados asíncronos y evitar race conditions fue complejo, especialmente cuando se combinaban múltiples llamadas a APIs.",
    nextGoals: ["Dominar todos los hooks de React", "Crear hooks personalizados", "Prepararse para evaluación de logro 01"]
  },
  {
    id: 'week-7',
    week: 7,
    title: "React Hooks y Evaluación de Logro 01",
    date: "Octubre 6-12, 2025",
    status: "Completed",
    topics: ["useState", "useEffect", "useContext", "useRef", "useReducer", "useCallback", "useMemo", "Custom Hooks"],
    learnings: [
      "useState para manejo de estado local en componentes funcionales",
      "useEffect para efectos secundarios y ciclo de vida",
      "useContext para compartir estado global sin prop drilling",
      "useRef para referencias directas a elementos DOM",
      "useReducer para estado complejo con acciones definidas",
      "useCallback y useMemo para optimización de rendimiento",
      "Creación de hooks personalizados para lógica reutilizable"
    ],
    exercises: [
      "Refactoring de aplicaciones class-based a hooks",
      "Implementación de sistema de autenticación con useContext",
      "Creación de hooks personalizados para llamadas a APIs",
      "Optimización de rendimiento con useCallback y useMemo",
      "Desarrollo de aplicación completa usando todos los hooks"
    ],
    reflections: "Los hooks representan la evolución natural de React. Cada hook resuelve problemas específicos de manera elegante, y los hooks personalizados permiten abstraer lógica compleja en funciones reutilizables. La evaluación de logro consolidó todo el conocimiento del frontend.",
    challenges: "useReducer inicialmente parecía complejo comparado con useState, pero para estados complejos demostró ser mucho más claro y predecible.",
    nextGoals: ["Explorar tecnologías backend", "Aprender arquitectura de aplicaciones web", "Iniciar desarrollo fullstack"]
  },
  {
    id: 'week-8',
    week: 8,
    title: "Revisión y Consolidado Parcial",
    date: "Octubre 13-17, 2025",
    status: "Completed",
    topics: ["Retroalimentación", "Reforzamiento", "Consolidado de Evaluación"],
    learnings: [
      "Análisis de errores comunes en la evaluación de logro",
      "Reforzamiento de conceptos fundamentales de React",
      "Mejores prácticas para desarrollo de SPAs",
      "Técnicas de debugging y troubleshooting",
      "Preparación para transición a desarrollo backend"
    ],
    exercises: [
      "Corrección y mejora de proyectos evaluados",
      "Refactoring de código para optimización",
      "Implementación de mejores prácticas aprendidas",
      "Preparación de portafolio de proyectos frontend"
    ],
    reflections: "La semana de retroalimentación fue crucial para identificar áreas de mejora y consolidar el aprendizaje. El primer consolidado demostró el progreso significativo desde el inicio del curso.",
    challenges: "Identificar patrones de errores recurrentes ayudó a mejorar la calidad del código en futuros proyectos.",
    nextGoals: ["Iniciar con tecnologías backend", "Aprender PHP y JSP", "Comprender arquitectura servidor-cliente"]
  },
  {
    id: 'week-9',
    week: 9,
    title: "Tecnología Web Backend - PHP y JSP",
    date: "Octubre 20-26, 2025",
    status: "Completed",
    topics: ["Arquitectura Web", "Servidores Web", "Server Side", "PHP", "JSP", "Backend Frameworks"],
    learnings: [
      "Arquitectura de aplicaciones web multicapa",
      "Funcionamiento de servidores web (Apache, Tomcat)",
      "Diferencias entre Client-Side y Server-Side rendering",
      "Desarrollo de aplicaciones web con PHP",
      "Desarrollo de aplicaciones web con JSP (Java Server Pages)",
      "Configuración y despliegue de aplicaciones backend"
    ],
    exercises: [
      "Configuración de servidor Apache para PHP",
      "Desarrollo de CRUD básico con PHP y MySQL",
      "Configuración de Tomcat para aplicaciones JSP",
      "Implementación de servlets y JSP pages",
      "Despliegue de aplicaciones backend en servidor local"
    ],
    reflections: "El salto del frontend al backend abrió una nueva dimensión del desarrollo web. Entender cómo funcionan los servidores y el procesamiento server-side complementó perfectamente el conocimiento de frontend adquirido en las primeras semanas.",
    challenges: "La configuración inicial de servidores y entornos de desarrollo backend fue más compleja que el frontend, requiriendo mayor atención a detalles de infraestructura.",
    nextGoals: ["Profundizar en Python", "Aprender Django framework", "Dominar patrón MVC/MTV"]
  },
  {
    id: 'week-10',
    week: 10,
    title: "Lenguaje Python - Fundamentos y POO",
    date: "Octubre 27 - Noviembre 2, 2025",
    status: "Completed",
    topics: ["Python Básico", "Estructuras de Datos", "POO Python", "API Imperativa", "Excepciones", "Módulos"],
    learnings: [
      "Sintaxis básica de Python: indentación, comentarios, variables",
      "Tipos de datos: strings, números, listas, tuplas, diccionarios",
      "Estructuras de control y bucles pythonic",
      "Programación Orientada a Objetos en Python",
      "Encapsulamiento, herencia múltiple y polimorfismo",
      "Manejo de excepciones y módulos Python"
    ],
    exercises: [
      "Desarrollo de scripts Python para automatización",
      "Implementación de estructuras de datos complejas",
      "Creación de clases y objetos con herencia",
      "Manejo robusto de excepciones en aplicaciones",
      "Organización de código en módulos reutilizables"
    ],
    reflections: "Python demostró ser un lenguaje elegante y poderoso. Su sintaxis clara y filosofía 'pythonic' hicieron que el aprendizaje fuera natural. La POO en Python es más flexible que en otros lenguajes, especialmente con herencia múltiple.",
    challenges: "Adaptarse a la indentación como parte de la sintaxis fue inicialmente diferente, pero rápidamente se convirtió en una fortaleza para escribir código limpio.",
    nextGoals: ["Aprender Django framework", "Implementar patrón MTV", "Desarrollar APIs RESTful"]
  },
  {
    id: 'week-11',
    week: 11,
    title: "Django Framework - Introducción y Arquitectura MTV",
    date: "Noviembre 3-9, 2025",
    status: "Completed",
    topics: ["Django MTV", "URLs y Vistas", "Plantillas", "Modelos", "ORM Django", "Migraciones"],
    learnings: [
      "Patrón de arquitectura MTV (Model-Template-View) vs MVC",
      "Instalación y configuración de proyectos Django",
      "Sistema de enrutamiento con URLconf",
      "Vistas basadas en funciones y clases (FBV y CBV)",
      "Sistema de plantillas Django con herencia y bloques",
      "ORM de Django para interacción con bases de datos"
    ],
    exercises: [
      "Creación de proyecto Django desde cero",
      "Configuración de URLs y vistas dinámicas",
      "Desarrollo de plantillas con herencia",
      "Definición de modelos y relaciones de base de datos",
      "Ejecución de migraciones y consultas con ORM"
    ],
    reflections: "Django es un framework 'batteries included' que acelera enormemente el desarrollo web. El patrón MTV y el ORM eliminan mucho código repetitivo. La documentación de Django es excepcional y facilita el aprendizaje.",
    challenges: "Comprender la diferencia entre MTV y MVC tradicional requirió ajustar la mentalidad, pero el enfoque de Django resultó muy lógico y eficiente.",
    nextGoals: ["Dominar formularios Django", "Implementar Django Admin", "Aprender autenticación y sesiones"]
  },
  {
    id: 'week-12',
    week: 12,
    title: "Django Avanzado - Formularios, Admin y Middleware",
    date: "Noviembre 10-16, 2025",
    status: "Completed",
    topics: ["Django Forms", "Validación", "Django Admin", "Middleware", "Sesiones", "Autenticación"],
    learnings: [
      "Creación de formularios Django con Forms y ModelForms",
      "Validación y sanitización de datos del usuario",
      "Personalización del Django Admin para gestión de datos",
      "Implementación de campos calculados y formularios personalizados",
      "Sistema de middleware para procesamiento de requests/responses",
      "Autenticación, autorización y manejo de sesiones"
    ],
    exercises: [
      "Desarrollo de formularios complejos con validación personalizada",
      "Configuración avanzada del panel de administración",
      "Implementación de sistema de login y registro",
      "Creación de middleware personalizado",
      "Sistema completo de gestión de usuarios y permisos"
    ],
    reflections: "El ecosistema completo de Django se reveló en toda su potencia. El admin automático es increíblemente útil para prototipar rápido. El sistema de autenticación incorporado ahorra semanas de desarrollo manual.",
    challenges: "La validación de formularios con lógica de negocio compleja requirió entender profundamente el ciclo de vida de los forms de Django.",
    nextGoals: ["Diseñar APIs RESTful", "Implementar serialización", "Aprender Django REST Framework"]
  },
  {
    id: 'week-13',
    week: 13,
    title: "APIs RESTful con Django REST Framework",
    date: "Noviembre 17-23, 2025",
    status: "Completed",
    topics: ["REST API", "DRF", "Serialización", "ViewSets", "Routers", "CORS", "AJAX"],
    learnings: [
      "Principios de arquitectura REST y HATEOAS",
      "Django REST Framework para construcción de APIs",
      "Serialización de modelos y validación de datos",
      "ViewSets y Routers para endpoints organizados",
      "Implementación de filtrado, paginación y throttling",
      "Configuración de CORS para consumo desde frontend"
    ],
    exercises: [
      "Desarrollo de API RESTful completa con CRUD",
      "Implementación de serializers personalizados",
      "Configuración de autenticación por tokens",
      "Integración de API con frontend React",
      "Documentación automática de API con Swagger"
    ],
    reflections: "Django REST Framework transformó Django en una poderosa plataforma para APIs. La serialización automática y los viewsets aceleran el desarrollo sin sacrificar flexibilidad. Conectar el backend Django con el frontend React fue satisfactorio.",
    challenges: "Entender las diferencias entre APIView, ViewSets y GenericViews requirió experimentación, pero cada uno tiene su caso de uso ideal.",
    nextGoals: ["Aprender arquitectura de microservicios", "Implementar Docker", "Dominar despliegue de aplicaciones"]
  },
  {
    id: 'week-14',
    week: 14,
    title: "Microservicios con Django y Containerización",
    date: "Noviembre 24-30, 2025",
    status: "In Progress",
    topics: ["Microservicios", "Docker", "Kubernetes", "Comunicación entre servicios", "Bases de datos distribuidas"],
    learnings: [
      "Arquitectura de microservicios vs monolitos",
      "Diseño y construcción de microservicios con Django",
      "Containerización con Docker y Docker Compose",
      "Comunicación entre microservicios (HTTP, mensajería)",
      "Gestión de bases de datos en arquitectura distribuida",
      "Introducción a Kubernetes para orquestación"
    ],
    exercises: [
      "Desarrollo de múltiples microservicios Django",
      "Containerización con Dockerfiles y docker-compose",
      "Implementación de comunicación inter-servicios",
      "Configuración de API Gateway",
      "Despliegue básico en Kubernetes local"
    ],
    reflections: "La arquitectura de microservicios representa un cambio de paradigma significativo. Docker simplifica el despliegue y la consistencia entre entornos. Aunque más complejo que monolitos, los microservicios ofrecen escalabilidad y flexibilidad.",
    challenges: "La comunicación entre servicios y el manejo de transacciones distribuidas introdujo complejidad nueva que requiere diseño cuidadoso.",
    nextGoals: ["Completar proyecto final", "Preparar presentación", "Consolidar aprendizajes del semestre"]
  },
  {
    id: 'week-15',
    week: 15,
    title: "Proyecto Final y Responsabilidad Social Universitaria",
    date: "Diciembre 1-7, 2025",
    status: "In Progress",
    topics: ["Proyecto Aplicativo", "Investigación Formativa", "Presentación", "RSU"],
    learnings: [
      "Integración completa de frontend React con backend Django",
      "Implementación de proyecto siguiendo mejores prácticas",
      "Metodologías ágiles aplicadas al desarrollo",
      "Preparación de presentaciones técnicas efectivas",
      "Responsabilidad social a través de proyectos tecnológicos"
    ],
    exercises: [
      "Desarrollo completo de aplicación web fullstack",
      "Implementación de características avanzadas",
      "Testing y depuración exhaustiva",
      "Documentación técnica del proyecto",
      "Presentación y defensa del trabajo"
    ],
    reflections: "El proyecto final es la culminación de todo el aprendizaje del semestre. Integrar todas las tecnologías y conceptos en una aplicación funcional es desafiante pero gratificante. La RSU agrega propósito al desarrollo técnico.",
    challenges: "Gestionar el tiempo para completar todas las características mientras se mantiene calidad de código es el mayor desafío.",
    nextGoals: ["Aprobar evaluación de logro 02", "Reforzar áreas débiles", "Planificar aprendizaje continuo"]
  },
  {
    id: 'week-16',
    week: 16,
    title: "Evaluación Final y Cierre del Curso",
    date: "Diciembre 8-12, 2025",
    status: "Planned",
    topics: ["Evaluación de Logro 02", "Retroalimentación Final", "Consolidado Final"],
    learnings: [
      "Revisión comprehensiva de todo el contenido del curso",
      "Identificación de fortalezas y áreas de mejora",
      "Reflexión sobre el progreso desde inicio del semestre",
      "Planificación de ruta de aprendizaje futuro"
    ],
    exercises: [
      "Evaluación de logro 02 sobre desarrollo fullstack",
      "Revisión de proyectos y retroalimentación",
      "Consolidado final de calificaciones"
    ],
    reflections: "Pendiente - Esta semana marcará el cierre de un semestre intenso de aprendizaje. Es momento de evaluar todo lo aprendido y planificar los próximos pasos en el desarrollo web.",
    challenges: "Pendiente - La evaluación final será la prueba definitiva de los conocimientos adquiridos.",
    nextGoals: ["Continuar practicando desarrollo fullstack", "Explorar tecnologías complementarias", "Construir portafolio profesional"]
  }
]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'In Progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'Planned': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30">
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

        {/* Partículas más pequeñas dispersas */}
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
      </div>
      <div className="container mx-auto px-4 py-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Cuaderno</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mi viaje de aprendizaje semanal, documentando el progreso, ideas y reflexiones
            mientras desarrollo mis habilidades en desarrollo de software.
          </p>

        </motion.div>

        {/* Learning Entries */}
        <div className="max-w-4xl mx-auto space-y-6">
          {learningEntries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}

            >
              <Collapsible
                open={openWeeks.includes(entry.id)}
                onOpenChange={() => toggleWeek(entry.id)}
              >
                <Card className="card-elevated overflow-hidden p-5">
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full p-6 justify-between rounded-none hover:bg-transparent"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                            <BookOpen className="h-5 w-5 text-primary" />
                          </div>
                          <div className="text-left">
                            <h3 className="text-xl font-semibold">Week {entry.week}: {entry.title}</h3>
                            <p className="text-sm text-muted-foreground">{entry.date}</p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(entry.status)}>
                          {entry.status}
                        </Badge>
                      </div>
                      <ChevronDown className={`h-5 w-5 transition-transform ${openWeeks.includes(entry.id) ? 'rotate-180' : ''}`} />
                    </Button>
                  </CollapsibleTrigger>

                  <CollapsibleContent className="px-6 pb-6">
                    <div className="grid md:grid-cols-2 gap-6 mt-4">

                      {/* Topics Covered */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-3">
                          <Code className="h-5 w-5 text-primary" />
                          <h4 className="font-semibold">Topics Covered</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {entry.topics.map((topic) => (
                            <Badge key={topic} variant="secondary">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Learnings */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-3">
                          <Lightbulb className="h-5 w-5 text-primary" />
                          <h4 className="font-semibold">Key Learnings</h4>
                        </div>
                        <ul className="space-y-2">
                          {entry.learnings.map((learning, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start space-x-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{learning}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Exercises */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-3">
                          <Target className="h-5 w-5 text-primary" />
                          <h4 className="font-semibold">Exercises & Projects</h4>
                        </div>
                        <ul className="space-y-2">
                          {entry.exercises.map((exercise, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start space-x-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{exercise}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Reflections */}
                      <div className="space-y-4">
                        <h4 className="font-semibold">Reflections</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {entry.reflections}
                        </p>

                        {entry.challenges && (
                          <>
                            <h5 className="font-medium text-sm">Challenges</h5>
                            <p className="text-sm text-muted-foreground">
                              {entry.challenges}
                            </p>
                          </>
                        )}

                        {entry.nextGoals && (
                          <>
                            <h5 className="font-medium text-sm">Next Week Goals</h5>
                            <ul className="space-y-1">
                              {entry.nextGoals.map((goal, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground flex items-start space-x-2">
                                  <span className="text-primary mt-1">•</span>
                                  <span>{goal}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            </motion.div>
          ))}
        </div>

        {/* Progress Summary */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="card-elevated p-8 max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Progreso de Aprendizaje</h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <div className="text-2xl font-bold text-primary">{learningEntries.filter(e => e.status === 'Completed').length}</div>
                <div className="text-sm text-muted-foreground">Semanas Completadas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{learningEntries.flatMap(e => e.topics).length}</div>
                <div className="text-sm text-muted-foreground">Temas Aprendidos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{learningEntries.flatMap(e => e.exercises).length}</div>
                <div className="text-sm text-muted-foreground">Ejercicios Realizados</div>
              </div>
            </div>
            <p className="text-muted-foreground">
              Cada semana trae nuevos desafíos y aprendizajes. Este cuaderno captura mi viaje
              desde conceptos básicos hasta prácticas avanzadas de desarrollo.
            </p>
          </Card>

        </motion.div>

      </div>

    </div>
  )
}