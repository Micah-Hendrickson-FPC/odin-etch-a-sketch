"use strict";

generateHTMLGrid();

function generateHTMLGrid() {
    const GRID_SIZE = 16;
    const container = document.querySelector(".grid-container");

    for (let i = 0; i < (GRID_SIZE ** 2); i++) {
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