if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 350);

}

var x = 0;

var titleText = [ "r", "ri", "rip","rip ","rip g","rip gu","rip gus",];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}