import React, { useState } from "react";
import "../App.css";

const icons = ["❌", "⭕", "🟢", "🟣", "⭐"];

const PlayerSetupModal = ({ numPlayers, onSubmit, onClose }) => {
  const [players, setPlayers] = useState(
    Array.from({ length: numPlayers }, () => "")
  );

  const handleChange = (index, value) => {
    const updated = [...players];
    updated[index] = value;
    setPlayers(updated);
  };

  const handleStart = () => {
    if (players.some((name) => name.trim() === "")) {
      alert("Please enter all player names!");
      return;
    }
    onSubmit(players);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">Enter Player Names</h2>
        <div className="modal-inputs">
          {players.map((player, index) => (
            <div className="player-input" key={index}>
              <span className="player-icon">{icons[index]}</span>
              <input
                type="text"
                placeholder={`Player ${index + 1} Name`}
                value={player}
                onChange={(e) => handleChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>
        <div className="modal-buttons">
          <button className="glow-button" onClick={onClose}>
            Back
          </button>
          <button className="glow-button" onClick={handleStart}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerSetupModal;
