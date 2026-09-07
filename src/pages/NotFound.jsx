import { Link } from "react-router-dom";
import Emoji from "../components/Emoji";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background mandala */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] pointer-events-none">
        <svg className="w-[600px] h-[600px] animate-spin-slow" viewBox="0 0 200 200">
          <defs>
            <linearGradient id="nf-saffron" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B35" />
              <stop offset="50%" stopColor="#F7931E" />
              <stop offset="100%" stopColor="#FFD700" />
            </linearGradient>
          </defs>
          {[90, 70, 50, 30].map((r, i) => (
            <circle key={i} cx="100" cy="100" r={r} fill="none" stroke="url(#nf-saffron)" strokeWidth="0.5" />
          ))}
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="100" y1="10"
              x2="100" y2="190"
              stroke="url(#nf-saffron)"
              strokeWidth="0.3"
              transform={`rotate(${i * 30} 100 100)`}
            />
          ))}
        </svg>
      </div>

      {/* Om */}
      <div className="text-6xl md:text-8xl mb-4 animate-pulse-slow pointer-events-none select-none" style={{ color: "#FF6B35", textShadow: "0 0 40px rgba(255,107,53,0.4)" }}>
        ॐ
      </div>

      {/* 404 */}
      <h1
        className="text-8xl md:text-9xl font-black mb-4 pointer-events-none select-none"
        style={{
          background: "linear-gradient(135deg, #FF6B35, #F7931E, #FFD700)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        404
      </h1>

      {/* Message */}
      <p className="text-xl md:text-2xl text-orange-200/60 mb-2 tracking-wider text-center">
        This path does not exist
      </p>
      <p className="text-sm text-gray-600 mb-10 tracking-widest uppercase text-center">
        Even the gods cannot find this page
      </p>

      {/* CTA */}
      <Link
        to="/"
        className="px-8 py-4 rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105"
        style={{
          background: "linear-gradient(135deg, #FF6B35, #F7931E)",
          color: "#0a0a0a",
          boxShadow: "0 0 30px rgba(255,107,53,0.35)",
        }}
      >
        Return Home
      </Link>

      {/* Lotus */}
      <div className="mt-10 text-3xl opacity-50 animate-float pointer-events-none inline-flex items-center" style={{ animationDelay: "3s" }}>
        <Emoji char="🌺" size="1.6rem" />
      </div>
    </div>
  );
}
