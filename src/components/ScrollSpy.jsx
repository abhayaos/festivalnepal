import { useEffect, useState } from "react";

// Fixed side scroll indicator — a vertical stack of small lines, one per
// article section. The line for the section currently in view highlights
// and elongates; clicking a line jumps to that section.
export default function ScrollSpy({ sections }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div
      aria-hidden="true"
      className="hidden lg:flex fixed right-4 xl:right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-2.5"
    >
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          title={label}
          tabIndex={-1}
          className={`block h-[3px] rounded-full transition-all duration-300 ${
            active === id
              ? "w-9 bg-gray-900"
              : "w-5 bg-gray-400 hover:w-7 hover:bg-gray-600"
          }`}
        />
      ))}
    </div>
  );
}
