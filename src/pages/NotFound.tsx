import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30 flex items-center justify-center">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center animate-[fadeInUp_0.8s_ease-out]">
          <Card className="card-elevated p-12 max-w-2xl mx-auto">
            <div className="mb-8 animate-[scaleIn_0.6s_ease-out_0.2s_both]">
              <div className="text-8xl lg:text-9xl font-bold text-gradient mb-4">404</div>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="mb-8 animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">Page Not Found</h1>
              <p className="text-xl text-muted-foreground mb-2">
                Oops! The page you're looking for doesn't exist.
              </p>
              <p className="text-muted-foreground">
                You tried to access: <code className="bg-muted px-2 py-1 rounded text-sm">{location.pathname}</code>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fadeInUp_0.6s_ease-out_0.6s_both]">
              <Link to="/">
                <Button className="btn-primary group">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                  <ArrowLeft className="ml-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/projects">
                <Button variant="outline" className="btn-secondary group">
                  <Search className="mr-2 h-4 w-4" />
                  View Projects
                </Button>
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-border/50 animate-[fadeInUp_0.6s_ease-out_0.8s_both]">
              <p className="text-sm text-muted-foreground mb-4">You might be looking for:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { href: "/about", label: "About Me" },
                  { href: "/projects", label: "Projects" },
                  { href: "/notebook", label: "Learning Notebook" },
                  { href: "/reflection", label: "Reflection" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NotFound;