import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Emoji from "./Emoji";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/festivals", label: "Festivals" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gray-950/90 backdrop-blur-xl shadow-lg shadow-orange-500/5 border-b border-orange-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <span className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300 inline-flex items-center">
              <Emoji char="🕯️" size="1.1em" />
            </span>
            <div className="flex flex-col">
              <span
                className="text-lg md:text-xl font-black tracking-tight leading-none"
                style={{
                  background: "linear-gradient(135deg, #FF6B35, #F7931E, #FFD700)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Festival Nepal
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-orange-400/50 leading-none mt-0.5">
                Divine Celebrations
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wider uppercase transition-all duration-300 rounded-lg ${
                    active
                      ? "text-orange-400"
                      : "text-gray-400 hover:text-orange-300"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA button */}
          <Link
            to="/festivals"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #FF6B35, #F7931E)",
              color: "#0a0a0a",
              boxShadow: "0 0 20px rgba(255,107,53,0.3)",
            }}
          >
            <span>Explore</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-orange-400 transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-orange-400 transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-orange-400 transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-950/95 backdrop-blur-xl border-t border-orange-500/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMobile}
                className={`block px-4 py-3 rounded-lg text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                  active
                    ? "text-orange-400 bg-orange-500/10"
                    : "text-gray-400 hover:text-orange-300 hover:bg-orange-500/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/festivals"
            onClick={closeMobile}
            className="block px-4 py-3 mt-2 rounded-full text-sm font-bold tracking-wider uppercase text-center transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #FF6B35, #F7931E)",
              color: "#0a0a0a",
            }}
          >
            Explore Festivals
          </Link>
        </div>
      </div>
    </nav>
  );
}
