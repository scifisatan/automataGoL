const CELL_WIDTH = CELL_HEIGHT = 18
const NROW = NCOLUMN = 600 / CELL_WIDTH
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


function mouseClick(event) {
    mouseX = event.offsetX;
    mouseY = event.offsetY;
    x = Math.floor(mouseX / CELL_WIDTH) * CELL_WIDTH
    y = Math.floor(mouseY / CELL_HEIGHT) * CELL_HEIGHT
    ctx.fillStyle = 'white';
    ctx.fillRect(x, y, CELL_WIDTH, CELL_HEIGHT);
    console.log(event)
    console.log(mouseX, mouseY)
    console.log(x, y)
}
canvas.addEventListener("click", mouseClick)

function clearCanvas() {
    ctx.fillStyle = 'red';
    ctx.clearRect(0, 0, 800, 800);
    console.log("Board Cleared")
}

