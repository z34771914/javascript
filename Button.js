// JavaScript Document
window.onload=init;
function init(){
var button = document.getElementById("click");
button.onclick=function(){
	window.location="www.baidu.com";
	window.open("www.baidu.com","百度","",false);
	};
alert(document.URL);
}