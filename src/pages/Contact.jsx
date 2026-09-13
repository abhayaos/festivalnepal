import { useState } from "react";
import { Link } from "react-router-dom";
import Emoji from "../components/Emoji";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="text-center px-4 mb-16">
        <span className="text-xs text-gray-500 tracking-[0.5em] uppercase block mb-3">
          Get in Touch
        </span>
        <h1
          className="text-4xl md:text-6xl font-black mb-4"
          style={{
            background: "linear-gradient(135deg, #111827, #111827)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Contact Us
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
          Have questions about festivals in Nepal? Want to collaborate or share your festival
          experience? We'd love to hear from you.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            {[
              { icon: "📧", title: "Email", value: "hello@festivalnepal.com", desc: "We reply within 24 hours" },
              { icon: "📍", title: "Location", value: "Kathmandu, Nepal", desc: "Heart of the Himalayas" },
              { icon: "🕐", title: "Response Time", value: "1-2 Business Days", desc: "Nepal Time (UTC +5:45)" },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, rgba(17,24,39,0.05), rgba(17,24,39,0.02))",
                  border: "1px solid rgba(17,24,39,0.08)",
                }}
              >
                <span className="inline-flex items-center text-2xl mb-3"><Emoji char={item.icon} size="1.3rem" /></span>
                <h4 className="text-sm font-bold text-gray-900 mb-0.5">{item.title}</h4>
                <p className="text-sm text-gray-700 font-medium">{item.value}</p>
                <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
              </div>
            ))}

            {/* Blog link card */}
            <Link
              to="/blog"
              className="block p-5 rounded-xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, rgba(17,24,39,0.05), rgba(17,24,39,0.02))",
                border: "1px solid rgba(17,24,39,0.08)",
              }}
            >
              <span className="inline-flex items-center text-2xl mb-3"><Emoji char="📜" size="1.3rem" /></span>
              <h4 className="text-sm font-bold text-gray-900 mb-0.5">Our Blog</h4>
              <p className="text-xs text-gray-500 mt-1">Nepal's history and the stories of Dashain and Tihar — in-depth guides in English.</p>
            </Link>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div
                className="p-10 rounded-2xl text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(17,24,39,0.05), rgba(17,24,39,0.02))",
                  border: "1px solid rgba(17,24,39,0.1)",
                }}
              >
                <span className="inline-flex items-center justify-center text-5xl mb-4"><Emoji char="🙏" size="2.5rem" /></span>
                <h3 className="text-2xl font-bold mb-2" style={{
                  background: "linear-gradient(135deg, #111827, #374151)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  Dhanyabad!
                </h3>
                <p className="text-gray-500 text-sm">
                  Your message has been received. We'll get back to you soon. Namaste!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105"
                  style={{
                    background: "rgba(17,24,39,0.08)",
                    border: "1px solid rgba(17,24,39,0.2)",
                    color: "#374151",
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 md:p-10 rounded-2xl space-y-5"
                style={{
                  background: "linear-gradient(135deg, rgba(17,24,39,0.05), rgba(17,24,39,0.02))",
                  border: "1px solid rgba(17,24,39,0.1)",
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-gray-500 tracking-wider uppercase mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl text-sm bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 tracking-wider uppercase mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl text-sm bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400/40 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 tracking-wider uppercase mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="What is this about?"
                    className="w-full px-4 py-3 rounded-xl text-sm bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400/40 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 tracking-wider uppercase mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your inquiry..."
                    className="w-full px-4 py-3 rounded-xl text-sm bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400/40 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: "linear-gradient(135deg, #111827, #374151)",
                    color: "#ffffff",
                    boxShadow: "0 0 25px rgba(17,24,39,0.25)",
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Blog section */}
        <section className="mt-20">
          <div className="text-center mb-10">
            <span className="text-xs text-gray-500 tracking-[0.5em] uppercase block mb-3">
              Hamro Blog
            </span>
            <h2
              className="text-3xl md:text-4xl font-black mb-4"
              style={{
                background: "linear-gradient(135deg, #111827, #111827)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              History & Festival Stories
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
              From 500 years of Nepali history to the origins of Dashain and Tihar —
              long-form guides in plain English.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { to: "/blog/nepal-history", emoji: "📜", title: "History of Nepal", desc: "From the Malla kingdoms to the federal republic — 500 years that shaped today's festivals." },
              { to: "/blog/dashain-story", emoji: "🌺", title: "Dashain Story", desc: "The legend of Durga and Mahishasura, the 15-day calendar, tika, and jamara." },
              { to: "/blog/tihar-story", emoji: "🕯️", title: "Tihar Story", desc: "Yama and Yamuna, Lakshmi Puja, and five glowing days of lights." },
            ].map((post) => (
              <Link
                key={post.title}
                to={post.to}
                className="p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
                style={{
                  background: "linear-gradient(135deg, rgba(17,24,39,0.05), rgba(17,24,39,0.02))",
                  border: "1px solid rgba(17,24,39,0.08)",
                }}
              >
                <span className="inline-flex items-center text-3xl mb-3"><Emoji char={post.emoji} size="1.6rem" /></span>
                <h4 className="text-sm font-bold text-gray-900 mb-1.5">{post.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{post.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
