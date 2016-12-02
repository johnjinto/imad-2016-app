var img = document.getElementById('angel');

var flydwn = document.getElementById('downbutton');
var flyup = document.getElementById('upbutton');
var flyryt = document.getElementById('rightbutton');
var flyleft = document.getElementById('leftbutton');
var element = document.getElementById('santaspeak');

var topinc = parseInt(img.style.top, 10);
var leftinc = parseInt(img.style.left, 10);


flydwn.onclick = function(){	
topinc = topinc+10;
img.style.top = topinc + 'px';
thanks();
}

flyup.onclick = function(){	
topinc = topinc-10;
img.style.top = topinc + 'px';
thanks();
}

flyryt.onclick = function(){	
leftinc = leftinc+10;
img.style.left = leftinc + 'px';
thanks();
}

flyleft.onclick = function(){	
leftinc = leftinc-10;
img.style.left = leftinc + 'px';
thanks();
}

var thanks = function(){
console.log(topinc);
console.log(leftinc);


if(topinc===-280&&leftinc===450)
{
element.innerHTML = 'OH...THANK YOU..GOD BLESS YOU DEAR';
}

else 
{
element.innerHTML = 'OH...NOT YET THERE..';
}

// leftinc=450
//topinc =-290
}