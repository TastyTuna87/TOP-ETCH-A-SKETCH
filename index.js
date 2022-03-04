//const grid = document.getElementById("grid");
const container = document.getElementById("mainBox");
const addButton = document.getElementById("addCount");
const decButton = document.getElementById("decCount");
const counter = document.getElementById("counter");
const okButton = document.getElementById("okay");

const rgb = document.getElementById("rainbowColor");
const eraser = document.getElementById("eraserTool");
const blackPencil = document.getElementById("colorBlackButton");
const colorPicker = document.getElementById("colorPicker");

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
    const gridBoxes = document.querySelectorAll(".gridBox");
    //random color generator
    rgb.addEventListener("click", ()=>{
        gridBoxes.forEach(gridBox =>{
            gridBox.addEventListener("mouseover", ()=>{
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                gridBox.style.backgroundColor = "#"+randomColor;
            })
        })
    })
    //black color
    blackPencil.addEventListener("click", ()=>{
        gridBoxes.forEach(gridBox =>{
            gridBox.addEventListener("mouseover", ()=>{
                const color = "000000";
                gridBox.style.backgroundColor = "#"+color;
            })
        })
    })

    //eraser
    eraser.addEventListener("click", ()=> {
        gridBoxes.forEach(gridBox =>{
            gridBox.addEventListener("mouseover", ()=>{
                const color = "e2e3de";
                gridBox.style.backgroundColor = "#"+color;
            })
        })
    })
    //color picker
    colorPicker.addEventListener("click", () => {
        gridBoxes.forEach(gridBox =>{
            gridBox.addEventListener("mouseover", ()=>{
                const color = document.getElementById("colorPicker").value;
                gridBox.style.backgroundColor = color;
            })
        })
    })
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
    if(newSize >= 2){
        decButton.disabled = false;
        okButton.disabled = false;
    }
});
// -- grid size with counter
decButton.addEventListener("click", ()=>{
    newSize = newSize-2;
    counter.innerHTML = Math.abs(newSize);
    if(newSize<2){
        decButton.disabled = true;
        okButton.disabled = true;
    }
});
// ok apply the new size
okButton.addEventListener("click", adjustGrid);
// apply new size of grid
function adjustGrid(){
    DEFAULT_GRID_SIZE = Math.abs(newSize);
    clearGrid();
    createGrid();
}
function clearGrid(){
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) =>{
        container.removeChild(element);
    });
}


reset();