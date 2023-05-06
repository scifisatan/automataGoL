const CELL_WIDTH = CELL_HEIGHT = 18
const NROW = NCOLUMN = 600 / CELL_WIDTH
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let pick = 1;

let color = ["black","white"]


function renderBoard(penColor, x, y){
    ctx.fillStyle = penColor;
    ctx.fillRect(x, y, CELL_WIDTH, CELL_HEIGHT);
}

function mouseClick(event) {
    mouseX = event.offsetX;
    mouseY = event.offsetY;
    x = Math.floor(mouseX / CELL_WIDTH) * CELL_WIDTH
    y = Math.floor(mouseY / CELL_HEIGHT) * CELL_HEIGHT
    renderBoard(color[pick] , x , y)
    
}
canvas.addEventListener("click", mouseClick)

function changeColor(){
    if (pick === 0){
        pick = 1;
        document.getElementById("colorbtn").innerText = "Change Color : White"
    }
    else {
        pick = 0;
        document.getElementById("colorbtn").innerText = "Change Color : Black"
    }
}

function clearCanvas() {
    ctx.clearRect(0, 0, 800, 800);
    console.log("Board Cleared")
}

function nextCanvas(){
    console.log("next canvas")
}
