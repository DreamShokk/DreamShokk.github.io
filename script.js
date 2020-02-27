window.onload=function(){
	document.getElementById("onediv").style.display="block";
	document.getElementById("one").addEventListener("click",function(){change("one");});
	document.getElementById("two").addEventListener("click",function(){change("two");});
	document.getElementById("three").addEventListener("click",function(){change("three");});
	document.getElementById("four").addEventListener("click",function(){change("four");});
	document.getElementById("radionegy").addEventListener("click",function(){hatter("white");});
	document.getElementById("radionketto").addEventListener("click",function(){hatter("black");});
	document.getElementById("radionharom").addEventListener("click",function(){hatter("nigga");});
	document.body.style.animation="colorchange 6s linear infinite";
	document.getElementById("weboldal").style.textShadow="4px 4px 10px black";
	var yos = document.getElementsByTagName("img");
	for (var  e=0;e<yos.length;e++){
		yos[e].style.border="3px solid black";
	}
}
var active="one";
function change(x1){
	if(document.getElementById(x1)) {
		document.getElementById(active).innerText=document.getElementById(active).innerText.split("-")[1];
		document.getElementById(x1).innerText="-"+document.getElementById(x1).innerText+"-";
		document.getElementById(active+"div").style.display="none";
		document.getElementById(x1+"div").style.display="block";
		active=x1;
	}
}
function hatter(xd){
	document.body.style="";
	document.getElementsByTagName("img").style="";
	var jozsi = document.getElementsByTagName("td");
	var jozsi2 = document.getElementsByTagName("img");
	var anigga = document.getElementsByClassName("button");
	document.getElementById("weboldal").style.textShadow="4px 4px 10px black";
	if(xd=="white"){
		document.body.style.backgroundColor="white"
		document.getElementsByTagName("img").style.border="3px solid black";
		for(var e=0;e<jozsi.length;e++){
			jozsi[e].style.borderColor="black";
			jozsi2[e].style.borderColor="black";
			anigga[e].style.borderColor="black";	
		}
		anigga[3].style.borderColor="black";
		document.getElementsByTagName("button")[5].style.borderColor="black";
	}else if(xd=="black"){
		document.body.style.backgroundColor="#3f4142";
		document.getElementById("weboldal").style.textShadow="4px 4px 10px white";
		document.getElementsByTagName("img").style.border="3px solid white";
		for(var e=0;e<jozsi.length;e++){
			jozsi[e].style.borderColor="white";
			jozsi2[e].style.borderColor="white";
			anigga[e].style.borderColor="white";	
		}
		anigga[3].style.borderColor="white";
		document.getElementsByTagName("button")[5].style.borderColor="white";
	}else {
		document.body.style.animation="colorchange 6s linear infinite";
		document.getElementsByTagName("img").style.border="3px solid black";
		for(var e=0;e<jozsi.length;e++){
			jozsi[e].style.borderColor="black";
			jozsi2[e].style.borderColor="black";
			anigga[e].style.borderColor="black";
		}
		anigga[3].style.borderColor="black";
		document.getElementsByTagName("button")[5].style.borderColor="black";
	}
}	
function yeet(){
	var min=document.getElementById("min").value;
	var max=document.getElementById("max").value;
	if(parseInt(min)%1!=0){
		alert("Sike, that's a wrong min number!");
		return;
	}
	if(parseInt(max)%1!=0){
		alert("Sike, that's a wrong max number!");
		return;
	}	
	min=parseInt(min),max=parseInt(max);
	if (min>max){
		alert("a minimum nagyobb, mint a maximum fiam.");
		return;
	}
	document.getElementById("out").innerHTML=Math.floor(Math.random()*(max-min)+min);
}