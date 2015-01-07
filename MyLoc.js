// JavaScript Document
window.onload = getMyLocation;

function getMyLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(displayLocation,displayError);
		}
	else{
		alert("浏览器不支持!");
		}
}

function displayLocation(position){
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	
	var div = document.getElementById("location");
	alert("You are at Latitude: "+ latitude + " Logitude: "+ longitude);
	}

function displayError(error){
	var errorTypes = {
		0: "Unknown Error",
		1: "Permission denied by user",
		2: "Position is unavailible",
		3: "Request timed out"
		};
	var errorMessage = errorTypes[error.code];
	if(error.code == 0 || error.code == 2){
		errorMessage = errorMessage + "" + error.message;
		}
		
	var div = document.getElementById("location");
	div.innerHTML = errorMessage;
	}