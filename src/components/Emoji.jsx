import twemoji from "@twemoji/api";

const CDN_URL = "https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/";

export default function Emoji({ char, size = "1em", className = "", style }) {
  const code = twemoji.convert.toCodePoint(char);
  const src = `${CDN_URL}${code}.svg`;

  return (
    <img
      src={src}
      alt={char}
      draggable={false}
      className={className}
      style={{
        width: size,
        height: size,
        display: "inline-block",
        verticalAlign: "middle",
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}
