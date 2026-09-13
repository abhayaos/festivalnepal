import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Animated mandala background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] pointer-events-none">
        <svg className="w-[900px] h-[900px] animate-spin-slow will-change-transform" viewBox="0 0 200 200">
          <defs>
            <linearGradient id="hero-saffron" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B35" />
              <stop offset="50%" stopColor="#F7931E" />
              <stop offset="100%" stopColor="#FFD700" />
            </linearGradient>
          </defs>
          {[90, 80, 70, 60, 50, 40, 30, 20].map((r, i) => (
            <circle key={i} cx="100" cy="100" r={r} fill="none" stroke="url(#hero-saffron)" strokeWidth="0.3" />
          ))}
          {[...Array(24)].map((_, i) => (
            <line
              key={i}
              x1="100" y1="10"
              x2="100" y2="190"
              stroke="url(#hero-saffron)"
              strokeWidth="0.2"
              transform={`rotate(${i * 15} 100 100)`}
            />
          ))}
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const cx = 100 + 55 * Math.cos(angle);
            const cy = 100 + 55 * Math.sin(angle);
            return <circle key={`dot-${i}`} cx={cx} cy={cy} r="1.5" fill="url(#hero-saffron)" opacity="0.5" />;
          })}
        </svg>
      </div>

      {/* Floating particles */}
      {[
        { top: "15%", left: "10%", size: 2, delay: "0s" },
        { top: "25%", right: "15%", size: 3, delay: "1s" },
        { bottom: "30%", left: "20%", size: 2, delay: "2s" },
        { top: "60%", right: "25%", size: 4, delay: "0.5s" },
        { top: "40%", left: "30%", size: 2, delay: "1.5s" },
        { bottom: "20%", right: "10%", size: 3, delay: "2.5s" },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float pointer-events-none"
          style={{
            top: p.top, bottom: p.bottom, left: p.left, right: p.right,
            width: p.size, height: p.size,
            background: i % 2 === 0 ? "#FF6B35" : "#FFD700",
            opacity: 0.4,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* Glowing orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none animate-pulse-slow"
        style={{
          background: "radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Main heading */}
      <h1
        className="text-5xl sm:text-6xl md:text-8xl font-black text-center leading-none mb-4 animate-glow"
        style={{
          background: "linear-gradient(135deg, #FF6B35 0%, #F7931E 30%, #FFD700 60%, #FF6B35 100%)",
          backgroundSize: "200% 200%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "glow 3s ease-in-out infinite",
        }}
      >
        Festival Nepal
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl md:text-2xl text-orange-200/60 mb-4 tracking-[0.2em] uppercase font-light">
        Divine Energy of the Himalayas
      </p>

      {/* Decorative line */}
      <div className="flex items-center gap-4 mb-10">
        <span className="w-16 h-px bg-gradient-to-r from-transparent to-orange-500/60" />
        <span className="text-orange-500/40 text-xs tracking-[0.5em] uppercase">
          Celebrate &bull; Preserve &bull; Share
        </span>
        <span className="w-16 h-px bg-gradient-to-l from-transparent to-orange-500/60" />
      </div>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/festivals"
          className="group px-8 py-4 rounded-full font-bold text-base tracking-wider uppercase transition-all duration-300 hover:scale-105 flex items-center gap-3"
          style={{
            background: "linear-gradient(135deg, #FF6B35, #F7931E)",
            color: "#0a0a0a",
            boxShadow: "0 0 40px rgba(255,107,53,0.35)",
          }}
        >
          <span>Explore Festivals</span>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        <Link
          to="/about"
          className="px-8 py-4 rounded-full font-bold text-base tracking-wider uppercase transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          style={{
            background: "rgba(255,107,53,0.1)",
            border: "1px solid rgba(255,107,53,0.3)",
            color: "#FFD700",
          }}
        >
          About Nepal
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
        <span className="text-xs text-orange-400/60 tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 text-orange-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
