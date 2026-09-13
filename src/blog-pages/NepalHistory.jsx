import { Link } from "react-router-dom";
import Emoji from "../components/Emoji";
import ScrollSpy from "../components/ScrollSpy";

const contents = [
  { id: "many-kingdoms", label: "Many Kingdoms" },
  { id: "rise-gorkha", label: "Rise of Gorkha" },
  { id: "unification", label: "Unification" },
  { id: "anglo-nepal", label: "Anglo-Nepalese War" },
  { id: "kot", label: "Kot Massacre" },
  { id: "rana", label: "Rana Rule" },
  { id: "revolution-1951", label: "Revolution of 1950–51" },
  { id: "panchayat", label: "Panchayat Era" },
  { id: "movement-1990", label: "1990 Movement" },
  { id: "insurgency", label: "Maoist Insurgency" },
  { id: "movement-2006", label: "2006 Movement" },
  { id: "republic", label: "Republic" },
  { id: "constitution-2015", label: "2015 Constitution" },
  { id: "2083", label: "Nepal in 2083 BS" },
  { id: "journey", label: "The Entire Journey" },
  { id: "meaning", label: "Bigger Meaning" },
  { id: "final", label: "Story Continues" },
];

export default function NepalHistory() {
  return (
    <div className="pt-24 pb-20">
      <ScrollSpy sections={contents} />
      {/* Header */}
      <section className="text-center px-4 mb-12">
        <span className="text-xs text-gray-500 tracking-[0.5em] uppercase block mb-3">
          History
        </span>
        <h1
          className="text-3xl md:text-5xl font-black mb-4 max-w-3xl mx-auto"
          style={{
            background: "linear-gradient(135deg, #111827, #111827)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          A Concise History of Nepal: From 1500 BS to 2083 BS
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          From the medieval kingdoms of the Kathmandu Valley to the federal democratic republic
          of today — the full journey from 1500 BS to 2083 BS.
        </p>
        <p className="text-xs text-gray-500 tracking-widest uppercase mt-4">
          20 min read &bull; History
        </p>
      </section>

      {/* Contents */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="py-2">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-3">
            In this article
          </p>
          <div className="flex flex-wrap gap-2">
            {contents.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-4 py-1.5 rounded-full text-xs text-gray-600 hover:text-gray-900 bg-gray-100 border border-gray-200 transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              Nepal's history is not a simple story of one king ruling one country for hundreds of
              years. The Nepal we know today was built through the rise and fall of kingdoms, wars,
              alliances, cultural development, political struggles, democratic movements, armed
              conflict, and the determination of ordinary Nepali people.
            </p>
            <p>
              From the medieval kingdoms of the Kathmandu Valley to the federal democratic republic of
              today, Nepal has passed through enormous political and social transformations.
            </p>
            <p>
              This is the story from approximately <strong className="text-gray-900">1500 BS to 2083 BS</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Many kingdoms */}
      <section id="many-kingdoms" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Nepal Around 1500 BS: A Land of Many Kingdoms</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              Around <strong className="text-gray-900">1500 BS</strong>, roughly the fifteenth century
              AD, the territory that is now Nepal was not a unified country.
            </p>
            <p>
              There were numerous kingdoms, principalities and local political powers across the
              Himalayas, hills and southern plains.
            </p>
            <p>
              The <strong className="text-gray-900">Kathmandu Valley</strong> was one of the most
              developed regions. It had fertile land, important trade routes and highly developed urban
              communities. The valley was becoming an important center of religion, architecture,
              commerce and art.
            </p>
            <p>
              The <strong className="text-gray-900">Malla period</strong> became particularly important
              in this history.
            </p>
            <p>
              The Malla rulers helped develop sophisticated cities, temples, palaces, festivals,
              literature, music and traditional art. Many of the historic structures that people
              associate with Kathmandu Valley today have roots in this period. Nepal Tourism Board
              describes the Malla period as lasting roughly 550 years and notes the major cultural
              development of the valley during their rule. (
              <a href="https://trade.ntb.gov.np/know-nepal/nepals-history/" target="_blank" rel="noreferrer" className="text-gray-900 underline">Nepal Tourism Board</a>)
            </p>
            <p>
              But Nepal was much larger than the Kathmandu Valley.
            </p>
            <p>
              In the west, the <strong className="text-gray-900">Khas-Malla civilization</strong> had
              previously created a powerful kingdom around the Karnali region. Over time, political
              fragmentation produced many smaller states.
            </p>
            <p>
              By the eighteenth century, the area that would eventually become modern Nepal contained
              roughly <strong className="text-gray-900">dozens of independent principalities</strong>.
            </p>
            <p>
              One of these was <strong className="text-gray-900">Gorkha</strong>.
            </p>
            <p>
              And Gorkha would change everything.
            </p>
          </div>
        </div>
      </section>

      {/* Rise of Gorkha */}
      <section id="rise-gorkha" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The Rise of Gorkha</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              The history of the Gorkha kingdom goes back to{" "}
              <strong className="text-gray-900">Dravya Shah</strong>, who established the Gorkha
              kingdom in 1559 AD.
            </p>
            <p>
              For generations, Gorkha remained a relatively small hill kingdom.
            </p>
            <p>
              Its rulers slowly expanded their influence.
            </p>
            <p>
              Then came a young king who had a much bigger vision.
            </p>
            <p>
              His name was <strong className="text-gray-900">Prithvi Narayan Shah</strong>.
            </p>
            <p>
              Prithvi Narayan Shah became king of Gorkha in <strong className="text-gray-900">1743 AD</strong>.
            </p>
            <p>
              He looked at the fragmented political situation of the region and believed that the small
              kingdoms could not remain permanently independent if powerful outside forces were
              expanding around them.
            </p>
            <p>
              He particularly understood the growing power of the British East India Company in the
              Indian subcontinent.
            </p>
            <p>
              His objective became the conquest and consolidation of the Kathmandu Valley and eventually
              the creation of a larger unified kingdom.
            </p>
          </div>
        </div>
      </section>

      {/* Unification */}
      <section id="unification" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The Unification Campaign</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              Prithvi Narayan Shah did not simply march directly into Kathmandu.
            </p>
            <p>
              The Kathmandu Valley was heavily defended.
            </p>
            <p>
              He first strengthened Gorkha's military position and captured strategically important
              territories.
            </p>
            <p>
              One of his major early victories was <strong className="text-gray-900">Nuwakot</strong>.
            </p>
            <p>
              Nuwakot was extremely important because it connected Gorkha with the trade routes around
              the Kathmandu Valley.
            </p>
            <p>
              After Nuwakot, Gorkhali forces continued their campaign.
            </p>
            <p>
              There were battles around <strong className="text-gray-900">Kirtipur</strong>, one of the
              most difficult obstacles in the campaign.
            </p>
            <p>
              The fighting was brutal.
            </p>
            <p>
              Eventually, after repeated attempts, Prithvi Narayan Shah's forces captured Kirtipur.
            </p>
            <p>
              Then the pressure on the Kathmandu Valley increased.
            </p>
            <p>
              In <strong className="text-gray-900">1768 AD</strong>, Gorkhali forces captured{" "}
              <strong className="text-gray-900">Kantipur</strong>, present-day Kathmandu.
            </p>
            <p>
              The following year, <strong className="text-gray-900">Lalitpur and Bhaktapur</strong> also
              came under Gorkhali control.
            </p>
            <p>
              Prithvi Narayan Shah moved his capital to Kathmandu.
            </p>
            <p>
              The foundation of unified modern Nepal had been created.
            </p>
            <p>
              Nepal Tourism Board identifies the conquest of the Kathmandu Valley by 1769 as the
              foundation of the unified kingdom. (
              <a href="https://trade.ntb.gov.np/know-nepal/nepals-history/" target="_blank" rel="noreferrer" className="text-gray-900 underline">Nepal Tourism Board</a>)
            </p>
            <p>
              The Ministry of Foreign Affairs also traces the beginning of Nepal's organized
              foreign-affairs institution to the period following unification in 1769. (
              <a href="https://www.mofa.gov.np/pages/introduction-10/" target="_blank" rel="noreferrer" className="text-gray-900 underline">Ministry of Foreign Affairs of Nepal</a>)
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Prithvi Narayan Shah's Vision</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              Prithvi Narayan Shah understood that Nepal's geographical position was extremely sensitive.
            </p>
            <p>
              To the north was Tibet and the Qing Empire.
            </p>
            <p>
              To the south was British-controlled India.
            </p>
            <p>
              Nepal was located between two powerful geopolitical worlds.
            </p>
            <p>
              He therefore wanted Nepal to remain independent.
            </p>
            <p>
              His famous ideas about Nepal being like a{" "}
              <strong className="text-gray-900">"yam between two boulders"</strong> reflected this
              strategic thinking.
            </p>
            <p>
              He also promoted economic self-reliance and warned against excessive foreign influence.
            </p>
            <p>
              His reign established the foundation of the Shah monarchy that would rule Nepal for more
              than two centuries.
            </p>
            <p>
              But unification did not end immediately with Prithvi Narayan Shah.
            </p>
            <p>
              His successors continued expanding the kingdom.
            </p>
          </div>
        </div>
      </section>

      {/* Expansion */}
      <section id="expansion" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Expansion After Prithvi Narayan Shah</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              Prithvi Narayan Shah died in <strong className="text-gray-900">1775 AD</strong>.
            </p>
            <p>
              His son <strong className="text-gray-900">Pratap Singh Shah</strong> succeeded him.
            </p>
            <p>
              After Pratap Singh Shah's short reign, <strong className="text-gray-900">Bahadur Shah</strong> played
              an important role as regent and continued the expansion of the kingdom.
            </p>
            <p>
              Nepal expanded westward and eastward.
            </p>
            <p>
              The Gorkhali state became much larger.
            </p>
            <p>
              Nepal eventually came into direct conflict with powerful neighbors, particularly the
              British East India Company.
            </p>
            <p>
              That conflict would change Nepal's borders permanently.
            </p>
          </div>
        </div>
      </section>

      {/* Anglo-Nepalese War */}
      <section id="anglo-nepal" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The Anglo-Nepalese War</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              By the early nineteenth century, the British East India Company had expanded enormously
              across the Indian subcontinent.
            </p>
            <p>
              Nepal and the British eventually came into conflict over territory.
            </p>
            <p>
              The <strong className="text-gray-900">Anglo-Nepalese War began in 1814</strong>.
            </p>
            <p>
              Nepali soldiers, often known as <strong className="text-gray-900">Gurkhas</strong>, fought
              against the much larger British forces.
            </p>
            <p>
              Nepali commanders such as <strong className="text-gray-900">Balbhadra Kunwar</strong>,{" "}
              <strong className="text-gray-900">Amar Singh Thapa</strong> and{" "}
              <strong className="text-gray-900">Bhakti Thapa</strong> became famous for their resistance.
            </p>
            <p>
              The Nepali forces fought strongly, but Nepal eventually had to accept a settlement.
            </p>
            <p>
              The war ended with the <strong className="text-gray-900">Treaty of Sugauli in 1816</strong>.
            </p>
            <p>
              Nepal lost substantial territories.
            </p>
            <p>
              The treaty established much of the basis of Nepal's later territorial boundaries. A
              government-published historical chronology records the 1814–16 war and the treaty as a
              major turning point in the formation of Nepal's modern borders. (
              <a href="https://giwmscdnone.gov.np/media/app/public/56/posts/1684493293_25.pdf" target="_blank" rel="noreferrer" className="text-gray-900 underline">Government of Nepal</a>)
            </p>
            <p>
              Nepal, however, remained independent.
            </p>
            <p>
              That was extremely significant.
            </p>
            <p>
              Unlike much of South Asia, Nepal was not incorporated into the British Empire.
            </p>
          </div>
        </div>
      </section>

      {/* Bhimsen Thapa */}
      <section id="bhimsen" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The Rise of Bhimsen Thapa</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              After the wars of expansion, Nepal entered a period of internal political struggle.
            </p>
            <p>
              One of the most powerful figures was <strong className="text-gray-900">Bhimsen Thapa</strong>.
            </p>
            <p>
              He became the dominant political figure and served as Mukhtiyar, roughly equivalent to
              prime minister.
            </p>
            <p>
              He attempted to strengthen the military and state.
            </p>
            <p>
              But Nepal's court politics were extremely dangerous.
            </p>
            <p>
              Powerful families competed against one another.
            </p>
            <p>
              Conspiracies, alliances and assassinations became common.
            </p>
            <p>
              Eventually, Bhimsen Thapa fell from power.
            </p>
            <p>
              Nepal entered an increasingly unstable political period.
            </p>
            <p>
              Then came one of the most important and violent events in Nepal's political history.
            </p>
          </div>
        </div>
      </section>

      {/* Kot Massacre */}
      <section id="kot" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The Kot Massacre</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              In <strong className="text-gray-900">1846 AD</strong>, a political crisis exploded at the
              Kathmandu palace.
            </p>
            <p>
              A gathering of military and political leaders took place at the{" "}
              <strong className="text-gray-900">Kot</strong>, the palace courtyard.
            </p>
            <p>
              During the confrontation, many important political figures were killed.
            </p>
            <p>
              A military leader named <strong className="text-gray-900">Jung Bahadur Kunwar</strong> emerged
              as the strongest figure.
            </p>
            <p>
              He transformed his power into a new political system.
            </p>
            <p>
              The Shah kings remained on the throne.
            </p>
            <p>
              But real power moved into the hands of Jung Bahadur and his family.
            </p>
            <p>
              The <strong className="text-gray-900">Rana regime</strong> had begun.
            </p>
          </div>
        </div>
      </section>

      {/* Rana rule */}
      <section id="rana" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The 104 Years of Rana Rule</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              The Rana system lasted from <strong className="text-gray-900">1846 to 1951</strong>.
            </p>
            <p>
              For 104 years, hereditary Rana prime ministers controlled Nepal.
            </p>
            <p>
              The Shah king remained formally the monarch, but the Rana prime minister held the real
              political power.
            </p>
            <p>
              The position of prime minister effectively became hereditary within the Rana family.
            </p>
            <p>
              The Rana rulers were extremely powerful.
            </p>
            <p>
              They controlled the military, government administration and foreign relations.
            </p>
            <p>
              Nepal also remained relatively isolated from the outside world.
            </p>
            <p>
              The Rana regime did introduce certain modernization projects, including schools,
              buildings, roads and administrative reforms.
            </p>
            <p>
              But political freedom was severely restricted.
            </p>
            <p>
              Education was limited.
            </p>
            <p>
              Ordinary citizens had almost no role in government.
            </p>
            <p>
              Political parties were prohibited.
            </p>
            <p>
              The Rana family lived in enormous palaces while the majority of Nepal remained poor and
              largely rural.
            </p>
            <p>
              The Election Commission of Nepal records the Rana period as the period from{" "}
              <strong className="text-gray-900">BS 1903 to 2004</strong>, approximately 1846 to 1951. (
              <a href="https://election.gov.np/np/page/overview-of-ecns-role" target="_blank" rel="noreferrer" className="text-gray-900 underline">Election Commission of Nepal</a>)
            </p>
          </div>
        </div>
      </section>

      {/* Europe journey */}
      <section id="europe" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Jung Bahadur Rana Travels to Europe</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              One of the most fascinating moments of Rana history was Jung Bahadur Rana's journey to
              Europe.
            </p>
            <p>
              In the nineteenth century, he travelled to Britain and France.
            </p>
            <p>
              He saw European military organization, technology, architecture and government
              institutions.
            </p>
            <p>
              After returning to Nepal, he introduced certain reforms.
            </p>
            <p>
              One important achievement associated with his period was the{" "}
              <strong className="text-gray-900">Muluki Ain</strong>, a major legal code introduced in
              1854 AD.
            </p>
            <p>
              However, the Rana system remained authoritarian.
            </p>
            <p>
              Modernization did not mean democracy.
            </p>
          </div>
        </div>
      </section>

      {/* Awakening */}
      <section id="awakening" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The Beginning of Political Awakening</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              By the twentieth century, educated Nepalis increasingly began demanding political change.
            </p>
            <p>
              Nepalis living in India were exposed to the Indian independence movement and democratic
              ideas.
            </p>
            <p>
              Organizations opposing Rana rule began to emerge.
            </p>
            <p>
              Among them was the <strong className="text-gray-900">Nepali Congress</strong>, which
              eventually became the most important democratic political force in the country.
            </p>
            <p>
              The Rana government attempted to suppress political opposition.
            </p>
            <p>
              But the movement continued growing.
            </p>
            <p>
              Then the situation changed dramatically after the Second World War and the independence
              of India.
            </p>
          </div>
        </div>
      </section>

      {/* Revolution 1950-51 */}
      <section id="revolution-1951" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The Revolution of 1950–51</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              King <strong className="text-gray-900">Tribhuvan</strong> became an important figure in the
              struggle against Rana rule.
            </p>
            <p>
              He supported the democratic movement.
            </p>
            <p>
              In 1950, political forces opposed to the Rana regime launched an armed and political
              struggle.
            </p>
            <p>
              King Tribhuvan eventually left the country and went to India.
            </p>
            <p>
              The Rana government attempted to replace him, but the political situation became
              increasingly impossible to control.
            </p>
            <p>
              Pressure from India, democratic forces and the monarchy eventually forced the Rana regime
              to negotiate.
            </p>
            <p>
              In <strong className="text-gray-900">1951</strong>, Rana rule ended.
            </p>
            <p>
              The king returned.
            </p>
            <p>
              A new era had begun.
            </p>
            <p>
              Nepal had moved from hereditary Rana rule toward constitutional government.
            </p>
            <p>
              The Nepal Tourism Board similarly identifies the early 1950s movement, supported by King
              Tribhuvan, as the event that ended the Rana regime. (
              <a href="https://trade.ntb.gov.np/know-nepal/nepals-history/" target="_blank" rel="noreferrer" className="text-gray-900 underline">Nepal Tourism Board</a>)
            </p>
          </div>
        </div>
      </section>

      {/* Democracy begins */}
      <section id="democracy" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Democracy Begins</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              After the fall of the Ranas, Nepal began experimenting with democracy.
            </p>
            <p>
              Political parties became legal.
            </p>
            <p>
              Government institutions began changing.
            </p>
            <p>
              The country started opening to the outside world.
            </p>
            <p>
              In <strong className="text-gray-900">1955</strong>, Nepal joined the{" "}
              <strong className="text-gray-900">United Nations</strong>.
            </p>
            <p>
              In <strong className="text-gray-900">1959</strong>, Nepal held its first general election
              under a parliamentary system.
            </p>
            <p>
              The Nepali Congress won the election.
            </p>
            <p>
              <strong className="text-gray-900">Bishweshwar Prasad Koirala</strong>, commonly known as
              BP Koirala, became Nepal's first elected prime minister.
            </p>
            <p>
              For a short period, Nepal experienced parliamentary democracy.
            </p>
            <p>
              But it would not last.
            </p>
          </div>
        </div>
      </section>

      {/* Mahendra */}
      <section id="mahendra" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">King Mahendra Takes Control</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              King Tribhuvan died in 1955.
            </p>
            <p>
              His son <strong className="text-gray-900">King Mahendra</strong> succeeded him.
            </p>
            <p>
              In 1960, King Mahendra dismissed the elected government.
            </p>
            <p>
              He dissolved Parliament and arrested political leaders.
            </p>
            <p>
              The democratic experiment ended.
            </p>
            <p>
              Nepal entered a new political system.
            </p>
            <p>
              The <strong className="text-gray-900">Panchayat system</strong> was introduced.
            </p>
            <p>
              Political parties were banned.
            </p>
          </div>
        </div>
      </section>

      {/* Panchayat */}
      <section id="panchayat" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The Panchayat Era</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              From <strong className="text-gray-900">1960 to 1990</strong>, Nepal was governed under the
              Panchayat system.
            </p>
            <p>
              The king was the central political authority.
            </p>
            <p>
              There were elections, but political parties were not allowed to compete openly.
            </p>
            <p>
              The system was officially presented as a partyless democratic system.
            </p>
            <p>
              But critics argued that it concentrated too much power in the monarchy.
            </p>
            <p>
              During these decades, Nepal also experienced major social and economic changes.
            </p>
            <p>
              Roads expanded.
            </p>
            <p>
              Schools increased.
            </p>
            <p>
              Hospitals and government institutions developed.
            </p>
            <p>
              The country became more connected to the international community.
            </p>
            <p>
              Tourism grew.
            </p>
            <p>
              Mount Everest became a symbol of Nepal worldwide.
            </p>
            <p>
              In <strong className="text-gray-900">1953</strong>,{" "}
              <strong className="text-gray-900">Tenzing Norgay Sherpa</strong> and{" "}
              <strong className="text-gray-900">Edmund Hillary</strong> made the first confirmed ascent
              of Mount Everest.
            </p>
            <p>
              Nepal also established diplomatic relations with many countries.
            </p>
            <p>
              But political opposition continued underground.
            </p>
          </div>
        </div>
      </section>

      {/* 1990 movement */}
      <section id="movement-1990" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The 1990 People's Movement</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              By the late 1980s, demands for political reform had become increasingly strong.
            </p>
            <p>
              Political parties formed alliances.
            </p>
            <p>
              Students, workers and ordinary citizens participated in demonstrations.
            </p>
            <p>
              In <strong className="text-gray-900">2046 BS</strong>, the{" "}
              <strong className="text-gray-900">People's Movement of 1990</strong> erupted.
            </p>
            <p>
              Mass protests challenged the Panchayat system.
            </p>
            <p>
              King Birendra eventually accepted political reform.
            </p>
            <p>
              The Panchayat system ended.
            </p>
            <p>
              Nepal became a <strong className="text-gray-900">constitutional monarchy with multiparty
              democracy</strong>.
            </p>
            <p>
              The <strong className="text-gray-900">Constitution of the Kingdom of Nepal 2047 BS</strong> established
              a parliamentary system with the king as constitutional head of state.
            </p>
            <p>
              Parliamentary institutions returned.
            </p>
            <p>
              Political parties became legal.
            </p>
            <p>
              Elections were held.
            </p>
            <p>
              For many Nepalis, it was the beginning of a new democratic era.
            </p>
          </div>
        </div>
      </section>

      {/* 1990s */}
      <section id="nineties" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The 1990s: Hope and Problems</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              The 1990s were full of political hope.
            </p>
            <p>
              But democracy was unstable.
            </p>
            <p>
              Governments changed frequently.
            </p>
            <p>
              Political parties fought internally.
            </p>
            <p>
              Coalition governments became common.
            </p>
            <p>
              At the same time, Nepal remained deeply unequal.
            </p>
            <p>
              Poverty, unemployment, land inequality, discrimination and lack of development created
              frustration, especially in rural areas.
            </p>
            <p>
              This frustration eventually contributed to one of the darkest chapters of modern Nepal's
              history.
            </p>
          </div>
        </div>
      </section>

      {/* Insurgency */}
      <section id="insurgency" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The Maoist Insurgency Begins</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              On <strong className="text-gray-900">13 February 1996</strong>, the Communist Party of
              Nepal (Maoist) launched what it called the <strong className="text-gray-900">People's War</strong>.
            </p>
            <p>
              The Maoists wanted to overthrow the monarchy and establish a new political system.
            </p>
            <p>
              The conflict began in rural areas and gradually spread across the country.
            </p>
            <p>
              Government security forces fought Maoist guerrillas.
            </p>
            <p>
              Thousands of people were killed.
            </p>
            <p>
              Thousands disappeared.
            </p>
            <p>
              Many were displaced.
            </p>
            <p>
              Infrastructure was destroyed.
            </p>
            <p>
              Entire communities were affected.
            </p>
            <p>
              The conflict lasted for approximately ten years.
            </p>
            <p>
              But another tragedy would soon shake the country.
            </p>
          </div>
        </div>
      </section>

      {/* Royal massacre */}
      <section id="massacre-2001" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The Royal Massacre of 2001</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              On <strong className="text-gray-900">1 June 2001</strong>, Nepal experienced one of its
              most shocking events.
            </p>
            <p>
              Members of the royal family were killed inside the Narayanhiti Royal Palace.
            </p>
            <p>
              King <strong className="text-gray-900">Birendra</strong>, Queen{" "}
              <strong className="text-gray-900">Aishwarya</strong> and several other members of the royal
              family died.
            </p>
            <p>
              The official account attributed the massacre to Crown Prince Dipendra.
            </p>
            <p>
              The tragedy created enormous national shock.
            </p>
            <p>
              Prince Dipendra was declared king while in a coma and died shortly afterward.
            </p>
            <p>
              King Birendra's brother <strong className="text-gray-900">Gyanendra</strong> became king.
            </p>
            <p>
              Nepal entered an extremely uncertain period.
            </p>
          </div>
        </div>
      </section>

      {/* Gyanendra */}
      <section id="gyanendra" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">King Gyanendra and Direct Rule</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              The Maoist conflict continued.
            </p>
            <p>
              Political instability increased.
            </p>
            <p>
              King Gyanendra gradually became more directly involved in politics.
            </p>
            <p>
              In <strong className="text-gray-900">2005</strong>, he dismissed the government and assumed
              direct executive power.
            </p>
            <p>
              Political parties opposed him.
            </p>
            <p>
              Civil society organizations protested.
            </p>
            <p>
              The Maoists and mainstream political parties eventually found common ground against the
              monarchy.
            </p>
            <p>
              That alliance would change Nepal forever.
            </p>
          </div>
        </div>
      </section>

      {/* 2006 movement */}
      <section id="movement-2006" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The People's Movement of 2006</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              In <strong className="text-gray-900">2062–63 BS</strong>, massive protests erupted across
              Nepal.
            </p>
            <p>
              Millions of people participated in demonstrations.
            </p>
            <p>
              The movement became known as <strong className="text-gray-900">Jana Andolan II</strong>, or
              the Second People's Movement.
            </p>
            <p>
              After weeks of protests, King Gyanendra was forced to restore Parliament.
            </p>
            <p>
              The political parties and Maoists moved toward peace negotiations.
            </p>
            <p>
              The conflict was finally coming to an end.
            </p>
            <p>
              In <strong className="text-gray-900">November 2006</strong>, the government and Maoists
              signed the <strong className="text-gray-900">Comprehensive Peace Agreement</strong>.
            </p>
            <p>
              The decade-long conflict formally ended.
            </p>
            <p>
              The Nepal Tourism Board records the 2006 peace agreement as the major political
              settlement that committed the sides to peace and democratic transformation. (
              <a href="https://trade.ntb.gov.np/know-nepal/nepals-history/" target="_blank" rel="noreferrer" className="text-gray-900 underline">Nepal Tourism Board</a>)
            </p>
          </div>
        </div>
      </section>

      {/* Constituent Assembly */}
      <section id="constituent" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The Constituent Assembly</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              Nepal now faced a historic question:
            </p>
            <p>
              <strong className="text-gray-900">What should Nepal become?</strong>
            </p>
            <p>
              A monarchy?
            </p>
            <p>
              A republic?
            </p>
            <p>
              A federal state?
            </p>
            <p>
              A unitary state?
            </p>
            <p>
              A new constitution had to answer these questions.
            </p>
            <p>
              In <strong className="text-gray-900">2008</strong>, Nepal held its first Constituent
              Assembly election.
            </p>
            <p>
              The Maoists emerged as the largest political force.
            </p>
            <p>
              The Constituent Assembly began the process of creating a new political system.
            </p>
            <p>
              Then came the historic moment.
            </p>
          </div>
        </div>
      </section>

      {/* Republic */}
      <section id="republic" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Nepal Becomes a Republic</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              On <strong className="text-gray-900">15 Jestha 2065 BS</strong>, corresponding to{" "}
              <strong className="text-gray-900">28 May 2008</strong>, the Constituent Assembly formally
              abolished the monarchy.
            </p>
            <p>
              After approximately 240 years of Shah monarchy, Nepal became a{" "}
              <strong className="text-gray-900">republic</strong>.
            </p>
            <p>
              The monarchy was over.
            </p>
            <p>
              Nepal now had a president as head of state.
            </p>
            <p>
              <strong className="text-gray-900">Dr. Ram Baran Yadav</strong> became the first President
              of the Federal Democratic Republic of Nepal.
            </p>
            <p>
              The Office of the President confirms that the Constituent Assembly abolished the monarchy
              on 28 May 2008 and elected Ram Baran Yadav as the first president. (
              <a href="https://president.gov.np/history-background/" target="_blank" rel="noreferrer" className="text-gray-900 underline">Office of the President of Nepal</a>)
            </p>
            <p>
              For millions of Nepalis, this was one of the biggest political transformations in the
              country's history.
            </p>
            <p>
              Nepal had gone from monarchy to republic.
            </p>
            <p>
              But the journey was not finished.
            </p>
          </div>
        </div>
      </section>

      {/* First CA fails */}
      <section id="first-ca-fails" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The First Constituent Assembly Fails</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              The first Constituent Assembly had an enormous responsibility.
            </p>
            <p>
              It had to write a new constitution.
            </p>
            <p>
              But political parties disagreed on many fundamental questions:
            </p>
            <p>
              How should federalism work?
            </p>
            <p>
              How should provinces be created?
            </p>
            <p>
              How should power be shared?
            </p>
            <p>
              How should the electoral system work?
            </p>
            <p>
              What should the relationship between central and provincial governments be?
            </p>
            <p>
              How should marginalized communities be represented?
            </p>
            <p>
              The disagreements became intense.
            </p>
            <p>
              Eventually, the first Constituent Assembly was dissolved in{" "}
              <strong className="text-gray-900">2012</strong> without producing a constitution.
            </p>
            <p>
              Nepal entered another period of uncertainty.
            </p>
            <p>
              A second Constituent Assembly was elected in <strong className="text-gray-900">2013</strong>.
            </p>
            <p>
              This time, political parties worked toward completing the constitution.
            </p>
          </div>
        </div>
      </section>

      {/* 2015 Constitution */}
      <section id="constitution-2015" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The 2015 Constitution</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              After years of political struggle, Nepal finally promulgated its new constitution on{" "}
              <strong className="text-gray-900">20 September 2015</strong>, corresponding to{" "}
              <strong className="text-gray-900">3 Ashwin 2072 BS</strong>.
            </p>
            <p>
              The Constitution established Nepal as a:
            </p>
            <p>
              <strong className="text-gray-900">Federal Democratic Republic.</strong>
            </p>
            <p>
              It also established three levels of government:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Federal government</li>
              <li>Provincial governments</li>
              <li>Local governments</li>
            </ul>
            <p>
              The Constitution declares Nepal a sovereign, secular, inclusive, democratic,
              socialism-oriented, federal democratic republican state. (
              <a href="https://repository.lawcommission.gov.np/np/category/documents/prevailing-law/%E0%A4%B8%E0%A4%82%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%A8/constitution-of-nepal/" target="_blank" rel="noreferrer" className="text-gray-900 underline">Law Commission Repository</a>)
            </p>
            <p>
              The Constitution also recognizes Nepal as a country of enormous ethnic, linguistic,
              religious and cultural diversity.
            </p>
            <p>
              The Ministry of Foreign Affairs notes that the Constitution was adopted by the
              Constituent Assembly after a long drafting process involving the country's diverse
              communities. (
              <a href="https://mofa.gov.np/content/272/press-release-on-promulgation-of-constitution/" target="_blank" rel="noreferrer" className="text-gray-900 underline">Ministry of Foreign Affairs</a>)
            </p>
            <p>
              This was the beginning of Nepal's federal political structure.
            </p>
          </div>
        </div>
      </section>

      {/* Earthquake */}
      <section id="earthquake" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The 2015 Earthquake</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              But 2015 was also one of the most painful years in modern Nepalese history.
            </p>
            <p>
              On <strong className="text-gray-900">25 April 2015</strong>, a massive earthquake struck
              Nepal.
            </p>
            <p>
              Thousands of people died.
            </p>
            <p>
              Historic temples and buildings collapsed.
            </p>
            <p>
              Entire villages were destroyed.
            </p>
            <p>
              The earthquake was followed by additional major aftershocks.
            </p>
            <p>
              Nepal received international assistance.
            </p>
            <p>
              Ordinary Nepalis also demonstrated extraordinary solidarity.
            </p>
            <p>
              People from different provinces, communities and backgrounds helped each other.
            </p>
            <p>
              The reconstruction process continued for years.
            </p>
          </div>
        </div>
      </section>

      {/* Federal Nepal */}
      <section id="federal" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Federal Nepal</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              After the constitution, Nepal began implementing federalism.
            </p>
            <p>
              The country was divided into <strong className="text-gray-900">seven provinces</strong>.
            </p>
            <p>
              Local governments were given constitutional responsibilities.
            </p>
            <p>
              In <strong className="text-gray-900">2017</strong>, Nepal held local, provincial and federal
              elections under the new system.
            </p>
            <p>
              For the first time, Nepal's federal structure began operating through elected governments
              at all three levels.
            </p>
            <p>
              This was a huge change from the highly centralized political system of earlier decades.
            </p>
            <p>
              A mayor in a municipality, a provincial government and the federal government now had
              constitutionally defined responsibilities.
            </p>
          </div>
        </div>
      </section>

      {/* 2020s */}
      <section id="twenties" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Nepal in the 2020s</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              Nepal entered the 2020s as a federal democratic republic.
            </p>
            <p>
              But the country continued to face major challenges.
            </p>
            <p>
              Political parties remained powerful.
            </p>
            <p>
              Governments continued to change.
            </p>
            <p>
              Young people increasingly demanded better education, employment, technology, transparency
              and opportunities.
            </p>
            <p>
              Millions of Nepalis continued working abroad.
            </p>
            <p>
              Remittances became a major part of Nepal's economy.
            </p>
            <p>
              At the same time, Nepal experienced rapid growth in:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Internet access</li>
              <li>Digital payments</li>
              <li>Online businesses</li>
              <li>Technology startups</li>
              <li>Social media</li>
              <li>E-commerce</li>
              <li>Mobile banking</li>
              <li>Digital government services</li>
            </ul>
            <p>
              The younger generation began imagining a different Nepal.
            </p>
            <p>
              A Nepal where technology could create opportunities without everyone needing to leave the
              country.
            </p>
          </div>
        </div>
      </section>

      {/* 2083 */}
      <section id="2083" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Nepal in 2083 BS</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              Now we arrive at <strong className="text-gray-900">2083 BS</strong>.
            </p>
            <p>
              Nepal today is no longer the fragmented collection of medieval kingdoms that existed
              around 1500 BS.
            </p>
            <p>
              It is no longer the absolute monarchy of the Rana period.
            </p>
            <p>
              It is no longer the Panchayat state of the twentieth century.
            </p>
            <p>
              And it is no longer a constitutional monarchy.
            </p>
            <p>
              Nepal today is a <strong className="text-gray-900">federal democratic republic</strong>.
            </p>
            <p>
              The Constitution places sovereignty and state authority in the people. It provides a
              three-level state structure consisting of federal, provincial and local governments. (
              <a href="https://repository.lawcommission.gov.np/np/category/documents/prevailing-law/%E0%A4%B8%E0%A4%82%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%A8/constitution-of-nepal/" target="_blank" rel="noreferrer" className="text-gray-900 underline">Law Commission Repository</a>)
            </p>
            <p>
              The president is the head of state, while the prime minister leads the government.
            </p>
            <p>
              The country has a federal parliament, provincial assemblies and local governments.
            </p>
            <p>
              But Nepal's story is not finished.
            </p>
          </div>
        </div>
      </section>

      {/* Entire journey */}
      <section id="journey" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">From 1500 BS to 2083 BS: The Entire Journey</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              If we step back and look at the whole story, Nepal's history can almost be understood as
              a series of transformations.
            </p>
            <p>
              Around <strong className="text-gray-900">1500 BS</strong>, Nepal was a land of multiple
              kingdoms.
            </p>
            <p>
              The Kathmandu Valley became a center of Malla civilization.
            </p>
            <p>
              Western Nepal developed its own powerful political traditions.
            </p>
            <p>
              Then the Gorkha kingdom rose.
            </p>
            <p>
              <strong className="text-gray-900">Prithvi Narayan Shah</strong> united the Kathmandu Valley
              and began the formation of modern Nepal.
            </p>
            <p>
              The Shah rulers expanded the kingdom.
            </p>
            <p>
              Nepal fought the British and lost territory but preserved its independence.
            </p>
            <p>
              Then came political instability.
            </p>
            <p>
              <strong className="text-gray-900">Jung Bahadur Rana</strong> seized power.
            </p>
            <p>
              For <strong className="text-gray-900">104 years</strong>, the Rana family controlled the
              state.
            </p>
            <p>
              The democratic movement eventually defeated the Rana regime.
            </p>
            <p>
              Nepal experimented with parliamentary democracy.
            </p>
            <p>
              King Mahendra ended that experiment and introduced the Panchayat system.
            </p>
            <p>
              For thirty years, political parties were banned.
            </p>
            <p>
              Then came the <strong className="text-gray-900">1990 People's Movement</strong>.
            </p>
            <p>
              Multiparty democracy returned.
            </p>
            <p>
              But political instability and inequality continued.
            </p>
            <p>
              The <strong className="text-gray-900">Maoist insurgency</strong> began in 1996.
            </p>
            <p>
              Ten years of conflict followed.
            </p>
            <p>
              The <strong className="text-gray-900">2001 royal massacre</strong> shocked the country.
            </p>
            <p>
              King Gyanendra eventually took direct control.
            </p>
            <p>
              The <strong className="text-gray-900">2006 People's Movement</strong> forced the monarchy
              to surrender political power.
            </p>
            <p>
              The Maoists and mainstream parties signed the peace agreement.
            </p>
            <p>
              The Constituent Assembly was elected.
            </p>
            <p>
              And in <strong className="text-gray-900">2008</strong>, Nepal abolished its monarchy.
            </p>
            <p>
              The country became a republic.
            </p>
            <p>
              After years of political debate, the <strong className="text-gray-900">2015 Constitution</strong> established
              the federal democratic republican system.
            </p>
            <p>
              And now, in <strong className="text-gray-900">2083 BS</strong>, Nepal continues its journey
              as a federal democratic republic.
            </p>
          </div>
        </div>
      </section>

      {/* Bigger meaning */}
      <section id="meaning" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The Bigger Meaning of Nepal's History</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              The history of Nepal is ultimately a story of <strong className="text-gray-900">change</strong>.
            </p>
            <p>
              A small kingdom became a larger kingdom.
            </p>
            <p>
              A kingdom became a centralized state.
            </p>
            <p>
              A monarchy became controlled by hereditary prime ministers.
            </p>
            <p>
              A Rana regime became a constitutional monarchy.
            </p>
            <p>
              A constitutional monarchy became a partyless Panchayat system.
            </p>
            <p>
              Panchayat became multiparty democracy.
            </p>
            <p>
              Democracy became a republic.
            </p>
            <p>
              And the republic became federal.
            </p>
            <p>
              But there is another story underneath all those political changes.
            </p>
            <p>
              It is the story of ordinary Nepalis.
            </p>
            <p>
              Farmers working in the hills.
            </p>
            <p>
              Traders crossing mountain routes.
            </p>
            <p>
              Newar craftsmen building extraordinary temples.
            </p>
            <p>
              Soldiers defending mountain forts.
            </p>
            <p>
              Students demanding democracy.
            </p>
            <p>
              Workers migrating abroad.
            </p>
            <p>
              Mothers raising families during war.
            </p>
            <p>
              Young people demanding political change.
            </p>
            <p>
              Citizens rebuilding after earthquakes.
            </p>
            <p>
              And millions of Nepalis trying to create a better future.
            </p>
            <p>
              Kings, prime ministers and political parties appear prominently in history books, but
              Nepal's history was ultimately shaped by{" "}
              <strong className="text-gray-900">millions of ordinary people</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Final chapter */}
      <section id="final" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Final Chapter: Nepal's Story Continues</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              From the medieval kingdoms of <strong className="text-gray-900">1500 BS</strong> to the
              federal republic of <strong className="text-gray-900">2083 BS</strong>, Nepal has survived
              extraordinary political and social changes.
            </p>
            <p>
              It has experienced wars, palace conspiracies, authoritarian governments, democratic
              revolutions, civil war, natural disasters and enormous political transformations.
            </p>
            <p>
              Yet Nepal has remained independent.
            </p>
            <p>
              Its geography has always been challenging.
            </p>
            <p>
              Its mountains, hills and plains have created enormous diversity.
            </p>
            <p>
              Its languages, cultures, religions and ethnic communities have produced a society unlike
              any other.
            </p>
            <p>
              The Nepal of today is therefore the product of centuries of history.
            </p>
            <p>
              <strong className="text-gray-900">Prithvi Narayan Shah's unification created the political
              foundation of modern Nepal.</strong>
            </p>
            <p>
              <strong className="text-gray-900">The Rana period shaped the country's struggle against
              hereditary authoritarianism.</strong>
            </p>
            <p>
              <strong className="text-gray-900">The democratic movements established the people's demand
              for political participation.</strong>
            </p>
            <p>
              <strong className="text-gray-900">The Maoist conflict and peace process transformed the
              political system.</strong>
            </p>
            <p>
              <strong className="text-gray-900">The abolition of monarchy created the republic.</strong>
            </p>
            <p>
              <strong className="text-gray-900">The 2015 Constitution created the federal framework of
              today's state.</strong>
            </p>
            <p>
              And now the next chapter belongs to the present generation.
            </p>
            <p>
              The story that began with kingdoms and kings has reached a point where the future of
              Nepal increasingly depends on its citizens, institutions, young people, technology,
              education, economy and democracy.
            </p>
            <p>
              <strong className="text-gray-900">1500 BS was the Nepal of kingdoms.</strong>
            </p>
            <p>
              <strong className="text-gray-900">1769 was the Nepal of unification.</strong>
            </p>
            <p>
              <strong className="text-gray-900">1846 was the Nepal of Rana power.</strong>
            </p>
            <p>
              <strong className="text-gray-900">1951 was the Nepal of democratic awakening.</strong>
            </p>
            <p>
              <strong className="text-gray-900">1990 was the Nepal of multiparty democracy.</strong>
            </p>
            <p>
              <strong className="text-gray-900">2008 was the Nepal of republican transformation.</strong>
            </p>
            <p>
              <strong className="text-gray-900">2015 was the Nepal of federal constitutionalism.</strong>
            </p>
            <p>
              And <strong className="text-gray-900">2083 BS is the Nepal of a new generation deciding what
              comes next.</strong>
            </p>
            <p>
              Nepal's history, therefore, is not finished.
            </p>
            <p>
              <strong className="text-gray-900">The next chapter is still being written.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section id="sources" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm text-gray-600 leading-relaxed list-decimal pl-6">
            <li>
              <a href="https://trade.ntb.gov.np/know-nepal/nepals-history/" target="_blank" rel="noreferrer" className="underline hover:text-gray-900">
                History | Nepal Tourism Board
              </a>
            </li>
            <li>
              <a href="https://www.mofa.gov.np/pages/introduction-10/" target="_blank" rel="noreferrer" className="underline hover:text-gray-900">
                Introduction | Ministry of Foreign Affairs
              </a>
            </li>
            <li>
              <a href="https://giwmscdnone.gov.np/media/app/public/56/posts/1684493293_25.pdf" target="_blank" rel="noreferrer" className="underline hover:text-gray-900">
                Historical chronology | Government of Nepal
              </a>
            </li>
            <li>
              <a href="https://election.gov.np/np/page/overview-of-ecns-role" target="_blank" rel="noreferrer" className="underline hover:text-gray-900">
                Election Commission Nepal
              </a>
            </li>
            <li>
              <a href="https://president.gov.np/history-background/" target="_blank" rel="noreferrer" className="underline hover:text-gray-900">
                History &amp; Background | Office of the President of Nepal
              </a>
            </li>
            <li>
              <a href="https://repository.lawcommission.gov.np/np/category/documents/prevailing-law/%E0%A4%B8%E0%A4%82%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%A8/constitution-of-nepal/" target="_blank" rel="noreferrer" className="underline hover:text-gray-900">
                Constitution of Nepal | Law Commission
              </a>
            </li>
            <li>
              <a href="https://mofa.gov.np/content/272/press-release-on-promulgation-of-constitution/" target="_blank" rel="noreferrer" className="underline hover:text-gray-900">
                Press Release on Promulgation of Constitution | Ministry of Foreign Affairs
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/blog" className="py-2">
            <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-1">All articles</p>
            <p className="text-sm font-bold text-gray-900">Back to the blog index</p>
          </Link>
          <Link to="/blog/dashain-story" className="py-2 text-right">
            <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-1">Next article</p>
            <p className="text-sm font-bold text-gray-900">Dashain: Nepal's grandest festival</p>
          </Link>
        </div>
        <p className="text-center mt-10 text-xs text-gray-600">
          <span className="inline-flex items-center gap-2"><Emoji char="🙏" size="1em" /> Thank you for reading Festival Nepal</span>
        </p>
      </section>
    </div>
  );
}
