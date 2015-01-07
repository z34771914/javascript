// JavaScript Document
var url = "luckyornot.txt"
var request = new XMLHttpRequest();
request.onload = function(){
	if(request.status == 200 || request.status == 0){
		alert(request.responseText);
		var div = document.getElementById("toast");
		div.innerHTML = request.responseText;
		}
	else{
		alert(request.responseText);
		}
	}
request.onload();
request.open("GET",url);
request.send(null);