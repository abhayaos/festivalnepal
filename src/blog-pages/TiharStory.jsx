import { Link } from "react-router-dom";
import Emoji from "../components/Emoji";

const fastFacts = [
  { label: "Duration", value: "5 days" },
  { label: "Main night", value: "Lakshmi Puja (day 3)" },
  { label: "Season", value: "Autumn, after Dashain" },
  { label: "Symbols", value: "Oil lamps, rangoli, marigolds" },
];

const days = [
  {
    day: "Day 1 — Kaag Tihar (Crow Day)",
    text: "The crow, regarded as the messenger of Yama, god of death, is honored with offerings of food placed on rooftops. Feeding the crow is believed to carry messages to ancestors and to avert grief for the coming year.",
  },
  {
    day: "Day 2 — Kukur Tihar (Dog Day)",
    text: "Dogs — guardians, police partners, and beloved street companions — are garlanded with marigolds, marked with tika, and feasted. The day honors Yama's gatekeeper and celebrates loyalty itself; photos of garlanded dogs trend across Nepal every year.",
  },
  {
    day: "Day 3 — Gai Tihar and Lakshmi Puja",
    text: "Cows, revered as gentle providers and living symbols of Lakshmi, are worshipped in the morning. At nightfall the festival peaks: homes glow with rows of oil lamps, doorways bloom with rangoli and marigolds, and families perform Lakshmi Puja to invite the goddess of wealth inside.",
  },
  {
    day: "Day 4 — Mha Puja and Govardhan Puja",
    text: "Newar communities celebrate Mha Puja — worship of the self — with elaborate mandap rituals affirming the body's purity and strength. Elsewhere the day honors Govardhan, the sacred hill of Krishna's legend, with cow-dung shrines and offerings.",
  },
  {
    day: "Day 5 — Bhai Tika",
    text: "The finale. Sisters place the seven-colored saptarangi tika on their brothers' foreheads, offer wine, eggs, fish, meat, and sweets on a ceremonial tray, and pray for their long life. Brothers give gifts and pledge protection in return.",
  },
];

const faqs = [
  {
    q: "When is Tihar celebrated?",
    a: "In autumn, about two to three weeks after Dashain (Kartik in the Nepali calendar, October–November). The five days track the new-moon cycle.",
  },
  {
    q: "What is Deusi-Bhailo?",
    a: "Groups of young people go house to house singing traditional Deusi (sung by men) and Bhailo (sung by women) blessing songs, and receive money, fruit, and sweets in return. It funds community projects and keeps the songs alive.",
  },
  {
    q: "Can visitors join Bhai Tika?",
    a: "If a Nepali family invites you, absolutely — there is even a tradition of accepting honorary siblings. Bring fruit or sweets, dress festively, and follow the family's lead on ritual order.",
  },
  {
    q: "Why marigolds everywhere?",
    a: "The orange-yellow sayapatri (marigold) blooms exactly at Tihar time. Its color symbolizes the sun and prosperity, and its garlands guide Lakshmi — and guests — to the door.",
  },
];

