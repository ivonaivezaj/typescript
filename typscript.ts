const generateRandom: number = Math.floor(Math.random() * 15);

const cells: HTMLCollectionOf<Element> = document.getElementsByClassName(
  "cell"
);

cells[generateRandom].id = "it";

const clickedCells: any[] = [];

const changeColor = e => {
  if (e.target.classList.contains("cell")) {
    e.target.style.backgroundColor = "green";
    clickedCells.push(e.target);
  }
  if (e.target.id == "it") {
    for (let cell of clickedCells) {
      cell.style.backgroundColor = "yellow";

      e.target.style.backgroundColor = "red";
    }
  }
};
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", e => changeColor(e));
  cells[i].removeEventListener("click", e => changeColor(e));
}
