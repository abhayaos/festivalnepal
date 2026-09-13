import { Link } from "react-router-dom";
import Emoji from "../components/Emoji";
import ScrollSpy from "../components/ScrollSpy";

const contents = [
  { id: "origin", label: "Origin" },
  { id: "five-days", label: "The Five Days" },
  { id: "kaag", label: "Kaag Tihar" },
  { id: "kukur", label: "Kukur Tihar" },
  { id: "gai-lakshmi", label: "Lakshmi Puja" },
  { id: "diyos", label: "Lighting Diyos" },
  { id: "deusi", label: "Deusi-Bhailo" },
  { id: "food", label: "Tihar Food" },
  { id: "day-four", label: "Day Four" },
  { id: "mha", label: "Mha Puja" },
  { id: "bhai-tika", label: "Bhai Tika" },
  { id: "family", label: "Family & Nature" },
  { id: "modern", label: "Modern Nepal" },
  { id: "meaning-light", label: "Meaning of Light" },
  { id: "conclusion", label: "Conclusion" },
];

export default function TiharStory() {
  return (
    <div className="pt-24 pb-20">
      <ScrollSpy sections={contents} />
      {/* Header */}
      <section className="text-center px-4 mb-12">
        <span className="text-xs text-gray-500 tracking-[0.5em] uppercase block mb-3">
          Festivals
        </span>
        <h1
          className="text-3xl md:text-5xl font-black mb-4 max-w-3xl mx-auto"
          style={{
            background: "linear-gradient(135deg, #111827, #111827)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Tihar: The Festival of Lights
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Five days of lamps, animals, music and siblings — the story behind Nepal's most
          beautiful week of the year.
        </p>
        <p className="text-xs text-gray-500 tracking-widest uppercase mt-4">
          9 min read &bull; Festivals
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
              Tihar, also known as <strong className="text-gray-900">Deepawali</strong> or{" "}
              <strong className="text-gray-900">Yamapanchak</strong>, is one of Nepal's most beautiful
              and widely celebrated festivals. It usually comes shortly after Dashain and is celebrated
              for <strong className="text-gray-900">five days</strong>. While Dashain is strongly
              associated with family gatherings, blessings and the victory of good over evil, Tihar is
              famous for <strong className="text-gray-900">lights, flowers, music, worship, animals,
              family relationships and prosperity</strong>.
            </p>
            <p>
              During Tihar, Nepal seems to transform. Houses are decorated with colorful lights, oil
              lamps and <em>diyo</em>. The streets glow in the evening, homes smell of traditional
              food, and groups of people sing <strong className="text-gray-900">Deusi-Bhailo</strong> from
              house to house.
            </p>
            <p>
              But Tihar is much more than decoration and entertainment. Each of its five days carries a
              different meaning and teaches something about the relationship between humans, animals,
              nature, wealth and family.
            </p>
          </div>
        </div>
      </section>

      {/* Origin */}
      <section id="origin" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The Origin of Tihar</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              The exact historical beginning of Tihar is difficult to identify because the festival
              developed through religious traditions, mythology and cultural practices over many
              generations.
            </p>
            <p>
              One of the central stories connected with Tihar is the story of{" "}
              <strong className="text-gray-900">Yama</strong>, the god associated with death, and his
              sister <strong className="text-gray-900">Yamuna</strong>.
            </p>
            <p>
              According to Hindu tradition, Yamuna loved her brother Yama deeply. She wanted to meet
              him and eventually invited him to her home. She welcomed him with a special ceremony,
              decorated him with colorful tika, garlands and flowers, and performed rituals for his
              long life and well-being.
            </p>
            <p>
              Yama was pleased with his sister's devotion.
            </p>
            <p>
              The tradition eventually became associated with{" "}
              <strong className="text-gray-900">Bhai Tika</strong>, the fifth and final day of Tihar.
            </p>
            <p>
              On this day, brothers and sisters celebrate their relationship. Sisters put tika on their
              brothers and pray for their health, happiness and long lives. Brothers traditionally give
              gifts to their sisters and promise to protect and support them.
            </p>
            <p>
              Therefore, Tihar is not only a festival of lights. It is also a festival celebrating one
              of the most important family relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Five days */}
      <section id="five-days" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The Five Days of Tihar</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              Tihar is traditionally celebrated over five days:
            </p>
            <ol className="list-decimal pl-6 space-y-1 text-gray-900 font-bold">
              <li>Kaag Tihar</li>
              <li>Kukur Tihar</li>
              <li>Gai Tihar and Lakshmi Puja</li>
              <li>Goru Tihar / Govardhan Puja / Mha Puja</li>
              <li>Bhai Tika</li>
            </ol>
            <p>
              Different communities may follow somewhat different customs, but these five days form the
              central structure of Tihar.
            </p>
          </div>
        </div>
      </section>

      {/* Kaag */}
      <section id="kaag" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Day One: Kaag Tihar</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              The first day is known as <strong className="text-gray-900">Kaag Tihar</strong>, or Crow
              Tihar.
            </p>
            <p>
              The crow is traditionally associated with Yama and is considered a messenger.
            </p>
            <p>
              On this day, people prepare food offerings and place them outside for crows.
            </p>
            <p>
              Why the crow?
            </p>
            <p>
              In traditional Hindu beliefs, crows are sometimes considered messengers between the
              living world and the world of the dead. Feeding the crow is therefore connected with
              respecting life, death and the spiritual world.
            </p>
            <p>
              Beyond mythology, Kaag Tihar also encourages people to recognize animals as part of the
              natural environment.
            </p>
            <p>
              The crow may seem like an ordinary bird, but Tihar gives it a special place for one day.
            </p>
          </div>
        </div>
      </section>

      {/* Kukur */}
      <section id="kukur" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Day Two: Kukur Tihar</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              The second day is <strong className="text-gray-900">Kukur Tihar</strong>, the famous
              festival of dogs.
            </p>
            <p>
              This is one of the most unique aspects of Tihar.
            </p>
            <p>
              Dogs are decorated with <strong className="text-gray-900">garlands</strong>, especially
              marigold flowers. A red tika is placed on their forehead, and they are given special food.
            </p>
            <p>
              Dogs are traditionally associated with Yama's messengers and are respected for their
              loyalty and companionship.
            </p>
            <p>
              But in modern Nepal, Kukur Tihar has also become a powerful reminder of animal welfare.
            </p>
            <p>
              Dogs provide companionship, protect homes and help humans in many ways. Celebrating them
              creates a cultural message that animals deserve kindness and respect.
            </p>
            <p>
              Social media has also made Kukur Tihar famous around the world.
            </p>
            <p>
              Every year, photographs of Nepali dogs wearing marigold garlands and tika are shared
              internationally.
            </p>
            <p>
              What was once primarily a traditional religious practice has become a global symbol of
              Nepal's unique relationship with animals.
            </p>
          </div>
        </div>
      </section>

      {/* Gai + Lakshmi */}
      <section id="gai-lakshmi" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Day Three: Gai Tihar and Lakshmi Puja</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              The third day is perhaps the most important day of Tihar.
            </p>
            <p>
              It is associated with <strong className="text-gray-900">cows during the day</strong> and{" "}
              <strong className="text-gray-900">Goddess Lakshmi at night</strong>.
            </p>
            <p>
              The cow has an important place in Hindu culture and is traditionally respected as a
              sacred animal.
            </p>
            <p>
              People may decorate cows with garlands and offer them food.
            </p>
            <p>
              Then, as evening arrives, the focus turns toward{" "}
              <strong className="text-gray-900">Lakshmi Puja</strong>.
            </p>
            <p>
              Lakshmi is traditionally regarded as the goddess of wealth, prosperity and fortune.
            </p>
            <p>
              Families clean their homes carefully because cleanliness is traditionally associated with
              welcoming Lakshmi.
            </p>
            <p>
              This is one reason Tihar is also called the{" "}
              <strong className="text-gray-900">festival of lights</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Diyos */}
      <section id="diyos" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Why Do People Light Diyos?</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              As darkness falls, people light <strong className="text-gray-900">diyos</strong>, or
              traditional oil lamps.
            </p>
            <p>
              They place them around their houses, windows, doors and courtyards.
            </p>
            <p>
              Electric decorative lights have become extremely popular today, but traditional diyos
              remain an important symbol of Tihar.
            </p>
            <p>
              The light represents hope and prosperity.
            </p>
            <p>
              Darkness traditionally represents ignorance, negativity and hardship, while light
              represents knowledge, goodness and positive energy.
            </p>
            <p>
              During Lakshmi Puja, people believe that a clean and beautifully illuminated home welcomes
              prosperity.
            </p>
            <p>
              Some families create colorful <strong className="text-gray-900">Rangoli</strong> designs
              at the entrance.
            </p>
            <p>
              Others use flowers, leaves and decorative materials to create beautiful patterns.
            </p>
          </div>
        </div>
      </section>

      {/* Lakshmi path */}
      <section id="lakshmi-path" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The Lakshmi Path</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              One of the most beautiful Tihar traditions is creating a path from the entrance of the
              house toward the place where Lakshmi Puja is performed.
            </p>
            <p>
              The path symbolizes inviting Goddess Lakshmi into the home.
            </p>
            <p>
              People may draw small footprints using red or white materials.
            </p>
            <p>
              The footprints appear to show Lakshmi entering the house.
            </p>
            <p>
              The tradition combines religious belief with artistic creativity.
            </p>
            <p>
              For children, decorating the house and making the Lakshmi path can become one of the most
              exciting parts of Tihar.
            </p>
          </div>
        </div>
      </section>

      {/* Deusi */}
      <section id="deusi" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Deusi-Bhailo</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              No description of Tihar would be complete without{" "}
              <strong className="text-gray-900">Deusi-Bhailo</strong>.
            </p>
            <p>
              During Tihar evenings, groups of young people and children go from house to house singing
              traditional songs.
            </p>
            <p>
              One group may sing <strong className="text-gray-900">Deusi</strong>, while another
              performs <strong className="text-gray-900">Bhailo</strong>.
            </p>
            <p>
              They sing, dance and entertain the household.
            </p>
            <p>
              In return, the household gives them money, food, fruits or other gifts.
            </p>
            <p>
              The tradition creates a sense of community.
            </p>
            <p>
              People who may not normally meet during the year suddenly gather together, sing together
              and celebrate together.
            </p>
            <p>
              In modern Nepal, Deusi-Bhailo has also evolved.
            </p>
            <p>
              Young people may combine traditional songs with modern music, instruments and dance.
            </p>
            <p>
              Some groups organize organized Deusi-Bhailo programs and use the money they collect for
              community projects, social causes or charity.
            </p>
            <p>
              This shows how an old tradition can adapt to a modern society.
            </p>
          </div>
        </div>
      </section>

      {/* Food */}
      <section id="food" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Tihar Food</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              Food is another major part of Tihar.
            </p>
            <p>
              Families prepare traditional foods and sweets for relatives and visitors.
            </p>
            <p>
              Some popular foods associated with the festival include:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-900 font-bold">
              <li>Sel Roti</li>
              <li>Anarsa</li>
              <li>Fini Roti</li>
              <li>Kheer</li>
              <li>Sweets</li>
              <li>Fruits</li>
              <li>Various traditional snacks</li>
            </ul>
            <p>
              Sel Roti is particularly associated with Nepali festivals.
            </p>
            <p>
              It is a ring-shaped rice bread that is deep-fried and often prepared in large quantities
              during Dashain and Tihar.
            </p>
            <p>
              Making sel roti can become a family activity.
            </p>
            <p>
              Someone prepares the batter, another person fries the roti, and everyone eventually
              gathers around to eat.
            </p>
            <p>
              These small moments often become some of the strongest memories of the festival.
            </p>
          </div>
        </div>
      </section>

      {/* Day four */}
      <section id="day-four" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Day Four: Goru Tihar and Govardhan Puja</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              The fourth day has different names and traditions depending on the community.
            </p>
            <p>
              In many Hindu traditions, it is associated with{" "}
              <strong className="text-gray-900">Goru Tihar</strong>, when oxen and cattle are respected.
            </p>
            <p>
              Historically, oxen played a critical role in Nepali agriculture.
            </p>
            <p>
              Before modern machinery, farmers depended heavily on animals for ploughing fields and
              transporting goods.
            </p>
            <p>
              Respecting them during Tihar recognizes their contribution to human life and agriculture.
            </p>
            <p>
              The day is also associated with <strong className="text-gray-900">Govardhan Puja</strong>,
              based on the Hindu story of Lord Krishna lifting Govardhan Hill to protect villagers from
              heavy rain.
            </p>
          </div>
        </div>
      </section>

      {/* Mha Puja */}
      <section id="mha" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Mha Puja</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              Among the Newar community, the fourth day of Tihar is especially significant because of{" "}
              <strong className="text-gray-900">Mha Puja</strong>.
            </p>
            <p>
              "Mha" means body or self.
            </p>
            <p>
              Mha Puja is a ritual of worshipping oneself.
            </p>
            <p>
              At first, this may sound unusual.
            </p>
            <p>
              But its deeper meaning is about recognizing one's existence, appreciating life and
              wishing for health, prosperity and spiritual well-being.
            </p>
            <p>
              Beautiful mandalas are prepared, and members of the family sit together for the ritual.
            </p>
            <p>
              Mha Puja is an excellent example of Nepal's cultural diversity.
            </p>
            <p>
              The same festival period can contain different traditions among different communities
              while still being part of the broader Tihar season.
            </p>
          </div>
        </div>
      </section>

      {/* Bhai Tika */}
      <section id="bhai-tika" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Day Five: Bhai Tika</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              The final day of Tihar is <strong className="text-gray-900">Bhai Tika</strong>.
            </p>
            <p>
              This is one of the most emotional days of the festival.
            </p>
            <p>
              Sisters prepare a special ceremony for their brothers.
            </p>
            <p>
              Traditionally, the brother sits while the sister performs the tika ceremony.
            </p>
            <p>
              The famous <strong className="text-gray-900">seven-colored tika</strong> is often used.
            </p>
            <p>
              The sister places the tika on her brother's forehead, offers flowers and garlands, and
              wishes him a long, healthy and prosperous life.
            </p>
            <p>
              The brother gives his sister gifts and blessings in return.
            </p>
            <p>
              The ceremony represents love, respect and the bond between siblings.
            </p>
          </div>
        </div>
      </section>

      {/* Seven colors */}
      <section id="seven-colors" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The Seven-Colored Tika</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              The Bhai Tika is often associated with seven colors.
            </p>
            <p>
              The colors are traditionally placed together to create a distinctive tika.
            </p>
            <p>
              The exact practices can differ between families and communities.
            </p>
            <p>
              The colorful tika makes Bhai Tika visually unique and symbolizes celebration, blessings
              and auspiciousness.
            </p>
            <p>
              The ceremony can become particularly emotional when brothers or sisters live far away from
              each other.
            </p>
            <p>
              Many people travel long distances during Tihar just to participate in Bhai Tika.
            </p>
            <p>
              Today, siblings living abroad may even participate through video calls when physically
              returning home is impossible.
            </p>
          </div>
        </div>
      </section>

      {/* Family */}
      <section id="family" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Tihar and Family</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              Like Dashain, Tihar brings families together.
            </p>
            <p>
              But its atmosphere is somewhat different.
            </p>
            <p>
              Dashain often feels grand and family-centered, while Tihar has a particularly playful and
              colorful atmosphere.
            </p>
            <p>
              Families decorate their homes.
            </p>
            <p>
              Children wait for Deusi-Bhailo groups.
            </p>
            <p>
              Young people spend time with friends.
            </p>
            <p>
              Siblings prepare for Bhai Tika.
            </p>
            <p>
              Neighbors visit each other.
            </p>
            <p>
              The entire community becomes involved.
            </p>
            <p>
              For people living away from their hometowns, Tihar can be a powerful reminder of home.
            </p>
          </div>
        </div>
      </section>

      {/* Nature */}
      <section id="nature" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Tihar and Nature</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              One of the most beautiful aspects of Tihar is the way it recognizes different parts of
              the natural world.
            </p>
            <p>
              A crow is respected.
            </p>
            <p>
              A dog is celebrated.
            </p>
            <p>
              A cow is worshipped.
            </p>
            <p>
              Oxen are honored.
            </p>
            <p>
              Flowers become important symbols.
            </p>
            <p>
              Plants and natural materials are used in decorations.
            </p>
            <p>
              This makes Tihar different from many modern celebrations that are mostly focused on
              humans.
            </p>
            <p>
              Tihar reminds people that humans exist within a larger ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Modern */}
      <section id="modern" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Tihar in Modern Nepal</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              Tihar has changed considerably over time.
            </p>
            <p>
              Traditional oil lamps are now accompanied by electric lights.
            </p>
            <p>
              Handmade decorations are sometimes replaced by commercially produced decorations.
            </p>
            <p>
              Traditional Deusi-Bhailo now mixes with modern music.
            </p>
            <p>
              Social media has become part of the celebration.
            </p>
            <p>
              People post photographs of their decorations, Rangoli, food, dogs and Bhai Tika
              ceremonies.
            </p>
            <p>
              YouTube and TikTok have also transformed Deusi-Bhailo performances.
            </p>
            <p>
              At the same time, modern Tihar has created concerns about excessive spending and
              pollution.
            </p>
            <p>
              People sometimes spend huge amounts of money on decorations, fireworks, clothes and
              entertainment.
            </p>
            <p>
              A more sustainable Tihar can preserve the celebration while reducing unnecessary waste,
              noise and pollution.
            </p>
          </div>
        </div>
      </section>

      {/* Meaning of light */}
      <section id="meaning-light" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Tihar and the Meaning of Light</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              The central symbol of Tihar is <strong className="text-gray-900">light</strong>.
            </p>
            <p>
              But the meaning of light goes beyond simply decorating a house.
            </p>
            <p>
              Light represents hope.
            </p>
            <p>
              It represents knowledge.
            </p>
            <p>
              It represents prosperity.
            </p>
            <p>
              It represents the ability to overcome darkness.
            </p>
            <p>
              This idea is particularly powerful in a country like Nepal, where people have experienced
              political conflict, poverty, natural disasters and social challenges.
            </p>
            <p>
              Tihar provides an opportunity to celebrate despite difficulties.
            </p>
            <p>
              It says, in a symbolic way:
            </p>
            <p>
              <strong className="text-gray-900">Even when life becomes dark, we can still create light.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Symbol */}
      <section id="symbol" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Tihar as a Symbol of Nepal</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              Tihar has become one of Nepal's most recognizable cultural festivals.
            </p>
            <p>
              Its combination of religion, family, animals, music, food, lights and community creates
              something uniquely Nepali.
            </p>
            <p>
              A foreign visitor might see the colorful lights and think Tihar is simply a festival of
              decoration.
            </p>
            <p>
              But behind those lights is a much deeper story.
            </p>
            <p>
              There is respect for animals.
            </p>
            <p>
              There is worship of prosperity.
            </p>
            <p>
              There is remembrance of traditional beliefs.
            </p>
            <p>
              There is appreciation for family.
            </p>
            <p>
              There is celebration of siblings.
            </p>
            <p>
              There is community participation.
            </p>
            <p>
              There is music.
            </p>
            <p>
              There is food.
            </p>
            <p>
              And there is hope.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section id="conclusion" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Conclusion</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              Tihar is much more than five days of lights.
            </p>
            <p>
              It is a festival that connects{" "}
              <strong className="text-gray-900">people with people, humans with animals, families with
              traditions and the present with the past</strong>.
            </p>
            <p>
              From feeding crows on Kaag Tihar to celebrating dogs on Kukur Tihar, worshipping
              Lakshmi, lighting diyos, performing Deusi-Bhailo, honoring cattle and finally
              celebrating the bond between brothers and sisters on Bhai Tika, every day carries its own
              meaning.
            </p>
            <p>
              Perhaps the greatest lesson of Tihar is that celebration does not have to be only about
              wealth or entertainment.
            </p>
            <p>
              It can be about gratitude.
            </p>
            <p>
              Gratitude toward animals.
            </p>
            <p>
              Gratitude toward family.
            </p>
            <p>
              Gratitude toward life.
            </p>
            <p>
              Gratitude toward the people who stand beside us.
            </p>
            <p>
              And, most importantly, hope.
            </p>
            <p>
              Every year, when Nepal lights thousands of diyos and homes glow against the darkness,
              Tihar delivers a simple message:
            </p>
            <p>
              <strong className="text-gray-900">Darkness may exist, but we always have the power to
              create light.</strong>
            </p>
            <p>
              <strong className="text-gray-900">That is the spirit of Tihar.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/blog/dashain-story" className="py-2">
            <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-1">Previous article</p>
            <p className="text-sm font-bold text-gray-900">Dashain: Nepal's grandest festival</p>
          </Link>
          <Link to="/blog" className="py-2 text-right">
            <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-1">All articles</p>
            <p className="text-sm font-bold text-gray-900">Back to the blog index</p>
          </Link>
        </div>
        <p className="text-center mt-10 text-xs text-gray-600">
          <span className="inline-flex items-center gap-2"><Emoji char="🙏" size="1em" /> Thank you for reading Festival Nepal</span>
        </p>
      </section>
    </div>
  );
}
