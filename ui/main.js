console.log('Loaded!');

var element = document.getElementById('phrase');

element.innerHTML = 'God is Love';

var img = document.getElementById('image1');

var marginLeft = 0;
function moveRight(){ 

marginLeft = marginLeft+10;
image1.style.marginLeft = marginLeft + 'px';

};

img.onclick = function (){

var interval = setInterval(moveRight, 100); 

};