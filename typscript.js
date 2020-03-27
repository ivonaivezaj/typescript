var generateRandom = Math.floor(Math.random() * 15);
var cells = document.getElementsByClassName('cell');
cells[generateRandom].id = "it";
var clickedCells = [];
var changeColor = function (e) {
    if (e.target.classList.contains("cell")) {
        e.target.style.backgroundColor = "green";
        clickedCells.push(e.target);
    }
    if (e.target.id == "it") {
        for (var _i = 0, clickedCells_1 = clickedCells; _i < clickedCells_1.length; _i++) {
            var cell = clickedCells_1[_i];
            cell.style.backgroundColor = "yellow";
            e.target.style.backgroundColor = "red";
        }
    }
};
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function (e) { return changeColor(e); });
    cells[i].removeEventListener("click", function (e) { return changeColor(e); });
}
