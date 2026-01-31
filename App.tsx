import React, { useState, useEffect, useRef } from "react";
import {
  personalInfo,
  experiences,
  projects,
  skillCategories,
  education,
} from "./data";
import {
  Briefcase,
  Code,
  GraduationCap,
  ExternalLink,
  Mail,
  Linkedin,
  Github,
  MapPin,
  Menu,
  X,
  Award,
  ChevronRight,
  Sun,
  Moon,
  ArrowUp,
  Download,
  Send,
  Server,
  Database,
  Cloud,
  Smartphone,
  Sparkles,
  CheckCircle2,
  Brain,
  Layers,
  Terminal,
  FileCode,
  Globe,
  Settings,
  ShieldCheck,
  BookOpen,
  Calendar,
  School,
  FileText,
  DollarSign,
  // Added Cpu icon to fix the error on line 508
  Cpu,
  CircleStar,
  Trophy,
  Figma,
  Workflow,
  MonitorSmartphone,
  Hand,
  Flame,
  BugPlay,
  Link,
  Waypoints,
  Video,
} from "lucide-react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
};

// Skill Icon Mapping Utility
const getSkillIcon = (skillName: string) => {
  const name = skillName.toLowerCase();

  if (
    name.includes("angular") ||
    name.includes("vue") ||
    name.includes("react")
  )
    return <Globe size={14} />;
  if (
    name.includes("ionic") ||
    name.includes("capacitor") ||
    name.includes("cordova") ||
    name.includes("mobile")
  )
    return <Smartphone size={14} />;
  if (
    name.includes("node") ||
    name.includes("express") ||
    name.includes("java") ||
    name.includes("spring") ||
    name.includes("server")
  )
    return <Server size={14} />;
  if (
    name.includes("sql") ||
    name.includes("database") ||
    name.includes("firestore") ||
    name.includes("hibernate")
  )
    return <Database size={14} />;
  if( name.includes("synthesia"))
    return <Video size={14} />;
  if (
    name.includes("aws") ||
    name.includes("gcp") ||
    name.includes("cloud")
  )
    return <Cloud size={14} />;
  if (name.includes("firebase"))
    return <Flame size={14} />;
  if (
    name.includes("ai") ||
    name.includes("llm") ||
    name.includes("openai") ||
    name.includes("claude") ||
    name.includes("brain")
  )
    return <Brain size={14} />;
  if (
    name.includes("test") ||
    name.includes("jest") ||
    name.includes("playwright") ||
    name.includes("junit") 
  )
    return <CheckCircle2 size={14} />;
  if (name.includes("mockito"))
    return <BugPlay size={14} />;
  if (
    name.includes("automation") ||
    name.includes("workflow") ||
    name.includes("deepl")
  )
    return <Sparkles size={14} />;
  if (
    name.includes("git") ||
    name.includes("ci/cd") ||
    name.includes("maven") ||
    name.includes("sonar")
  )
    return <Settings size={14} />;
  if (
    name.includes("typescript") ||
    name.includes("javascript") ||
    name.includes("js") ||
    name.includes("ts")
  )
    return <FileCode size={14} />;
  if (name.includes("html") || name.includes("css") || name.includes("scss"))
    return <Code size={14} />;
  if (name.includes("workflow") || name.includes("automation") ||
  name.includes("i18n") || name.includes("localization"))
    return <Workflow size={14} />;
  if (name.includes("performance") || name.includes("scalability"))
    return <Cpu size={14} />;
  if (name.includes("ux") || name.includes("ui") || name.includes("figma"))
    return <Figma size={14} />;
  if( name.includes("seo") || name.includes("analytics")){
    return <Globe size={14} />;
  } if( name.includes("design") || name.includes("tailwind")){
    return <MonitorSmartphone size={14} />;
  } if(name.includes("wcag") || name.includes("accessibility")){
    return <Hand size={14} />;
  }
  if (
    name.includes("microservices") ||
    name.includes("mvc") ||
    name.includes("architecture")
  )
    return <Layers size={14} />;
  if (name.includes("terminal") || name.includes("scripts"))
    return <Terminal size={14} />;
  if (
    name.includes("security") ||
    name.includes("re-authentication") ||
    name.includes("mandates")
  )
    return <ShieldCheck size={14} />;

  return <Terminal size={14} />;
};

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[60] transition-all duration-300 ${
        scrolled ? "glass-effect py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a
              href="#"
              onClick={handleLogoClick}
              className="text-xl font-bold tracking-tighter text-rose-900 dark:text-amber-400"
            >
              CM
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <div className="flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 pl-4 border-l border-slate-200 dark:border-slate-800">
              <a
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View CV in a new tab"
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-xs font-bold hover:bg-slate-600 dark:hover:bg-slate-200 transition-all shadow-sm hover:scale-105 active:scale-95"
              >
                <FileText size={14} />
                CV
              </a>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-900"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="View CV"
              className="p-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:scale-105 active:scale-95 transition-transform"
              aria-label="View CV"
            >
              <FileText size={18} />
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-400 p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-effect absolute top-full left-0 w-full shadow-xl border-t border-slate-100/50 dark:border-slate-800/50">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-700 dark:text-slate-300 hover:text-slate-600 dark:hover:text-slate-300 block px-3 py-4 rounded-xl text-base font-semibold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const SectionHeading = ({
  children,
  icon: Icon,
  className = "",
}: React.PropsWithChildren<{
  icon: React.ElementType;
  className?: string;
}>) => (
  <ScrollReveal className={`flex items-center gap-3 mb-10 ${className}`}>
    <div className="p-3 bg-rose-50 dark:bg-amber-900/30 text-rose-900 dark:text-amber-400 rounded-xl">
      <Icon size={24} />
    </div>
    <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
      {children}
    </h2>
  </ScrollReveal>
);

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      return (
        saved === "dark" ||
        (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 selection:bg-slate-100 dark:selection:bg-slate-900/50 selection:text-slate-700 dark:selection:text-slate-200 relative transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Atmosphere (Soft Shading) */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-slate-200 dark:bg-slate-500 rounded-full blur-[160px] opacity-15 dark:opacity-5 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-fuchsia-200 dark:bg-rose-500 rounded-full blur-[140px] opacity-15 dark:opacity-5 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <ScrollReveal delay={100}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-slate-100 dark:border-emerald-800 text-emerald-950 dark:text-emerald-400 text-sm font-semibold mb-6">
                  <div className="w-2 h-2 rounded-full bg-slate-500 animate-pulse"></div>
                  Looking for New Opportunities
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
                  Hi, I'm{" "}
                  <span className="name-gradient drop-shadow-[0_2px_10px_rgba(99,102,241,0.15)] dark:drop-shadow-[0_2px_15px_rgba(244,63,94,0.15)]">
                    Chandrika Mohan
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                  {personalInfo.title} specializing in{" "}
                  <span className="text-slate-600 dark:text-slate-400 font-semibold underline decoration-slate-200 dark:decoration-slate-800 underline-offset-4">
                    AI-driven automation
                  </span>{" "}
                  and scalable full-stack architectures.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-2 bg-rose-900 dark:bg-amber-900 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-rose-950 dark:hover:bg-amber-700 transition-all shadow-lg shadow-slate-200 dark:shadow-amber-950/20 hover:scale-105 active:scale-95"
                  >
                    <Mail size={18} />
                    Hire Me
                  </a>
                  <a
                    href={personalInfo.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open CV in a new tab"
                    className="flex items-center gap-2 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-8 py-4 rounded-2xl font-semibold border border-slate-200 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-900 transition-all shadow-sm hover:scale-105 active:scale-95"
                  >
                    <FileText size={18} />
                    View CV
                  </a>
                  <div className="flex items-center gap-4">
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 rounded-2xl hover:text-slate-600 dark:hover:text-slate-400 hover:border-slate-200 dark:hover:border-slate-900 transition-all hover:scale-110"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 rounded-2xl hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-all hover:scale-110"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-500 dark:text-slate-400 font-medium">
                  <MapPin size={18} />
                  {personalInfo.location}
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end order-first lg:order-last">
              <ScrollReveal delay={100} className="relative group">
                {/* Advanced Multi-layered Shading (Glow) */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-slate-500/20 to-rose-500/20 rounded-[3rem] blur-2xl group-hover:opacity-60 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-600/40 via-violet-600/20 to-fuchsia-600/40 rounded-[2.5rem] blur-xl opacity-25 group-hover:opacity-50 transition-all duration-500"></div>

                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] bg-white dark:bg-slate-900 rounded-[3rem] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/50 dark:border-slate-800/50 overflow-hidden">
                  <div className="w-full h-full rounded-[2.2rem] overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                    <img
                      src={personalInfo.profileImage}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
                      }}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover transition-all duration-1000 scale-x-[-1] group-hover:scale-x-[-1.05] group-hover:scale-y-[1.05]"
                    />
                  </div>
                </div>

                {/* Floating Experience Badge with refined shade */}
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 hidden sm:block animate-bounce-slow">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-50 dark:bg-slate-900/30 text-slate-600 dark:text-slate-400 rounded-lg">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white leading-none">
                        6+ Years
                      </p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold mt-1">
                        Experience
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* About Summary */}
        <section id="about" className="mb-24 scroll-mt-24">
          <ScrollReveal>
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-none">
              <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed italic border-l-4 border-rose-900 pl-6 dark:border-amber-400">
                "{personalInfo.summary}"
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-24 mb-32">
          <SectionHeading icon={Briefcase}>
            Professional Experience
          </SectionHeading>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-8 pb-8 border-l-2 border-rose-100 dark:border-amber-800 last:pb-0"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-rose-900 border-4 border-white dark:border-slate-950"></div>
                <ScrollReveal>
                  <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md dark:hover:bg-slate-800/50 transition-all group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-rose-900 dark:text-amber-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-slate-50 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 text-sm font-semibold rounded-full border border-slate-100/50 dark:border-slate-800/50">
                          {exp.period}
                        </span>
                        <p className="text-slate-400 dark:text-slate-500 text-xs mt-1 font-medium">
                          {exp.location}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {exp.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-slate-600 dark:text-slate-400"
                        >
                          <ChevronRight
                            size={18}
                            className="text-slate-400 dark:text-slate-500 shrink-0 mt-1"
                          />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold rounded-lg border border-slate-100 dark:border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24 mb-32">
          <SectionHeading icon={Code}>Featured Projects</SectionHeading>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <ScrollReveal key={idx}>
                <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl dark:shadow-none transition-all group h-full flex flex-col">
                  <div className="h-48 bg-slate-100 dark:bg-slate-800 relative overflow-hidden shrink-0">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-[20%] dark:grayscale-[40%] group-hover:grayscale-0 transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-6">
                      <span className="bg-slate-600 dark:bg-slate-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {project.period}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-rose-900 dark:text-amber-400 font-medium">
                          {project.subtitle}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        {project.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/30 rounded-lg transition-colors"
                            title={link.name}
                          >
                            {link.name.includes("Git") ? (
                              <Github size={20} />
                            ): link.name.includes("Site") ? (
                              <Link size={20} />
                            )
                            : <Waypoints size={20} />}
                            {/* <ExternalLink size={20} /> */}
                          </a>
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-50 dark:bg-slate-950/30 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-full border border-slate-100 dark:border-amber-800/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-24 mb-32">
          <SectionHeading icon={Cpu}>Technical Skills</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat, idx) => (
              <ScrollReveal key={idx}>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-slate-200 dark:hover:border-slate-800 transition-colors h-full">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-rose-900 dark:bg-amber-500"></div>
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {cat.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-slate-200 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-700 transition-all cursor-default group/skill"
                      >
                        <span className="text-rose-900 dark:text-amber-500 group-hover/skill:scale-110 transition-transform">
                          {getSkillIcon(skill)}
                        </span>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <div className="mb-32">
          <section id="education" className="scroll-mt-24">
            <SectionHeading icon={GraduationCap}>
              Academic Background
            </SectionHeading>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {education.map((edu, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-100/20 dark:shadow-none relative overflow-hidden group h-full flex flex-col transition-all hover:border-slate-200 dark:hover:border-slate-800">
                    {/* Corner Icon Accent */}
                    <div className="absolute top-0 right-0 p-6 opacity-5 dark:opacity-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 text-slate-900 dark:text-white">
                      <GraduationCap size={80} />
                    </div>

                    {/* Timeline Accent Line */}
                    <div className="absolute left-0 top-12 bottom-12 w-1 bg-gradient-to-b from-slate-500 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="relative z-10 flex-grow pl-2">
                      {/* Top Header Section */}
                      <div className="flex flex-col mb-6">
                        <div className="flex items-center gap-2 text-rose-900 dark:text-amber-400 font-bold text-xs uppercase tracking-[0.2em] mb-3">
                          <School size={14} className="shrink-0" />
                          {edu.institution}
                        </div>
                        <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white leading-tight mb-2 group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors">
                          {edu.degree}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-slate-500 dark:text-slate-400 text-sm font-medium">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            {edu.period}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin size={14} />
                            {edu.location}
                          </div>
                        </div>
                      </div>

                      {/* Achievements Section */}
                      <div className="space-y-6">
                        {/* Grade Badge */}
                        {edu.grade && (
                          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-slate-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-500 text-sm rounded-2xl font-extrabold border border-slate-100 dark:border-emerald-500/30 shadow-sm">
                            <CheckCircle2 size={16} />
                            {edu.grade}
                          </div>
                        )}

                        {/* Master Thesis Featured Section */}
                        {edu.thesis && (
                          <div className="p-6 bg-slate-50 dark:bg-slate-800/40 rounded-[2rem] border border-slate-100 dark:border-slate-700/50 shadow-inner group/thesis relative">
                            <div className="absolute top-4 right-6 text-slate-100 dark:text-slate-900/30 pointer-events-none">
                              <BookOpen size={48} />
                            </div>
                            <div className="flex items-center gap-2 text-rose-900 dark:text-amber-400 font-bold text-[10px] uppercase tracking-widest mb-3">
                              <Sparkles size={12} />
                              Master Thesis Project
                            </div>
                            <p className="text-slate-800 dark:text-slate-200 font-bold text-base leading-relaxed mb-4 relative z-10">
                              "{edu.thesis.title}"
                            </p>
                            {edu.thesis.grade && (
                              <div className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-slate-500 dark:bg-emerald-500 animate-pulse"></span>
                                <span className="text-rose-900 dark:text-amber-400 font-extrabold text-xs">
                                  {edu.thesis.grade}
                                </span>
                              </div>
                            )}
                          </div>
                        )}

                        {/* General Details (e.g. Distinction) */}
                        {edu.details && (
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50/50 dark:bg-slate-900/20 text-slate-700 dark:text-slate-300 text-sm rounded-xl font-bold border border-slate-100/30 dark:border-slate-800/20">
                            <Award size={14} className="text-amber-500" />
                            {edu.details}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </div>

        {/* Recognition & Awards Section */}
        <section id="awards" className="scroll-mt-24 mb-32">
          <SectionHeading icon={Trophy}>Recognition & Awards</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex gap-6 items-center hover:border-slate-200 dark:hover:border-slate-800 transition-all group h-full">
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 text-emerald-700 dark:text-emerald-500 rounded-2xl group-hover:scale-110 transition-transform">
                  <CircleStar size={32} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Organizer & Co-director
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400">
                    MONA AI Hackathon @ Universität des Saarlandes
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-bold mt-1">
                    2024
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex gap-6 items-center hover:border-slate-200 dark:hover:border-slate-800 transition-all group h-full">
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 text-emerald-700 dark:text-emerald-500 rounded-2xl group-hover:scale-110 transition-transform">
                  <DollarSign size={32} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Project Bonus
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400">
                    Eminent Performance @ Capgemini Singapore Power Services
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-bold mt-1">
                    2018
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Call to Action Section */}
        <ScrollReveal>
          <section
            id="contact"
            className="
      relative mb-24 overflow-hidden rounded-[3rem]
      bg-gradient-to-br from-slate-100 via-rose-100 to-white
      dark:from-blue-800 dark:via-slate-900 dark:to-zinc-950
      py-16 px-8 md:px-16 text-center
      shadow-2xl shadow-slate-300/20 dark:shadow-blue-500/15
    "
          >
            {/* Background blurs */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-amber-200/10 dark:bg-slate-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-slate-200/10 dark:bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex p-3 bg-slate-50 dark:bg-white/10 rounded-2xl text-slate-700 dark:text-white mb-6 backdrop-blur-md">
                <Send size={32} />
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
                Let's build the future{" "}
                <span className="text-slate-500 dark:text-slate-400">
                  together
                </span>
                .
              </h2>

              <p className="text-lg text-slate-700 dark:text-slate-200 mb-10 leading-relaxed opacity-90">
                I'm always open to discussing innovative projects, technical
                leadership opportunities, or scalable architecture challenges.
                Let's start a conversation!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 shadow-xl"
                >
                  <Mail size={24} />
                  Contact Me
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-slate-500/20 text-slate-700 dark:text-slate-50 border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  <Linkedin size={24} />
                  LinkedIn
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-slate-600 dark:bg-slate-500 text-white rounded-2xl shadow-2xl shadow-slate-300 dark:shadow-slate-950/40 z-50 transition-all duration-300 transform hover:scale-110 active:scale-95 ${
          showBackToTop
            ? "translate-y-0 opacity-100 visible"
            : "translate-y-12 opacity-0 invisible"
        }`}
        aria-label="Back to Top"
      >
        <ArrowUp size={24} />
      </button>

      <footer className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 py-16 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-rose-900 dark:text-amber-400 mb-2">
                Chandrika Mohan
              </h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                {personalInfo.title}
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-400 rounded-xl transition-all hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-xl transition-all hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-400 rounded-xl transition-all hover:scale-110"
              >
                <Mail size={20} />
              </a>
              <a
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-400 rounded-xl transition-all hover:scale-110"
                title="View CV in a new tab"
              >
                <FileText size={20} />
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
            <p className="text-slate-400 dark:text-slate-500 text-sm mb-2 font-medium">
              Designed & Built with precision and care • 2026
            </p>
            <p className="text-slate-300 dark:text-slate-600 text-xs font-bold uppercase tracking-widest">
              Based in {personalInfo.location}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
