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
      title: "Introduction to React & Modern JavaScript",
      date: "January 8-14, 2024",
      status: "Completed",
      topics: ["React Fundamentals", "ES6+ Features", "Component Lifecycle", "JSX"],
      learnings: [
        "Mastered React component creation and props passing",
        "Understanding of virtual DOM and its benefits", 
        "Learned about ES6 destructuring, arrow functions, and template literals",
        "Implemented first interactive components with state management"
      ],
      exercises: [
        "Built a todo list application with add/remove functionality",
        "Created reusable button and card components",
        "Implemented a simple counter with increment/decrement",
        "Practiced component composition and data flow"
      ],
      reflections: "This week opened my eyes to the power of component-based architecture. The concept of breaking down UI into reusable pieces feels natural and makes code much more maintainable. I'm excited to dive deeper into React patterns.",
      challenges: "Initially struggled with understanding when to use state vs props, but practice helped clarify the distinction.",
      nextGoals: ["Learn about React hooks", "Understand component lifecycle methods", "Practice more complex state management"]
    },
    {
      id: 'week-2',
      week: 2,
      title: "React Hooks & State Management",
      date: "January 15-21, 2024", 
      status: "Completed",
      topics: ["useState", "useEffect", "Custom Hooks", "Context API"],
      learnings: [
        "Deep dive into useState for managing component state",
        "Understanding useEffect for side effects and lifecycle management",
        "Created custom hooks for reusable stateful logic",
        "Learned Context API for avoiding prop drilling"
      ],
      exercises: [
        "Built a weather app with API integration using useEffect",
        "Created custom hooks for form handling and data fetching",
        "Implemented theme switching with Context API",
        "Built a shopping cart with complex state management"
      ],
      reflections: "Hooks have revolutionized how I think about React components. The ability to use state in functional components feels much cleaner than class components. Custom hooks are particularly powerful for code reuse.",
      challenges: "useEffect dependencies array took time to master - understanding when effects run was tricky at first.",
      nextGoals: ["Learn advanced hooks like useReducer", "Master performance optimization", "Explore testing strategies"]
    },
    {
      id: 'week-3',
      week: 3,
      title: "TypeScript & Advanced React Patterns",
      date: "January 22-28, 2024",
      status: "Completed", 
      topics: ["TypeScript Basics", "Props Typing", "Generic Components", "Error Boundaries"],
      learnings: [
        "Added type safety to React applications with TypeScript",
        "Learned to type props, state, and event handlers properly",
        "Understanding of generic components for reusability",
        "Implemented error boundaries for better error handling"
      ],
      exercises: [
        "Converted existing JavaScript projects to TypeScript",
        "Built a type-safe form library with validation",
        "Created generic data table component",
        "Implemented error boundary wrapper components"
      ],
      reflections: "TypeScript initially felt overwhelming, but the benefits became clear quickly. The IDE support and compile-time error catching significantly improved my development experience and code quality.",
      challenges: "Complex type definitions for higher-order components were challenging to understand initially.",
      nextGoals: ["Learn advanced TypeScript patterns", "Explore React testing with Jest", "Study performance optimization techniques"]
    },
    {
      id: 'week-4',
      week: 4,
      title: "Backend Development with Node.js",
      date: "January 29 - February 4, 2024",
      status: "In Progress",
      topics: ["Express.js", "REST APIs", "Database Integration", "Authentication"],
      learnings: [
        "Setting up Express.js server and middleware",
        "Creating RESTful API endpoints", 
        "Connecting to PostgreSQL database",
        "Implementing JWT authentication"
      ],
      exercises: [
        "Built a complete blog API with CRUD operations",
        "Implemented user registration and login system",
        "Created middleware for authentication and error handling",
        "Set up database migrations and seeding"
      ],
      reflections: "Moving to backend development has been exciting. Understanding how frontend and backend communicate through APIs gives me a complete picture of web development.",
      challenges: "Database design and relationships require careful planning - made mistakes that needed refactoring.",
      nextGoals: ["Learn about API security best practices", "Explore database optimization", "Study deployment strategies"]
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
      <div className="container mx-auto px-4 py-20">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Learning Notebook</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My weekly learning journey, documenting progress, insights, and reflections 
            as I develop my skills in software development.
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
                <Card className="card-elevated overflow-hidden">
                  <CollapsibleTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="w-full p-6 justify-between hover:bg-accent/50 rounded-none"
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
            <h3 className="text-2xl font-bold mb-4 text-gradient">Learning Progress</h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <div className="text-2xl font-bold text-primary">{learningEntries.filter(e => e.status === 'Completed').length}</div>
                <div className="text-sm text-muted-foreground">Weeks Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{learningEntries.flatMap(e => e.topics).length}</div>
                <div className="text-sm text-muted-foreground">Topics Learned</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{learningEntries.flatMap(e => e.exercises).length}</div>
                <div className="text-sm text-muted-foreground">Exercises Done</div>
              </div>
            </div>
            <p className="text-muted-foreground">
              Each week brings new challenges and insights. This notebook captures my journey 
              from beginner concepts to advanced development practices.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}