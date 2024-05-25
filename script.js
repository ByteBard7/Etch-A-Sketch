const sketchBoardSize = 400;
const sketchBoard = document.getElementById("sketchBoard");
sketchBoard.style.width = `${sketchBoardSize}px`;
sketchBoard.style.height = `${sketchBoardSize}px`;

const gridSlider = document.getElementById("gridSlider");
const gridText = document.getElementById("gridText");
const color = document.getElementById("color");
const clearGrid = document.getElementById("clearGrid");

function createSketchBoard(gridCells) {
  createGrid(gridCells);
  clearGrid.addEventListener("click", () => {
    cell.style.background = "white";
  });
}

function createGrid(gridCells) {
  for (let i = 0; i < gridCells * gridCells; i++) {
    const cell = document.createElement("div");
    cell.style.width = `${sketchBoardSize / gridCells}px`;
    cell.style.height = `${sketchBoardSize / gridCells}px`;
    cell.classList.add("cell");
    sketchBoard.appendChild(cell);

    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = color.value;
    });
  }
}

function removeGridCells() {
  while (sketchBoard.firstChild) {
    sketchBoard.removeChild(sketchBoard.firstChild);
  }
}

gridSlider.oninput = function () {
  const grids = this.value;
  gridText.textContent = `${this.value} x ${this.value}`;
  removeGridCells();
  createSketchBoard(grids);
};

createSketchBoard(16);
