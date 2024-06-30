const sketchBoardSize = 400;
const sketchBoard = document.getElementById("sketchBoard");
sketchBoard.style.width = `${sketchBoardSize}px`;
sketchBoard.style.height = `${sketchBoardSize}px`;

const gridSize = document.getElementById("gridSize");
const createGridBtn = document.getElementById("createGrid");
const gridText = document.getElementById("gridText");
const color = document.getElementById("color");
const clearGrid = document.getElementById("clearGrid");

function createSketchBoard(gridCells) {
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

createGridBtn.addEventListener("click", () => {
  const gridSizeValue = Number(gridSize.value);
  if (gridSizeValue <= 0 || gridSizeValue > 100) {
    alert("Please enter a value between 1 to 100");
  } else {
    removeGridCells();
    createSketchBoard(gridSize.value);
  }
});

createSketchBoard(16);
