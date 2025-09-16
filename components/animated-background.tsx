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

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
    </div>
  )
}