import { useState } from "react";
import FestivalCard from "../components/FestivalCard";
import CountdownTimer from "../components/CountdownTimer";
import Emoji from "../components/Emoji";

const allFestivals = [
  {
    name: "Dashain",
    emoji: "🌺",
    date: "Oct 11 - Oct 26, 2026",
    month: "October",
    description: "Nepal's grandest and longest festival. For fifteen days, families gather for tika ceremonies, jamara (barley grass), kite flying, and the thrilling pendal (bamboo swinging). Dashain celebrates the victory of Goddess Durga over the demon Mahishasura.",
    color: "#111827",
    tags: ["Hindu", "National", "15 Days"],
  },
  {
    name: "Tihar / Deepawali",
    emoji: "🕯️",
    date: "Nov 8 - Nov 12, 2026",
    month: "November",
    description: "The five-day festival of lights. Day 1 honors crows (Kaag Tihar), Day 2 honors dogs (Kukur Tihar), Day 3 honors cows (Gai Tihar) and worships Goddess Lakshmi, Day 4 is Mha Puja (self-worship), and Day 5 celebrates brother-sister bonds (Bhai Tika).",
    color: "#374151",
    tags: ["Hindu", "Lights", "5 Days"],
  },
  {
    name: "Holi",
    emoji: "🎨",
    date: "March 2027",
    month: "March",
    description: "The spectacular festival of colors celebrates the arrival of spring and the divine love of Radha and Krishna. In Terai it falls one day after Kathmandu. Nepal becomes a canvas of vibrant gulal powder and water.",
    color: "#111827",
    tags: ["Hindu", "Colors", "Spring"],
  },
  {
    name: "Chhath Puja",
    emoji: "☀️",
    date: "Oct 26 - Oct 29, 2026",
    month: "October",
    description: "An ancient Vedic festival dedicated to the Sun God Surya and his sister Chhathi Maiya. Devotees observe strict fasting and perform rituals at riverbanks during the sacred hours of dawn and dusk.",
    color: "#374151",
    tags: ["Hindu", "Sun Worship", "4 Days"],
  },
  {
    name: "Indra Jatra",
    emoji: "🎭",
    date: "Sept 2026",
    month: "September",
    description: "Kathmandu's grand festival honoring Lord Indra, the god of rain. Features the chariot procession of the Living Goddess Kumari, traditional dances of Mahakali and Lakhey, and the ceremonial raising of the lingo (wooden pole).",
    color: "#111827",
    tags: ["Newar", "Kathmandu", "8 Days"],
  },
  {
    name: "Bisket Jatra",
    emoji: "🏗️",
    date: "April 2027",
    month: "April",
    description: "Bhaktapur's spectacular New Year festival. The highlight is the fierce tug-of-war over a massive wooden pole (bisko) between teams from the east and west of the city, symbolizing the battle between good and evil.",
    color: "#374151",
    tags: ["Newar", "Bhaktapur", "9 Days"],
  },
  {
    name: "Buddha Jayanti",
    emoji: "☸️",
    date: "May 2027",
    month: "May",
    description: "Celebrating the birth, enlightenment, and death of Gautama Buddha at Lumbini, Nepal. Monasteries across the country hold special prayers, butter lamp ceremonies, and processions.",
    color: "#374151",
    tags: ["Buddhist", "Lumbini", "Sacred"],
  },
  {
    name: "Gai Jatra",
    emoji: "🐄",
    date: "Aug 2026",
    month: "August",
    description: "The 'Festival of Cows' commemorates those who passed away in the past year. Families send a cow (or a child dressed as one) in procession. The day is filled with satirical comedy, humor, and social commentary.",
    color: "#57534E",
    tags: ["Newar", "Humor", "Commemoration"],
  },
  {
    name: "Teej",
    emoji: "❤️",
    date: "Aug 2026",
    month: "August",
    description: "Hindu women's festival dedicated to Goddess Parvati. Women dress in red saris, sing and dance through the night, and fast for the longevity of their husbands. Pashupatinath Temple is the epicenter of celebrations.",
    color: "#111827",
    tags: ["Hindu", "Women", "Pashupatinath"],
  },
  {
    name: "Makar Sankranti",
    emoji: "🎈",
    date: "Jan 14, 2027",
    month: "January",
    description: "The harvest festival marking the sun's transition into Capricorn. People take holy baths, prepare til (sesame) sweets, and fly kites. Maghe Sankranti is especially important at Devghat and various river confluences.",
    color: "#111827",
    tags: ["Hindu", "Harvest", "Winter"],
  },
  {
    name: "Janai Purnima",
    emoji: "📿",
    date: "Aug 2026",
    month: "August",
    description: "The sacred thread festival where Brahmins change their janai (sacred thread). Everyone ties a protective thread (raksha bandhan) on their wrist. Gosaikunda Lake becomes a major pilgrimage site.",
    color: "#4B5563",
    tags: ["Hindu", "Brahmin", "Pilgrimage"],
  },
  {
    name: "Seto Machhindranath Jatra",
    emoji: "🙏",
    date: "March-April 2027",
    month: "March",
    description: "A grand chariot procession through the old streets of Kathmandu honoring the White Machhindranath, the deity of compassion. The weeks-long journey covers the entire ancient city.",
    color: "#111827",
    tags: ["Newar", "Kathmandu", "Chariot"],
  },
];

const months = ["All", "January", "March", "April", "May", "August", "September", "October", "November"];

export default function Festivals() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? allFestivals : allFestivals.filter((f) => f.month === filter);

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="text-center px-4 mb-14">
        <span className="text-xs text-gray-500 tracking-[0.5em] uppercase block mb-3">
          Explore
        </span>
        <h1
          className="text-4xl md:text-6xl font-black mb-4"
          style={{
            background: "linear-gradient(135deg, #111827, #111827)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          All Festivals
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base mb-10">
          Nepal celebrates festivals almost every day. From grand national events to intimate
          community rituals, there is always something sacred happening.
        </p>

        {/* Month filter */}
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
          {months.map((m) => (
            <button
              key={m}
              onClick={() => setFilter(m)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                filter === m
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-900 bg-gray-100 border border-gray-200"
              }`}
              style={
                filter === m
                  ? { background: "linear-gradient(135deg, #111827, #374151)" }
                  : {}
              }
            >
              {m}
            </button>
          ))}
        </div>
      </section>

      {/* Countdowns */}
      <section className="max-w-5xl mx-auto px-4 mb-16">
        <div
          className="p-8 md:p-10 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(17,24,39,0.05), rgba(17,24,39,0.03))",
            border: "1px solid rgba(17,24,39,0.1)",
          }}
        >
          <h3
            className="text-center text-xl md:text-2xl font-bold mb-8"
            style={{
              background: "linear-gradient(135deg, #111827, #374151)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <span className="inline-flex items-center gap-2"><Emoji char="⏳" size="1.1em" /> Upcoming Countdowns</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CountdownTimer targetDate={new Date("2026-10-11T00:00:00")} label="Ghatasthapana" subtitle="Dashain Begins" />
            <CountdownTimer targetDate={new Date("2026-10-21T00:00:00")} label="Vijaya Dashami" subtitle="Tika Day" />
            <CountdownTimer targetDate={new Date("2026-11-09T00:00:00")} label="Deepawali" subtitle="Tihar" />
          </div>
        </div>
      </section>

      {/* Festival grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((f, i) => (
            <FestivalCard key={f.name} festival={f} index={i} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-gray-600 py-20 text-sm tracking-wider">
            No festivals found for this month.
          </p>
        )}
      </section>
    </div>
  );
}
