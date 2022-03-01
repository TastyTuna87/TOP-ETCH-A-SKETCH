
// Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!
// It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).
// There are several different ways to make the divs appear as a grid (versus just one on each line).

//Create a webpage with a 16x16 grid of square divs
//const grid = document.getElementById("grid");
const container = document.getElementById("mainBox");
const addButton = document.getElementById("addCount");
const decButton = document.getElementById("decCount");
const counter = document.getElementById("counter");
const okButton = document.getElementById("okay");

let DEFAULT_GRID_SIZE = 16;
let newSize = 4;

window.addEventListener("load", createGrid);
// create grid
function createGrid(){
    container.style.gridTemplateColumns = `repeat(${DEFAULT_GRID_SIZE}, auto)`;
    container.style.gridTemplateRows = `repeat(${DEFAULT_GRID_SIZE}, auto)`;
    for(let i =0; i < DEFAULT_GRID_SIZE*DEFAULT_GRID_SIZE; i++){
        const grid = document.createElement("div");
        grid.className="gridBox";
        container.appendChild(grid);
    }
    rndColor();
}
// reset
function reset(){
    const reset = document.getElementById("resetButton");
    reset.addEventListener("click", () =>{
        location.reload();
    })
}
// ++ grid size with counter
addButton.addEventListener("click", ()=>{
    newSize = newSize+2;
    counter.innerHTML = newSize;
});
// -- grid size with counter
decButton.addEventListener("click", ()=>{
    newSize = newSize-2;
    counter.innerHTML = newSize;
});
// ok apply the new size
okButton.addEventListener("click", adjustGrid);
// apply new size of grid
function adjustGrid(){
    DEFAULT_GRID_SIZE = newSize;
    clearGrid();
    createGrid();
}
function clearGrid(){
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) =>{
        container.removeChild(element);
    });
}
//random color generator
function rndColor(){
    const gridBoxes = document.querySelectorAll(".gridBox");
    gridBoxes.forEach(gridBox =>{
        gridBox.addEventListener("mouseover", ()=>{
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            gridBox.style.backgroundColor = "#"+randomColor;
        })
    })
}
reset();