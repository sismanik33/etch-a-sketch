const container= document.getElementById('container');
const resizeButton = document.getElementById('resizeGridButton');

let columns = 16;
let rows = 16;
let squareGrids = columns * rows;
createGrid(columns, rows);

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function createGrid(width, height) {
    container.style.setProperty('--grid-rows', height);
    container.style.setProperty('--grid-cols', width);
    
    let totalSquares = width * height;
    for (let i = 0; i < totalSquares; i++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item'
    }
}

function resizeGrid() {
    let newSide = prompt('Enter size of new grid:', 10);
    clearGrid();
    createGrid(newSide, newSide);    
}

resizeButton.addEventListener('click', resizeGrid);

const tiles = document.querySelectorAll('.grid-item');
tiles.forEach(tile => tile.addEventListener('mouseover', function (e) {
   this.style.backgroundColor = 'black';
}));



