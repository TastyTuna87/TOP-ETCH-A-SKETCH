
// Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!
// It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).
// There are several different ways to make the divs appear as a grid (versus just one on each line).

//Create a webpage with a 16x16 grid of square divs
//const grid = document.getElementById("grid");
const container = document.getElementById("container");
const gridBoxes = document.querySelectorAll(".gridBox");

const gridSize = 16;

function createGrid(){
    container.style.gridTemplateColumns = `repeat${gridSize}, 1fr`;
    for(let i =0; i < gridSize*gridSize; i++){
        const grid = document.createElement("div");
        grid.classList.add("gridBox");
        container.appendChild(grid);
    }
}
createGrid();

gridBoxes.forEach(gridBox =>{
    gridBox.addEventListener("click", ()=>{
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        gridBox.style.backgroundColor = "#"+randomColor;
    })
})