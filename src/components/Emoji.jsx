export default function Emoji({ char, size = "1em", className = "", style }) {
  return (
    <span
      aria-hidden="true"
      role="img"
      className={className}
      style={{
        fontSize: size,
        lineHeight: 1,
        display: "inline-block",
        verticalAlign: "middle",
        ...style,
      }}
    >
      {char}
    </span>
  );
}
