// App.jsx
import React, { useState, useEffect } from "react";
import ModeSelection from "./pages/ModeSelection";
import PlayerCountSelection from "./pages/PlayerCountSelection";
import GameBoard from "./components/GameBoard";
import PlayerSetupModal from "./components/PlayerSetupModal";
import "./App.css";

function App() {
  const [page, setPage] = useState("mode");
  const [mode, setMode] = useState(null);
  const [playerCount, setPlayerCount] = useState(2);
  const [showSetup, setShowSetup] = useState(false);
  const [playerNames, setPlayerNames] = useState([]);
  const [tossWinner, setTossWinner] = useState(null);
  const [showToss, setShowToss] = useState(false);

  // === Toss Animation ===
  useEffect(() => {
    if (showToss) {
      const names =
        mode === "pvc" ? ["Player", "Computer"] : playerNames.length ? playerNames : [];
      if (names.length > 0) {
        let counter = 0;
        const interval = setInterval(() => {
          setTossWinner(names[Math.floor(Math.random() * names.length)]);
          counter++;
          if (counter > 20) {
            clearInterval(interval);
            setTimeout(() => {
              setShowToss(false);
              setPage("game");
            }, 800);
          }
        }, 100);
      }
    }
  }, [showToss, mode, playerNames]);

  return (
    <div className="app">
      {page === "mode" && (
        <ModeSelection
          setMode={(selectedMode) => {
            setMode(selectedMode);
            if (selectedMode === "pvp") {
              setPage("playerCount");
            } else if (selectedMode === "pvc") {
              setShowToss(true);
            }
          }}
          setPage={setPage}
        />
      )}

      {page === "playerCount" && (
        <PlayerCountSelection
          setPlayerCount={(count) => {
            setPlayerCount(count);
            setShowSetup(true);
          }}
          setPage={setPage}
        />
      )}

      {showSetup && (
        <PlayerSetupModal
          numPlayers={playerCount}
          onSubmit={(names) => {
            setPlayerNames(names);
            setShowSetup(false);
            setShowToss(true);
          }}
          onClose={() => {
            setShowSetup(false);
            setPage("playerCount");
          }}
        />
      )}

      {showToss && (
        <div className="modal-overlay">
          <div className="modal-container">
            <h2 className="modal-title">🎲 Toss Time!</h2>
            <p className="flashing-name">
              {tossWinner ? `${tossWinner} wins the toss!` : "Spinning..."}
            </p>
          </div>
        </div>
      )}

      {page === "game" && (
        <GameBoard
          mode={mode}
          playerCount={playerCount}
          playerNames={mode === "pvc" ? ["Player", "Computer"] : playerNames}
          tossWinner={tossWinner}
          onBack={() => {
            setPage("mode");
            setTossWinner(null);
          }}
        />
      )}
    </div>
  );
}

export default App;
