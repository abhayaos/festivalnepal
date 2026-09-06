import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function getTimeLeft(targetDate) {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="text-4xl md:text-6xl font-black w-20 md:w-28 h-20 md:h-28 flex items-center justify-center rounded-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(255,107,53,0.2), rgba(247,147,30,0.1))",
          border: "1px solid rgba(255,107,53,0.3)",
          color: "#FFD700",
          textShadow: "0 0 20px rgba(255,215,0,0.5)",
        }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <span className="text-orange-300/60 text-xs md:text-sm mt-2 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const ghatasthapanaDate = new Date("2026-10-11T00:00:00");
  const vijayaDashamiDate = new Date("2026-10-21T00:00:00");
  const tiharDate = new Date("2026-11-09T00:00:00");

  const [ghatasthapanaLeft, setGhatasthapanaLeft] = useState(getTimeLeft(ghatasthapanaDate));
  const [dashamiLeft, setDashamiLeft] = useState(getTimeLeft(vijayaDashamiDate));
  const [tiharLeft, setTiharLeft] = useState(getTimeLeft(tiharDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setGhatasthapanaLeft(getTimeLeft(ghatasthapanaDate));
      setDashamiLeft(getTimeLeft(vijayaDashamiDate));
      setTiharLeft(getTimeLeft(tiharDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background mandala */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <svg className="w-[800px] h-[800px] animate-spin-slow" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="url(#saffron)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="url(#saffron)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="url(#saffron)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="30" fill="none" stroke="url(#saffron)" strokeWidth="0.5" />
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="100" y1="10"
              x2="100" y2="190"
              stroke="url(#saffron)"
              strokeWidth="0.3"
              transform={`rotate(${i * 30} 100 100)`}
            />
          ))}
          <defs>
            <linearGradient id="saffron" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B35" />
              <stop offset="50%" stopColor="#F7931E" />
              <stop offset="100%" stopColor="#FFD700" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-orange-500 rounded-full animate-float opacity-60 pointer-events-none" />
      <div className="absolute top-40 right-32 w-3 h-3 bg-yellow-500 rounded-full animate-float opacity-40 pointer-events-none" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 left-40 w-2 h-2 bg-amber-400 rounded-full animate-float opacity-50 pointer-events-none" style={{ animationDelay: "2s" }} />

      {/* Om */}
      <div className="text-6xl md:text-8xl mb-2 mt-3 animate-pulse-slow" style={{ color: "#FF6B35", textShadow: "0 0 40px rgba(255,107,53,0.5)" }}>
        ॐ
      </div>

      {/* Title */}
      <h1
        className="text-4xl md:text-6xl font-black mb-10 text-center"
        style={{
          background: "linear-gradient(135deg, #FF6B35, #F7931E, #FFD700)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Festival Countdown
      </h1>

      {/* Countdown cards */}
      <div className="flex flex-col items-center gap-12 md:gap-16">
        {/* Dashain row */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Ghatasthapana */}
          <div className="flex flex-col items-center">
            <h2
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{
                background: "linear-gradient(135deg, #FF6B35, #FFD700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              🪷 Ghatasthapana
            </h2>
            <div className="flex gap-3 md:gap-4">
              <CountdownUnit value={ghatasthapanaLeft.days} label="Days" />
              <CountdownUnit value={ghatasthapanaLeft.hours} label="Hrs" />
              <CountdownUnit value={ghatasthapanaLeft.minutes} label="Min" />
              <CountdownUnit value={ghatasthapanaLeft.seconds} label="Sec" />
            </div>
            <p className="text-orange-300/50 text-sm mt-4 tracking-wider">Dashain Begins • Oct 11, 2026</p>
          </div>

          {/* Vijaya Dashami */}
          <div className="flex flex-col items-center">
            <h2
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{
                background: "linear-gradient(135deg, #FF6B35, #FFD700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ✨ Vijaya Dashami
            </h2>
            <div className="flex gap-3 md:gap-4">
              <CountdownUnit value={dashamiLeft.days} label="Days" />
              <CountdownUnit value={dashamiLeft.hours} label="Hrs" />
              <CountdownUnit value={dashamiLeft.minutes} label="Min" />
              <CountdownUnit value={dashamiLeft.seconds} label="Sec" />
            </div>
            <p className="text-orange-300/50 text-sm mt-4 tracking-wider">Tika Day • Oct 21, 2026</p>
          </div>
        </div>

        {/* Tihar */}
        <div className="flex flex-col items-center">
          <h2
            className="text-2xl md:text-3xl font-bold mb-6"
            style={{
              background: "linear-gradient(135deg, #FF6B35, #FFD700)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            🪔 Tihar
          </h2>
          <div className="flex gap-3 md:gap-4">
            <CountdownUnit value={tiharLeft.days} label="Days" />
            <CountdownUnit value={tiharLeft.hours} label="Hrs" />
            <CountdownUnit value={tiharLeft.minutes} label="Min" />
            <CountdownUnit value={tiharLeft.seconds} label="Sec" />
          </div>
          <p className="text-orange-300/50 text-sm mt-4 tracking-wider">Deepawali • Nov 9, 2026</p>
        </div>
      </div>

      {/* Lotus */}
      <div className="mt-12 text-3xl opacity-60 animate-float pointer-events-none" style={{ animationDelay: "3s" }}>
        🪷
      </div>

      {/* Back button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105"
        style={{
          background: "linear-gradient(135deg, rgba(255,107,53,0.2), rgba(247,147,30,0.1))",
          border: "1px solid rgba(255,107,53,0.3)",
          color: "#FFD700",
        }}
      >
        ← Back to Home
      </Link>

      {/* Bottom spacing */}
      <div className="mb-10" />
    </div>
  );
}
