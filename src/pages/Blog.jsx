import { Link } from "react-router-dom";
import Emoji from "../components/Emoji";

const posts = [
  {
    to: "/blog/nepal-history",
    emoji: "📜",
    tag: "History",
    title: "A Concise History of Nepal",
    subtitle: "From the Malla kingdoms to the federal republic",
    excerpt:
      "Five centuries of kings, movements, earthquakes, and rebuilding — and how that past shaped the festivals Nepal celebrates today.",
    gradient: "linear-gradient(135deg, #FF6B35, #F7931E, #FFD700)",
  },
  {
    to: "/blog/dashain-story",
    emoji: "🌺",
    tag: "Festivals",
    title: "Dashain: Nepal's Grandest Festival",
    subtitle: "Origins, rituals, and meaning",
    excerpt:
      "The legend of Mahishasura and Durga, the 15-day calendar, tika and jamara — everything behind Nepal's great homecoming.",
    gradient: "linear-gradient(135deg, #E91E63, #FF6B35)",
  },
  {
    to: "/blog/tihar-story",
    emoji: "🕯️",
    tag: "Festivals",
    title: "Tihar: Nepal's Festival of Lights",
    subtitle: "Five days of lamps, animals & siblings",
    excerpt:
      "Yama and Yamuna, Lakshmi Puja, Deusi-Bhailo, and the glowing nights that make Tihar the most magical week of the year.",
    gradient: "linear-gradient(135deg, #F7931E, #FFD700)",
  },
];

export default function Blog() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="text-center px-4 mb-14">
        <span className="text-xs text-orange-400/50 tracking-[0.5em] uppercase block mb-3">
          Stories & Guides
        </span>
        <h1
          className="text-4xl md:text-6xl font-black mb-4"
          style={{
            background: "linear-gradient(135deg, #FF6B35, #F7931E, #FFD700)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Blog
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
          Long-form guides to Nepal's history and festivals — researched, explained, and
          written for travelers, students, and the simply curious.
        </p>
      </section>

      {/* Blog boxes */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.to}
              to={post.to}
              className="group relative p-8 rounded-2xl flex flex-col transition-transform duration-300 hover:scale-[1.02] transform-gpu"
              style={{
                background: "linear-gradient(135deg, rgba(255,107,53,0.06), rgba(247,147,30,0.02))",
                border: "1px solid rgba(255,107,53,0.1)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 0%, rgba(255,107,53,0.1), transparent 70%)",
                  borderRadius: "1rem",
                }}
              />

              <div className="relative flex flex-col flex-1">
                <div className="flex items-start justify-between mb-6">
                  <span className="inline-flex items-center text-5xl group-hover:scale-110 transition-transform duration-300">
                    <Emoji char={post.emoji} size="2.6rem" />
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-orange-400/60 bg-orange-500/10 px-3 py-1 rounded-full">
                    {post.tag}
                  </span>
                </div>

                <h2
                  className="text-xl md:text-2xl font-bold mb-1"
                  style={{
                    background: post.gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {post.title}
                </h2>
                <p className="text-sm text-orange-300/80 font-medium mb-3">{post.subtitle}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-1">{post.excerpt}</p>

                <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-orange-400/80 group-hover:text-orange-300 transition-colors duration-300">
                  Read article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* More CTA */}
      <section className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-500 leading-relaxed mb-6">
          Ready to see it in person? Browse all festivals or explore the photo gallery.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/festivals"
            className="px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-transform duration-300 hover:scale-105 transform-gpu"
            style={{
              background: "linear-gradient(135deg, #FF6B35, #F7931E)",
              color: "#0a0a0a",
              boxShadow: "0 0 25px rgba(255,107,53,0.3)",
            }}
          >
            <Emoji char="🏮" size="1em" /> Festivals
          </Link>
          <Link
            to="/gallery"
            className="px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-transform duration-300 hover:scale-105 transform-gpu"
            style={{
              background: "rgba(255,107,53,0.1)",
              border: "1px solid rgba(255,107,53,0.25)",
              color: "#FFD700",
            }}
          >
            <Emoji char="🖼️" size="1em" /> Gallery
          </Link>
        </div>
      </section>
    </div>
  );
}