export default function TiharStory() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="text-center px-4 mb-12">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 mb-8 text-xs font-medium tracking-[0.3em] uppercase text-orange-400/70 hover:text-orange-300 transition-colors duration-300"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </Link>
        <span className="text-xs text-orange-400/50 tracking-[0.5em] uppercase block mb-3">
          Festivals
        </span>
        <h1
          className="text-3xl md:text-5xl font-black mb-4 max-w-3xl mx-auto"
          style={{
            background: "linear-gradient(135deg, #FF6B35, #F7931E, #FFD700)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Tihar: Nepal's Festival of Lights
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          The legend of Yama and Yamuna, five days honoring animals and siblings, and the
          night Nepal glows brighter than any other.
        </p>
        <p className="text-xs text-orange-400/50 tracking-widest uppercase mt-4">
          9 min read &bull; Festivals
        </p>
      </section>

      {/* Contents */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="p-5 md:p-6 rounded-2xl" style={{ border: "1px solid rgba(255,107,53,0.12)" }}>
          <p className="text-xs font-bold tracking-widest uppercase text-orange-400/70 mb-3">
            In this article
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { href: "#overview", label: "Overview" },
              { href: "#legend", label: "Yama & Yamuna" },
              { href: "#lakshmi", label: "Welcoming Lakshmi" },
              { href: "#five-days", label: "The five days" },
              { href: "#deusi-bhailo", label: "Deusi & Bhailo" },
              { href: "#symbols", label: "Symbols & decor" },
              { href: "#visitors", label: "Guide for visitors" },
              { href: "#faq", label: "FAQ" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-1.5 rounded-full text-xs text-gray-400 hover:text-orange-300 bg-gray-900/50 border border-orange-500/10 transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div
          className="article-body p-6 md:p-10 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(255,107,53,0.06), rgba(247,147,30,0.03))",
            border: "1px solid rgba(255,107,53,0.12)",
          }}
        >
          <h2 className="text-2xl font-black text-orange-100 mb-4">Overview</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-400 leading-relaxed">
            <p>
              If Dashain is Nepal's great homecoming, Tihar is its great illumination.
              For five autumn nights the country glows: oil lamps flicker along every
              windowsill, marigold garlands frame every doorway, and children sing blessings
              from street to street. It is the most visually magical week of the Nepali year.
            </p>
            <p>
              Beneath the beauty lies a remarkable ethic — Tihar honors crows, dogs, and
              cows before it honors people, and closes by celebrating the bond between
              brothers and sisters. No other major festival anywhere puts animals and
              siblings so completely at its center.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            {fastFacts.map((fact) => (
              <div
                key={fact.label}
                className="p-4 rounded-xl text-center"
                style={{ border: "1px solid rgba(255,107,53,0.12)" }}
              >
                <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-1">{fact.label}</p>
                <p className="text-sm font-bold text-orange-200">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legend */}
      <section id="legend" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div
          className="article-body p-6 md:p-10 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(255,107,53,0.06), rgba(247,147,30,0.03))",
            border: "1px solid rgba(255,107,53,0.12)",
          }}
        >
          <h2 className="text-2xl font-black text-orange-100 mb-4">The legend of Yama and Yamuna</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-400 leading-relaxed">
            <p>
              The founding story belongs to Yama, the god of death, and his sister Yamuna
              (also called Yami). Longing to see her brother, Yamuna invited Yama to her
              home. When he arrived, she welcomed him with full honors: tika on his
              forehead, two burning oil lamps to light his path, and a feast of sweets and
              rich dishes.
            </p>
            <p>
              Moved by her devotion, Yama declared that from that day on, any sister who
              marks her brother's forehead with tika and lights lamps for him would
              protect him — and the brother would enjoy a long life. That promise is
              renewed every year on <span className="text-orange-300">Bhai Tika</span>,
              the fifth and final day of Tihar, when sisters across Nepal perform the same
              ritual Yamuna performed first.
            </p>
          </div>
          <h3 id="lakshmi" className="text-lg font-bold text-orange-200 mt-8 mb-3 scroll-mt-28">Welcoming Lakshmi</h3>
          <div className="space-y-4 text-sm md:text-base text-gray-400 leading-relaxed">
            <p>
              The festival's other spiritual pillar is{" "}
              <span className="text-orange-300">Lakshmi, goddess of wealth and fortune</span>.
              Tradition holds that on the third night she walks the earth, entering only
              homes that are clean, lit, and welcoming. That is why the whole country
              scrubs, paints, and illuminates its houses — every lamp is a lantern guiding
              the goddess to the door, and every dark doorway risks being passed by.
            </p>
          </div>
        </div>
      </section>

      {/* Five days */}
      <section id="five-days" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div
          className="article-body p-6 md:p-10 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(255,107,53,0.06), rgba(247,147,30,0.03))",
            border: "1px solid rgba(255,107,53,0.12)",
          }}
        >
          <h2 className="text-2xl font-black text-orange-100 mb-6">The five days, in order</h2>
          <div className="max-w-3xl mx-auto">
            {days.map((item, i) => (
              <div key={i} className="relative pl-8 pb-8 border-l border-orange-500/20 last:border-l-0 last:pb-0">
                <span
                  className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full"
                  style={{ background: "linear-gradient(135deg, #FF6B35, #F7931E)" }}
                />
                <h3 className="text-base font-bold text-orange-200 mb-1.5">{item.day}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deusi + symbols + visitors */}
      <section id="deusi-bhailo" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div
          className="article-body p-6 md:p-10 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(255,107,53,0.06), rgba(247,147,30,0.03))",
            border: "1px solid rgba(255,107,53,0.12)",
          }}
        >
          <h2 className="text-2xl font-black text-orange-100 mb-4">Deusi and Bhailo</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-400 leading-relaxed">
            <p>
              After dark, troupes of young people move from house to house singing{" "}
              <span className="text-orange-300">Deusi</span> (traditionally sung by men)
              and <span className="text-orange-300">Bhailo</span> (traditionally sung by
              women) — call-and-response blessing songs that praise the household and wish
              it prosperity. Hosts answer with money, fruit, beaten rice, and sweets.
            </p>
            <p>
              The collections fund youth clubs, temples, and community projects, so every
              song is both entertainment and quiet crowdfunding. If a troupe arrives at
              your door, listen to the full song before giving — the blessing is the gift,
              and the gift completes it.
            </p>
          </div>
          <h3 id="symbols" className="text-lg font-bold text-orange-200 mt-8 mb-3 scroll-mt-28">Symbols and decor</h3>
          <div className="space-y-4 text-sm md:text-base text-gray-400 leading-relaxed">
            <p>
              Three things define Tihar's look. The <span className="text-orange-300">diyo</span> —
              a small clay oil lamp — is the festival's atomic unit; hundreds may outline a
              single courtyard. The <span className="text-orange-300">rangoli</span> is a
              mandala of colored powder, rice, and petals laid at entrances to welcome
              Lakshmi. And the <span className="text-orange-300">sayapatri</span> (marigold),
              blooming exactly in season, supplies the garlands draped over doors, dogs,
              cows, and brothers alike.
            </p>
          </div>
          <h3 id="visitors" className="text-lg font-bold text-orange-200 mt-8 mb-3 scroll-mt-28">A short guide for visitors</h3>
          <div className="space-y-4 text-sm md:text-base text-gray-400 leading-relaxed">
            <p>
              Tihar is the easiest festival for travelers to enjoy: the whole country is
              decorated, evenings are made for walking, and strangers are routinely pulled
              into Deusi circles. Carry small bills for troupes, try sel roti and yomari
              where offered, and never step on a rangoli — walk around it.
            </p>
            <p>
              On Kukur Tihar, ask a dog's owner before feeding or photographing street
              dogs, however photogenic the marigolds make them. And if you are invited to
              Bhai Tika, accept — being adopted as an honorary sibling for the day is one
              of the warmest experiences Nepal offers.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 scroll-mt-28">
        <div className="p-6 md:p-10 rounded-2xl" style={{ border: "1px solid rgba(255,107,53,0.12)" }}>
          <h2 className="text-2xl font-black text-orange-100 mb-6">Frequently asked questions</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="pb-5 border-b border-orange-500/10 last:border-b-0 last:pb-0">
                <p className="text-sm md:text-base font-bold text-orange-200 mb-1.5">{faq.q}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <p className="pt-6 mt-2 border-t border-orange-500/10 text-orange-300/80 text-sm md:text-base leading-relaxed">
            The real message of Tihar: honor every living being, hold your siblings close,
            and answer darkness with light.
          </p>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/blog/dashain-story"
            className="p-5 rounded-xl transition-transform duration-300 hover:scale-[1.02] transform-gpu"
            style={{ border: "1px solid rgba(255,107,53,0.12)" }}
          >
            <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-1">Previous article</p>
            <p className="text-sm font-bold text-orange-300">Dashain: Nepal's grandest festival</p>
          </Link>
          <Link
            to="/blog"
            className="p-5 rounded-xl text-right transition-transform duration-300 hover:scale-[1.02] transform-gpu"
            style={{
              background: "linear-gradient(135deg, rgba(255,107,53,0.08), rgba(247,147,30,0.03))",
              border: "1px solid rgba(255,107,53,0.15)",
            }}
          >
            <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-1">All articles</p>
            <p className="text-sm font-bold text-orange-300">Back to the blog index</p>
          </Link>
        </div>
        <p className="text-center mt-10 text-xs text-gray-600">
          <span className="inline-flex items-center gap-2"><Emoji char="🙏" size="1em" /> Thank you for reading Festival Nepal</span>
        </p>
      </section>
    </div>
  );
}