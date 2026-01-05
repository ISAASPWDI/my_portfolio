import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/providers/ThemeProvider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative overflow-hidden border-border/50 bg-background/80 backdrop-blur-sm hover:bg-accent/80"
    >
      <div
        className={`absolute transition-all duration-300 ease-in-out ${
          theme === "light" 
            ? "scale-100 rotate-0 opacity-100" 
            : "scale-0 rotate-90 opacity-0"
        }`}
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </div>
      <div
        className={`absolute transition-all duration-300 ease-in-out ${
          theme === "dark" 
            ? "scale-100 rotate-0 opacity-100" 
            : "scale-0 -rotate-90 opacity-0"
        }`}
      >
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}