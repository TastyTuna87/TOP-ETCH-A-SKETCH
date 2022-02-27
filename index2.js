const grid = document.getElementById("gridContainer");
const container = document.getElementById("container");
const gridClasses = document.querySelectorAll(".gridClass");

function colorChange(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    grid.style.backgroundColor = "#"+randomColor;

}
grid.addEventListener("mouseover", colorChange);


gridClasses.forEach(gridClass =>{
    gridClass.addEventListener("mouseover", ()=>{
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        gridClass.style.backgroundColor ="#"+randomColor;
    });
})