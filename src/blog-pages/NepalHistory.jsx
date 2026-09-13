import { Link } from "react-router-dom";
import Emoji from "../components/Emoji";

const timeline = [
  {
    date: "c. 1500 BS",
    title: "The Malla golden age in the Kathmandu Valley",
    text: [
      "Around 1500 Bikram Sambat, the Kathmandu Valley was ruled by Malla kings. The three great cities — Kathmandu, Lalitpur (Patan), and Bhaktapur — were flourishing centers of art, literature, religion, and temple architecture.",
      "The grand temples, stupas, rest houses, and carved windows built in this era still define Nepal's skyline. Many of the jatras and street festivals visitors see today, including Indra Jatra, were formalized under Malla patronage.",
    ],
  },
  {
    date: "c. 1540 BS",
    title: "One valley, three kingdoms",
    text: [
      "After the death of Yaksha Malla in the late 15th century, the valley split into three rival kingdoms, each with its own king, court, and army.",
      "The rivalry had an unexpected upside: each kingdom competed to build grander temples and stage grander festivals. That competition is a big reason the valley is so dense with heritage today.",
    ],
  },
  {
    date: "1779 BS (1723 AD)",
    title: "Birth of Prithvi Narayan Shah",
    text: [
      "Prithvi Narayan Shah was born in the small hill kingdom of Gorkha. He grew up with one defining ambition: to unite the scattered hill principalities into a single strong state.",
      "His campaigns would redraw the political map of the Himalayas within a single generation.",
    ],
  },
  {
    date: "1823–1826 BS (1766–1769 AD)",
    title: "Unification of Nepal",
    text: [
      "Prithvi Narayan Shah's Gorkhali forces captured Kirtipur first, then Kathmandu, Lalitpur, and Bhaktapur in quick succession, ending Malla rule in the valley.",
      "The campaigns, remembered as the Gorkha expansion, forged the hill states and the valley into one kingdom. The unified state took the name Nepal, and Gorkha-era administration, weights, and military organization spread across the new nation.",
    ],
  },
  {
    date: "1873 BS (1816 AD)",
    title: "The Sugauli Treaty",
    text: [
      "After the Anglo-Nepal War, Nepal and the British East India Company signed the Sugauli Treaty. Nepal ceded roughly a third of its territory — including Sikkim, Darjeeling, and parts of the Tarai.",
      "Painful as the losses were, the treaty secured what mattered most: Nepal remained independent and was never colonized, a source of deep national pride to this day.",
    ],
  },
  {
    date: "1903 BS (1846 AD)",
    title: "The Kot Massacre and the rise of the Ranas",
    text: [
      "The bloody Kot Massacre of 1846 propelled Jung Bahadur Rana to power and inaugurated 104 years of Rana family rule.",
      "Shah kings remained on the throne in name, but real authority sat with the Rana prime ministers. The era brought grand neoclassical palaces to Kathmandu — and kept the country largely isolated from the outside world.",
    ],
  },
  {
    date: "2007 BS (1951 AD)",
    title: "Democracy arrives",
    text: [
      "A coalition of King Tribhuvan, Nepali political leaders, and a popular movement ended Rana rule in 1951.",
      "Multiparty democracy was declared for the first time, political parties operated openly, and Nepal began engaging with the wider world after a century of seclusion.",
    ],
  },
  {
    date: "2017 BS (1960 AD)",
    title: "The Panchayat system",
    text: [
      "King Mahendra dissolved the elected parliament and introduced the partyless Panchayat system, concentrating power back in the palace.",
      "The system lasted until 1990. It built highways, schools, and a national communications network — but banned political parties and concentrated authority in the king.",
    ],
  },
  {
    date: "2046 BS (1990 AD)",
    title: "People's Movement I restores multiparty democracy",
    text: [
      "A nationwide peaceful movement forced the palace to accept constitutional reforms. Multiparty democracy returned and regular elections resumed.",
      "The king became a constitutional monarch, and citizens once again chose their own representatives.",
    ],
  },
  {
    date: "2052 BS (1996 AD)",
    title: "A decade of internal conflict begins",
    text: [
      "An armed internal conflict erupted in the mid-1990s and lasted about ten years, touching nearly every district of the country.",
      "Thousands of lives were lost. The conflict reshaped Nepali politics and made peace-building the central project of the next decade.",
    ],
  },
  {
    date: "2058 BS (2001 AD)",
    title: "Tragedy in the royal palace",
    text: [
      "In 2001, a shocking tragedy inside the royal palace killed King Birendra and most of the royal family, plunging the nation into grief.",
      "The event deepened the political crisis and accelerated demands for fundamental change in how Nepal was governed.",
    ],
  },
  {
    date: "2062–2063 BS (2006 AD)",
    title: "People's Movement II and the peace accord",
    text: [
      "A second mass movement ended direct royal rule. Political parties and the Maoists reached a 12-point understanding, followed by the Comprehensive Peace Accord.",
      "The ten-year conflict formally ended, an interim parliament was formed, and Nepal set a course toward electing a constituent assembly.",
    ],
  },
  {
    date: "2064 BS (2008 AD)",
    title: "Nepal becomes a republic",
    text: [
      "The newly elected Constituent Assembly proclaimed Nepal a Federal Democratic Republic, abolishing a monarchy that had lasted some 240 years.",
      "For the first time, the head of state would be an elected president rather than a hereditary king.",
    ],
  },
  {
    date: "2072 BS (2015 AD)",
    title: "A new constitution — and a devastating earthquake",
    text: [
      "Nepal promulgated a new constitution establishing seven provinces and a federal system, with protections for the country's many languages, religions, and ethnic communities.",
      "The same year, the massive Gorkha Earthquake struck in April, killing nearly 9,000 people and damaging heritage sites across the valley. The extraordinary national rebuilding effort that followed is still visible in restored temples and squares today.",
    ],
  },
  {
    date: "2074 BS (2017 AD)",
    title: "First elections under the new constitution",
    text: [
      "Nepal held its first general elections under the new constitution, completing the federal setup with national, provincial, and local governments.",
      "Voters elected representatives at all three levels, making the federal republic fully operational.",
    ],
  },
  {
    date: "2077 BS (2020 AD)",
    title: "The COVID-19 years",
    text: [
      "The global pandemic reached Nepal with lockdowns, a health emergency, and severe economic strain on tourism and migrant-worker households.",
      "Communities responded with remarkable solidarity — neighborhood food drives, volunteer networks, and a collective resilience that carried the country through.",
    ],
  },
  {
    date: "2083 BS (2026 AD)",
    title: "Nepal today",
    text: [
      "Today Nepal moves forward as a republic with its constitution, festivals, and living culture intact. Dashain tika, Tihar lights, and neighborhood celebrations remain the heartbeat of everyday life.",
      "Understanding this journey — from Malla courtyards to a federal republic — is the fastest way to understand why Nepalis celebrate the way they do.",
    ],
  },
];

