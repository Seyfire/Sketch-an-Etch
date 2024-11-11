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
            cell.addEventListener("mouseover", e => {
                colorCell(e.target);
            });
            column.appendChild(cell);
            cell.classList.add("cell");
        }
    }
}

function changeGridSize(gridWidth) {
    // clears and creates an empty grid
    clearGrid();
    createGrid(gridWidth);
}

function promptUser() {
    // prompts user for a number, returns that number
    let userInput = Number(prompt(promptMessage, `${gridWidth}`));

    // if input isn't a number, prompt again 
    const errorMessage = "Invalid input. "
    while ( (userInput < 1 || userInput > 100) ||
            (isNaN(userInput)) ) {
        userInput = prompt(errorMessage + promptMessage, `${gridWidth}`);
    }

    // sets the grid width to what the user entered
    gridWidth = userInput;

    return userInput;
}

function clearGrid () {
    // deletes all elements in the canvas
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    }
}

function colorCell(cell) {
    // fills the cell with beautiful color!
    cell.style["background-color"] = fillColor;
}

// set default values 
let gridWidth = 16;
let fillColor = "black";
const promptMessage = "Enter the desired width of the grid (1 - 100) ";

const canvas = document.querySelector(".canvas");
const gridButton = document.querySelector(".button-grid");

// set button to change grid size via user input
gridButton.addEventListener("click", e => {
    changeGridSize(promptUser());
});

createGrid(gridWidth);
