// Create a webpage with a 16x16 grid of square divs.
const container = document.getElementById('container');

function amountOfDivs (rows, columns) {
   for (let i = 0; i < rows * columns; i++) {
        var div = document.createElement('div');
        div.setAttribute('id', 'divs')
        div.textContent = i + 1;
        container.appendChild(div);
    } 
}

amountOfDivs(16, 16);


