# 🎮 TIC-TAC-TOE (Multiplayer + AI)

A modern, arcade-style **Tic Tac Toe** web app built using **React.js**, featuring beautiful gradient UI, multiple player modes, toss animations, and smart AI logic for player vs computer mode.

---

## 🚀 Features

### 🧑‍🤝‍🧑 Player vs Player
- Choose **2 to 5 players**.
- Dynamic grids:
  - 2 players → 3×3
  - 3 players → 4×4
  - 4 players → 5×5
  - 5 players → 6×6
- Auto-assigned unique player icons (❌ ⭕ ⭐ 💎 🔥).
- Real-time turn indication with glowing UI.
- Built-in **Restart** and **Back** options.

---

### 🤖 Player vs Computer
- Classic **3×3 grid**.
- Smart AI logic (tries to win → block → random).
- Toss before the match to decide who plays first.
- Auto computer turn animations.
- Works with the same elegant UI as PvP mode.

---

### 🧠 Toss & Player Setup
- For PvP modes → enter player names in a **beautiful modal**.
- Randomized **toss animation** to decide first turn.
- For PvC → toss decides whether player or computer starts.

---

## 🧩 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React.js** | Frontend framework |
| **Vite** | Fast React bundler |
| **CSS3 (Glassmorphism)** | Modern UI/UX |
| **JavaScript (ES6)** | Game logic |
| **Firebase (optional)** | Authentication / future backend |
| **GitHub Pages** | Hosting (optional) |

---

## 🖥️ Screenshots

### 🎨 Mode Selection
> Choose between Player vs Player or Player vs Computer.

### 🧍 Player Count Selection
> Select number of players (2 to 5).

### 🏁 Toss & Gameplay
> Real-time toss and dynamic grid gameplay with vibrant glowing effects.

---

## ⚙️ Setup Instructions

### 1️⃣ Clone this Repository
```bash
git clone https://github.com/aryanhiremath/TIC-TAC-TOE.git
cd TIC-TAC-TOE/frontend 

### 2 Install Dependencies
npm install

### 3 Start the development server
npm run dev
