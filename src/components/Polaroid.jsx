import "../styles/letters.css";

export default function Polaroid({ img, text }) {
  return (
    <div className="polaroid">
      <img src={img} alt="memory" />
      {text && <span>{text}</span>}
    </div>
  );
}
