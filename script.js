// Create a webpage with a 16x16 grid of square divs.
const container = document.querySelector('.container');

function createDivs(rows, columns) {
    for (let i = 0; i < (rows * columns); i++) {
        var div = document.createElement('div');
        container.appendChild(div).className = 'cell';
        div.id = 'cell ' + `${i}`;
    }
}
createDivs(16, 16);

function addEventListenerList(list, event, fn) {
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, fn);
    }
}

function removeStyleList(list) {
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].style.removeProperty('background-color');
    }
}

//Nodelist of the divs (cells) created with the createDivs function.
const cells = document.querySelectorAll('.cell'); 

//Function that loops through the nodelist and adds an eventListener to each element.
addEventListenerList(cells, 'mouseenter', changeColor);

//Function that gets called by the eventListener to change backgroundColor in Javascript.
function changeColor(e) {
    // e.target.className = 'triggered';
    e.target.style.backgroundColor = 'black';
}

//Button logic
const button = document.querySelector('.button');

button.addEventListener('click', buttonFunction);

function buttonFunction() {
    removeStyleList(cells);
    alert('Canvas cleared!');
}