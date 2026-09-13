import tikamala from "../assets/dashian/tikamala.jpg";
import nepalwithhimal from "../assets/dashian/nepalwithhimal.jpg";
import ghatasthapana from "../assets/dashian/ghatasthapana.jpg";
import familydashain from "../assets/dashian/familydashain.jpg";

import rangoli from "../assets/tihar/rangoli.jpg";
import firecrackers from "../assets/tihar/firecrackers.jpg";
import doggies from "../assets/tihar/doggies.jpg";
import cow from "../assets/tihar/cow.jpg";

import swoyambhu from "../assets/temples/swoyambhu.jpg";
import patanTemple from "../assets/temples/patan.jpg";
import madir from "../assets/temples/madir.jpg";

import patanCulture from "../assets/culture/patan.jpg";
import pashupati from "../assets/culture/pashupati.jpg";
import mandirwithpeople from "../assets/culture/mandirwithpeople.jpg";

const photos = [
  { id: 1, title: "Dashain Tika Ceremony", category: "Dashain", aspect: "tall", src: tikamala },
  { id: 2, title: "Tihar Diyo Lights", category: "Tihar", aspect: "wide", src: firecrackers },
  { id: 3, title: "Boudhanath Stupa", category: "Temples", aspect: "tall", src: swoyambhu },
  { id: 4, title: "Kathmandu Durbar Square", category: "Culture", aspect: "wide", src: patanCulture },
  { id: 5, title: "Swing at Dashain", category: "Dashain", aspect: "square", src: familydashain },
  { id: 6, title: "Lakshmi Puja", category: "Tihar", aspect: "tall", src: cow },
  { id: 7, title: "Pashupatinath Temple", category: "Temples", aspect: "square", src: pashupati },
  { id: 8, title: "Kite Flying", category: "Dashain", aspect: "wide", src: nepalwithhimal },
  { id: 9, title: "Rangoli Art", category: "Tihar", aspect: "square", src: rangoli },
  { id: 10, title: "Traditional Dance", category: "Culture", aspect: "tall", src: mandirwithpeople },
  { id: 11, title: "Bisket Jatra Pole", category: "Culture", aspect: "wide", src: madir },
  { id: 12, title: "Lumbini Gardens", category: "Temples", aspect: "tall", src: patanTemple },
  { id: 13, title: "Deusi Bhailo", category: "Tihar", aspect: "square", src: doggies },
  { id: 14, title: "Jamara Growing", category: "Dashain", aspect: "square", src: ghatasthapana },
];

export default function Gallery() {

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="text-center px-4 mb-14">
        <span className="text-xs text-gray-500 tracking-[0.5em] uppercase block mb-3">
          Visual Journey
        </span>
        <h1
          className="text-4xl md:text-6xl font-black mb-4"
          style={{
            background: "linear-gradient(135deg, #111827, #111827)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Gallery
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
          A visual celebration of Nepal's festivals, temples, and cultural heritage captured
          through the lens.
        </p>
      </section>

      {/* Photo grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ${
                photo.aspect === "tall" ? "row-span-2" : ""
              } ${
                photo.aspect === "wide" ? "col-span-2" : ""
              }`}
              style={{
                border: "1px solid #E5E7EB",
                background: "#F3F4F6",
                minHeight: photo.aspect === "tall" ? "320px" : "180px",
                height: "100%",
              }}
            >
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:grayscale"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}