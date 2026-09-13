import { Link } from "react-router-dom";
import Emoji from "./Emoji";

const footerLinks = {
  Festivals: [
    { label: "Dashain", to: "/festivals" },
    { label: "Tihar", to: "/festivals" },
  ],
  Explore: [
    { label: "Gallery", to: "/gallery" },
    { label: "Blog", to: "/blog" },
    { label: "About Nepal", to: "/about" },
    { label: "Contact", to: "/contact" },
  ],
  Blog: [
    { label: "History of Nepal", to: "/blog/nepal-history" },
    { label: "Dashain Story", to: "/blog/dashain-story" },
    { label: "Tihar Story", to: "/blog/tihar-story" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-200 bg-gray-50">
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <span className="text-3xl inline-flex items-center"><Emoji char="🕯️" size="1em" /></span>
              <span
                className="text-xl font-black tracking-tight"
                style={{
                  background: "linear-gradient(135deg, #111827, #374151)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Festival Nepal
              </span>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Celebrating the rich tapestry of Nepali festivals, traditions, and
              cultural heritage. Experience the divine energy of Himalayan celebrations.
            </p>
            <div className="flex items-center gap-2 text-2xl opacity-70">
              <span className="inline-flex items-center"><Emoji char="🙏" size="1.1em" /></span>
              <span className="text-xs text-gray-500 tracking-widest uppercase mt-1">
                Namaste
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold tracking-widest uppercase text-gray-800 mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.to ? (
                      <Link
                        to={link.to}
                        className="text-sm text-gray-600 hover:text-gray-500 transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 hover:text-gray-500 transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 tracking-wider">
            &copy; {new Date().getFullYear()} Festival Nepal. Made with <Emoji char="🧡" size="0.9em" /> in Nepal.
          </p>
          <p className="text-xs text-gray-500 tracking-widest uppercase">
            Made by Abhaya Bikram Shahi
          </p>
        </div>
      </div>
    </footer>
  );
}
