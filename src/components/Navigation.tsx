import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "./ThemeToggle"
import { Home, User, Briefcase, BookOpen, FileText, Users, Menu, X } from "lucide-react"
import { useState } from "react"


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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Dividir navegación en tres filas de 2 elementos cada una
  const firstRow = navigation.slice(0, 2)
  const secondRow = navigation.slice(2, 4)
  const thirdRow = navigation.slice(4, 6)

  return (
    <>
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
            
            {/* Navigation para desktop */}
            <div className="hidden lg:flex items-center space-x-8">
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
            
            {/* Controles para mobile */}
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              
              {/* Botón hamburguesa para mobile */}
              <motion.button
                onClick={toggleMenu}
                className="lg:hidden p-2 rounded-lg hover:bg-accent/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Menu móvil con forma de cuarto de círculo */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMenu}
            />
            
            {/* Menu con forma de cuarto de círculo perfecto */}
            <motion.div
              initial={{ 
                scale: 0,
                opacity: 0
              }}
              animate={{ 
                scale: 1,
                opacity: 1
              }}
              exit={{ 
                scale: 0,
                opacity: 0
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 25,
                duration: 0.5
              }}
              style={{
                clipPath: "circle(100% at 100% 0%)",
                transformOrigin: "top right"
              }}
              className="fixed top-[72px] right-0 w-96 h-96 bg-background/95 backdrop-blur-md border border-border/50 z-50 lg:hidden shadow-2xl"
            >
              {/* Contenido del menú con layout en grid 2x3 y mejor posicionamiento */}
              <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center">
                {/* Contenedor centrado que respeta el área visible del círculo */}
                <div className="transform translate-x-[50px] translate-y-[-30px]">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="space-y-3"
                  >
                    {/* Primera fila - 2 elementos */}
                    <div className="grid grid-cols-2 gap-4">
                      {firstRow.map((item, index) => {
                        const Icon = item.icon
                        const isActive = location.pathname === item.href
                        
                        return (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                              delay: 0.1 * index,
                              type: "spring",
                              stiffness: 400,
                              damping: 25
                            }}
                          >
                            <Link
                              to={item.href}
                              onClick={closeMenu}
                              className="relative group block"
                            >
                              <motion.div
                                className={`flex flex-col items-center space-y-2 px-4 py-3 rounded-xl transition-colors min-w-[80px] ${
                                  isActive 
                                    ? 'text-primary bg-primary/15 border border-primary/30' 
                                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/60'
                                }`}
                                whileHover={{ 
                                  scale: 1.05,
                                  y: -2
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                              >
                                <Icon className="h-5 w-5" />
                                <span className="text-xs font-medium text-center">{item.name}</span>
                              </motion.div>
                              
                              {isActive && (
                                <motion.div
                                  layoutId="activeMobileTab"
                                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                              )}
                            </Link>
                          </motion.div>
                        )
                      })}
                    </div>
                    
                    {/* Segunda fila - 2 elementos */}
                    <div className="grid grid-cols-2 gap-4">
                      {secondRow.map((item, index) => {
                        const Icon = item.icon
                        const isActive = location.pathname === item.href
                        
                        return (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                              delay: 0.1 * (index + 2),
                              type: "spring",
                              stiffness: 400,
                              damping: 25
                            }}
                          >
                            <Link
                              to={item.href}
                              onClick={closeMenu}
                              className="relative group block"
                            >
                              <motion.div
                                className={`flex flex-col items-center space-y-2 px-4 py-3 rounded-xl transition-colors min-w-[80px] ${
                                  isActive 
                                    ? 'text-primary bg-primary/15 border border-primary/30' 
                                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/60'
                                }`}
                                whileHover={{ 
                                  scale: 1.05,
                                  y: -2
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                              >
                                <Icon className="h-5 w-5" />
                                <span className="text-xs font-medium text-center">{item.name}</span>
                              </motion.div>
                              
                              {isActive && (
                                <motion.div
                                  layoutId="activeMobileTab"
                                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                              )}
                            </Link>
                          </motion.div>
                        )
                      })}
                    </div>

                    {/* Tercera fila - 2 elementos */}
                    <div className="grid grid-cols-2 gap-4">
                      {thirdRow.map((item, index) => {
                        const Icon = item.icon
                        const isActive = location.pathname === item.href
                        
                        return (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                              delay: 0.1 * (index + 4),
                              type: "spring",
                              stiffness: 400,
                              damping: 25
                            }}
                          >
                            <Link
                              to={item.href}
                              onClick={closeMenu}
                              className="relative group block"
                            >
                              <motion.div
                                className={`flex flex-col items-center space-y-2 px-4 py-3 rounded-xl transition-colors min-w-[80px] ${
                                  isActive 
                                    ? 'text-primary bg-primary/15 border border-primary/30' 
                                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/60'
                                }`}
                                whileHover={{ 
                                  scale: 1.05,
                                  y: -2
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                              >
                                <Icon className="h-5 w-5" />
                                <span className="text-xs font-medium text-center">{item.name}</span>
                              </motion.div>
                              
                              {isActive && (
                                <motion.div
                                  layoutId="activeMobileTab"
                                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                              )}
                            </Link>
                          </motion.div>
                        )
                      })}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}