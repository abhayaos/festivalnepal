import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import FestivalCard from "../components/FestivalCard";
import CountdownTimer from "../components/CountdownTimer";
import Emoji from "../components/Emoji";

const festivals = [
  {
    name: "Dashain",
    emoji: "🌺",
    date: "Oct 11 - Oct 26, 2026",
    description: "Nepal's grandest festival celebrating the triumph of good over evil. Families reunite for tika, jamara, and kite flying across the nation.",
    color: "#111827",
    link: "/festivals",
  },
  {
    name: "Tihar",
    emoji: "🕯️",
    date: "Nov 8 - Nov 12, 2026",
    description: "The festival of lights honoring crows, dogs, cows, and the goddess Lakshmi. Homes glow with diyas and colorful rangoli.",
    color: "#374151",
    link: "/festivals",
  },
  {
    name: "Holi",
    emoji: "🎨",
    date: "March 2027",
    description: "The vibrant festival of colors where Nepal erupts in joyous celebration with gulal, water balloons, and unity.",
    color: "#111827",
    link: "/festivals",
  },
  {
    name: "Chhath Puja",
    emoji: "☀️",
    date: "Oct 26 - Oct 29, 2026",
    description: "An ancient Hindu festival dedicated to the Sun God Surya with rituals performed at riverbanks during dawn and dusk.",
    color: "#374151",
    link: "/festivals",
  },
  {
    name: "Indra Jatra",
    emoji: "🎭",
    date: "Sept 2026",
    description: "The Living Goddess Kumari is paraded through Kathmandu's streets in a grand chariot procession honoring Lord Indra.",
    color: "#111827",
    link: "/festivals",
  },
  {
    name: "Bisket Jatra",
    emoji: "🏗️",
    date: "April 2027",
    description: "The New Year festival of Bhaktapur featuring a massive wooden pole tug-of-war and the raising of the bisko pole.",
    color: "#374151",
    link: "/festivals",
  },
];

const stats = [
  { value: "50+", label: "Major Festivals" },
  { value: "7", label: "Provinces United" },
  { value: "125+", label: "Ethnic Groups" },
  { value: "365", label: "Days of Celebration" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Stats bar */}
      <section className="relative py-12 border-y border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl md:text-4xl font-black mb-1"
                style={{
                  background: "linear-gradient(135deg, #111827, #374151)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Festivals */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="text-xs text-gray-500 tracking-[0.5em] uppercase block mb-3">
              Celebrations
            </span>
            <h2
              className="text-3xl md:text-5xl font-black mb-4"
              style={{
                background: "linear-gradient(135deg, #111827, #111827)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Featured Festivals
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
              Discover the vibrant tapestry of Nepali festivals that bring communities
              together in celebration of faith, family, and tradition.
            </p>
          </div>

          {/* Festival grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {festivals.map((f, i) => (
              <FestivalCard key={f.name} festival={f} index={i} />
            ))}
          </div>

          {/* View all link */}
          <div className="text-center mt-12">
            <Link
              to="/festivals"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(17,24,39,0.08)",
                border: "1px solid rgba(17,24,39,0.2)",
                color: "#374151",
              }}
            >
              View All Festivals
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Countdown section */}
      <section className="py-20 md:py-28 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs text-gray-500 tracking-[0.5em] uppercase block mb-3">
              Don't Miss Out
            </span>
            <h2
              className="text-3xl md:text-5xl font-black mb-4"
              style={{
                background: "linear-gradient(135deg, #111827, #111827)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Festival Countdowns
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
              Mark your calendars! Here are the upcoming festivals counting down in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            <CountdownTimer
              targetDate={new Date("2026-10-11T00:00:00")}
              label="Ghatasthapana"
              subtitle="Dashain Begins"
            />
            <CountdownTimer
              targetDate={new Date("2026-10-21T00:00:00")}
              label="Vijaya Dashami"
              subtitle="Tika Day"
            />
            <CountdownTimer
              targetDate={new Date("2026-11-09T00:00:00")}
              label="Deepawali"
              subtitle="Tihar"
            />
          </div>
        </div>
      </section>

      {/* Culture highlights */}
      <section className="py-20 md:py-28 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div>
              <span className="text-xs text-gray-500 tracking-[0.5em] uppercase block mb-3">
                Our Heritage
              </span>
              <h2
                className="text-3xl md:text-4xl font-black mb-6"
                style={{
                  background: "linear-gradient(135deg, #111827, #111827)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                A Land of Living Culture
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nepal is a country where ancient traditions thrive alongside modern life.
                From the misty peaks of the Himalayas to the fertile plains of Terai, every
                corner of this nation pulses with cultural energy. Festivals here are not just
                events — they are the heartbeat of the people.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                With over 125 ethnic groups, each bringing their own unique celebrations, Nepal
                offers a year-round calendar of festivals that honor gods, nature, seasons,
                and the eternal bonds of family and community.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #111827, #374151)",
                  color: "#ffffff",
                  boxShadow: "0 0 25px rgba(17,24,39,0.25)",
                }}
              >
                Discover Nepal
              </Link>
            </div>

            {/* Right: feature cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🏔️", title: "Himalayas", desc: "Home to 8 of the world's 14 highest peaks" },
                { icon: "⛩️", title: "Temples", desc: "Over 10,000 ancient temples and shrines" },
                { icon: "🎶", title: "Music", desc: "Rich traditions of folk and devotional music" },
                { icon: "🍛", title: "Cuisine", desc: "Unique flavors from momo to dal bhat" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, rgba(17,24,39,0.05), rgba(17,24,39,0.03))",
                    border: "1px solid rgba(17,24,39,0.08)",
                  }}
                >
                  <span className="inline-flex items-center text-3xl mb-3"><Emoji char={item.icon} size="1.6rem" /></span>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-20 md:py-28 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="inline-flex items-center text-5xl mb-6"><Emoji char="🙏" size="2.5rem" /></span>
          <h2
            className="text-3xl md:text-4xl font-black mb-4"
            style={{
              background: "linear-gradient(135deg, #111827, #111827)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Stay Connected
          </h2>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto">
            Join our community and never miss a festival. Get updates on upcoming
            celebrations, cultural insights, and travel guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3 rounded-full text-sm bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400/50 transition-colors"
            />
            <button
              className="px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #111827, #374151)",
                color: "#ffffff",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
