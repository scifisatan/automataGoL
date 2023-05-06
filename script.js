const CELL_WIDTH = 20;
const CELL_HEIGHT = 20;
const NROW = 800 / CELL_WIDTH;
const NCOLUMN = 800 / CELL_HEIGHT;
const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');
const color = ["black", "white"];
let currentBoard = createBoard();
let nextBoard = createBoard();

function createBoard() {
  return Array.from({ length: NROW }, () =>
    Array.from({ length: NCOLUMN }, () => 0)
  );
}

function renderCanvas(board) {
  for (let i = 0; i < NROW; i++) {
    for (let j = 0; j < NCOLUMN; j++) {
      ctx.fillStyle = color[board[i][j]];
      ctx.fillRect(i * CELL_WIDTH, j * CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT);
    }
  }
}

function countAliveNbors(board, x, y) {
  let aliveNbor = 0;
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      if (dr !== 0 || dc !== 0) {
        const r = x + dr;
        const c = y + dc;
        if (r >= 0 && r < NROW && c >= 0 && c < NCOLUMN) {
          aliveNbor += board[r][c];
        }
      }
    }
  }
  return aliveNbor;
}

function computeNextBoard(board, anotherBoard) {
  for (let i = 0; i < NROW; i++) {
    for (let j = 0; j < NCOLUMN; j++) {
      const aliveNbor = countAliveNbors(board, i, j);
      if (board[i][j] === 1) {
        anotherBoard[i][j] = aliveNbor === 2 || aliveNbor === 3 ? 1 : 0;
      } else {
        anotherBoard[i][j] = aliveNbor === 3 ? 1 : 0;
      }
    }
  }
}

canvas.addEventListener("click", (e) => {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
  const x = Math.floor(mouseX / CELL_WIDTH);
  const y = Math.floor(mouseY / CELL_HEIGHT);
  currentBoard[x][y] = 1 - currentBoard[x][y];
  renderCanvas(currentBoard);
});

function changeColor() {
  const newState = 1 - state;
  state = newState;
  document.getElementById("colorbtn").innerText =
    "Change Color : " + color[newState];
}

function clearCanvas() {
  currentBoard = createBoard();
  nextBoard = createBoard();
  renderCanvas(currentBoard);
}

function nextCanvas() {
  computeNextBoard(currentBoard, nextBoard);
  [currentBoard, nextBoard] = [nextBoard, currentBoard];
  renderCanvas(currentBoard);
}
function play() {
    let intervalId = setInterval(() => {
      computeNextBoard(currentBoard, nextBoard);
      [currentBoard, nextBoard] = [nextBoard, currentBoard];
      renderCanvas(currentBoard);
  
      // Check if all cells are dead
      let allDead = true;
      for (let i = 0; i < NROW; ++i) {
        for (let j = 0; j < NCOLUMN; ++j) {
          if (currentBoard[i][j] === 1) {
            allDead = false;
            break;
          }
        }
        if (!allDead) break;
      }
  
      if (allDead) {
        clearInterval(intervalId);
        console.log("All cells are dead. Stopping the game.");
      }
    }, 300);
  }
  

renderCanvas(currentBoard);
