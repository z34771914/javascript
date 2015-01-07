// JavaScript Document
//Dog Object
var Dog={
	name:"Fido",
	weight:40,
	breed:"Mixed",
	loves:["walk","balls"]
	}
var prop;
for(prop in Dog){
	alert("Fido has a " + prop + " property");
	if(prop == "name"){
		alert("This is "+ Dog[prop]);
		}
	}