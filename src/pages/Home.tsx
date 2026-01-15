import { Link } from "react-router-dom"
import { Github, Linkedin, Mail, ArrowRight, Download, MessageCircle, GraduationCap, Briefcase, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ContactForm } from "@/components/ContactForm"
import heroAvatar from "@/assets/photo-cv.jpeg"

export default function Home() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/ISAASPWDI", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/stevens-aliaga-arauco-05bb39226/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:stivensaliaga@gmail.com", label: "Email" },
  ]
  const homeCards = [
    {
      icon: GraduationCap,
      title: "Education",
      items: [
        { degree: "Systems Engineering", description: "Universidad Nacional del centro del Perú • 2021 - 2026" },
        { degree: "Course: Node.js from Zero to Expert", description: "Udemy • 2025" },
        { degree: "Course: Java University", description: "Udemy • 2025" },
        { degree: "Course: React.js from Zero to Expert", description: "Udemy • 2025" }
      ]
    },
    {
      icon: Briefcase,
      title: "Experience",
      items: [
        { degree: "Backend Developer Intern", description: "Tecnovedades Web • Aug 2024 – Aug 2025 (1 year)" },
        { degree: "Backend Developer Intern", description: "CasaMarket • Set 2023 – May 2024 (8 months)" }
      ]
    },
    {
      icon: MapPin,
      title: "Location",
      items: [
        { degree: "Available to work worldwide" },
        { description: "Open to remote opportunities" },
        { description: "Willing to relocate if necessary" }
      ]
    }
  ]

  return (
    <div className="hero-section overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] mb-16 lg:mb-20">

          <div className="flex flex-col items-center lg:block space-y-6 lg:space-y-8 order-2 lg:order-1 animate-[fadeInLeft_0.8s_ease-out_0.2s_both]">
            <div className="flex flex-col items-center lg:block animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
              <h1 className="text-center text-foreground lg:text-start text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
                Hi, I&apos;m <br />
                Stevens Aliaga
              </h1>
              <p className="text-center lg:text-start text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-6 leading-relaxed">
                Backend developer & System Engineer Student
              </p>
              <p className="text-center lg:text-start text-base lg:text-lg text-muted-foreground max-w-lg">
                With a deep passion for my field, I'm constantly seeking new learning opportunities and excited to explore cutting-edge technologies that allow me to innovate and overcome challenges.
              </p>
            </div>

            <div className="flex items-center space-x-4 lg:space-x-6 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    className="group relative p-2.5 lg:p-3 bg-card/60 hover:bg-primary/10 border border-border/50 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95"
                     style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <Icon className="h-5 w-5 lg:h-6 lg:w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
              <Link to="/projects">
                <Button className="btn-primary group transition-transform duration-500 w-full sm:w-auto hover:scale-105">
                  View my work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="/CV_ALIAGA_ARAUCO_STEVENS.es.pdf" download="CV_STEVENS_ALIAGA_ARAUCO.es.pdf">
                <Button variant="outline" className="btn-secondary hover:bg-primary/10 group transition-all duration-300 w-full sm:w-auto">
                  <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-500" />
                  Download CV
                </Button>
              </a>
            </div>
          </div>

          <div className="flex justify-center order-1 pt-20 lg:pt-0 lg:order-2 mb-8 lg:mb-0 animate-[fadeInRight_0.8s_ease-out_0.4s_both]">
            <div className="relative transition-transform duration-300 hover:scale-105">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                <img
                  src={heroAvatar}
                  alt="Stevens Aliaga - Full Stack Developer"
                  className="w-full h-full object-cover animate-[scaleIn_0.8s_ease-out_0.6s_both]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-full" />
              </div>

              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-[spin_20s_linear_infinite]"
                style={{
                  width: 'calc(100% + 40px)',
                  height: 'calc(100% + 40px)',
                  top: '-20px',
                  left: '-20px'
                }}>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 lg:w-3 lg:h-3 bg-primary/60 rounded-full shadow-lg" />
              </div>

              <div className="absolute inset-0 rounded-full border-2 border-accent/25 border-dashed animate-[spin_30s_linear_infinite_reverse]"
                style={{
                  width: 'calc(100% + 60px)',
                  height: 'calc(100% + 60px)',
                  top: '-30px',
                  left: '-30px'
                }}>
                <div className="absolute bottom-0 right-1/4 w-2 h-2 lg:w-2.5 lg:h-2.5 bg-accent/70 rounded-full shadow-lg" />
                <div className="absolute top-1/4 left-0 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-accent/50 rounded-full shadow-md" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6 mb-16 lg:mb-20">
          {homeCards.map((card, index) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="animate-[fadeInUp_0.6s_ease-out_both]"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <Card className="card-elevated p-4 lg:p-6 h-full hover:shadow-[var(--shadow-medium)] transition-all duration-300 group">
                  <div className="text-center">
                    <div className="inline-flex p-2.5 lg:p-3 bg-primary/10 rounded-xl mb-3 lg:mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-extrabold mb-2">{card.title}</h3>
                    {card.items.map((item, i) => (
                      <div key={i} className="mb-2">
                        {item.degree && (
                          <p className="font-semibold">{item.degree}</p>
                        )}
                        <p className="text-sm lg:text-base text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )
          })}
        </div>

        <div className="mt-16 lg:mt-20 text-center animate-[fadeInUp_0.8s_ease-out_1s_both]">
          <p className="text-muted-foreground mb-6 lg:mb-8">
            Explore my journey in technology and learning
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 max-w-3xl mx-auto">
            {[
              { number: "15+", label: "Projects Completed" },
              { number: "2+", label: "Years Experience" },
              { number: "10+", label: "Technologies Learned" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="card-elevated p-4 lg:p-6 animate-[fadeInUp_0.6s_ease-out_both]"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                <div className="text-2xl lg:text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-sm lg:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 lg:mt-20 relative overflow-hidden animate-[fadeInUp_0.8s_ease-out_1.4s_both]">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="relative">
              <div className="animate-[fadeInLeft_0.8s_ease-out_1.6s_both]">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-gradient">Let's work together</h2>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 lg:mb-8">
                  Ready to bring your ideas to life? I'm always excited to discuss new projects, collaborate on innovative solutions, or simply connect with fellow developers and potential employers.
                </p>
              </div>

              <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8 animate-[fadeInUp_0.8s_ease-out_1.8s_both]">
                <div className="flex items-center space-x-3 group hover:translate-x-1 transition-transform duration-300">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0 animate-pulse" />
                  <span className="text-sm lg:text-base text-muted-foreground group-hover:text-foreground transition-colors">
                    Open to full-time opportunities
                  </span>
                </div>

                <div className="flex items-center space-x-3 group hover:translate-x-1 transition-transform duration-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <span className="text-sm lg:text-base text-muted-foreground group-hover:text-foreground transition-colors">
                    Committed to continuous learning
                  </span>
                </div>

                <div className="flex items-center space-x-3 group hover:translate-x-1 transition-transform duration-300">
                  <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 animate-pulse" style={{ animationDelay: '1s' }} />
                  <span className="text-sm lg:text-base text-muted-foreground group-hover:text-foreground transition-colors">
                    Teamwork and innovation oriented
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 animate-[fadeInUp_0.8s_ease-out_2s_both]">
                <div className="flex items-center space-x-3 p-3 lg:p-4 bg-card hover:bg-card/80 border border-border rounded-lg transition-all duration-300 group cursor-pointer hover:scale-105 hover:-translate-y-0.5 active:scale-95">
                  <div className="flex-shrink-0">
                    <MessageCircle className="h-4 w-4 lg:h-5 lg:w-5 text-primary group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="font-medium text-xs lg:text-sm text-foreground">Fast response</div>
                    <div className="text-xs text-muted-foreground">Usually within 24 hours</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 lg:p-4 bg-card hover:bg-card/80 border border-border rounded-lg transition-all duration-300 group cursor-pointer hover:scale-105 hover:-translate-y-0.5 active:scale-95">
                  <div className="flex-shrink-0">
                    <Mail className="h-4 w-4 lg:h-5 lg:w-5 text-primary group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="font-medium text-xs lg:text-sm text-foreground">Professionalism</div>
                    <div className="text-xs text-muted-foreground">Clear and detailed communication</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <ContactForm />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}