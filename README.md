# VOSC Activity-1 – Tic-Tac-Toe

## Description

This project is a classic two-player Tic-Tac-Toe game built as part of **VOSC Activity 1 – Prerequisite Activity**. It runs directly in any modern web browser without requiring any installation, build tools, external libraries, or frameworks.

## Technologies Used

* HTML
* CSS
* JavaScript

## Features

* **Two-Player Local Gameplay**: Play turn-by-turn with a friend on the same screen.
* **Player Turn Indicator**: Dynamic status message showing whether it is Player X's or Player O's turn.
* **Distinct Player Styling**: Visual distinction between Player X and Player O marks.
* **Move Validation**: Occupied cells cannot be clicked or overwritten.
* **Win Detection**: Automatically detects and announces wins across all 8 possible combinations (3 rows, 3 columns, 2 diagonals).
* **Winning Highlights**: Visually highlights the exact 3 cells that formed the winning line.
* **Draw Detection**: Detects and announces when all 9 cells are filled without a winner.
* **State Locking**: Automatically prevents any further moves once a game has ended.
* **Restart / New Game**: One-click reset button to clear the board and start a fresh game with Player X.
* **Responsive & Accessible Design**: Works smoothly on mobile screens, tablets, and desktop displays.

## How to Run

1. Open the project folder `VOSC Activity-1` on your computer.
2. Locate the `index.html` file.
3. Double-click `index.html` (or right-click and choose **Open with** -> select any web browser like Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari).
4. The game will open immediately and is ready to play.

## How to Play

1. The game is played on a 3×3 grid.
2. Player X always moves first, followed by Player O.
3. Players take turns clicking an empty cell to place their respective mark (X or O).
4. The first player to align 3 of their marks horizontally, vertically, or diagonally wins the match.
5. If all 9 cells are filled and neither player has achieved 3 in a row, the match ends in a draw.
6. Click the **Restart Game** button at any point to reset the board and start a new match.

## Project Structure

```text
VOSC Activity-1/
├── index.html
├── style.css
├── script.js
└── README.md
```

* **index.html**: Defines the semantic HTML5 structure of the game, including title, status display, the 3×3 game board, and the restart button.
* **style.css**: Provides modern, clean styling, responsive layouts, color schemes for Player X and Player O, hover interactions, and winning animations.
* **script.js**: Contains the core game logic, turn management, click handling, win and draw detection algorithms, and board reset functionality.
* **README.md**: Documentation covering project description, rules, features, structure, and instructions on running the game.
