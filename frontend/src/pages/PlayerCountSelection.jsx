import React from "react";

function PlayerCountSelection({ setPlayerCount, setPage }) {
  const handleSelection = (count) => {
    setPlayerCount(count);
    setPage("game");
  };

  return (
    <div className="mode-selection">
      <h1 className="title">Select Number of Players</h1>
      <div className="button-group">
        <button className="glow-button" onClick={() => handleSelection(2)}>
          2 Players
        </button>
        <button className="glow-button" onClick={() => handleSelection(3)}>
          3 Players
        </button>
        <button className="glow-button" onClick={() => handleSelection(4)}>
          4 Players
        </button>
        <button className="glow-button" onClick={() => handleSelection(5)}>
          5 Players
        </button>
      </div>
      <button className="glow-button back" onClick={() => setPage("mode")}>
        Back
      </button>
    </div>
  );
}

export default PlayerCountSelection;
