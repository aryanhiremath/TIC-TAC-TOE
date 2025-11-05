import React, { useEffect, useState } from "react";
import "../App.css";

const TossModal = ({ players, onTossComplete }) => {
  const [currentName, setCurrentName] = useState("");
  const [winner, setWinner] = useState(null);
  const [isTossing, setIsTossing] = useState(true);

  useEffect(() => {
    if (players && players.length > 0) {
      let index = 0;
      const interval = setInterval(() => {
        setCurrentName(players[index]);
        index = (index + 1) % players.length;
      }, 100); // fast switching effect

      // stop after 3 seconds
      setTimeout(() => {
        clearInterval(interval);
        const randomIndex = Math.floor(Math.random() * players.length);
        setWinner(players[randomIndex]);
        setIsTossing(false);
      }, 3000);
    }
  }, [players]);

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {isTossing ? (
          <>
            <h2 className="modal-title">🎯 Toss in Progress...</h2>
            <h3 className="flashing-name">{currentName}</h3>
          </>
        ) : (
          <>
            <h2 className="modal-title">🏆 {winner} Won the Toss!</h2>
            <button className="glow-button" onClick={() => onTossComplete(winner)}>
              Start Game
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TossModal;
