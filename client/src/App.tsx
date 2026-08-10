import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Industries from "@/pages/Industries";
import NotFound from "@/pages/NotFound";
import Projects from "@/pages/Projects";
import Services from "@/pages/Services";
import WhyAvenox from "@/pages/WhyAvenox";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import AnimatedLogo from "./components/AnimatedLogo";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/projects" component={Projects} />
      <Route path="/industries" component={Industries} />
      <Route path="/why-avenox" component={WhyAvenox} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsReady(true), 650);
    return () => window.clearTimeout(timeout);
  }, []);

  // Scroll to top when the route changes
  const [location] = useLocation();
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: "auto" });
    } catch (e) {
      /* noop for SSR */
    }
  }, [location]);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          {!isReady && (
            <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white text-slate-900">
              <div className="flex flex-col items-center gap-6 px-6 text-center">
                <div className="relative flex items-center justify-center w-36 h-36">
                  <div className="absolute inset-0 rounded-full border border-primary/20 animate-logo-ring"></div>
                  <div className="absolute inset-4 rounded-full border border-primary/30 opacity-70 animate-logo-glow"></div>
                  <div className="absolute inset-8 rounded-full bg-primary/10"></div>
                  <div className="relative">
                    <AnimatedLogo size={96} />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-base uppercase tracking-[0.35em] text-primary font-semibold">
                    Avenox Steel Services
                  </p>
                  <h1 className="text-2xl sm:text-3xl font-bold">
                    Secure, precise steel detailing
                  </h1>
                </div>
                <p className="text-sm text-slate-500 max-w-md">
                  Loading your premium industrial website experience.
                </p>
              </div>
            </div>
          )}
          <div className={isReady ? "" : "opacity-0 pointer-events-none"}>
            <Router />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
