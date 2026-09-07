import { useState } from "react";
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
        <span className="text-xs text-orange-400/50 tracking-[0.5em] uppercase block mb-3">
          Get in Touch
        </span>
        <h1
          className="text-4xl md:text-6xl font-black mb-4"
          style={{
            background: "linear-gradient(135deg, #FF6B35, #F7931E, #FFD700)",
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
                  background: "linear-gradient(135deg, rgba(255,107,53,0.06), rgba(247,147,30,0.02))",
                  border: "1px solid rgba(255,107,53,0.1)",
                }}
              >
                <span className="inline-flex items-center text-2xl mb-3"><Emoji char={item.icon} size="1.3rem" /></span>
                <h4 className="text-sm font-bold text-orange-300 mb-0.5">{item.title}</h4>
                <p className="text-sm text-orange-200/80 font-medium">{item.value}</p>
                <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
              </div>
            ))}

            {/* Social links */}
            <div className="p-5 rounded-xl" style={{ border: "1px solid rgba(255,107,53,0.1)" }}>
              <h4 className="text-sm font-bold text-orange-300 mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {["Facebook", "Instagram", "YouTube", "Twitter"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-3 py-1.5 rounded-full text-xs text-gray-500 hover:text-orange-300 bg-gray-900/50 border border-orange-500/10 transition-all duration-300 hover:border-orange-500/30"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div
                className="p-10 rounded-2xl text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(255,107,53,0.06), rgba(247,147,30,0.02))",
                  border: "1px solid rgba(255,107,53,0.12)",
                }}
              >
                <span className="inline-flex items-center justify-center text-5xl mb-4"><Emoji char="🙏" size="2.5rem" /></span>
                <h3 className="text-2xl font-bold mb-2" style={{
                  background: "linear-gradient(135deg, #FF6B35, #FFD700)",
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
                    background: "rgba(255,107,53,0.1)",
                    border: "1px solid rgba(255,107,53,0.25)",
                    color: "#FFD700",
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
                  background: "linear-gradient(135deg, rgba(255,107,53,0.06), rgba(247,147,30,0.02))",
                  border: "1px solid rgba(255,107,53,0.12)",
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-orange-400/60 tracking-wider uppercase mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl text-sm bg-gray-900/60 border border-orange-500/15 text-orange-100 placeholder-gray-600 focus:outline-none focus:border-orange-500/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-orange-400/60 tracking-wider uppercase mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl text-sm bg-gray-900/60 border border-orange-500/15 text-orange-100 placeholder-gray-600 focus:outline-none focus:border-orange-500/40 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-orange-400/60 tracking-wider uppercase mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="What is this about?"
                    className="w-full px-4 py-3 rounded-xl text-sm bg-gray-900/60 border border-orange-500/15 text-orange-100 placeholder-gray-600 focus:outline-none focus:border-orange-500/40 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-orange-400/60 tracking-wider uppercase mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your inquiry..."
                    className="w-full px-4 py-3 rounded-xl text-sm bg-gray-900/60 border border-orange-500/15 text-orange-100 placeholder-gray-600 focus:outline-none focus:border-orange-500/40 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: "linear-gradient(135deg, #FF6B35, #F7931E)",
                    color: "#0a0a0a",
                    boxShadow: "0 0 25px rgba(255,107,53,0.3)",
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
