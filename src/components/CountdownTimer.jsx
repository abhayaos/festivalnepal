import { useState, useEffect } from "react";

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

function Unit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="text-2xl sm:text-3xl md:text-4xl font-black w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 flex items-center justify-center rounded-xl transition-all duration-300"
        style={{
          background: "linear-gradient(135deg, rgba(255,107,53,0.15), rgba(247,147,30,0.08))",
          border: "1px solid rgba(255,107,53,0.2)",
          color: "#FFD700",
        }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <span className="text-orange-300/50 text-[10px] md:text-xs mt-2 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer({ targetDate, label, subtitle }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    let timer = setInterval(() => {
      const next = getTimeLeft(targetDate);
      setTimeLeft(next);
      if (next.days === 0 && next.hours === 0 && next.minutes === 0 && next.seconds === 0) {
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center text-center">
      <h3
        className="text-lg md:text-xl font-bold mb-1"
        style={{
          background: "linear-gradient(135deg, #FF6B35, #FFD700)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {label}
      </h3>
      {subtitle && (
        <p className="text-xs text-orange-300/40 tracking-wider mb-4">{subtitle}</p>
      )}
      <div className="flex gap-2 sm:gap-3">
        <Unit value={timeLeft.days} label="Days" />
        <Unit value={timeLeft.hours} label="Hrs" />
        <Unit value={timeLeft.minutes} label="Min" />
        <Unit value={timeLeft.seconds} label="Sec" />
      </div>
    </div>
  );
}
