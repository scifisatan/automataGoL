const CELL_WIDTH = 30
const CELL_HEIGHT = 30
const NROW = 600 / CELL_WIDTH
const NCOLUMN = 600 / CELL_HEIGHT
//hadsfj;alksjdf;las

const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');
let state = 1;
let color = ["black", "white"];
let currentBoard = new Array(NROW)
let nextBoard = new Array(NROW)

function createBoard() {
    let board = new Array(NROW);
    for (let i = 0; i < NROW; ++i) {
        board[i] = new Array(NCOLUMN)
        for (let j = 0; j < NCOLUMN; ++j) {
            board[i][j] = 0;
        }
    }
    return board;
}

currentBoard = createBoard();
nextBoard = createBoard();

function renderCanvas(board) {
    for (let i = 0; i < NROW; ++i) {
        for (let j = 0; j < NCOLUMN; ++j) {
            ctx.fillStyle = color[board[i][j]]
            ctx.fillRect(i * CELL_WIDTH, j * CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT);
        }
    }
}

function countAliveNbors(board, x, y) {
    let aliveNbor = 0;
    for (let dr = -1; dr <= 1; ++dr) {
        for (let dc = -1; dc <= 1; ++dc) {
            if (dr != 0 || dc != 0) {
                console.log("checking neighbors of " ,x, y)
                const r = x + dr;
                const c = y + dc;
                if (0 <= r && r < NROW) {
                    if (0 <= c && c < NCOLUMN) {
                      

                        if (board[r][c] === 1) {

                            aliveNbor++;
                            
                        }

                    }
                }
            }
        }

    }
    return aliveNbor
}

function computeNextBoard(board, anotherBoard) {

    for (let i = 0; i < NROW; ++i) {
        for (let j = 0; j < NCOLUMN; ++j) {
          
                let aliveNbor = 0;
                aliveNbor = countAliveNbors(board, i, j);
                console.log(aliveNbor)
                if (board[i][j] === 1) {
                    if (aliveNbor === 2) {
                        anotherBoard[i][j] = 1
                    }
                    else if (aliveNbor === 3) {
                        anotherBoard[i][j] = 1
                    }
                    else {
                        anotherBoard[i][j] = 0;
                    }
                }
                else {
                    if (aliveNbor === 3) {
                        anotherBoard[i][j] = 1
                    }
                    else {
                        anotherBoard[i][j] = 0;
                    }

                

                // if(j === 0) {
                //     anotherBoard[i][NCOLUMN] = 1;
                // }
                // else{
                //     anotherBoard[i][j-1] = 1;

                // }
                // anotherBoard[i][j] = 0;
                // board[i][j] = 0;
            }
        }
    }
}



canvas.addEventListener("click", (e) => {
    console.log("clicked")
    mouseX = e.offsetX;
    mouseY = e.offsetY;
    x = Math.floor(mouseX / CELL_WIDTH)
    y = Math.floor(mouseY / CELL_HEIGHT)
    currentBoard[x][y] = state;
    renderCanvas(currentBoard);
}
)


function changeColor() {
    if (state === 0) {
        state = 1;
        document.getElementById("colorbtn").innerText = "Change Color : White"
    }
    else {
        state = 0;
        document.getElementById("colorbtn").innerText = "Change Color : Black"
    }
}

function clearCanvas() {
    currentBoard = createBoard();
    nextBoard = createBoard();
    renderCanvas(currentBoard)
    console.log("Board Cleared")
}

function nextCanvas() {
    computeNextBoard(currentBoard, nextBoard);
    [currentBoard, nextBoard] = [nextBoard, currentBoard]
    renderCanvas(currentBoard)
}


