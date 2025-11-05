// src/pages/ModeSelection.jsx
import React from "react";
import "../App.css"; // ✅ ensure this path is correct

const ModeSelection = ({ setMode, setPage }) => {
  const handleModeSelect = (mode) => {
    setMode(mode);
    if (mode === "pvp") {
      setPage("playerCount");
    } else if (mode === "pvc") {
      setPage("playerCount"); // you’ll later customize for computer logic
    }
  };

  return (
    <div className="mode-selection">
      <h1 className="title">Select Game Mode</h1>
      <div className="buttons">
        <button
          className="mode-button"
          onClick={() => handleModeSelect("pvp")}
        >
          Player vs Player
        </button>
        <button
          className="mode-button"
          onClick={() => handleModeSelect("pvc")}
        >
          Player vs Computer
        </button>
      </div>
    </div>
  );
};

export default ModeSelection;
