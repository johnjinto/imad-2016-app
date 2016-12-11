var img = document.getElementById('angel');

var flydwn = document.getElementById('downbutton');
var flyup = document.getElementById('upbutton');
var flyryt = document.getElementById('rightbutton');
var flyleft = document.getElementById('leftbutton');
var element = document.getElementById('santaspeak');

var topinc = parseInt(img.style.top, 10);
var leftinc = parseInt(img.style.left, 10);

//FUNCTIONS TO BE WRITTEN TO AVOID REPEATING THE FOLLOWING 4 CODE BLOCKS!!

flydwn.onmousedown = function(){	
		var stopLoop = setInterval(function(){ 
		topinc = topinc+10;
		img.style.top = topinc + 'px';
		thanks();
		}, 150);
	this.onmouseup =function(){
	clearInterval(stopLoop);
	}
}


flyup.onmousedown = function(){	
		var stopLoop = setInterval(function(){ 
		topinc = topinc-10;
		img.style.top = topinc + 'px';
		thanks();
		}, 150);
	this.onmouseup =function(){
	clearInterval(stopLoop);
	}
}

flyryt.onmousedown = function(){	
		var stopLoop = setInterval(function(){ 
		leftinc = leftinc+10;
		img.style.left = leftinc + 'px';
		thanks();
		}, 150);
	this.onmouseup =function(){
	clearInterval(stopLoop);
	}
}

flyleft.onmousedown = function(){	
		var stopLoop = setInterval(function(){ 
		leftinc = leftinc-10;
		img.style.left = leftinc + 'px';
		thanks();
		}, 150);
	this.onmouseup =function(){
	clearInterval(stopLoop);
	}
}


var thanks = function(){

console.log(topinc);
console.log(leftinc);
//if(topinc===-280&&leftinc===450)
if((topinc<-260&&topinc>-300)&&(leftinc>320&&leftinc<360))
{
element.innerHTML = 'OH...THANK YOU..GOD BLESS YOU DEAR';
}

else 
{
element.innerHTML = 'OH...NOT YET THERE..';
}

// leftinc=350
//topinc =-280
}