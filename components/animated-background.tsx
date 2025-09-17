"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient layer - much darker */}
      <div
        className="absolute inset-0 animate-gradient"
        style={{
          background: `
            linear-gradient(-45deg, 
              rgba(15, 13, 40, 0.95) 0%, 
              rgba(25, 23, 65, 0.9) 25%, 
              rgba(44, 14, 68, 0.92) 50%, 
              rgba(62, 29, 119, 0.88) 75%, 
              rgba(15, 13, 40, 0.95) 100%
            )
          `,
          backgroundSize: "400% 400%",
        }}
      />

      {/* Aurora effects - reduced opacity */}
      <div
        className="absolute inset-0 animate-aurora-flow mix-blend-screen"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(236, 72, 153, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(6, 182, 212, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 80%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)
          `
        }}
      />

      <div
        className="absolute inset-0 animate-aurora-flow-reverse mix-blend-color-dodge"
        style={{
          background: `
            radial-gradient(ellipse at 60% 30%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 10% 70%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)
          `
        }}
      />

      {/* Meteors */}
      {/* {[...Array(6)].map((_, i) => (
        <div
          key={`meteor-${i}`}
          className="absolute"
          style={{
            top: `${Math.random() * 50}%`,
            left: `${Math.random() * 100}%`,
            width: `${2 + Math.random() * 3}px`,
            height: `${40 + Math.random() * 60}px`,
            background: `linear-gradient(to top, 
              rgba(255, 255, 255, 0.9) 0%, 
              rgba(168, 85, 247, 0.7) 30%,
              rgba(236, 72, 153, 0.5) 60%,
              transparent 100%)`,
            borderRadius: '50px',
            transform: `rotate(${25 + Math.random() * 10}deg)`,
            opacity: 0.8,
            animation: `meteor-streak ${3 + Math.random() * 2}s linear infinite`,
            animationDelay: `${Math.random() * 8}s`,
            filter: 'blur(0.5px)',
            boxShadow: '0 0 6px rgba(255, 255, 255, 0.4), 0 0 12px rgba(168, 85, 247, 0.3)'
          }}
        > */}
          {/* Meteor tail */}
          {/* <div
            className="absolute -bottom-10 left-1/2 transform -translate-x-1/2"
            style={{
              width: '1px',
              height: '20px',
              background: 'linear-gradient(to top, transparent 0%, rgba(255, 255, 255, 0.5) 100%)',
              filter: 'blur(1px)'
            }}
          />
        </div>
      ))} */}

      {/* Comets with tails */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`comet-${i}`}
          className="absolute animate-cosmic-drift"
          style={{
            top: `${Math.random() * 60}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${20 + Math.random() * 10}s`
          }}
        >
          {/* Comet head */}
          <div
            className="w-3 h-3 rounded-full relative z-10"
            style={{
              background: `radial-gradient(circle, 
                rgba(255, 255, 255, 0.9) 0%, 
                rgba(6, 182, 212, 0.8) 40%, 
                rgba(16, 185, 129, 0.4) 100%)`,
              boxShadow: '0 0 8px rgba(255, 255, 255, 0.6), 0 0 16px rgba(6, 182, 212, 0.4)'
            }}
          />
          {/* Comet tail */}
          <div
            className="absolute top-1/2 left-full transform -translate-y-1/2 opacity-60"
            style={{
              width: `${30 + Math.random() * 50}px`,
              height: '2px',
              background: `linear-gradient(to right, 
                rgba(6, 182, 212, 0.8) 0%, 
                rgba(16, 185, 129, 0.4) 50%,
                transparent 100%)`,
              filter: 'blur(1px)'
            }}
          />
        </div>
      ))}

      {/* Asteroids */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`asteroid-${i}`}
          className={`absolute rounded-full ${i % 2 === 0 ? 'animate-planet-rotate' : 'animate-planet-rotate-reverse'}`}
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 100}%`,
            width: `${3 + Math.random() * 4}px`,
            height: `${3 + Math.random() * 4}px`,
            background: `radial-gradient(circle at 30% 30%, 
              rgba(156, 163, 175, 0.8) 0%, 
              rgba(75, 85, 99, 0.6) 60%, 
              rgba(31, 41, 55, 0.4) 100%)`,
            boxShadow: 'inset -1px -1px 2px rgba(0, 0, 0, 0.3)',
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        />
      ))}

      {/* Planets */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`planet-${i}`}
          className={`absolute rounded-full ${i % 3 === 0 ? 'animate-planet-float' : i % 3 === 1 ? 'animate-planet-float-slow' : 'animate-planet-float-medium'}`}
          style={{
            top: `${Math.random() * 70}%`,
            left: `${Math.random() * 100}%`,
            width: `${6 + Math.random() * 42}px`, // 6px to 48px (3rem)
            height: `${6 + Math.random() * 42}px`, // 6px to 48px (3rem)
            background: [
              `radial-gradient(circle at 35% 35%, rgba(239, 68, 68, 0.7) 0%, rgba(153, 27, 27, 0.5) 100%)`,
              `radial-gradient(circle at 35% 35%, rgba(34, 197, 94, 0.7) 0%, rgba(21, 128, 61, 0.5) 100%)`,
              `radial-gradient(circle at 35% 35%, rgba(59, 130, 246, 0.7) 0%, rgba(30, 64, 175, 0.5) 100%)`,
              `radial-gradient(circle at 35% 35%, rgba(245, 158, 11, 0.7) 0%, rgba(180, 83, 9, 0.5) 100%)`,
              `radial-gradient(circle at 35% 35%, rgba(168, 85, 247, 0.7) 0%, rgba(88, 28, 135, 0.5) 100%)`,
              `radial-gradient(circle at 35% 35%, rgba(236, 72, 153, 0.7) 0%, rgba(157, 23, 77, 0.5) 100%)`,
              `radial-gradient(circle at 35% 35%, rgba(6, 182, 212, 0.7) 0%, rgba(8, 145, 178, 0.5) 100%)`,
              `radial-gradient(circle at 35% 35%, rgba(16, 185, 129, 0.7) 0%, rgba(5, 150, 105, 0.5) 100%)`,
              `radial-gradient(circle at 35% 35%, rgba(251, 113, 133, 0.7) 0%, rgba(190, 24, 93, 0.5) 100%)`,
              `radial-gradient(circle at 35% 35%, rgba(124, 58, 237, 0.7) 0%, rgba(76, 29, 149, 0.5) 100%)`,
              `radial-gradient(circle at 35% 35%, rgba(34, 211, 238, 0.7) 0%, rgba(14, 116, 144, 0.5) 100%)`,
              `radial-gradient(circle at 35% 35%, rgba(250, 204, 21, 0.7) 0%, rgba(161, 98, 7, 0.5) 100%)`
            ][i % 12],
            boxShadow: `
              0 0 ${Math.min(20, 6 + (42 * Math.random() / 4))}px rgba(168, 85, 247, 0.3),
              inset -2px -2px 4px rgba(0, 0, 0, 0.4),
              inset 1px 1px 2px rgba(255, 255, 255, 0.2)
            `,
            animationDelay: `${Math.random() * 15}s`
          }}
        />
      ))}

      {/* Cosmic dust particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`dust-${i}`}
          className={`absolute rounded-full ${
            i % 3 === 0 ? 'animate-float-particle' : 
            i % 3 === 1 ? 'animate-float-particle-slow' : 'animate-float-particle-fast'
          }`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${0.5 + Math.random()}px`,
            height: `${0.5 + Math.random()}px`,
            background: `rgba(${200 + Math.random() * 55}, ${200 + Math.random() * 55}, ${200 + Math.random() * 55}, 0.6)`,
            animationDelay: `${Math.random() * 6}s`,
            filter: 'blur(0.5px)'
          }}
        />
      ))}

      {/* Nebula clouds */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`nebula-${i}`}
          className="absolute rounded-full animate-nebula-flow"
          style={{
            top: `${Math.random() * 60}%`,
            left: `${Math.random() * 80}%`,
            width: `${150 + Math.random() * 200}px`,
            height: `${150 + Math.random() * 200}px`,
            background: [
              `radial-gradient(ellipse, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.05) 40%, transparent 70%)`,
              `radial-gradient(ellipse, rgba(6, 182, 212, 0.1) 0%, rgba(16, 185, 129, 0.05) 40%, transparent 70%)`,
              `radial-gradient(ellipse, rgba(245, 158, 11, 0.1) 0%, rgba(234, 88, 12, 0.05) 40%, transparent 70%)`
            ][i],
            filter: 'blur(3px)',
            animationDelay: `${Math.random() * 20}s`,
            mixBlendMode: 'screen'
          }}
        />
      ))}

      {/* Floating orbs - reduced opacity and size */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-3xl ${
            i % 3 === 0 ? "animate-float-slow" : i % 3 === 1 ? "animate-float-medium" : "animate-float-fast"
          }`}
          style={{
            width: `${100 + Math.random() * 150}px`,
            height: `${100 + Math.random() * 150}px`,
            background: [
              "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(236, 72, 153, 0.15) 50%, transparent 100%)",
              "radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, rgba(16, 185, 129, 0.15) 50%, transparent 100%)",
              "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(168, 85, 247, 0.15) 50%, transparent 100%)",
              "radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, rgba(6, 182, 212, 0.15) 50%, transparent 100%)",
              "radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, rgba(234, 88, 12, 0.15) 50%, transparent 100%)",
              "radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, rgba(79, 70, 229, 0.15) 50%, transparent 100%)",
              "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.15) 50%, transparent 100%)",
              "radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, rgba(168, 85, 247, 0.15) 50%, transparent 100%)",
            ][i],
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}

      {/* Stars - reduced opacity and glow */}
      {[...Array(30)].map((_, i) => (
        <div
          key={`star-${i}`}
          className={`absolute w-1 h-1 bg-white rounded-full opacity-70 ${
            i % 4 === 0
              ? "animate-twinkle-slow"
              : i % 4 === 1
                ? "animate-twinkle-medium"
                : i % 4 === 2
                  ? "animate-twinkle-fast"
                  : "animate-twinkle"
          }`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            boxShadow: "0 0 4px rgba(255, 255, 255, 0.5), 0 0 8px rgba(168, 85, 247, 0.3)",
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Shooting stars */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`shooting-star-${i}`}
          className="absolute"
          style={{
            top: `${Math.random() * 50}%`,
            left: `${-10 + Math.random() * 20}%`,
            width: '2px',
            height: '2px',
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '50%',
            boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)',
            animation: `shooting-star ${2 + Math.random() * 2}s linear infinite`,
            animationDelay: `${Math.random() * 15}s`,
          }}
        >
          <div
            className="absolute mt-96 right-full transform -translate-y-1/2"
            style={{
              width: `${30 + Math.random() * 30}px`,
              height: '1px',
              background: 'linear-gradient(to left, rgba(255, 255, 255, 0.8) 0%, transparent 100%)',
              filter: 'blur(0.5px)'
            }}
          />
        </div>
      ))}

      {/* Space Ships */}
      {[...Array(2)].map((_, i) => (
        <div
          key={`spaceship-${i}`}
          className={`absolute animate-float-gentle`}
          style={{
            top: `${Math.random() * 60}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
            transform: `rotate(${-10 + Math.random() * 20}deg)`
          }}
        >
          {/* Spaceship body */}
          <div
            className="relative"
            style={{
              width: `${12 + Math.random() * 20}px`,
              height: `${6 + Math.random() * 8}px`,
              background: `linear-gradient(45deg, 
                rgba(156, 163, 175, 0.9) 0%, 
                rgba(209, 213, 219, 0.8) 50%, 
                rgba(107, 114, 128, 0.7) 100%)`,
              borderRadius: '50% 10% 50% 10%',
              boxShadow: `
                0 0 8px rgba(168, 85, 247, 0.3),
                inset -1px -1px 2px rgba(0, 0, 0, 0.3),
                inset 1px 1px 1px rgba(255, 255, 255, 0.2)
              `
            }}
          >
            {/* Cockpit */}
            <div
              className="absolute top-1/2 left-1/4 transform -translate-y-1/2"
              style={{
                width: '40%',
                height: '60%',
                background: 'rgba(59, 130, 246, 0.6)',
                borderRadius: '50%',
                boxShadow: 'inset 0 0 4px rgba(29, 78, 216, 0.8)'
              }}
            />
            
            {/* Engine glow */}
            <div
              className="absolute top-1/2 -right-2 transform -translate-y-1/2"
              style={{
                width: '8px',
                height: '3px',
                background: 'linear-gradient(to left, rgba(239, 68, 68, 0.8) 0%, rgba(245, 158, 11, 0.6) 50%, transparent 100%)',
                borderRadius: '50%',
                filter: 'blur(1px)',
                boxShadow: '0 0 6px rgba(239, 68, 68, 0.6)'
              }}
            />
            
            {/* Wings */}
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                width: '3px',
                height: '8px',
                background: 'rgba(107, 114, 128, 0.7)',
                borderRadius: '2px'
              }}
            />
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
              style={{
                width: '3px',
                height: '8px',
                background: 'rgba(107, 114, 128, 0.7)',
                borderRadius: '2px'
              }}
            />
          </div>
        </div>
      ))}

      {/* UFO/Saucers */}
      {[...Array(2)].map((_, i) => (
        <div
          key={`ufo-${i}`}
          className="absolute animate-float-gentle"
          style={{
            top: `${Math.random() * 40}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}
        >
          {/* UFO body */}
          <div
            className="relative"
            style={{
              width: `${16 + Math.random() * 12}px`,
              height: `${8 + Math.random() * 4}px`,
              background: `radial-gradient(ellipse, 
                rgba(156, 163, 175, 0.9) 0%, 
                rgba(75, 85, 99, 0.8) 70%, 
                rgba(31, 41, 55, 0.6) 100%)`,
              borderRadius: '50%',
              boxShadow: `
                0 0 12px rgba(6, 182, 212, 0.4),
                inset 0 -2px 4px rgba(0, 0, 0, 0.3),
                inset 0 2px 2px rgba(255, 255, 255, 0.2)
              `
            }}
          >
            {/* UFO dome */}
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3"
              style={{
                width: '60%',
                height: '8px',
                background: 'rgba(6, 182, 212, 0.6)',
                borderRadius: '50%',
                boxShadow: 'inset 0 0 4px rgba(8, 145, 178, 0.8)'
              }}
            />
            
            {/* UFO lights */}
            <div
              className="absolute top-1/2 left-2 transform -translate-y-1/2"
              style={{
                width: '2px',
                height: '2px',
                background: 'rgba(34, 197, 94, 0.9)',
                borderRadius: '50%',
                boxShadow: '0 0 4px rgba(34, 197, 94, 0.6)'
              }}
            />
            <div
              className="absolute top-1/2 right-2 transform -translate-y-1/2"
              style={{
                width: '2px',
                height: '2px',
                background: 'rgba(239, 68, 68, 0.9)',
                borderRadius: '50%',
                boxShadow: '0 0 4px rgba(239, 68, 68, 0.6)'
              }}
            />
          </div>
        </div>
      ))}

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />

      <style jsx>{`
        @keyframes meteor-streak {
          0% {
            transform: translateY(-100vh) translateX(-50px) rotate(25deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(50px) rotate(25deg);
            opacity: 0;
          }
        }

        @keyframes shooting-star {
          0% {
            transform: translateX(-100px) translateY(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100vw) translateY(-200px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}