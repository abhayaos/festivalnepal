import { Link } from "react-router-dom";
import Emoji from "../components/Emoji";

import indusValley from "../assets/about/indus-valley.avif";
import bornOfBuddha from "../assets/about/bornofbuddha.avif";
import mallaDynasty from "../assets/about/malla-dynesty.avif";
import unification from "../assets/about/unification.avif";
import livingHeritage from "../assets/about/living-heritage.avif";

const timeline = [
  { year: "3000 BCE", title: "Indus Valley Beginnings", desc: "Ancient Vedic traditions take root in the region that would become Nepal.", img: indusValley },
  { year: "563 BCE", title: "Birth of Buddha", desc: "Siddhartha Gautama is born in Lumbini, founding Buddhism.", img: bornOfBuddha },
  { year: "12th CE", title: "Malla Dynasty", desc: "Newar culture flourishes. Major festivals like Indra Jatra and Bisket Jatra are formalized.", img: mallaDynasty },
  { year: "1768", title: "Unification", desc: "King Prithvi Narayan Shah unifies Nepal, blending diverse festival traditions.", img: unification },
  { year: "Today", title: "Living Heritage", desc: "Nepal's festivals remain vibrant, practiced across 7 provinces by 125+ ethnic groups.", img: livingHeritage },
];

export default function About() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero header */}
      <section className="text-center px-4 mb-20">
        <span className="text-xs text-gray-500 tracking-[0.5em] uppercase block mb-3">
          Our Story
        </span>
        <h1
          className="text-4xl md:text-6xl font-black mb-4"
          style={{
            background: "linear-gradient(135deg, #111827, #111827)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About Nepal
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
          A land where mountains touch the sky and traditions touch the soul. Nepal's festivals
          are windows into one of the world's oldest living cultures.
        </p>
        <p className="text-[11px] text-gray-400 tracking-[0.3em] uppercase mt-12">
          Created by
        </p>
        <p className="text-4xl md:text-6xl font-black tracking-tight uppercase mt-4 mb-6"
          style={{
            color: "transparent",
            WebkitTextStroke: "2px #111827",
          }}
        >
          Abhaya Bikram Shahi
        </p>
      </section>

      {/* Culture section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <h2
              className="text-2xl md:text-3xl font-black mb-6"
              style={{
                background: "linear-gradient(135deg, #111827, #111827)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              The Soul of a Nation
            </h2>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                Nepal sits at the crossroads of India, China, and Central Asia — a geographic
                reality that has shaped its incredible cultural diversity. From the Newar
                civilization of the Kathmandu Valley to the Tharu communities of the Terai, from
                the Sherpa people of the Everest region to the Maithili poets of the plains,
                every group brings unique festivals to the national calendar.
              </p>
              <p>
                What makes Nepali festivals extraordinary is their accessibility. These are not
                museum pieces — they are living, breathing celebrations that happen on the
                streets, in your neighbor's courtyard, at the local temple, and in the
                marketplace. Every festival has music, food, and an open invitation.
              </p>
              <p>
                The concept of "Jatra" (procession) is central to Nepali festival culture. Temples
                roll through cities on massive chariots, gods descend to walk among mortals, and
                entire communities come alive with drums, horns, and devotional songs.
              </p>
            </div>
          </div>

          {/* Feature list */}
          <div className="space-y-4">
            {[
              { icon: "🌍", title: "Geographic Diversity", desc: "From 8,848m Himalayas to 60m Terai plains — 14 ecological zones" },
              { icon: "🗣️", title: "Linguistic Richness", desc: "123 languages spoken, with Nepali, Maithili, Bhojpuri, and Newari leading" },
              { icon: "🎭", title: "Artistic Heritage", desc: "Living traditions of woodcarving, metalwork, thangka painting, and dance" },
              { icon: "🍛", title: "Culinary Traditions", desc: "From dal bhat to sel roti, every festival has its signature feast" },
              { icon: "🙏", title: "Spiritual Crossroads", desc: "Hinduism and Buddhism coexist in remarkable harmony" },
              { icon: "🎵", title: "Musical Heritage", desc: "Sarangi, madal, bansuri — instruments that tell centuries of stories" },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, rgba(17,24,39,0.05), rgba(17,24,39,0.02))",
                  border: "1px solid rgba(17,24,39,0.08)",
                }}
              >
                <span className="inline-flex items-center text-2xl shrink-0 mt-0.5"><Emoji char={item.icon} size="1.2rem" /></span>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-0.5">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-24">
        <div className="text-center mb-14">
          <h2
            className="text-2xl md:text-3xl font-black mb-3"
            style={{
              background: "linear-gradient(135deg, #111827, #111827)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Through the Ages
          </h2>
          <p className="text-gray-500 text-sm">A brief journey through Nepal's cultural heritage.</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gray-400 via-gray-300 to-transparent" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-gray-800 bg-white z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                  <span className="text-xs text-gray-500 tracking-widest uppercase">{item.year}</span>
                  <h4 className="text-base font-bold text-gray-900 mt-1">{item.title}</h4>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                </div>

                {/* Image */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}>
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{ border: "1px solid rgba(17,24,39,0.08)" }}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-48 md:h-56 object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nepal facts */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-10">
          <h2
            className="text-2xl md:text-3xl font-black mb-3"
            style={{
              background: "linear-gradient(135deg, #111827, #111827)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Nepal at a Glance
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "30M+", label: "Population" },
            { value: "147,181", label: "Area (km²)" },
            { value: "125+", label: "Ethnic Groups" },
            { value: "123", label: "Languages" },
            { value: "7", label: "Provinces" },
            { value: "8,848m", label: "Highest Peak" },
            { value: "100+", label: "Ethnic Festivals" },
            { value: "10,000+", label: "Temples" },
          ].map((fact) => (
            <div
              key={fact.label}
              className="text-center p-5 rounded-xl"
              style={{
                background: "linear-gradient(135deg, rgba(17,24,39,0.05), rgba(17,24,39,0.02))",
                border: "1px solid rgba(17,24,39,0.08)",
              }}
            >
              <div
                className="text-xl md:text-2xl font-black mb-1"
                style={{
                  background: "linear-gradient(135deg, #111827, #374151)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {fact.value}
              </div>
              <div className="text-[10px] text-gray-500 tracking-wider uppercase">{fact.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 text-center">
        <span className="inline-flex items-center justify-center text-4xl mb-4"><Emoji char="🌺" size="2rem" /></span>
        <h2 className="text-2xl md:text-3xl font-black mb-4" style={{
          background: "linear-gradient(135deg, #111827, #111827)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          Experience Nepal
        </h2>
        <p className="text-gray-500 mb-8 text-sm max-w-lg mx-auto">
          The best way to understand Nepal is to be here during a festival. The music, the colors,
          the warmth of the people — it stays with you forever.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/festivals"
            className="px-8 py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #111827, #374151)",
              color: "#ffffff",
              boxShadow: "0 0 25px rgba(17,24,39,0.25)",
            }}
          >
            View Festivals
          </Link>
          <Link
            to="/gallery"
            className="px-8 py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(17,24,39,0.08)",
              border: "1px solid rgba(17,24,39,0.2)",
              color: "#374151",
            }}
          >
            Browse Gallery
          </Link>
        </div>
      </section>
    </div>
  );
}
