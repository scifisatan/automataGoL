let counter = 0;

function change(){
    const butt = document.getElementById("btn")
    let count = Number(butt.textContent)
    count++
    butt.textContent = count;

}