/* ==========================================================================
   VOSC Activity 1 – Tic-Tac-Toe Game Logic
   Beginner-friendly vanilla JavaScript implementation
   ========================================================================== */

// --- 1. Game State Variables ---
// Track the current active player ('X' or 'O')
let currentPlayer = 'X';

// Track whether the game is currently ongoing or finished
let gameActive = true;

// Internal representation of the 3x3 board (indices 0 through 8)
// Empty string means the cell has not been played yet
let gameState = ['', '', '', '', '', '', '', '', ''];

// --- 2. Winning Combinations ---
// All 8 possible winning lines on a 3x3 grid:
// 3 horizontal rows, 3 vertical columns, and 2 diagonals
const winningConditions = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Top-left to bottom-right diagonal
  [2, 4, 6]  // Top-right to bottom-left diagonal
];

// --- 3. DOM Elements ---
const statusDisplay = document.getElementById('status');
const cells = document.querySelectorAll('.cell');
const restartButton = document.getElementById('restartBtn');

// Helper messages to keep text consistent
const playerTurnMessage = (player) => `Player ${player}'s Turn`;
const winningMessage = (player) => `Player ${player} Wins! 🎉`;
const drawMessage = () => `Game Ended in a Draw! 🤝`;

// Initialize initial status display style and text
function initializeStatus() {
  statusDisplay.textContent = playerTurnMessage(currentPlayer);
  statusDisplay.className = 'status-message turn-x';
}

// --- 4. Core Game Functions ---

/**
 * Handles placing the current player's symbol into the board state
 * and updating the visual cell button.
 */
function handleCellPlayed(clickedCell, clickedCellIndex) {
  // Update internal board state
  gameState[clickedCellIndex] = currentPlayer;

  // Update cell UI
  clickedCell.textContent = currentPlayer;
  clickedCell.classList.add(currentPlayer.toLowerCase()); // Adds 'x' or 'o' class
  clickedCell.setAttribute('aria-label', `Cell ${clickedCellIndex + 1}, ${currentPlayer}`);
}

/**
 * Evaluates whether the latest move resulted in a win, a draw,
 * or if the turn should pass to the other player.
 */
function handleResultValidation() {
  let roundWon = false;
  let winningIndices = null;

  // Check each winning combination
  for (let i = 0; i < winningConditions.length; i++) {
    const condition = winningConditions[i];
    const cellA = gameState[condition[0]];
    const cellB = gameState[condition[1]];
    const cellC = gameState[condition[2]];

    // If any cell in the triplet is empty, it cannot be a winning line
    if (cellA === '' || cellB === '' || cellC === '') {
      continue;
    }

    // Check if all three cells match
    if (cellA === cellB && cellB === cellC) {
      roundWon = true;
      winningIndices = condition;
      break;
    }
  }

  // Case 1: A player has won
  if (roundWon) {
    statusDisplay.textContent = winningMessage(currentPlayer);
    statusDisplay.className = 'status-message winner';
    gameActive = false; // Stop further moves

    // Highlight the 3 winning cells
    if (winningIndices) {
      winningIndices.forEach((index) => {
        cells[index].classList.add('winning');
      });
    }
    return;
  }

  // Case 2: Draw (all cells filled, no winner)
  const roundDraw = !gameState.includes('');
  if (roundDraw) {
    statusDisplay.textContent = drawMessage();
    statusDisplay.className = 'status-message draw';
    gameActive = false; // Stop further moves
    return;
  }

  // Case 3: Switch turn to the other player
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusDisplay.textContent = playerTurnMessage(currentPlayer);
  statusDisplay.className = `status-message turn-${currentPlayer.toLowerCase()}`;
}

/**
 * Handles user click on any board cell.
 */
function handleCellClick(event) {
  const clickedCell = event.target;

  // Retrieve index (0 - 8) from the clicked cell's data attribute
  const clickedCellIndex = parseInt(
    clickedCell.getAttribute('data-cell-index'),
    10
  );

  // Guard clauses:
  // 1. Ignore if cell has already been occupied
  // 2. Ignore if game has ended (win or draw)
  if (gameState[clickedCellIndex] !== '' || !gameActive) {
    return;
  }

  // Process the valid move
  handleCellPlayed(clickedCell, clickedCellIndex);
  handleResultValidation();
}

/**
 * Resets the game to its initial starting state.
 */
function handleRestartGame() {
  // Reset state variables
  currentPlayer = 'X';
  gameActive = true;
  gameState = ['', '', '', '', '', '', '', '', ''];

  // Reset UI status message
  initializeStatus();

  // Reset each cell UI
  cells.forEach((cell, index) => {
    cell.textContent = '';
    cell.classList.remove('x', 'o', 'winning');
    cell.setAttribute('aria-label', `Cell ${index + 1}`);
  });
}

// --- 5. Event Listeners ---
// Add click listener to each cell
cells.forEach((cell) => {
  cell.addEventListener('click', handleCellClick);
});

// Add click listener to Restart button
restartButton.addEventListener('click', handleRestartGame);

// Set initial status when script loads
initializeStatus();
