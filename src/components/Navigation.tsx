import { Link, useLocation } from "react-router-dom"
import { ThemeToggle } from "./ThemeToggle"
import { Home, User, Briefcase, Menu, X } from "lucide-react"
import { useState } from "react"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Projects", href: "/projects", icon: Briefcase }
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

  const firstRow = navigation.slice(0, 2)
  const secondRow = navigation.slice(2, 4)
  const thirdRow = navigation.slice(4, 6)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 animate-[slideDown_0.6s_ease-out]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-gradient">
              Portfolio
            </Link>
            
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
                    <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 ${
                        isActive 
                          ? 'text-primary bg-primary/10' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                      }`}>
                      <Icon className="h-4 w-4" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                    )}
                  </Link>
                )
              })}
            </div>
            
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 rounded-lg hover:bg-accent/50 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <div className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : 'rotate-0'}`}>
                  {isMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden animate-[fadeIn_0.3s_ease-out]"
            onClick={closeMenu}
          />
          
          <div
            className="fixed top-[72px] right-0 w-96 h-96 bg-background/95 backdrop-blur-md border border-border/50 z-50 lg:hidden shadow-2xl animate-[scaleInCircle_0.5s_ease-out]"
            style={{
              clipPath: "circle(100% at 100% 0%)",
              transformOrigin: "top right"
            }}
          >
            <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center">
              <div className="transform translate-x-[50px] translate-y-[-30px]">
                <div className="space-y-3 animate-[fadeInUp_0.4s_ease-out_0.2s_both]">
                  <div className="grid grid-cols-2 gap-4">
                    {firstRow.map((item, index) => {
                      const Icon = item.icon
                      const isActive = location.pathname === item.href
                      
                      return (
                        <div
                          key={item.name}
                          className="animate-[fadeInUp_0.4s_ease-out_both]"
                          style={{ animationDelay: `${0.1 * index}s` }}
                        >
                          <Link
                            to={item.href}
                            onClick={closeMenu}
                            className="relative group block"
                          >
                            <div className={`flex flex-col items-center space-y-2 px-4 py-3 rounded-xl transition-all duration-300 min-w-[80px] hover:scale-105 hover:-translate-y-0.5 active:scale-95 ${
                                isActive 
                                  ? 'text-primary bg-primary/15 border border-primary/30' 
                                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/60'
                              }`}>
                              <Icon className="h-5 w-5" />
                              <span className="text-xs font-medium text-center">{item.name}</span>
                            </div>
                            
                            {isActive && (
                              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                            )}
                          </Link>
                        </div>
                      )
                    })}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {secondRow.map((item, index) => {
                      const Icon = item.icon
                      const isActive = location.pathname === item.href
                      
                      return (
                        <div
                          key={item.name}
                          className="animate-[fadeInUp_0.4s_ease-out_both]"
                          style={{ animationDelay: `${0.1 * (index + 2)}s` }}
                        >
                          <Link
                            to={item.href}
                            onClick={closeMenu}
                            className="relative group block"
                          >
                            <div className={`flex flex-col items-center space-y-2 px-4 py-3 rounded-xl transition-all duration-300 min-w-[80px] hover:scale-105 hover:-translate-y-0.5 active:scale-95 ${
                                isActive 
                                  ? 'text-primary bg-primary/15 border border-primary/30' 
                                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/60'
                              }`}>
                              <Icon className="h-5 w-5" />
                              <span className="text-xs font-medium text-center">{item.name}</span>
                            </div>
                            
                            {isActive && (
                              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                            )}
                          </Link>
                        </div>
                      )
                    })}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {thirdRow.map((item, index) => {
                      const Icon = item.icon
                      const isActive = location.pathname === item.href
                      
                      return (
                        <div
                          key={item.name}
                          className="animate-[fadeInUp_0.4s_ease-out_both]"
                          style={{ animationDelay: `${0.1 * (index + 4)}s` }}
                        >
                          <Link
                            to={item.href}
                            onClick={closeMenu}
                            className="relative group block"
                          >
                            <div className={`flex flex-col items-center space-y-2 px-4 py-3 rounded-xl transition-all duration-300 min-w-[80px] hover:scale-105 hover:-translate-y-0.5 active:scale-95 ${
                                isActive 
                                  ? 'text-primary bg-primary/15 border border-primary/30' 
                                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/60'
                              }`}>
                              <Icon className="h-5 w-5" />
                              <span className="text-xs font-medium text-center">{item.name}</span>
                            </div>
                            
                            {isActive && (
                              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                            )}
                          </Link>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}