import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 bg-white">
      {/* Main heading */}
      <h1
        className="text-5xl sm:text-6xl md:text-8xl text-center leading-tight mb-6 text-gray-900"
        style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >
        Where Every Day
        <br />
        Is a Celebration
      </h1>

      {/* Description */}
      <p
        className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 text-center max-w-2xl px-4"
        style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >
        From Dashain reunions to Tihar&apos;s festival of lights — dates,
        stories, photos, and guides for every celebration across Nepal.
      </p>

      {/* Decorative line */}
      <div className="flex items-center gap-4 mb-10">
        <span className="w-16 h-px bg-gray-300" />
        <span className="text-gray-400 text-xs tracking-[0.5em] uppercase">
          Celebrate &bull; Preserve &bull; Share
        </span>
        <span className="w-16 h-px bg-gray-300" />
      </div>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/festivals"
          className="group px-8 py-4 rounded-full font-bold text-base tracking-wider uppercase transition-all duration-300 hover:scale-105 flex items-center gap-3"
          style={{
            background: "#111827",
            color: "#ffffff",
            boxShadow: "0 4px 20px rgba(17,24,39,0.25)",
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
            background: "#ffffff",
            border: "1px solid #D1D5DB",
            color: "#374151",
          }}
        >
          About Nepal
        </Link>
      </div>
    </section>
  );
}
