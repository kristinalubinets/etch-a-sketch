window.onload = () => {

let numberOfRows = 16;

let btn = document.querySelector('.btn');
let input = document.querySelector('#userBtn');
const innerContainer = document.querySelector('.inner-container');

makeBlocks();  //the first call happens from here by default, no buttons were pushed, default value is 16
btn.addEventListener( 'click' , newBlocks) ;

function newBlocks() {

    if((input.value > 0) ) {
        const innerContainer = document.querySelector('.inner-container');   
        innerContainer.removeChild(document.querySelector('.grid'));

    makeBlocks();
    }
    else 
        alert("Invalid value!!!");
}

function makeBlocks() {

    let grid = document.createElement('div');
    grid.className = 'grid';
    innerContainer.appendChild(grid);

    let inputVar = input.value;

    if( inputVar == '') 
        inputVar = numberOfRows;
    else 
        inputVar = input.value;

    for( let i = 0; i < inputVar; i++) {
        let row = document.createElement('div');
        row.className = "row";

        for( let j = 0; j < inputVar; j++) {
            let box = document.createElement('div');
            box.className = "box";
            box.style.height = parseInt(grid.offsetWidth)/inputVar + "px";
            box.style.width = box.style.height;

            row.appendChild(box);
        }
        grid.appendChild(row);       
    }
    mouseMove();
}


function mouseMove () {
    let boxes = document.querySelectorAll('.box');

    boxes.forEach( box  => {
        box.addEventListener('mouseenter', function enterMouse(event) {
            console.log('box clicked', event);

            box.classList.add('boxHover');
        });
    });
}




}

