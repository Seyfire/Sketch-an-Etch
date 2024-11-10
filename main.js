
function createGrid(gridWidth) {
    // creates a number of cells within the canvas container
    const gridCells = gridWidth ** 2;
    for ( let i = 0; i < gridCells; i++) {
        const cell = document.createElement("div");
        canvas.appendChild(cell);
        // set styles for each cell
        cell.classList.add("cell");
    }
}

let gridWidth = 16;

const canvas = document.querySelector(".canvas");

createGrid(gridWidth);