export default function NepalHistory() {
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
          History
        </span>
        <h1
          className="text-3xl md:text-5xl font-black mb-4 max-w-3xl mx-auto"
          style={{
            background: "linear-gradient(135deg, #FF6B35, #F7931E, #FFD700)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          A Concise History of Nepal
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          From the Malla kingdoms to the federal republic — how five centuries of kings,
          movements, and rebuilding shaped the festivals Nepal celebrates today.
        </p>
        <p className="text-xs text-orange-400/50 tracking-widest uppercase mt-4">
          12 min read &bull; History
        </p>
      </section>

      {/* Contents */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div
          className="p-5 md:p-6 rounded-2xl"
          style={{ border: "1px solid rgba(255,107,53,0.12)" }}
        >
          <p className="text-xs font-bold tracking-widest uppercase text-orange-400/70 mb-3">
            In this article
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { href: "#reading-dates", label: "Reading Nepali dates" },
              { href: "#timeline", label: "The timeline" },
              { href: "#festivals-and-history", label: "How history shaped the festivals" },
              { href: "#takeaways", label: "Key takeaways" },
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

      {/* Date guide */}
      <section id="reading-dates" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div
          className="p-5 md:p-6 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(255,107,53,0.08), rgba(247,147,30,0.03))",
            border: "1px solid rgba(255,107,53,0.12)",
          }}
        >
          <p className="text-sm text-gray-400 leading-relaxed">
            <span className="text-orange-300 font-bold">Reading Nepali dates. </span>
            Nepal uses its own Bikram Sambat (BS) calendar, which runs roughly 56–57 years
            ahead of the Gregorian (AD) calendar — so 2083 BS is 2026 AD. Dates below give
            the BS year first, with the AD equivalent where it helps. A few dates are
            approximate, rounded to the nearest year.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div
          className="article-body p-6 md:p-10 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(255,107,53,0.06), rgba(247,147,30,0.03))",
            border: "1px solid rgba(255,107,53,0.12)",
          }}
        >
          <h2 className="text-2xl font-black text-orange-100 mb-8">The timeline</h2>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <div key={i} className="relative pl-8 pb-10 border-l border-orange-500/20 last:border-l-0 last:pb-0">
                <span
                  className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full"
                  style={{ background: "linear-gradient(135deg, #FF6B35, #F7931E)" }}
                />
                <span className="text-xs font-bold tracking-widest uppercase text-orange-400/70">
                  {item.date}
                </span>
                <h3 className="text-lg font-bold text-orange-200 mt-1 mb-2">{item.title}</h3>
                {item.text.map((p, j) => (
                  <p key={j} className="text-sm text-gray-400 leading-relaxed mb-2">{p}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festivals and history */}
      <section id="festivals-and-history" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div
          className="article-body p-6 md:p-10 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(255,107,53,0.06), rgba(247,147,30,0.03))",
            border: "1px solid rgba(255,107,53,0.12)",
          }}
        >
          <h2 className="text-2xl font-black text-orange-100 mb-4">How history shaped the festivals</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-400 leading-relaxed">
            <p>
              Nepal's festivals are not decorations on top of history — they <em>are</em> history,
              performed every year. The Malla kings turned worship into public spectacle:
              chariot processions, masked dances, and courtyard rituals that bound a city
              together. When you watch Indra Jatra wind through Kathmandu, you are watching
              a Malla-era civic ritual that has survived every regime since.
            </p>
            <p>
              Unification made Dashain a national festival. What had been one important
              observance among many became the shared homecoming for soldiers, officials, and
              families posted across the new kingdom — the tika-and-jamara ceremony as a
              yearly renewal of belonging. The Rana century added Durbar formality and grand
              palace celebrations, while the democratic and republican eras turned festival
              days into public holidays, school calendars, and eventually the tourism
              experiences travelers know today.
            </p>
            <p>
              Even the 2015 earthquake is part of festival history now: the painstaking
              reconstruction of temples in Bhaktapur, Patan, and Kathmandu means many of the
              shrines where festivals are celebrated are literally newer than the rituals
              performed inside them — old devotion in rebuilt walls.
            </p>
          </div>
        </div>
      </section>

      {/* Takeaways */}
      <section id="takeaways" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 scroll-mt-28">
        <div
          className="p-6 md:p-8 rounded-2xl"
          style={{ border: "1px solid rgba(255,107,53,0.12)" }}
        >
          <p className="text-xs font-bold tracking-widest uppercase text-orange-400/70 mb-4">
            Key takeaways
          </p>
          <ul className="space-y-3 text-sm text-gray-400 leading-relaxed">
            <li className="flex gap-3"><span className="text-orange-400">—</span> Malla-era city kingdoms built the temples and street festivals that still anchor Nepali culture.</li>
            <li className="flex gap-3"><span className="text-orange-400">—</span> Unification (1823–1826 BS) turned Dashain into a shared national homecoming.</li>
            <li className="flex gap-3"><span className="text-orange-400">—</span> Nepal was never colonized; the 1816 Sugauli peace preserved independence at the cost of territory.</li>
            <li className="flex gap-3"><span className="text-orange-400">—</span> From the 1990 and 2006 movements to the 2008 republic and 2015 constitution, modern Nepal was built in a single generation.</li>
          </ul>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/blog"
            className="p-5 rounded-xl transition-transform duration-300 hover:scale-[1.02] transform-gpu"
            style={{ border: "1px solid rgba(255,107,53,0.12)" }}
          >
            <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-1">All articles</p>
            <p className="text-sm font-bold text-orange-300">Back to the blog index</p>
          </Link>
          <Link
            to="/blog/dashain-story"
            className="p-5 rounded-xl text-right transition-transform duration-300 hover:scale-[1.02] transform-gpu"
            style={{
              background: "linear-gradient(135deg, rgba(255,107,53,0.08), rgba(247,147,30,0.03))",
              border: "1px solid rgba(255,107,53,0.15)",
            }}
          >
            <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-1">Next article</p>
            <p className="text-sm font-bold text-orange-300">Dashain: Nepal's grandest festival</p>
          </Link>
        </div>
        <p className="text-center mt-10 text-xs text-gray-600">
          <span className="inline-flex items-center gap-2"><Emoji char="🙏" size="1em" /> Thank you for reading Festival Nepal</span>
        </p>
      </section>
    </div>
  );
}