import { Link } from "react-router-dom";
import Emoji from "../components/Emoji";
import ScrollSpy from "../components/ScrollSpy";

const contents = [
  { id: "overview", label: "Overview" },
  { id: "origins", label: "How Did Dashain Start?" },
  { id: "fifteen-days", label: "The Fifteen Days" },
  { id: "family", label: "Family" },
  { id: "food", label: "Food & Celebration" },
  { id: "ping", label: "Ping & Games" },
  { id: "identity", label: "Identity" },
  { id: "tika-jamara", label: "Tika & Jamara" },
  { id: "modern", label: "Modern Nepal" },
  { id: "return", label: "Spirit of Return" },
  { id: "message", label: "Message" },
  { id: "conclusion", label: "Conclusion" },
];

export default function DashainStory() {
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
          Dashain: Nepal's Grandest Festival
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Origins, mythology, the 15-day calendar, and the meaning of tika and jamara —
          everything behind the celebration Nepalis travel across the country to reach.
        </p>
        <p className="text-xs text-gray-500 tracking-widest uppercase mt-4">
          10 min read &bull; Festivals
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
              Dashain is one of the most important, beloved, and widely celebrated festivals in Nepal.
              Known as <strong className="text-gray-900">Bada Dashain</strong>, it is a festival of joy,
              family, blessings, faith, and victory. For many Nepali people, Dashain is not simply a
              religious celebration. It is a time when families come together, people return to their
              homes from different cities and countries, houses are cleaned and decorated, new clothes
              are worn, delicious food is prepared, and elders give blessings to younger members of the
              family. The festival creates a unique atmosphere across Nepal, from the cities and towns
              to the villages in the mountains and hills.
            </p>
            <p>
              Dashain is mainly associated with the victory of{" "}
              <strong className="text-gray-900">good over evil</strong>. Its most famous religious
              story comes from Hindu mythology, particularly the story of Goddess Durga's victory over
              the powerful demon Mahishasura. The festival also has connections with the Ramayana,
              where Lord Rama is believed to have defeated Ravana. Although different communities may
              understand and celebrate Dashain in slightly different ways, the central message remains
              similar: righteousness, courage, truth, and good eventually overcome evil.
            </p>
          </div>
        </div>
      </section>

      {/* Origins */}
      <section id="origins" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">How Did Dashain Start?</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              The origins of Dashain are very old and are connected to ancient Hindu traditions,
              mythology, and seasonal practices. There is no single historical document that tells us
              exactly when the first Dashain celebration began. Instead, the festival developed over
              centuries through religious traditions, legends, rituals, and cultural practices.
            </p>
            <p>
              One of the most important stories behind Dashain is the battle between{" "}
              <strong className="text-gray-900">Goddess Durga and Mahishasura</strong>. According to
              Hindu mythology, Mahishasura was a powerful demon who had received a boon that made him
              extremely difficult to defeat. With his growing power, he attacked the gods and caused
              suffering among people. The gods were unable to defeat him individually, so their
              combined divine energy created Goddess Durga.
            </p>
            <p>
              Durga, also known as Shakti, became the embodiment of divine feminine power. She fought
              Mahishasura in a great battle that continued for several days. Finally, on the tenth
              day, Goddess Durga defeated and killed Mahishasura. This victory represents the triumph
              of good over evil.
            </p>
            <p>
              This story is central to the meaning of Dashain. The first nine days are traditionally
              associated with different forms of Goddess Durga, while the tenth day,{" "}
              <strong className="text-gray-900">Vijaya Dashami</strong>, celebrates her victory.
            </p>
            <p>
              Another important tradition connects Dashain with <strong className="text-gray-900">Lord Rama</strong>.
              According to the Ramayana, Rama fought the demon king Ravana, who had abducted Rama's
              wife Sita. After a great battle, Rama defeated Ravana. In many Hindu traditions, this
              victory is remembered as another example of righteousness defeating evil. The connection
              between these stories helps explain why Dashain is associated with victory, justice, and
              the defeat of negative forces.
            </p>
            <p>
              Dashain also has connections with ancient agricultural life. Nepal was historically an
              agricultural society, and the festival occurs around the time when the major monsoon
              season has ended and the harvest season begins. Farmers traditionally had a reason to
              celebrate after months of hard work in the fields. The clear skies, completed
              agricultural work, and availability of food created a natural period for families and
              communities to celebrate together.
            </p>
            <p>
              Therefore, Dashain can be understood not only as a religious festival but also as a
              cultural celebration that developed through the combination of mythology, seasonal
              cycles, agriculture, and community life.
            </p>
          </div>
        </div>
      </section>

      {/* Fifteen days */}
      <section id="fifteen-days" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The Fifteen Days of Dashain</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              Dashain is generally celebrated for about fifteen days, although the intensity and
              specific customs can vary between communities and families. The festival begins with{" "}
              <strong className="text-gray-900">Ghatasthapana</strong>, followed by several important
              days such as Phulpati, Maha Ashtami, Maha Navami, and finally Vijaya Dashami.
            </p>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3 scroll-mt-28">Ghatasthapana</h3>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              The festival begins with Ghatasthapana. On this day, people establish a sacred vessel
              known as a <em>ghata</em> and begin growing{" "}
              <strong className="text-gray-900">jamara</strong>, usually barley shoots. The seeds are
              placed in soil in a protected and sacred place, where they are carefully cared for
              throughout the festival.
            </p>
            <p>
              The growing jamara becomes an important symbol of life, prosperity, and good fortune. By
              the time Vijaya Dashami arrives, the shoots have grown and are later used as part of the
              tika and blessing ceremony.
            </p>
            <p>
              Ghatasthapana marks the beginning of the festive period and creates a spiritual
              atmosphere in homes.
            </p>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3 scroll-mt-28">Phulpati</h3>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              Phulpati is another major day of Dashain. Traditionally, a collection of sacred flowers,
              leaves, plants, and other auspicious items is brought into the home.
            </p>
            <p>
              In Kathmandu, the traditional Phulpati ceremony at Hanuman Dhoka has historically been an
              important public event. However, Dashain customs differ across Nepal, and communities
              have their own ways of observing the day.
            </p>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3 scroll-mt-28">Maha Ashtami</h3>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              The eighth day is known as Maha Ashtami. It is associated with Goddess Durga and is
              considered one of the most important days of the festival.
            </p>
            <p>
              Many devotees visit temples dedicated to Durga and other forms of Shakti. Traditionally,
              animal sacrifices have been performed in some communities as religious offerings.
              However, practices vary widely, and many families and communities celebrate through
              vegetarian offerings, prayers, and other forms of worship.
            </p>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3 scroll-mt-28">Maha Navami</h3>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              The ninth day is Maha Navami. It is another important day dedicated to worship and is
              traditionally associated with weapons, tools, machinery, and objects used for work.
            </p>
            <p>
              In some traditions, vehicles, tools, agricultural equipment, and other instruments are
              worshipped. The idea is to show respect toward the things that help people perform their
              work and livelihood.
            </p>
            <p>
              For modern Nepali society, this tradition has also taken on new forms. People may worship
              motorcycles, cars, computers, tools, or professional equipment.
            </p>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3 scroll-mt-28">Vijaya Dashami</h3>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              The tenth day is <strong className="text-gray-900">Vijaya Dashami</strong>, the most
              significant day of Dashain.
            </p>
            <p>
              On this day, younger family members visit elders and receive{" "}
              <strong className="text-gray-900">tika, jamara, and blessings</strong>. Elders
              traditionally place red tika mixed with yogurt and rice on the foreheads of younger
              people and offer jamara.
            </p>
            <p>
              Blessings are an important part of the ceremony. Elders wish younger family members
              health, happiness, prosperity, success, and a good future.
            </p>
            <p>
              For many Nepali families, this is the emotional heart of Dashain.
            </p>
          </div>
        </div>
      </section>

      {/* Family */}
      <section id="family" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Why Is Family So Important During Dashain?</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              One of the greatest features of Dashain is its ability to bring families together.
            </p>
            <p>
              Nepal has experienced significant migration for education, employment, business, and other
              opportunities. Many people live away from their hometowns, while others work in
              Kathmandu, Nepalgunj, Pokhara, Biratnagar, Dhangadhi, or abroad.
            </p>
            <p>
              Dashain creates a powerful reason to return home.
            </p>
            <p>
              During the festival, roads, airports, and bus stations become extremely busy as people
              travel across the country. Someone who has been away from their parents for months may
              finally sit together with them during Dashain. Brothers and sisters meet, relatives visit
              one another, and old friendships are renewed.
            </p>
            <p>
              This makes Dashain more than a festival of rituals. It becomes a festival of
              relationships.
            </p>
            <p>
              For many people, the most memorable part of Dashain is not the tika or food itself. It is
              sitting with family, talking late into the evening, remembering childhood experiences,
              laughing with relatives, and feeling connected to home.
            </p>
          </div>
        </div>
      </section>

      {/* Food */}
      <section id="food" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Food and Celebration</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              Food is another major part of Dashain culture.
            </p>
            <p>
              Families often prepare special meals that may include{" "}
              <strong className="text-gray-900">dal bhat, meat dishes, sel roti, achar, sweets,
              fruits, and various traditional foods</strong>. The exact dishes differ depending on
              geography, ethnicity, family traditions, and personal preferences.
            </p>
            <p>
              Meat consumption traditionally increases during Dashain for many families because it is
              associated with celebration and feasting. However, vegetarian families and communities
              have their own equally meaningful food traditions.
            </p>
            <p>
              The preparation of food can itself become a family activity. Parents, grandparents,
              children, and relatives may work together in the kitchen, turning ordinary cooking into a
              memorable part of the festival.
            </p>
          </div>
        </div>
      </section>

      {/* Ping */}
      <section id="ping" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Ping and Traditional Games</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              Another traditional feature of Dashain is the{" "}
              <strong className="text-gray-900">ping</strong>, or bamboo swing.
            </p>
            <p>
              In many Nepali villages and communities, traditional swings are constructed during
              Dashain. Children, teenagers, and adults enjoy riding them throughout the festival.
            </p>
            <p>
              The ping represents more than entertainment. It is a reminder of traditional village life
              and the communal nature of Dashain. People gather together, watch others play, laugh, and
              spend time outside.
            </p>
            <p>
              Modern celebrations have changed with technology. Young people may now spend time using
              smartphones, playing video games, creating social media content, or meeting friends. Yet
              traditional activities like ping, cards, family gatherings, and visits to relatives
              continue to remain important.
            </p>
          </div>
        </div>
      </section>

      {/* Identity */}
      <section id="identity" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Dashain and Nepali Identity</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              Dashain has become deeply connected with Nepali cultural identity. Although Nepal is a
              country of many ethnic groups, languages, religions, and traditions, Dashain has
              historically been celebrated by a large portion of the population.
            </p>
            <p>
              However, it is important to recognize that{" "}
              <strong className="text-gray-900">not every Nepali person celebrates Dashain in the same
              way, or celebrates it at all</strong>. Nepal is religiously and culturally diverse.
              Different communities have different festivals, beliefs, and customs.
            </p>
            <p>
              This diversity does not reduce the importance of Dashain. Instead, it reminds us that
              Nepal's identity is made from many cultures living together.
            </p>
            <p>
              Dashain can therefore be appreciated both as a major Hindu festival and as an important
              part of Nepal's broader cultural landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Tika and jamara */}
      <section id="tika-jamara" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The Meaning Behind Tika and Jamara</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              Tika and jamara are among the most recognizable symbols of Dashain.
            </p>
            <p>
              The red tika placed on the forehead is associated with blessings, auspiciousness, and
              prosperity. Jamara, which has been grown since Ghatasthapana, represents life, growth,
              and good fortune.
            </p>
            <p>
              When elders put tika and jamara on younger people's foreheads, the ceremony represents
              more than a religious ritual. It expresses a relationship between generations.
            </p>
            <p>
              A grandparent giving tika to a grandchild, a parent blessing their child, or an elder
              blessing a younger relative creates a moment of connection and respect.
            </p>
            <p>
              The words spoken during the blessing may vary from family to family, but the intention is
              usually the same: wishing the younger generation a healthy, successful, peaceful, and
              prosperous life.
            </p>
          </div>
        </div>
      </section>

      {/* Modern Nepal */}
      <section id="modern" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Dashain in Modern Nepal</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              Dashain has changed significantly over time.
            </p>
            <p>
              In the past, celebrations were strongly connected with village communities, agriculture,
              traditional houses, local temples, and extended families. Today, Nepal is increasingly
              urbanized and connected to the rest of the world.
            </p>
            <p>
              People celebrate Dashain in apartments, cities, foreign countries, and online
              communities. Families separated by thousands of kilometers can now participate in tika
              ceremonies through video calls.
            </p>
            <p>
              Social media has also transformed the festival. People share photographs, greetings,
              videos, food, travel experiences, and family moments online.
            </p>
            <p>
              At the same time, modern Dashain has also created challenges. The cost of travel, food,
              clothes, and gifts can place financial pressure on families. Roads become crowded,
              transportation prices may rise, and some people feel pressured to spend beyond their
              means.
            </p>
            <p>
              The true meaning of Dashain, however, does not depend on expensive clothes, expensive
              food, or large amounts of money.
            </p>
            <p>
              Its deeper value lies in{" "}
              <strong className="text-gray-900">family, gratitude, blessings, faith, community, and hope</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Spirit of return */}
      <section id="return" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Dashain and the Spirit of Return</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              Perhaps the most powerful idea associated with Dashain is the idea of{" "}
              <strong className="text-gray-900">returning home</strong>.
            </p>
            <p>
              Home may be a village in the mountains, a small town in the Terai, a city apartment, or
              even a place in another country where a Nepali family has built a new life.
            </p>
            <p>
              During Dashain, people often remember where they came from.
            </p>
            <p>
              Students return from colleges. Workers return from cities. Migrant workers try to return
              from abroad when possible. Families make long journeys simply to sit together for a few
              days.
            </p>
            <p>
              That journey itself has become part of Dashain culture.
            </p>
            <p>
              For someone living away from home, the sight of the hills, the smell of traditional
              food, the sound of relatives talking, and the experience of receiving tika from parents
              can carry enormous emotional meaning.
            </p>
          </div>
        </div>
      </section>

      {/* Message */}
      <section id="message" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 scroll-mt-28">
        <div className="article-body py-2">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The Message of Dashain</h2>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              At its heart, Dashain carries a simple but powerful message:{" "}
              <strong className="text-gray-900">goodness can overcome evil, courage can overcome fear,
              and hope can overcome difficult times</strong>.
            </p>
            <p>
              The story of Goddess Durga defeating Mahishasura reminds people that destructive forces
              can be defeated. The story of Rama defeating Ravana similarly represents the victory of
              righteousness.
            </p>
            <p>
              But these stories can also be understood in a modern way.
            </p>
            <p>
              The "evil" we face today may not be a mythical demon. It may be hatred, corruption,
              discrimination, violence, ignorance, poverty, dishonesty, or division.
            </p>
            <p>
              The spirit of Dashain encourages people to choose kindness over hatred, courage over
              fear, honesty over deception, and unity over division.
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
              Dashain is Nepal's grandest festival not simply because it lasts many days or because
              millions of people celebrate it. Its greatness comes from the emotions and traditions
              connected with it.
            </p>
            <p>
              From <strong className="text-gray-900">Ghatasthapana</strong> and the planting of jamara
              to <strong className="text-gray-900">Vijaya Dashami</strong> and the receiving of tika,
              every stage carries cultural and spiritual meaning. The stories of Goddess Durga and
              Mahishasura, as well as the connection with Lord Rama and Ravana, give the festival its
              central message of victory over evil.
            </p>
            <p>
              But Dashain has also grown beyond mythology. It has become a celebration of family, home,
              community, tradition, and togetherness.
            </p>
            <p>
              Every year, people travel long distances to meet their loved ones. Houses become busy
              with relatives. Kitchens fill with the smell of traditional food. Children enjoy swings
              and games. Elders give blessings. Young people create new memories while carrying
              traditions from previous generations into the future.
            </p>
            <p>
              Dashain shows how a festival can connect the{" "}
              <strong className="text-gray-900">past, present, and future</strong>.
            </p>
            <p>
              It preserves ancient stories while adapting to modern life. It brings generations
              together while allowing traditions to evolve. Most importantly, it reminds people that no
              matter how far they travel or how much their lives change, the feeling of home and
              family remains deeply important.
            </p>
            <p>
              That is why Dashain holds such a special place in Nepal.
            </p>
            <p>
              It is a festival of victory, but also a festival of love.
            </p>
            <p>
              It is a festival of worship, but also a festival of family.
            </p>
            <p>
              It is a festival rooted in ancient traditions, yet it continues to evolve with every
              generation.
            </p>
            <p>
              Above all,{" "}
              <strong className="text-gray-900">
                Dashain is a celebration of the hope that good will always have the strength to
                overcome evil, and that families and communities can find their way back to one
                another.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/blog/nepal-history" className="py-2">
            <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-1">Previous article</p>
            <p className="text-sm font-bold text-gray-900">A Concise History of Nepal</p>
          </Link>
          <Link to="/blog/tihar-story" className="py-2 text-right">
            <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-1">Next article</p>
            <p className="text-sm font-bold text-gray-900">Tihar: Nepal's festival of lights</p>
          </Link>
        </div>
        <p className="text-center mt-10 text-xs text-gray-600">
          <span className="inline-flex items-center gap-2"><Emoji char="🙏" size="1em" /> Thank you for reading Festival Nepal</span>
        </p>
      </section>
    </div>
  );
}
