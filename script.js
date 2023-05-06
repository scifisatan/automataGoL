const CELL_WIDTH = 24
const CELL_HEIGHT = 24
const NROW =  600 / CELL_WIDTH
const NCOLUMN = 600 / CELL_HEIGHT
const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');
let state = 1;
let color = ["black","white"];

function createBoard ()  {
    let board = new Array(NROW);
    for (let i = 0; i <NROW; ++i) {
        board[i] = new Array(NCOLUMN)
        for (let j = 0; j <NCOLUMN; ++j) {
            board[i][j] = 0;
        }
        console.log("\n")
        
    }
    return board;
}

let currentBoard = createBoard();
let nextBoard = createBoard();

function renderCanvas(board){
    for (let i = 0; i <NROW; ++i) {
        for (let j = 0; j <NCOLUMN; ++j) {
        ctx.fillStyle = color[board[i][j]]
        ctx.fillRect(i*CELL_WIDTH, j*CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT);
        } 
    }
}

function computeNextBoard(board){
    for (let i = 0; i <NROW; ++i) {
        for (let j = 0; j <NCOLUMN; ++j) {
            if(board[i][j] === 0){
                board[i][j] = 1;
            }
            else{board[i][j] = 0}
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

})

function changeColor(){
    if (state === 0){
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
    renderCanvas(currentBoard)
    console.log("Board Cleared")
}

function nextCanvas(){
    nextBoard = computeNextBoard(currentBoard);
    nextBoard = currentBoard
    renderCanvas(nextBoard)
}


