import { useState } from "react";

const categories = ["All", "Dashain", "Tihar", "Holi", "Temples", "Culture"];

const photos = [
  { id: 1, title: "Dashain Tika Ceremony", category: "Dashain", aspect: "tall" },
  { id: 2, title: "Tihar Diyo Lights", category: "Tihar", aspect: "wide" },
  { id: 3, title: "Holi Colors of Joy", category: "Holi", aspect: "square" },
  { id: 4, title: "Boudhanath Stupa", category: "Temples", aspect: "tall" },
  { id: 5, title: "Kathmandu Durbar Square", category: "Culture", aspect: "wide" },
  { id: 6, title: "Swing at Dashain", category: "Dashain", aspect: "square" },
  { id: 7, title: "Lakshmi Puja", category: "Tihar", aspect: "tall" },
  { id: 8, title: "Pashupatinath Temple", category: "Temples", aspect: "square" },
  { id: 9, title: "Kite Flying", category: "Dashain", aspect: "wide" },
  { id: 10, title: "Rangoli Art", category: "Tihar", aspect: "square" },
  { id: 11, title: "Traditional Dance", category: "Culture", aspect: "tall" },
  { id: 12, title: "Bisket Jatra Pole", category: "Culture", aspect: "wide" },
  { id: 13, title: "Lumbini Gardens", category: "Temples", aspect: "tall" },
  { id: 14, title: "Deusi Bhailo", category: "Tihar", aspect: "square" },
  { id: 15, title: "Jamara Growing", category: "Dashain", aspect: "square" },
  { id: 16, title: "Mountain Festival", category: "Culture", aspect: "wide" },
];

const gradients = [
  "from-orange-600/30 to-red-900/30",
  "from-amber-600/30 to-yellow-900/30",
  "from-pink-600/30 to-purple-900/30",
  "from-blue-600/30 to-indigo-900/30",
  "from-emerald-600/30 to-teal-900/30",
  "from-rose-600/30 to-orange-900/30",
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? photos : photos.filter((p) => p.category === active);

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="text-center px-4 mb-14">
        <span className="text-xs text-orange-400/50 tracking-[0.5em] uppercase block mb-3">
          Visual Journey
        </span>
        <h1
          className="text-4xl md:text-6xl font-black mb-4"
          style={{
            background: "linear-gradient(135deg, #FF6B35, #F7931E, #FFD700)",
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

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto px-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
              active === cat
                ? "text-gray-950"
                : "text-gray-500 hover:text-orange-300 bg-gray-900/50 border border-orange-500/10"
            }`}
            style={
              active === cat
                ? { background: "linear-gradient(135deg, #FF6B35, #F7931E)" }
                : {}
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Photo grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filtered.map((photo, i) => (
            <div
              key={photo.id}
              className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 ${
                photo.aspect === "tall" ? "row-span-2" : ""
              } ${
                photo.aspect === "wide" ? "col-span-2" : ""
              }`}
              style={{
                border: "1px solid rgba(255,107,53,0.1)",
                background: "linear-gradient(135deg, rgba(255,107,53,0.06), rgba(0,0,0,0.2))",
                minHeight: photo.aspect === "tall" ? "320px" : "180px",
              }}
            >
              {/* Gradient placeholder for the image */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i % gradients.length]} transition-opacity duration-500`} />

              {/* Overlay pattern */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,107,53,0.3) 1px, transparent 0)`,
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Category badge */}
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wider uppercase bg-gray-950/60 text-orange-300/80 backdrop-blur-sm border border-orange-500/10">
                {photo.category}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div>
                  <p className="text-sm font-bold text-orange-200">{photo.title}</p>
                  <p className="text-xs text-orange-400/50 mt-0.5">{photo.category} • Nepal</p>
                </div>
              </div>

              {/* Photo placeholder icon */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg className="w-10 h-10 text-orange-500/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-600 py-20 text-sm tracking-wider">
            No photos found in this category.
          </p>
        )}
      </section>
    </div>
  );
}
