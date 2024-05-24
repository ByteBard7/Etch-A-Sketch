const sketchBoardSize = 400;
const sketchBoard = document.getElementById("sketchBoard");
sketchBoard.style.width = `${sketchBoardSize}px`;
sketchBoard.style.height = `${sketchBoardSize}px`;

const gridSlider = document.getElementById("gridSlider");
const gridText = document.getElementById("gridText");
const color = document.getElementById("color");
const clearGrid = document.getElementById("clearGrid");
const randomColor = document.getElementById("randomColor");

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

    clearGrid.addEventListener("click", () => {
      cell.style.background = "white";
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

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let randomColor = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return randomColor;
}

createSketchBoard(16);
