"use client"

import { TypingAnimation } from "./typing-animation"
import { Button } from "./ui/button"
import Image from "next/image"
import avatar from "./images/avatar.png"

const ArrowDownIcon = () => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
)

const GithubIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const MailIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

export function HeroSection() {
  const texts = ["Satrio Wicaksono", "Teamworks Is A Universe", "Full-Stack Developer"]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative bg-none overflow-hidden">
      {/* Saturn Planet - Top Right Corner */}
      <div className="absolute animate-float-slow  -top-20 -right-20 w-96 h-96 animate-planet-orbit-slow opacity-30">
        <div className="relative w-full h-full">
          {/* Saturn Body */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-yellow-300/40 via-orange-300/40 to-yellow-600/40 shadow-2xl animate-planet-float-gentle">
            {/* Saturn bands/stripes */}
            <div className="absolute inset-0 rounded-full opacity-60">
              <div className="absolute top-6 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent"></div>
              <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400/40 to-transparent"></div>
              <div className="absolute top-16 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
              <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-300/50 to-transparent"></div>
            </div>
          </div>
          
          {/* Saturn Rings */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ring-rotation">
            {/* Outer ring */}
            <div className="w-64 h-64 border-4 border-yellow-400/20 rounded-full border-dashed animate-pulse-gentle"></div>
            {/* Middle ring */}
            <div className="absolute top-4 left-4 w-56 h-56 border-2 border-orange-300/30 rounded-full"></div>
            {/* Inner ring */}
            <div className="absolute top-8 left-8 w-48 h-48 border border-yellow-500/25 rounded-full border-dotted"></div>
          </div>
          
          {/* Glowing aura */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-yellow-400/10 rounded-full blur-xl animate-pulse-glow"></div>
        </div>
      </div>

      {/* Jupiter Planet - Bottom Left Corner */}
      <div className="absolute -bottom-25 -left-28 w-80 h-80 animate-planet-orbit-reverse opacity-25">
        <div className="relative w-full h-full">
          {/* Jupiter Body */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-gradient-to-br from-orange-400/50 via-red-400/40 to-orange-600/50 shadow-2xl animate-float-gentle">
            {/* Jupiter's Great Red Spot */}
            <div className="absolute top-4 right-2 w-8 h-6 bg-red-500/40 rounded-full animate-pulse-gentle"></div>
            {/* Jupiter bands */}
            <div className="absolute inset-0 rounded-full opacity-50">
              <div className="absolute top-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-600/40 to-transparent"></div>
              <div className="absolute top-8 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-red-400/30 to-transparent"></div>
              <div className="absolute top-14 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"></div>
              <div className="absolute top-18 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent"></div>
            </div>
          </div>
          
          {/* Small moons */}
          <div className="absolute top-8 left-8 w-2 h-2 bg-gray-300/60 rounded-full animate-float-particle"></div>
          <div className="absolute bottom-12 right-16 w-1 h-1 bg-gray-400/50 rounded-full animate-float-particle-slow" style={{animationDelay: "1s"}}></div>
          <div className="absolute top-20 right-8 w-1.5 h-1.5 bg-gray-200/40 rounded-full animate-float-particle-fast" style={{animationDelay: "2s"}}></div>
          
          {/* Glowing aura */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-orange-400/8 rounded-full blur-xl animate-pulse-glow"></div>
        </div>
      </div>

      <div className={`absolute top-0 -mt-35 left-60 animate-planet-float-slow opacity-60`}>
      <div className="relative w-[20rem] h-[20rem]">
        {/* Mars body */}
        <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl ring-1 ring-orange-200/10
                        bg-gradient-to-br from-orange-500 via-orange-700 to-red-900 animate-float-gentle">
          {/* Terminator */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-l from-black/30 via-transparent to-transparent mix-blend-multiply" />

          {/* Polar caps (subtle) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-10 rounded-b-full bg-orange-100/15 blur-[2px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-10 rounded-t-full bg-orange-100/12 blur-[2px]" />

          {/* Canyons / albedo features */}
          <div className="absolute left-[18%] top-[40%] w-[60%] h-4 rounded-full bg-red-900/40 blur-[2px] -rotate-[10deg]" />
          <div className="absolute left-[22%] top-[46%] w-[55%] h-3 rounded-full bg-red-800/35 blur-[2px] -rotate-[12deg]" />
          <div className="absolute right-[22%] top-[30%] w-24 h-6 rounded-full bg-amber-900/35 blur-[1.5px] rotate-[15deg]" />
          <div className="absolute right-[15%] bottom-[28%] w-28 h-5 rounded-full bg-red-950/30 blur-[1.5px] rotate-[8deg]" />

          {/* Craters */}
          <div className="absolute top-10 left-14 w-10 h-10 rounded-full bg-amber-700/55"
               style={{ boxShadow: 'inset 6px 6px 0 rgba(0,0,0,0.28), inset -4px -4px 0 rgba(255,200,150,0.06)' }} />
          <div className="absolute top-28 right-16 w-8 h-8 rounded-full bg-amber-600/55"
               style={{ boxShadow: 'inset 5px 5px 0 rgba(0,0,0,0.25), inset -3px -3px 0 rgba(255,200,150,0.06)' }} />
          <div className="absolute bottom-16 left-10 w-12 h-12 rounded-full bg-amber-700/50"
               style={{ boxShadow: 'inset 7px 7px 0 rgba(0,0,0,0.25), inset -4px -4px 0 rgba(255,200,150,0.06)' }} />

          {/* Dust storm bands */}
          <div className="absolute left-[-15%] top-[35%] w-[130%] h-3 rounded-full bg-orange-200/20 blur-md animate-[stormslide_20s_linear_infinite]" />
          <div className="absolute left-[-10%] top-[55%] w-[120%] h-2 rounded-full bg-amber-100/15 blur-md animate-[stormslide_26s_linear_infinite]" />
        </div>

        {/* Warm glow */}
        <div className="absolute inset-0 rounded-full bg-orange-300/10 blur-2xl animate-pulse-glow" />
      </div>

      {/* Dust particles */}
      <div className="absolute -top-2 -left-3 w-1 h-1 bg-orange-100/70 rounded-full animate-float-particle" />
      <div className="absolute -bottom-1 -right-4 w-1 h-1 bg-amber-100/60 rounded-full animate-float-particle-slow" style={{ animationDelay: "1s" }} />
      <div className="absolute -top-5 right-6 w-1.5 h-1.5 bg-orange-50/60 rounded-full animate-float-particle-fast" style={{ animationDelay: "2s" }} />
    </div>
  
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column - Text content */}
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <TypingAnimation
                texts={texts}
                className="bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent [&>*]:text-purple-400"
                typingSpeed={80}
                deletingSpeed={40}
                pauseDuration={3000}
              />
            </h1>
            <p className="text-2xl md:text-3xl text-purple-300 mb-6 animate-fade-in">Fullstack Web Developer</p>
            <p className="text-lg text-slate-300 leading-relaxed animate-fade-in max-w-lg">
              Passionate about creating innovative web solutions that bring ideas to life. I specialize in modern
              technologies and love building applications that make a difference.
            </p>
          </div>

           {/* Floating Buttons Container with Zero Gravity Effect */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
            {/* Main Contact Button - Central floating */}
            <div className="animate-planet-float-slow ">
              <Button
                size="lg"
                className="relative z-10  bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]"
              >
                <MailIcon />
                Get In Touch
              </Button>
              {/* Glowing aura */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur-xl opacity-30 animate-pulse-gentle"></div>
            </div>

            {/* GitHub Button - Floating top right */}
            <div className="animate-planet-float-medium">
              <Button
                variant="outline"
                size="lg"
                className="border-purple-400 text-purple-300 hover:bg-purple-400/20 hover:text-purple-200 bg-transparent backdrop-blur-sm shadow-lg hover:shadow-purple-400/30 transition-all duration-500 hover:scale-110 hover:rotate-3 drop-shadow-[0_0_10px_rgba(168,85,247,0.2)]"
              >
                <GithubIcon />
                GitHub
              </Button>
            </div>

            {/* LinkedIn Button - Floating bottom left */}
            <div className="animate-float-gentle-slow">
              <Button
                variant="outline"
                size="lg"
                className="border-blue-400 text-blue-300 hover:bg-blue-400/20 hover:text-blue-200 bg-transparent backdrop-blur-sm shadow-lg hover:shadow-blue-400/30 transition-all duration-500 hover:scale-110 hover:-rotate-3 drop-shadow-[0_0_10px_rgba(6,182,212,0.2)]"
              >
                <LinkedinIcon />
                LinkedIn
              </Button>
            </div>

            {/* Instagram Button - Floating top left */}
            <div className="animate-float-gentle">
              <Button
                variant="outline"
                size="lg"
                className="border-pink-400 text-pink-300 hover:bg-pink-400/20 hover:text-pink-200 bg-transparent backdrop-blur-sm shadow-lg hover:shadow-pink-400/30 transition-all duration-500 hover:scale-110 hover:rotate-2 drop-shadow-[0_0_10px_rgba(236,72,153,0.2)]"
              >
                <InstagramIcon />
                Instagram
              </Button>
            </div>

            {/* Floating particles around buttons */}
            <div className="absolute -top-4 left-20 w-2 h-2 bg-purple-400 rounded-full animate-float-particle opacity-60"></div>
            <div className="absolute top-4 left-64 w-1 h-1 bg-blue-400 rounded-full animate-float-particle-slow opacity-70" style={{animationDelay: "1s"}}></div>
            <div className="absolute top-12 -left-6 w-1.5 h-1.5 bg-violet-400 rounded-full animate-float-particle-fast opacity-50" style={{animationDelay: "3s"}}></div>
            <div className="absolute top-24 left-50 w-1 h-1 bg-pink-400 rounded-full animate-float-particle opacity-60" style={{animationDelay: "2s"}}></div>
          </div>

        </div>

        {/* Right column - Photo with enhanced floating */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative animate-float-gentle-slow">
            {/* Enhanced Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-3xl opacity-40 animate-pulse-glow"></div>

            {/* Photo container with floating effect */}
            <div className="relative w-80 h-96 bg-gradient-to-br from-purple-900/60 to-blue-900/60 rounded-2xl border border-purple-400/40 backdrop-blur-sm overflow-hidden shadow-2xl">
              {/* Placeholder for photo */}
              <div className="absolute inset-4 bg-gradient-to-br from-purple-800/40 to-blue-800/40 rounded-xl border border-purple-400/30 flex items-center justify-center">
                <div className="text-center text-purple-300">
                   <Image src={avatar} alt="Satrio Wicaksono" width={250} height={250} className="" />
                </div>
              </div>

              {/* Enhanced Decorative floating elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full animate-float-particle"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-float-particle-slow" style={{ animationDelay: "1s" }}></div>
              <div className="absolute top-1/2 left-2 w-1 h-1 bg-violet-300 rounded-full animate-float-particle-fast" style={{ animationDelay: "2s" }}></div>
              <div className="absolute bottom-12 right-6 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float-particle" style={{ animationDelay: "0.5s" }}></div>
            </div>

            {/* Floating light particles around photo */}
            <div className="absolute -top-4 -left-4 w-2 h-2 bg-white rounded-full animate-twinkle opacity-80"></div>
            <div className="absolute -bottom-2 -right-2 w-1 h-1 bg-purple-300 rounded-full animate-twinkle" style={{animationDelay: "1.5s"}}></div>
            <div className="absolute top-1/3 -right-6 w-1.5 h-1.5 bg-blue-300 rounded-full animate-twinkle" style={{animationDelay: "2.5s"}}></div>
          </div>
        </div>
      </div>
    </section>
  )
}