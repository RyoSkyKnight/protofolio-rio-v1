"use client"

import { Card, CardContent, CardHeader } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import Image from "next/image"

const ExternalLinkIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)

const GithubIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-6.627-5.373-12-12-12z" />
  </svg>
)

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with modern UI, payment integration, and admin dashboard. Built with Next.js and Stripe for seamless shopping experience.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-blue-500/20 via-purple-500/15 to-cyan-500/20",
    hoverGradient: "hover:from-blue-400/30 hover:via-purple-400/25 hover:to-cyan-400/30",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
    image: "/task-management-dashboard.png",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-green-500/20 via-emerald-500/15 to-teal-500/20",
    hoverGradient: "hover:from-green-400/30 hover:via-emerald-400/25 hover:to-teal-400/30",
  },
  {
    title: "AI Chat Application",
    description:
      "Intelligent chatbot application powered by OpenAI API with conversation history, multiple chat rooms, and responsive design.",
    image: "/ai-chat-interface.png",
    technologies: ["Vue.js", "Python", "FastAPI", "OpenAI API", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-purple-500/20 via-pink-500/15 to-rose-500/20",
    hoverGradient: "hover:from-purple-400/30 hover:via-pink-400/25 hover:to-rose-400/30",
  },
  {
    title: "Weather Dashboard",
    description:
      "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics with stunning visualizations.",
    image: "/preview/project4.png",
    technologies: ["React Native", "Express", "Weather API", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-orange-500/20 via-amber-500/15 to-yellow-500/20",
    hoverGradient: "hover:from-orange-400/30 hover:via-amber-400/25 hover:to-yellow-400/30",
  },
  {
    title: "Social Media Platform",
    description:
      "Full-featured social networking platform with user profiles, real-time messaging, post sharing, and advanced privacy controls.",
    image: "/social-media-interface.png",
    technologies: ["Angular", "Django", "PostgreSQL", "WebSocket", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-cyan-500/20 via-blue-500/15 to-indigo-500/20",
    hoverGradient: "hover:from-cyan-400/30 hover:via-blue-400/25 hover:to-indigo-400/30",
  },
  {
    title: "Learning Management System",
    description:
      "Comprehensive LMS with course creation, student progress tracking, interactive quizzes, and video streaming capabilities.",
    image: "/lms-dashboard.png",
    technologies: ["Next.js", "Prisma", "Supabase", "Stripe", "Mux"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-pink-500/20 via-purple-500/15 to-violet-500/20",
    hoverGradient: "hover:from-pink-400/30 hover:via-purple-400/25 hover:to-violet-400/30",
  },
]

export function ProjectsSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group animate-float-gentle-slow  hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border border-white/20 bg-gradient-to-br from-slate-800/70 via-purple-900/50 to-blue-900/60 ${project.hoverGradient} backdrop-blur-md hover:border-purple-300/40`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative z-10">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-slate-800/90 backdrop-blur-sm hover:bg-slate-700/95 text-white border border-slate-600/50"
                      >
                        <ExternalLinkIcon />
                        <span className="ml-1">Live</span>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-slate-800/90 backdrop-blur-sm border-slate-600/50 text-white hover:bg-slate-700/95"
                      >
                        <GithubIcon />
                        <span className="ml-1">Code</span>
                      </Button>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-200 transition-colors">
                    {project.title}
                  </h3>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-100 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs bg-slate-800/90 text-white border-slate-600/50 hover:bg-slate-700/95 hover:text-white transition-colors backdrop-blur-sm font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
