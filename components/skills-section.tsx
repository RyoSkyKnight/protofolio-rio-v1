"use client"

import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"

const GlobeIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
  </svg>
)

const ServerIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
    />
  </svg>
)

const DatabaseIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
    />
  </svg>
)

const SmartphoneIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"
    />
  </svg>
)

const CloudIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
    />
  </svg>
)

const Code2Icon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)

const skillCategories = [
  {
    title: "Frontend",
    icon: GlobeIcon,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"],
    color: "bg-blue-500",
  },
  {
    title: "Backend",
    icon: ServerIcon,
    skills: ["Node.js", "Express", "Python", "Django", "PHP", "Laravel"],
    color: "bg-green-500",
  },
  {
    title: "Database",
    icon: DatabaseIcon,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase", "Firebase"],
    color: "bg-purple-500",
  },
  {
    title: "Mobile",
    icon: SmartphoneIcon,
    skills: ["React Native", "Flutter", "Ionic", "PWA"],
    color: "bg-orange-500",
  },
  {
    title: "DevOps",
    icon: CloudIcon,
    skills: ["Docker", "AWS", "Vercel", "Netlify", "GitHub Actions"],
    color: "bg-cyan-500",
  },
  {
    title: "Tools",
    icon: Code2Icon,
    skills: ["Git", "VS Code", "Figma", "Postman", "Jest", "Cypress"],
    color: "bg-pink-500",
  },
]

