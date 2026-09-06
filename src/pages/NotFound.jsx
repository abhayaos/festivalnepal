import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background mandala */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <svg className="w-[800px] h-[800px] animate-spin-slow" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="url(#saffron)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="url(#saffron)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="url(#saffron)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="30" fill="none" stroke="url(#saffron)" strokeWidth="0.5" />
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="100" y1="10"
              x2="100" y2="190"
              stroke="url(#saffron)"
              strokeWidth="0.3"
              transform={`rotate(${i * 30} 100 100)`}
            />
          ))}
          <defs>
            <linearGradient id="saffron" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B35" />
              <stop offset="50%" stopColor="#F7931E" />
              <stop offset="100%" stopColor="#FFD700" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-orange-500 rounded-full animate-float opacity-60 pointer-events-none" />
      <div className="absolute top-40 right-32 w-3 h-3 bg-yellow-500 rounded-full animate-float opacity-40 pointer-events-none" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 left-40 w-2 h-2 bg-amber-400 rounded-full animate-float opacity-50 pointer-events-none" style={{ animationDelay: "2s" }} />

      {/* Om */}
      <div className="text-6xl mb-4 animate-pulse-slow pointer-events-none" style={{ color: "#FF6B35", textShadow: "0 0 40px rgba(255,107,53,0.5)" }}>
        ॐ
      </div>

      {/* 404 */}
      <h1
        className="text-8xl md:text-9xl font-black mb-4 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, #FF6B35, #F7931E, #FFD700)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        404
      </h1>

      {/* Message */}
      <p className="text-xl text-orange-200/70 mb-2 tracking-wider text-center">
        This path does not exist
      </p>
      <p className="text-sm text-gray-500 mb-10 tracking-widest uppercase">
        Even the gods cannot find this page
      </p>

      {/* Back button */}
      <Link
        to="/"
        className="px-8 py-4 rounded-full font-bold text-lg tracking-wider uppercase transition-all duration-300 hover:scale-105"
        style={{
          background: "linear-gradient(135deg, #FF6B35, #F7931E)",
          color: "#0a0a0a",
          boxShadow: "0 0 30px rgba(255,107,53,0.4)",
        }}
      >
        ← Return Home
      </Link>

      {/* Lotus */}
      <div className="mt-12 text-3xl opacity-60 animate-float pointer-events-none" style={{ animationDelay: "3s" }}>
        🪷
      </div>
    </div>
  );
}
