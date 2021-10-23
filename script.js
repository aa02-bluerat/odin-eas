//drawing stuff
const contSketch = document.querySelector('.sketch');
const colorPicked = document.querySelector("#brushColor")
const colorBackground = document.querySelector("#backgroundColor")

//buttons
const btnColorMode = document.querySelector('#color-mode')
const btnRGBMode = document.querySelector('#rgb-mode')
const btnUpdateBG = document.querySelector('#set-background')
const btnEraserMode = document.querySelector('#eraser-mode')
const btnClear = document.querySelector('#nuke-mode')
const btnUpdateSize = document.querySelector('#sizing-mode')
const downGrid = document.querySelector('#down-grid-size')
const upGrid = document.querySelector('#up-grid-size')



// let gridSize = Number(prompt('grid size?'))
let currentGridSize = 40;

//defaults
let keyStatus = '';
let mode='draw'
const bgDefault = 'white';
const brushDefault = 'black';
//current values
let cBackground = 'white';
let cBrush='black';

//START ALL FUNCTIONS
function updateBrushColor(){
    if (mode=='draw'){
        cBrush = colorPicked.value
    }
    else if (mode=='erase'){
        cBrush = cBackground;
    }
    else if (mode=='rgb'){
        const randomR = Math.floor(Math.random()*256);
        const randomG = Math.floor(Math.random()*256);
        const randomB = Math.floor(Math.random()*256);
        cBrush = `rgb(${randomR}, ${randomG}, ${randomB})`
    }  

}

function resetAll(){
    colorBackground.value = '#ffffff';
    colorPicked.value = '#000000';
    cBackground = '#ffffff';
    mode='draw';
    updateBrushColor();
    currentGridSize= 40;
    eraseOldGrid();
    loadGrid();
    drawAgain();
}

function toggleAll(){
    btnColorMode.classList.remove('active');
    btnRGBMode.classList.remove('active');
    btnEraserMode.classList.remove('active');
}

function loadGrid(){
    let compGrid = currentGridSize
    // console.log(compGrid)
    for (let i =0; i<compGrid*compGrid; i++){
        const makeDiv = document.createElement('div');
        makeDiv.textContent='';
        makeDiv.classList.add('grid');
        makeDiv.style.flex = `1 0 ${100/compGrid}%`;
        contSketch.appendChild(makeDiv);
    }
}

function eraseOldGrid(){
    let child=contSketch.lastElementChild;
    while (child){
        contSketch.removeChild(child);
        child=contSketch.lastElementChild;
    }
}

function drawAgain(){
    const grabGrid = document.querySelectorAll('.grid');
    // console.log(grabGrid);
    grabGrid.forEach((box) => {box.addEventListener('mouseover', function(){
        if (keyStatus=='pressed'){
            updateBrushColor()
            box.style.backgroundColor=`${cBrush}`;}   
                   
    })})   
    
}

//END ALL FUNCTIONS


// START listener for mouse inputs for drawing
window.addEventListener('mousedown', function(e){
    keyStatus = 'pressed';
    e.preventDefault(); 
    // god damn, what a fix::once no longer mousedown, cancel all related to this event
})

window.addEventListener('mouseup', function(){
    keyStatus = 'lifted';
})

// END listener for mouse inputs for drawing

loadGrid()
drawAgain()

btnColorMode.addEventListener('click',function(){
    mode='draw';
    toggleAll()
    btnColorMode.classList.add('active');
    cBrush=colorPicked.value;  
})

btnRGBMode.addEventListener('click',function(){
    mode='rgb'
    toggleAll()
    btnRGBMode.classList.add('active');
})

btnUpdateBG.addEventListener('click',function(){
    const grabGrid = document.querySelectorAll('.grid');
    console.log('updateBG');
    grabGrid.forEach((box) => {box.style.backgroundColor=`${colorBackground.value}`;})
    cBackground = colorBackground.value;
    console.log(cBackground);
})

btnEraserMode.addEventListener('click',function(){
    mode='erase';
    toggleAll()
    btnEraserMode.classList.add('active');
})

btnClear.addEventListener('click', function(){
    const grabGrid = document.querySelectorAll('.grid');
    console.log('clear');
    grabGrid.forEach((box) => {box.style.backgroundColor=`${bgDefault}`;})
    resetAll()
    //reset functions
})

downGrid.addEventListener('click', function(){
    console.log('downgrid');
    if (currentGridSize == 8){
        alert("I can't handle something that small!")
        return;
    }
    currentGridSize-=8
    eraseOldGrid()
    loadGrid()
    drawAgain()
})

upGrid.addEventListener('click', function(){
    console.log('upgrid');
    if (currentGridSize == 96){
        alert("I can't handle that size!")
        return;
    }
    currentGridSize+=8
    eraseOldGrid()
    loadGrid()
    drawAgain()
})


