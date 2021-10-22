//drawing stuff
const contSketch = document.querySelector('.sketch');


//buttons
const btnColorMode = document.querySelector('#color-mode')
const btnRGBMode = document.querySelector('#rgb-mode')
const btnUpdateBG = document.querySelector('#set-background')
const btnEraserMode = document.querySelector('#eraser-mode')
const btnClear = document.querySelector('#nuke-mode')
const btnUpdateSize = document.querySelector('#sizing-mode')

// let gridSize = Number(prompt('grid size?'))
let gridSize = Number(40);

//defaults
let keyStatus = '';
let bgDefault = 'white';
let cBackground = 'white';
let brushDefault = 'black';
let cBrush='black';

window.addEventListener('mousedown', function(e){
    console.log('key pressed');
    keyStatus = 'pressed';
    console.log(keyStatus);
    e.preventDefault(); 
    // god damn, what a fix::once no longer mousedown, cancel all related to this event
})
window.addEventListener('mouseup', function(){
    console.log('key lifted');
    keyStatus = 'lifted';
    console.log(keyStatus);
})
window.onload = ()=>{
    const grabGrid = document.querySelectorAll('.grid');
    // console.log(grabGrid);
    grabGrid.forEach((box) => {box.addEventListener('mouseover', function(){
        if (keyStatus=='pressed'){box.style.backgroundColor=`${cBrush}`;}   
    })})   
}


for (let i =0; i<gridSize*gridSize; i++){
    const makeDiv = document.createElement('div');
    makeDiv.textContent='';
    makeDiv.classList.add('grid');
    makeDiv.style.flex = `1 0 ${100/gridSize}%`;
    contSketch.appendChild(makeDiv);
}

btnClear.addEventListener('click', function(){
    const grabGrid = document.querySelectorAll('.grid');
    console.log('clear');
    grabGrid.forEach((box) => {box.style.backgroundColor=`${bgDefault}`;})
})

btnEraserMode.addEventListener('click',function(){
    cBrush=cBackground;
})
btnColorMode.addEventListener('click',function(){
    cBrush=brushDefault;
})


//add color picker
//add background picker
//add grid size selector