const contSketch = document.querySelector('.sketch');
const grabGrid = document.querySelectorAll('.grid');

// let gridSize = Number(prompt('grid size?'))
let gridSize = Number(32);
let keyStatus = '';


window.addEventListener('mousedown', function(){
    console.log('key pressed');
    keyStatus = 'pressed';
    console.log(keyStatus);
})
window.addEventListener('mouseup', function(){
    console.log('key lifted');
    keyStatus = 'lifted';
    console.log(keyStatus);
})
window.onload = ()=>{
    const grabGrid = document.querySelectorAll('.grid');
    grabGrid.forEach((box) => {box.addEventListener('mouseover', function(){
        if (keyStatus=='pressed'){box.style.backgroundColor='black';}   
    })})   
}






for (let i =0; i<gridSize*gridSize; i++){
    const makeDiv = document.createElement('div');
    makeDiv.textContent=''
    makeDiv.classList.add('grid')
    makeDiv.style.flex = `1 0 ${100/gridSize}%`
    contSketch.appendChild(makeDiv)
}