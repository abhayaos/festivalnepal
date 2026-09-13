import { Link } from "react-router-dom";
import Emoji from "../components/Emoji";

const fastFacts = [
  { label: "Duration", value: "15 days" },
  { label: "Main day", value: "Vijaya Dashami (day 10)" },
  { label: "Season", value: "Autumn (Ashwin–Kartik)" },
  { label: "Symbols", value: "Tika, jamara, kites, swings" },
];

const calendar = [
  {
    day: "Day 1 — Ghatasthapana",
    text: "Dashain begins. Families sow barley seeds (jau) in a consecrated vessel at home so the yellow-green jamara shoots are ready for tika day. The goddess Durga is invoked and daily worship starts.",
  },
  {
    day: "Days 2–6 — Daily worship",
    text: "Each morning the household waters the jamara and recites prayers to Durga. Markets fill with shoppers buying new clothes, meat, and gifts; buses out of Kathmandu fill with people heading home.",
  },
  {
    day: "Day 7 — Fulpati",
    text: "A royal-era tradition: flowers, banana stalks, sugarcane, and other sacred plants are carried into homes and into Kathmandu's old palace in a formal procession, symbolically bringing Durga herself inside.",
  },
  {
    day: "Day 8 — Maha Ashtami",
    text: "The fiercest night of goddess worship. Temples dedicated to Kali and Durga stay crowded past midnight, and traditional animal sacrifices are still offered in some communities.",
  },
  {
    day: "Day 9 — Maha Navami",
    text: "The last day of Navaratri. Tools, vehicles, and machinery are blessed — a tradition now extended to taxis, laptops, and factory equipment. The nine-night battle of the legend reaches its climax.",
  },
  {
    day: "Day 10 — Vijaya Dashami",
    text: "Victory day. Elders place jamara and red tika on the foreheads of younger family members with blessings for health, success, and long life. Feasts follow, and tika-giving continues for days as relatives visit one another.",
  },
  {
    day: "Day 15 — Kojagrat Purnima",
    text: "The full-moon night that closes the festival, dedicated to Lakshmi. Families that missed tika earlier in the fortnight complete their visits, and Dashain formally ends.",
  },
];

const faqs = [
  {
    q: "When is Dashain celebrated?",
    a: "In autumn, usually late September to October (Ashwin–Kartik in the Nepali calendar). The exact dates shift every year because they follow the lunar calendar.",
  },
  {
    q: "Who receives tika?",
    a: "Younger family members receive tika and jamara from elders — parents, grandparents, and respected seniors — along with spoken blessings. Guests and junior colleagues are often included.",
  },
  {
    q: "Do I have to be Hindu to take part?",
    a: "No. Guests of any background are warmly welcomed. Accept tika with both hands if offered, listen to the blessing, and enjoy the feast — that is participation enough.",
  },
  {
    q: "Why do people fly kites during Dashain?",
    a: "Tradition links kite-flying to calling down rain for the harvest and to sending messages to the gods — but for most families today it is simply the beloved sport of the season.",
  },
];

