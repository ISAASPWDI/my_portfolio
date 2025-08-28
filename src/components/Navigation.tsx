import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { ThemeToggle } from "./ThemeToggle"
import { Home, User, Briefcase, BookOpen, FileText, Users } from "lucide-react"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "Notebook", href: "/notebook", icon: BookOpen },
  { name: "Reflection", href: "/reflection", icon: FileText },
  { name: "Resources", href: "/resources", icon: Users },
]

export function Navigation() {
  const location = useLocation()

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gradient">
            Portfolio
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="relative group"
                >
                  <motion.div
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                      isActive 
                        ? 'text-primary bg-primary/10' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-medium">{item.name}</span>
                  </motion.div>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>
          
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}