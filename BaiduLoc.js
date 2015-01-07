// JavaScript Document
function GetLocalIpAddr(){
	var oSetting = null;
	var ip = null;
	try{
		oSetting = new ActiveXObject("rcbdyctl.Setting");
		ip = pSetting.GetIpAddress;
		if(ip.length == 0){
			alert('没有连接到互联网');
			}
		oSetting = null;
		}catch(e){
			return ip;
			}
		return ip;
	}
var loc = document.getElementById("content");
loc.innerHTML = "你现在的坐标为:"+ip;