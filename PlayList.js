// JavaScript Document
window.onload = init;
function init(){
var Button = document.getElementById("addButton");
Button.onclick = handleButtonClick;
loadPlaylist();
}
function handleButtonClick(){
	var text = document.getElementById("songTextInput");
	var songName = text.value;
	if(songName != ""){
		var li = document.createElement("li");
		li.innerHTML = songName;
		var ul = document.getElementById("palylist");
		ul.appendChild(li); 
		save(songName);
		alert("Adding a song named "+songName);
	}
	else{
		alert("Please input a song name!");
	}
}
