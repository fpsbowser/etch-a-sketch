//Container to hold all cells
const container = document.querySelector('.container');

//Nodelist of the cells created with the createDivs function
let cells = document.querySelectorAll('.cell');

//Default grid
createCells(32, 32, '3.125%');
activateCells();

//h2 element showing the current grid size
let gridText = document.getElementById('size');

            /* BUTTONS */

//RESET button
const resetButton = document.querySelector('.resetButton');
resetButton.addEventListener('click', resetButtonFunction);
function resetButtonFunction() {
    alert('RESET');
    removeStyleList(cells);
}

//GRIDSIZE button
const sizeButton = document.querySelector('.gridButton');
sizeButton.addEventListener('click', gridButtonFunction);
function gridButtonFunction() {
    let answer = prompt('How big do you want your grid? 16x16, 32x32, or 64x64.', '16x16')
    if (answer == '16x16') {
        clearGrid();
        createCells(16, 16, '6.25%');
        activateCells();
        gridText.textContent = '16x16';
    } else if (answer == '32x32') {
        clearGrid();
        createCells(32, 32, '3.125%');
        activateCells();
        gridText.textContent = '32x32';
    } else if (answer == '64x64') {
        clearGrid();
        createCells(64, 64, '1.5625%');
        activateCells();
        gridText.textContent = '64x64';
    } else {
        answer = 'User cancelled the prompt.';
    }
}

            /* FUNCTIONS */

//Function to create cells for the grid
function createCells(rows, columns, size) {
    for (let i = 0; i < (rows * columns); i++) {
        var div = document.createElement('div');
        container.appendChild(div).className = 'cell';
        div.id = 'cell ' + `${i}`;
        div.style.width = size;
    }
}

//Function that loops through the nodelist and adds an eventListener to each element.
function addEventListenerList(list, event, fn) {
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, fn);
    }
}

//Function to apply eventListener to all cells in the grid
function activateCells() {
    cells = document.querySelectorAll('.cell'); 
    addEventListenerList(cells, 'mouseenter', changeColor);
}

//Function that gets called by the eventListener to change backgroundColor in Javascript.
function changeColor(e) {
    e.target.style.backgroundColor = 'black';
}

//Function to clear grid
function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

//Function to reset grid by looping through the node list of divs and changing the background of each element/node
function removeStyleList(list) {
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].style.backgroundColor = 'darksalmon';
    }
}