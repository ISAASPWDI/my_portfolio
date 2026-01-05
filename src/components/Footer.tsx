import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/ISAASPWDI", 
      label: "GitHub",
      username: "stevensaliaga" 
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/stevens-aliaga-arauco-05bb39226/", 
      label: "LinkedIn",
      username: "Stevens Aliaga" 
    },
    { 
      icon: Mail, 
      href: "mailto:stivensaliaga@gmail.com", 
      label: "Email",
      username: "stivensaliaga@gmail.com" 
    },
  ]

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          <div className="text-center md:text-left animate-[fadeInUp_0.6s_ease-out_both]">
            <h3 className="text-2xl font-bold text-gradient mb-2">Stevens Aliaga</h3>
            <p className="text-muted-foreground text-sm">
              Backend developer & System Engineer Student
            </p>
          </div>

          <div className="flex justify-center space-x-6 animate-[fadeInUp_0.6s_ease-out_0.1s_both]">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="group relative p-3 bg-background/60 hover:bg-primary/10 border border-border/50 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 active:scale-95 animate-[fadeInUp_0.4s_ease-out_both]"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  title={`${social.label}: ${social.username}`}
                >
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {social.username}
                  </div>
                </a>
              )
            })}
          </div>

          <div className="text-center md:text-right animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end">
              Made with love <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" fill="currentColor" /> 
              © {new Date().getFullYear()}
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Made with TypeScript & Tailwind CSS
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors hover:underline">
              Home
            </a>
            <a href="/about" className="text-muted-foreground hover:text-primary transition-colors hover:underline">
              About
            </a>
            <a href="/projects" className="text-muted-foreground hover:text-primary transition-colors hover:underline">
              Projects
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}