
function createGrid(gridWidth) {
    // creates a number of cells within the canvas container

    // create columns  
    for ( let i = 0; i < gridWidth; i++) {
        column = document.createElement("div");
        canvas.appendChild(column);        
        column.classList.add("column");
    
        // create divs inside columns 
        for ( let i = 0; i < gridWidth; i++) {
            cell = document.createElement("div");
            // add event listener for hovering over cell
            cell.addEventListener("mouseover", function (e) {
                colorCell(e.target);
            });
            column.appendChild(cell);
            cell.classList.add("cell");
        }
    }
}

function colorCell(cell) {
    // fills the cell with beautiful color!

    cell.style["background-color"] = "black";
}

let gridWidth = 16;

const canvas = document.querySelector(".canvas");

createGrid(gridWidth);
