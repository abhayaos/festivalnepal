import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/festivals", label: "Festivals" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/40 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] ${
        scrolled ? "bg-white/40" : "bg-white/20"
      }`}
      style={{
        WebkitBackdropFilter: "blur(24px) saturate(1.5)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="w-3 h-3 rounded-full bg-[#FF3D2E] border-2 border-[#141414] group-hover:scale-125 transition-transform duration-300" />
            <span className="font-display text-lg md:text-xl font-bold tracking-tight leading-none text-[#141414]">
              Festival Nepal
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-200 rounded-full ${
                    active
                      ? "text-[#141414] bg-white border-2 border-[#141414]"
                      : "text-gray-500 hover:text-[#141414]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA button */}
          <Link
            to="/festivals"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105"
            style={{
              background: "#111827",
              color: "#ffffff",
              boxShadow: "0 4px 14px rgba(17,24,39,0.25)",
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
              className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
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
        <div className="bg-white/60 backdrop-blur-2xl backdrop-saturate-150 border-t border-white/40 px-4 py-4 space-y-1 shadow-xl">
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMobile}
                className={`block px-4 py-3 rounded-lg text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                  active
                    ? "text-gray-900 bg-gray-100"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
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
              background: "#111827",
              color: "#ffffff",
            }}
          >
            Explore Festivals
          </Link>
        </div>
      </div>
    </nav>
  );
}
