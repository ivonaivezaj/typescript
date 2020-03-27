// Implement a way to generate a random integer from 0 through 15.
const generateRandom = Math.floor(Math.random() * 15);

// Get the cells - Implement document.querySelector and/or document.querySelectorAll.
const cells = document.querySelectorAll(".cell");

// Assign an id of “it” to a random cell.
cells[generateRandom].id = "it";

//List of clicked cells
const clickedCells = [];

// 5. Implement a way to change the background color of a clicked cell to green.
//Implement a way to change the background color the cell with the id of “it” to red.
//When the cell with the id of “it” is clicked, all the previously clicked elements with a
//class of "cell" should change their background color to yellow.
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
//Implement a click event listener which uses a function declaration as the event handler.
//Implement a way to remove the click event listener after the cell with the id of “it” is clicked.


for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", e => changeColor(e));
  cells[i].removeEventListener("click", e => changeColor(e));
}
//Implement a way to remove the click event listener after the cell with the id of “it” is clicked.
  