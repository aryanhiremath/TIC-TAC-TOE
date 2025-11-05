import React, { useState, useEffect } from "react";
import "../components/GameBoard.css";

const GameBoard = ({ mode, playerCount, playerNames = [], onBack }) => {
  // Determine grid size based on player count
  const gridSize =
    playerCount === 2 ? 3 : playerCount === 3 ? 4 : playerCount === 4 ? 5 : 6;

  const totalCells = gridSize * gridSize;
  const [board, setBoard] = useState(Array(totalCells).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [winner, setWinner] = useState(null);
  const [isComputerTurn, setIsComputerTurn] = useState(false);

  // Assign icons automatically
  const icons = ["❌", "⭕", "⭐", "💎", "🔥"];

  useEffect(() => {
    if (mode === "computer" && isComputerTurn && !winner) {
      const timeout = setTimeout(handleComputerMove, 800);
      return () => clearTimeout(timeout);
    }
  }, [isComputerTurn, board]);

  const handleClick = (index) => {
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = icons[currentPlayer];
    setBoard(newBoard);

    checkWinner(newBoard);

    // Next player logic
    if (mode === "computer") {
      setIsComputerTurn(true);
    } else {
      setCurrentPlayer((currentPlayer + 1) % playerCount);
    }
  };

  const handleComputerMove = () => {
    const available = board.map((v, i) => (v ? null : i)).filter((i) => i !== null);
    if (available.length === 0) return;

    const randomIndex = available[Math.floor(Math.random() * available.length)];
    const newBoard = [...board];
    newBoard[randomIndex] = icons[1]; // Computer icon (⭕)
    setBoard(newBoard);
    checkWinner(newBoard);
    setIsComputerTurn(false);
  };

  const checkWinner = (board) => {
    const lines = [];

    // Generate all possible winning lines dynamically
    for (let i = 0; i < gridSize; i++) {
      // Rows
      lines.push(board.slice(i * gridSize, i * gridSize + gridSize));
      // Columns
      lines.push(board.filter((_, idx) => idx % gridSize === i));
    }

    // Diagonals
    const diag1 = [];
    const diag2 = [];
    for (let i = 0; i < gridSize; i++) {
      diag1.push(board[i * gridSize + i]);
      diag2.push(board[i * gridSize + (gridSize - i - 1)]);
    }
    lines.push(diag1, diag2);

    // Check each line
    for (let line of lines) {
      const first = line[0];
      if (first && line.every((cell) => cell === first)) {
        setWinner(first);
        return;
      }
    }

    // Check for draw
    if (board.every((cell) => cell)) {
      setWinner("draw");
    }
  };

  const resetGame = () => {
    setBoard(Array(totalCells).fill(null));
    setWinner(null);
    setCurrentPlayer(0);
    setIsComputerTurn(false);
  };

  return (
    <div className="game-container">
      <h1 className="game-title">
        {winner
          ? winner === "draw"
            ? "It's a Draw!"
            : `${playerNames[icons.indexOf(winner)] || "Winner"} Wins!`
          : `${mode === "computer" && isComputerTurn
              ? "Computer's Turn"
              : `${playerNames[currentPlayer] || `Player ${currentPlayer + 1}`}'s Turn (${icons[currentPlayer]})`
            }`}
      </h1>

      <div
        className="board"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
        }}
      >
        {board.map((cell, index) => (
          <div
            key={index}
            className="cell"
            onClick={() => handleClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>

      <div className="controls">
        <button className="glow-button" onClick={resetGame}>
          Restart
        </button>
        <button className="glow-button" onClick={onBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default GameBoard;
