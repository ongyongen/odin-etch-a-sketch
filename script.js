// Elements
let container = document.querySelector('div.grid')
let canvas = document.querySelector('div.canvas')

let genSquaresButton = document.querySelector('button.gen-squares')
let colorPicker = document.querySelector('input#color')
let randomColorPicker = document.querySelector('button#random-colors')
let resetCanvasButton = document.querySelector('button#reset-canvas')

// State
let randomise = false

// Generate square grids //
function genSquares() {
    container.removeChild(canvas)
    i = 0
    while(i < 256) {
        const square = document.createElement('div')
        square.classList.add('square')
        container.append(square)
        i++
    }
}

function resetCanvas() {
    container.innerHTML = ''
    container.appendChild(canvas)
}

// Generate random colors
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Set color palette to be a fixed color
function setFixedState() {
    randomise = false;
}

// Set color palette to be a random color
function setRandomState(e) {
    randomise == true ? randomise = false : randomise = true 
    randomise == true ? 
        e.target.style.color = getRandomColor() : 
        e.target.style.color = "black"       
}

// Fill square grids with stated color
function fillColor(e) {
    if (randomise == false && e.target && e.target.classList == 'square') {
        e.target.style.background = colorPicker.value;
    } else if (randomise == true && e.target && e.target.classList == 'square') {
        e.target.style.background = getRandomColor();
    }
}

// Trigger events
genSquaresButton.addEventListener('click', genSquares)
colorPicker.addEventListener('click', setFixedState)
randomColorPicker.addEventListener('click',setRandomState)
resetCanvasButton.addEventListener('click', resetCanvas)
document.addEventListener('mouseover', fillColor)