import { Link } from "react-router-dom";
import Emoji from "./Emoji";

export default function FestivalCard({ festival, index = 0 }) {
  const { name, emoji, date, description, color, link } = festival;

  return (
    <div
      className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 cursor-pointer bg-white shadow-sm hover:shadow-md"
      style={{
        border: "1px solid #E5E7EB",
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(17,24,39,0.05), transparent 70%)",
        }}
      />

      <div className="relative p-6 md:p-8">
        {/* Emoji + date */}
        <div className="flex items-start justify-between mb-4">
          <span className="inline-flex items-center text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300">
            <Emoji char={emoji} size="2.5rem" />
          </span>
          <span className="text-xs text-gray-900 tracking-wider uppercase bg-gray-100 border border-gray-200 px-3 py-1 rounded-full">
            {date}
          </span>
        </div>

        {/* Name */}
        <h3
          className="text-xl md:text-2xl font-bold mb-2 transition-colors duration-300"
          style={{
            background: `linear-gradient(135deg, ${color || "#111827"}, #374151)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        {/* Link */}
        {link && (
          <Link
            to={link}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-500 transition-colors duration-300 group/link"
          >
            <span>Learn more</span>
            <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        )}
      </div>

      {/* Bottom gradient line */}
      <div
        className="h-0.5 w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        style={{
          background: `linear-gradient(90deg, ${color || "#111827"}, #374151)`,
        }}
      />
    </div>
  );
}
