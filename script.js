"use strict";

const INITIAL_GRID_SIZE = 16;
const MAX_GRID_SIZE = 100;

generateHTMLGrid(INITIAL_GRID_SIZE);

const refreshButton = document.querySelector(".refresh");
refreshButton.addEventListener("click", () => {
    let newSize = parseInt(prompt("How many squares should the new grid be?"));
    if (newSize <= MAX_GRID_SIZE && newSize > 0) {
        cleanGrid();
        generateHTMLGrid(newSize);
    }
})

function generateHTMLGrid(size) {
    let gridSize = size;
    const container = document.querySelector(".grid-container");

    for (let i = 0; i < (gridSize ** 2); i++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("gridItem");
        container.appendChild(gridBox);
    }

    container.addEventListener("mouseover", (e) => {
        if (e.target != container) {
            e.target.setAttribute("style", "background-color: grey;");
        }
    });
}

function cleanGrid() {
    let container = document.querySelector(".grid-container");
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}