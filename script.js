"use strict";

const INITIAL_GRID_SIZE = 16;
const MAX_GRID_SIZE = 50;

generateHTMLGrid(INITIAL_GRID_SIZE);

const refreshButton = document.querySelector(".refresh");
refreshButton.addEventListener("click", () => {
    const newSize = parseInt(prompt("How many squares should the new grid be?"));
    if (newSize <= MAX_GRID_SIZE && newSize > 0) {
        cleanGrid();
        generateHTMLGrid(newSize);
    }
})

function generateHTMLGrid(size) {
    const gridSize = size;
    const container = document.querySelector(".grid-container");
    const boxSize = Math.floor((1 / size) * 100);

    for (let i = 0; i < (gridSize ** 2); i++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("gridItem");
        gridBox.setAttribute(`style`, `flex-basis: ${boxSize}%; padding-bottom: ${boxSize}%;`);
        container.appendChild(gridBox);
    }

    container.addEventListener("mouseover", (e) => {
        if (e.target != container) {
            e.target.setAttribute("style", 
                `background-color: grey;
                flex-basis: ${boxSize}%;
                padding-bottom: ${boxSize}%;`
            );
        }
    });
}

function cleanGrid() {
    const container = document.querySelector(".grid-container");
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}