export default function DashainStory() {
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
          Dashain: Nepal's Grandest Festival
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Origins, mythology, the 15-day calendar, and the meaning of tika and jamara —
          everything behind the celebration Nepalis travel across the country to reach.
        </p>
        <p className="text-xs text-orange-400/50 tracking-widest uppercase mt-4">
          10 min read &bull; Festivals
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
              { href: "#legend", label: "The Mahishasura legend" },
              { href: "#durga", label: "Birth of Durga" },
              { href: "#navaratri", label: "Navaratri & Vijaya Dashami" },
              { href: "#calendar", label: "The 15-day calendar" },
              { href: "#tika-jamara", label: "Tika & jamara" },
              { href: "#culture", label: "Kites, swings & feasts" },
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
              Dashain is Nepal's longest, largest, and most emotionally important festival.
              For fifteen autumn days the whole country slows down: schools close, offices
              empty, and millions of people travel back to their ancestral homes. If you
              want to understand what holds Nepali family life together, start here.
            </p>
            <p>
              At its heart Dashain celebrates the victory of the goddess Durga over the
              demon Mahishasura — good over evil, courage over fear — renewed each year
              through worship, feasting, and the blessing of elders.
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
          <h2 className="text-2xl font-black text-orange-100 mb-4">The Mahishasura legend</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-400 leading-relaxed">
            <p>
              The old Puranic story begins with Mahishasura, a immensely powerful demon
              who performed severe penance until Brahma granted him a near-perfect boon:{" "}
              <span className="text-orange-300">no man could kill him.</span> Armed with
              that guarantee, Mahishasura conquered heaven itself, drove out the gods, and
              tormented sages and mortals alike.
            </p>
            <p>
              Unable to endure the tyranny any longer, the gods took refuge together and
              pleaded with the great trinity — Brahma, Vishnu, and Shiva — to save them.
            </p>
          </div>
          <h3 id="durga" className="text-lg font-bold text-orange-200 mt-8 mb-3 scroll-mt-28">The birth of Durga</h3>
          <div className="space-y-4 text-sm md:text-base text-gray-400 leading-relaxed">
            <p>
              The trinity gathered the fiery energy (tej) of all the gods into one blazing
              mass — and from it a supreme goddess was born. Every god gave her their weapon:
              Shiva's trident, Vishnu's discus, Indra's thunderbolt, and more. The gods
              worshipped her as the protector of dharma and the embodiment of divine power.
            </p>
            <p>
              They named her <span className="text-orange-300">Durga</span> — the
              invincible one, the only being capable of defeating Mahishasura, since the
              demon's boon protected him from men but not from a goddess.
            </p>
          </div>
          <h3 id="navaratri" className="text-lg font-bold text-orange-200 mt-8 mb-3 scroll-mt-28">Navaratri and Vijaya Dashami</h3>
          <div className="space-y-4 text-sm md:text-base text-gray-400 leading-relaxed">
            <p>
              Durga and Mahishasura fought a terrible battle lasting{" "}
              <span className="text-orange-300">nine days and nine nights</span> — the
              Navaratri, still observed today as nine nights of goddess worship. On the
              tenth day, Durga slew the demon. That day of victory is{" "}
              <span className="text-orange-300">Vijaya Dashami</span>, the tenth day of
              victory and the spiritual center of Dashain.
            </p>
            <p>
              Many Nepalis also connect Vijaya Dashami with the Ramayana: tradition holds
              that Lord Ram defeated the demon king Ravan on this very day, which is why
              the tenth day is considered auspicious for beginnings, journeys, and new
              ventures across South Asia.
            </p>
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section id="calendar" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div
          className="article-body p-6 md:p-10 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(255,107,53,0.06), rgba(247,147,30,0.03))",
            border: "1px solid rgba(255,107,53,0.12)",
          }}
        >
          <h2 className="text-2xl font-black text-orange-100 mb-6">The 15-day calendar</h2>
          <div className="max-w-3xl mx-auto">
            {calendar.map((item, i) => (
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

      {/* Tika + culture */}
      <section id="tika-jamara" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div
          className="article-body p-6 md:p-10 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(255,107,53,0.06), rgba(247,147,30,0.03))",
            border: "1px solid rgba(255,107,53,0.12)",
          }}
        >
          <h2 className="text-2xl font-black text-orange-100 mb-4">Tika and jamara, explained</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-400 leading-relaxed">
            <p>
              The tika is a mixture of red vermilion powder, rice, and yogurt, placed on
              the forehead — the seat of wisdom and fortune. The jamara is the pale
              yellow-green barley grass grown from Ghatasthapana, tucked behind the ear or
              into hair. Together they signify victory (tika) and prosperity and growth
              (jamara).
            </p>
            <p>
              The ritual matters as much as the symbols: an elder speaks a personal
              blessing over each younger relative by name — health, education, success —
              while the whole family watches. For Nepalis living abroad, a video call with
              tika is often the emotional peak of the year.
            </p>
          </div>
          <h3 id="culture" className="text-lg font-bold text-orange-200 mt-8 mb-3 scroll-mt-28">Kites, swings, and feasts</h3>
          <div className="space-y-4 text-sm md:text-base text-gray-400 leading-relaxed">
            <p>
              Dashain skies fill with kites — tradition says flying them calls the autumn
              rains and carries messages to the gods, but today it is mostly joyful
              competition. Villages raise tall bamboo swings (lingo ping), built
              communally and said to lift you closer to heaven with every push.
            </p>
            <p>
              New clothes are close to obligatory, especially for children, and the feasts
              are the richest of the year: goat meat, sel roti (ring-shaped rice
              doughnuts), beaten rice, and sweets shared across extended families.
            </p>
          </div>
        </div>
      </section>

      {/* Visitors */}
      <section id="visitors" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div
          className="article-body p-6 md:p-10 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(255,107,53,0.06), rgba(247,147,30,0.03))",
            border: "1px solid rgba(255,107,53,0.12)",
          }}
        >
          <h2 className="text-2xl font-black text-orange-100 mb-4">A short guide for visitors</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-400 leading-relaxed">
            <p>
              Expect a quieter Kathmandu during the main days — many shops close as owners
              return to their villages — and book transport early, since buses and flights
              sell out weeks ahead. If you are invited to a family tika, go: dress neatly,
              remove shoes at the door, accept blessings graciously, and bring a small gift
              or sweets for the hosts.
            </p>
            <p>
              Photography is welcome at public celebrations and kite-flying spots, but ask
              before photographing private rituals or entering shrine courtyards during
              worship. The Living Goddess Kumari's appearances and the Fulpati procession
              are among the most photogenic public events of the season.
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
            The real message of Dashain: truth and courage overcome tyranny — and no
            distance is too far for family to come home.
          </p>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/blog/nepal-history"
            className="p-5 rounded-xl transition-transform duration-300 hover:scale-[1.02] transform-gpu"
            style={{ border: "1px solid rgba(255,107,53,0.12)" }}
          >
            <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-1">Previous article</p>
            <p className="text-sm font-bold text-orange-300">A Concise History of Nepal</p>
          </Link>
          <Link
            to="/blog/tihar-story"
            className="p-5 rounded-xl text-right transition-transform duration-300 hover:scale-[1.02] transform-gpu"
            style={{
              background: "linear-gradient(135deg, rgba(255,107,53,0.08), rgba(247,147,30,0.03))",
              border: "1px solid rgba(255,107,53,0.15)",
            }}
          >
            <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-1">Next article</p>
            <p className="text-sm font-bold text-orange-300">Tihar: Nepal's festival of lights</p>
          </Link>
        </div>
        <p className="text-center mt-10 text-xs text-gray-600">
          <span className="inline-flex items-center gap-2"><Emoji char="🙏" size="1em" /> Thank you for reading Festival Nepal</span>
        </p>
      </section>
    </div>
  );
}