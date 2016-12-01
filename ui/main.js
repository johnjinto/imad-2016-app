var img = document.getElementById('angel');

var flydwn = document.getElementById('downbutton');
var flyup = document.getElementById('upbutton');
var flyryt = document.getElementById('rightbutton');
var flyleft = document.getElementById('leftbutton');


var topinc = parseInt(img.style.top, 10);
var leftinc = parseInt(img.style.left, 10);

flydwn.onclick = function(){	
topinc = topinc+10;
img.style.top = topinc + 'px';
}

flyup.onclick = function(){	
topinc = topinc-10;
img.style.top = topinc + 'px';
}

flyryt.onclick = function(){	
leftinc = leftinc+10;
img.style.left = leftinc + 'px';

}

flyleft.onclick = function(){	
leftinc = leftinc-10;
img.style.left = leftinc + 'px';

}