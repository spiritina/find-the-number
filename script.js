'use strict';
startGame();
function startGame(){
let startTime = new Date();
    let timer = document.getElementById('timer');
    let interval = setInterval(function(){
        let currTime = new Date();
            timer.innerHTML = `${Math.round((currTime-startTime)/60000)} : ${Math.round(((currTime-startTime)%60000)/1000)}`;
    }, 200);
let arr = [],
    field = document.getElementById('field'),
    currentToFind = 1;
for(let i=0; i<99; i++ ){
    arr.push(i+1);
}
arr.sort(randomizeArray);
field.innerHTML = '';
for(let i=0; i<arr.length; i++){
    drawBlock(i);
}

function drawBlock(i){
    let div = document.createElement('div');
    div.classList.add('number');
    div.innerHTML = arr[i];
    div.setAttribute('data-number', arr[i]);
    div.style.fontSize = (12+Math.random()*30)+'px';
    div.style.color = `rgb(${Math.random()*200}, ${Math.random()*200}, ${Math.random()*200})`;
    div.addEventListener('click', function(e){
        e.preventDefault();
        if(this.dataset.number==currentToFind){
            this.classList.add('found');
            currentToFind++;
            if(currentToFind==100){
                alert('You win!');
                startGame();
                clearInterval(interval);
            }
;        };
    })
    field.appendChild(div);
}

function randomizeArray(a, b) {
    return Math.random() - 0.5;
}}