export function SkillsSection() {
  return (
    <section className="py-20 px-4 relative">
      {/* Big Moon */}
      <div className="absolute bottom-20 w-[28rem] h-[28rem] animate-float-slow opacity-30">
        <div className="relative w-full h-full">
          {/* Moon Body */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full 
                    bg-gradient-to-br from-zinc-300/70 via-zinc-500/60 to-zinc-700/70 shadow-2xl
                    ring-1 ring-white/10 animate-float-gentle overflow-hidden">
            {/* Subtle terminator / limb shading */}
            <div className="absolute inset-0 rounded-full 
                      bg-gradient-to-l from-black/30 via-transparent to-transparent mix-blend-multiply"></div>

            {/* Fine noise grain (optional, if you have backdrop support) */}
            <div className="absolute inset-0 backdrop-contrast-125 backdrop-brightness-95 rounded-full"></div>

            {/* Craters (use inline inset shadow for relief) */}
            <div
              className="absolute top-10 left-14 w-16 h-16 rounded-full bg-zinc-400/60"
              style={{ boxShadow: 'inset 8px 8px 0 0 rgba(0,0,0,0.2), inset -6px -6px 0 0 rgba(255,255,255,0.08)' }}
            />
            <div
              className="absolute top-24 right-16 w-12 h-12 rounded-full bg-zinc-500/55"
              style={{ boxShadow: 'inset 6px 6px 0 0 rgba(0,0,0,0.25), inset -4px -4px 0 0 rgba(255,255,255,0.08)' }}
            />
            <div
              className="absolute bottom-16 left-10 w-20 h-20 rounded-full bg-zinc-500/55"
              style={{ boxShadow: 'inset 10px 10px 0 0 rgba(0,0,0,0.22), inset -6px -6px 0 0 rgba(255,255,255,0.08)' }}
            />
            <div
              className="absolute bottom-24 right-24 w-10 h-10 rounded-full bg-zinc-400/55"
              style={{ boxShadow: 'inset 5px 5px 0 0 rgba(0,0,0,0.22), inset -4px -4px 0 0 rgba(255,255,255,0.08)' }}
            />
            <div
              className="absolute top-32 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-zinc-600/50"
              style={{ boxShadow: 'inset 12px 12px 0 0 rgba(0,0,0,0.28), inset -6px -6px 0 0 rgba(255,255,255,0.06)' }}
            />

            {/* Tiny pits */}
            <div className="absolute top-8 right-28 w-3 h-3 rounded-full bg-zinc-300/70" />
            <div className="absolute top-40 right-10 w-2.5 h-2.5 rounded-full bg-zinc-400/70" />
            <div className="absolute bottom-10 left-28 w-2 h-2 rounded-full bg-zinc-300/60" />
          </div>

          {/* Soft glow aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse-glow" />

          {/* Floating dust / stars */}
          <div className="absolute top-6 left-8 w-1.5 h-1.5 bg-white/60 rounded-full animate-float-particle" />
          <div className="absolute bottom-10 right-12 w-1 h-1 bg-white/50 rounded-full animate-float-particle-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-24 right-6 w-1.5 h-1.5 bg-white/40 rounded-full animate-float-particle-fast" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      <div className={`absolute right-10 bottom-120 animate-planet-float-medium opacity-70`}>
        <div className="relative w-[10rem] h-[10rem]">
          {/* Earth body */}
          <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl ring-1 ring-white/10
                        bg-gradient-to-br from-sky-400 via-sky-600 to-blue-800
                        animate-float-gentle">
            {/* Subtle day/night limb */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-l from-black/25 via-transparent to-transparent mix-blend-multiply" />

            {/* Continents (simplified shapes) */}
            <div className="absolute left-[18%] top-[28%] w-16 h-10 bg-emerald-500/80 rounded-[40%] rotate-6 blur-[0.5px]" />
            <div className="absolute left-[30%] top-[45%] w-10 h-7 bg-emerald-600/80 rounded-[45%] -rotate-12 blur-[0.5px]" />
            <div className="absolute right-[18%] bottom-[22%] w-14 h-9 bg-emerald-500/80 rounded-[42%] rotate-3 blur-[0.5px]" />
            <div className="absolute right-[28%] bottom-[35%] w-8 h-6 bg-emerald-600/80 rounded-[50%] -rotate-6 blur-[0.5px]" />

            {/* Polar ice caps (very subtle) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-6 rounded-b-full bg-white/20 blur-[2px]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-6 rounded-t-full bg-white/15 blur-[2px]" />

            {/* Cloud bands */}
            <div className="absolute left-[-10%] top-[35%] w-[120%] h-4 rounded-full bg-white/25 blur-md animate-[cloudslide_18s_linear_infinite]" />
            <div className="absolute left-[-15%] top-[55%] w-[130%] h-3 rounded-full bg-white/20 blur-md animate-[cloudslide_22s_linear_infinite]" />
            <div className="absolute left-[-8%] top-[42%] w-[115%] h-2.5 rounded-full bg-white/20 blur-md animate-[cloudslide_26s_linear_infinite]" />
          </div>

          {/* Soft glow */}
          <div className="absolute inset-0 rounded-full bg-sky-300/10 blur-2xl animate-pulse-glow" />
        </div>

        {/* Tiny stars around */}
        <div className="absolute -top-2 -left-3 w-1 h-1 bg-white/70 rounded-full animate-float-particle" />
        <div className="absolute -bottom-1 -right-4 w-1 h-1 bg-white/60 rounded-full animate-float-particle-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute -top-5 right-6 w-1.5 h-1.5 bg-white/60 rounded-full animate-float-particle-fast" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="group animate-float-gentle hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-3 border border-purple-400/30 bg-gradient-to-br from-slate-800/60 via-purple-900/40 to-blue-900/50 backdrop-blur-lg hover:from-slate-700/70 hover:via-purple-800/50 hover:to-blue-800/60 hover:border-purple-300/50 relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 relative">
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div
                      className={`p-3 rounded-lg ${category.color} text-white mr-4 shadow-lg shadow-purple-500/20 group-hover:shadow-purple-400/30 transition-shadow duration-300`}
                    >
                      <category.icon />
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-100 transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-slate-800/90 text-white border-purple-400/40 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white hover:border-purple-300/60 transition-all duration-300 cursor-default backdrop-blur-sm font-medium shadow-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
