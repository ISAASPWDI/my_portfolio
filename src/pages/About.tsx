import { Card } from "@/components/ui/card"
import {
  Code2,
  Lightbulb,
  Target,
  Heart,
  Laptop,
  Users,
  BookOpen,
  Trophy
} from "lucide-react"
import { useTheme } from "@/providers/ThemeProvider"

export default function About() {
  const skills = [
    { name: "JavaScript", image: "/images/skills/js.png" },
    { name: "TypeScript", image: "/images/skills/ts.png" },
    { name: "React", image: "/images/skills/react.png" },
    { name: "Node.js", image: "/images/skills/nodejs.webp", imageDark: "/images/skills/nodejsdark.png" },
    { name: "Nest.js", image: "/images/skills/nestjs.svg" },
    { name: "Java", image: "/images/skills/java.png" },
    { name: "Spring Boot", image: "/images/skills/springboot.png" },
    { name: "PostgreSQL", image: "/images/skills/postgresql.svg" },
    { name: "MySQL", image: "/images/skills/mysql.png" },
    { name: "Git", image: "/images/skills/git.png" },
    { name: "Docker", image: "/images/skills/docker.png" },
    { name: "Tailwind CSS", image: "/images/skills/tailwind.png" },
    { name: "Next.js", image: "/images/skills/nextjs.svg", imageDark: "/images/skills/nextjsdark.png" },
    { name: "GraphQL", image: "/images/skills/graphql.png" }
  ]

  const getSkillImage = (skillName: string, theme: "light" | "dark"): string => {
    const skill = skills.find((s) => s.name === skillName);
    if (!skill) return "";
    if (theme === "dark" && skill.imageDark) {
      return skill.imageDark;
    }
    return skill.image;
  };

  const resolveTheme = (theme: "light" | "dark" | "system"): "light" | "dark" => {
    if (theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return theme;
  };

  const interests = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Design and build complete applications, from frontend to backend."
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Ability to analyze complex challenges and propose efficient, innovative solutions."
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Constantly staying up-to-date with new technologies and development best practices."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Experience working in multidisciplinary teams using agile methodologies."
    }
  ]

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Commitment to clean, efficient, and maintainable code."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Genuine enthusiasm for technological innovation."
    },
    {
      icon: Laptop,
      title: "Adaptability",
      description: "Flexibility to learn and apply new tools."
    },
    {
      icon: Trophy,
      title: "Growth",
      description: "Driven by professional development and overcoming new challenges."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30">
      <div className="container mx-auto px-4 py-20 relative z-10">

        <div className="text-center mb-16 animate-[fadeInUp_0.8s_ease-out]">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">About Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here you'll find a brief overview of my interests and values as a developer.
            I'm driven by the pursuit of innovative solutions, continuous learning, and
            effective collaboration — principles that guide my work and professional growth.
          </p>
        </div>

        <section className="mb-20 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
          <Card className="card-elevated p-8 lg:p-12">
            <h2 className="text-3xl font-bold mb-6 text-gradient">Who am I</h2>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm Stevens Aliaga, a passionate Systems Engineering student and aspiring full-stack developer
                  with a deep love for creating innovative digital solutions. I'm currently developing my skills
                  in both the theoretical foundations and practical applications of software development.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My journey began with curiosity about how websites work, which quickly evolved into a passion
                  for building complete applications — from concept to deployment. I'm motivated by the challenge
                  of solving complex problems and turning ideas into reality through code.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-extrabold mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => {
                    const { theme } = useTheme();

                    return (
                      <div
                        key={skill.name}
                        className="group animate-[scaleIn_0.3s_ease-out_both]"
                        style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                      >
                        <div className="relative overflow-hidden rounded-lg border bg-card p-3 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                          <div className="flex items-center space-x-3">
                            <div className="relative w-8 h-8 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                              <img
                                src={getSkillImage(skill.name, resolveTheme(theme))}
                                alt={skill.name}
                                className="w-full h-full object-contain rounded-sm"
                              />
                              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 rounded-md blur-2xl transition-colors duration-300"></div>
                            </div>
                            <span className="text-sm font-medium truncate group-hover:text-primary transition-colors duration-300">
                              {skill.name}
                            </span>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-300"></div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-20 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient">My Interests</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => {
              const Icon = interest.icon
              return (
                <div
                  key={interest.title}
                  className="animate-[fadeInUp_0.6s_ease-out_both]"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <Card className="card-elevated p-6 h-full hover:shadow-[var(--shadow-medium)] transition-all duration-300 group">
                    <div className="text-center">
                      <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{interest.title}</h3>
                      <p className="text-muted-foreground">{interest.description}</p>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>
        </section>

        <section className="animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient">My Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="animate-[fadeInUp_0.6s_ease-out_both]"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <Card className="card-elevated p-6 h-full hover:shadow-[var(--shadow-medium)] transition-all duration-300 group">
                    <div className="text-center">
                      <div className="inline-flex p-3 bg-accent/20 rounded-xl mb-4 group-hover:bg-accent/30 transition-colors">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>
        </section>

        <div className="mt-20 text-center animate-[fadeInUp_0.8s_ease-out_1s_both]">
          <Card className="card-elevated p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Let's Connect</h3>
            <p className="text-muted-foreground mb-6">
              I'm open to discussing new job opportunities, collaborating on innovative projects,
              or exchanging ideas about technology and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:stivensaliaga@gmail.com" className="btn-primary inline-flex items-center justify-center">
                Contact Me
              </a>
              <a href="/projects" className="btn-secondary inline-flex items-center justify-center">
                View My Projects
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}