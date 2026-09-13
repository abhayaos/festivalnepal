import { Link } from "react-router-dom";
import Emoji from "../components/Emoji";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 md:items-stretch">
          {/* Big 404 */}
          <div
            className="text-[6rem] md:text-[10rem] leading-none font-black tracking-tight"
            style={{
              background: "linear-gradient(135deg, #111827, #111827)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            404
          </div>

          {/* Divider */}
          <div className="h-px w-28 md:w-px md:h-28 bg-gray-300" />

          {/* Message */}
          <div className="text-center md:text-left flex flex-col justify-center max-w-sm">
            <span className="text-xs tracking-[0.5em] uppercase text-gray-500 block mb-3">
              Uppsss... <Emoji char="🪔" size="1em" />
            </span>
            <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 tracking-tight">
              Page Not Found
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Yo page chhaina ya khelkuwa... bhramit bhayeko chha. Ghar pharkera hamro
              chhadparba ra katha padhnus!
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #111827, #374151)",
                  color: "#ffffff",
                  boxShadow: "0 0 25px rgba(17,24,39,0.25)",
                }}
              >
                Go Home
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M5 10v10h5v-6h4v6h5V10" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}