import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import closed from "../assets/envelope.png";
import opened from "../assets/envelope-opened.png";
import "../styles/envelope.css";

export default function EnvelopeMenu() {
  const navigate = useNavigate();

  const [openedState, setOpenedState] = useState(
    () => JSON.parse(localStorage.getItem("openedLetters")) || {}
  );

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("openedLetters")) || {};
    setOpenedState(stored);
  }, []);

  return (
    <div className="menu-page">
      <h2 className="menu-title">Choose a letter</h2>

      <div className="menu-container">
        {[1, 2, 3, 4].map((id) => (
          <div
            key={id}
            className="envelope"
            onClick={() => navigate(`/letter/${id}`)}
          >
            <img
              src={openedState[id] ? opened : closed}
              alt={`Letter ${id}`}
            />
            <span>{openedState[id] ? "Opened" : `Letter ${id}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
