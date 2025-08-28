import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, BookOpen, Video, Globe, Code, Users, Star } from "lucide-react"

export default function Resources() {
  const resourceCategories = [
    {
      title: "Books & Documentation",
      icon: BookOpen,
      color: "text-blue-600",
      resources: [
        {
          title: "You Don't Know JS (Book Series)",
          author: "Kyle Simpson",
          description: "Deep dive into JavaScript fundamentals and advanced concepts",
          url: "https://github.com/getify/You-Dont-Know-JS",
          type: "Book",
          rating: 5,
          tags: ["JavaScript", "Fundamentals"]
        },
        {
          title: "React Documentation", 
          author: "React Team",
          description: "Official React documentation with tutorials and API reference",
          url: "https://react.dev/",
          type: "Documentation",
          rating: 5,
          tags: ["React", "Reference"]
        },
        {
          title: "Eloquent JavaScript",
          author: "Marijn Haverbeke", 
          description: "A modern introduction to programming and JavaScript",
          url: "https://eloquentjavascript.net/",
          type: "Book",
          rating: 5,
          tags: ["JavaScript", "Programming"]
        },
        {
          title: "MDN Web Docs",
          author: "Mozilla",
          description: "Comprehensive web development documentation and tutorials",
          url: "https://developer.mozilla.org/",
          type: "Documentation", 
          rating: 5,
          tags: ["Web Dev", "Reference"]
        }
      ]
    },
    {
      title: "Video Courses & Tutorials",
      icon: Video,
      color: "text-red-600",
      resources: [
        {
          title: "The Complete JavaScript Course 2024",
          author: "Jonas Schmedtmann",
          description: "From zero to expert: Node.js, ES6+, NPM, Parcel, Babel",
          url: "https://www.udemy.com/course/the-complete-javascript-course/",
          type: "Course",
          rating: 5,
          tags: ["JavaScript", "Full Course"]
        },
        {
          title: "React - The Complete Guide",
          author: "Maximilian Schwarzmüller",
          description: "Learn React, Redux, React Hooks, React Router & more",
          url: "https://www.udemy.com/course/react-the-complete-guide/",
          type: "Course", 
          rating: 5,
          tags: ["React", "Redux"]
        },
        {
          title: "freeCodeCamp YouTube",
          author: "freeCodeCamp.org",
          description: "Free programming tutorials and full-length courses",
          url: "https://www.youtube.com/c/Freecodecamp",
          type: "YouTube",
          rating: 5,
          tags: ["Free", "Tutorials"]
        },
        {
          title: "Traversy Media",
          author: "Brad Traversy",
          description: "Web development tutorials and crash courses",
          url: "https://www.youtube.com/c/TraversyMedia",
          type: "YouTube",
          rating: 5,
          tags: ["Web Dev", "Tutorials"]
        }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Code,
      color: "text-green-600", 
      resources: [
        {
          title: "Visual Studio Code",
          author: "Microsoft",
          description: "Powerful, free code editor with extensive extension ecosystem",
          url: "https://code.visualstudio.com/",
          type: "Tool",
          rating: 5,
          tags: ["Editor", "IDE"]
        },
        {
          title: "GitHub",
          author: "GitHub",
          description: "Version control, collaboration, and code hosting platform",
          url: "https://github.com/",
          type: "Platform",
          rating: 5,
          tags: ["Git", "Collaboration"]
        },
        {
          title: "CodePen",
          author: "CodePen",
          description: "Online code editor and learning environment for front-end",
          url: "https://codepen.io/",
          type: "Platform",
          rating: 4,
          tags: ["Frontend", "Playground"]
        },
        {
          title: "Figma",
          author: "Figma",
          description: "Collaborative design tool for UI/UX design and prototyping",
          url: "https://www.figma.com/",
          type: "Tool",
          rating: 5,
          tags: ["Design", "UI/UX"]
        }
      ]
    },
    {
      title: "Communities & Forums",
      icon: Users,
      color: "text-purple-600",
      resources: [
        {
          title: "Stack Overflow",
          author: "Stack Overflow",
          description: "Q&A community for programmers and developers",
          url: "https://stackoverflow.com/",
          type: "Community",
          rating: 5,
          tags: ["Q&A", "Help"]
        },
        {
          title: "Dev.to",
          author: "Dev Community", 
          description: "Community of software developers sharing knowledge",
          url: "https://dev.to/",
          type: "Community",
          rating: 4,
          tags: ["Articles", "Community"]
        },
        {
          title: "Reddit - Programming",
          author: "Reddit",
          description: "Programming discussions, news, and learning resources",
          url: "https://www.reddit.com/r/programming/",
          type: "Community",
          rating: 4,
          tags: ["Discussion", "News"]
        },
        {
          title: "Discord - Reactiflux",
          author: "Reactiflux",
          description: "React developers community chat and support",
          url: "https://www.reactiflux.com/",
          type: "Community",
          rating: 4,
          tags: ["React", "Chat"]
        }
      ]
    }
  ]

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
            <span className="text-gradient">Learning Resources</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A curated collection of books, courses, tools, and communities that have shaped 
            my learning journey and continue to guide my development
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
            <h3 className="text-2xl font-bold mb-4 text-gradient">Continuous Learning</h3>
            <p className="text-muted-foreground mb-6">
              These resources have been instrumental in my growth as a developer. 
              I believe in the power of continuous learning and always staying curious about new technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/notebook" className="btn-primary inline-flex items-center justify-center">
                View My Learning Journey
              </a>
              <a href="/projects" className="btn-secondary inline-flex items-center justify-center">
                See What I've Built
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}