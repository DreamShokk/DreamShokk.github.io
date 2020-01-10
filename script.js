window.onload=function(){
	document.getElementById("indexpage").style.display="block";
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
var y=true;
function change(x1){
	if(document.getElementById(x1)) {
		switch(x1){
			case "one":
				document.getElementById("indexpage").style.display="block";
				document.getElementById("kep").style.display="none";
				document.getElementById("adat").style.display="none";
				document.getElementById("randomnum").style.display="none";
				if(document.getElementById("two")){
				if(document.getElementById("four")){
					document.getElementById("active").id="three";
					document.getElementById("three").innerText="Adat";
				}else {
				document.getElementById("active").id="four";
				document.getElementById("four").innerText="Random num";
				var br=document.createElement("br"); 
				document.getElementById("four").appendChild(br);
				document.getElementById("four").innerText+="Generator";
				}
				}else {
					document.getElementById("active").id="two";
					document.getElementById("two").innerText=document.getElementById("two").innerText.slice(1,4);
				}
				document.getElementById(x1).id="active";
				document.getElementById("active").innerText="-"+document.getElementById("active").innerText.slice(0,8)+"-";
				break;
			case "two":
				document.getElementById("indexpage").style.display="none";
				document.getElementById("kep").style.display="block";
				document.getElementById("adat").style.display="none";
				document.getElementById("randomnum").style.display="none";
				if(document.getElementById("one")){
				if(document.getElementById("four")){
				document.getElementById("active").id="three";
				document.getElementById("three").innerText="Adat";
				}else {
				document.getElementById("active").id="four";
				document.getElementById("four").innerText="Random num";
				var br=document.createElement("br"); 
				document.getElementById("four").appendChild(br);
				document.getElementById("four").innerText+="Generator";
				}	
				}else {
					document.getElementById("active").id="one";
					document.getElementById("one").innerText=document.getElementById("one").innerText.slice(1,8);
				}
				document.getElementById(x1).id="active";
				document.getElementById("active").innerText="-"+document.getElementById("active").innerText.slice(0,4)+"-";
				break;
			case "three":
				document.getElementById("indexpage").style.display="none";
				document.getElementById("kep").style.display="none";
				document.getElementById("adat").style.display="block";
				document.getElementById("randomnum").style.display="none";
				if(document.getElementById("two")){
				if(document.getElementById("four")){
					document.getElementById("active").id="one";
					document.getElementById("one").innerText=document.getElementById("one").innerText.slice(1,8);
				}else {
				document.getElementById("active").id="four";
				document.getElementById("four").innerText="Random num";
				var br=document.createElement("br"); 
				document.getElementById("four").appendChild(br);
				document.getElementById("four").innerText+="Generator";
				}
					
				}else {
					document.getElementById("active").id="two";
					document.getElementById("two").innerText=document.getElementById("two").innerText.slice(1,4);
				}
					document.getElementById(x1).id="active";
					document.getElementById("active").innerText="-Adat-";
				break;
			case "four":
				document.getElementById("indexpage").style.display="none";
				document.getElementById("kep").style.display="none";
				document.getElementById("adat").style.display="none";
				document.getElementById("randomnum").style.display="block";
			if(document.getElementById("one")){
					if(document.getElementById("two")){
					document.getElementById("active").id="three";
					document.getElementById("three").innerText="Adat";
					}
					else{
					document.getElementById("active").id="two";
					document.getElementById("two").innerText=document.getElementById("two").innerText.slice(1,4);
					}
				}
			else{
				document.getElementById("active").id="one";
				document.getElementById("one").innerText=document.getElementById("one").innerText.slice(1,8);				
			}
			document.getElementById(x1).id="active";
			document.getElementById("active").innerText="-Random num";
			var br=document.createElement("br"); 
			document.getElementById("active").appendChild(br);
			document.getElementById("active").innerText+="Generator-";
			
			
			
			
			
			
			
			
			break;
		}
		if(y==true){
			y=false;
			document.getElementById("one").addEventListener("click",function(){change("one")});
		}
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
	var min=document.getElementById("min").value.split("");
	var max=document.getElementById("max").value.split("");
		for(var lol=0;lol<min.length;lol++){
			if(parseInt(min[lol])%1!=0){
				alert("Sike, that's a wrong min number!");
				break;
			}
		}
		for(var lol=0;lol<max.length;lol++){
			if(parseInt(max[lol])%1!=0){
				alert("Sike, that's a wrong max number!");
				break;
			}
		}	
	var vari="";
	var vari2="";
	for (var lol=0;lol<min.length;lol++){
		vari+=min[lol];}
	for (var lol=0;lol<max.length;lol++){
		vari2+=max[lol];
	}
		vari=parseInt(vari);
		vari2=parseInt(vari2);
		if (vari>vari2){
			alert("yoo yor mom gei y are you noob");
		}
	var variout=0;
	var redcar=Math.floor((min.length+max.length)/2);
	var randomcar="1";
	for (var w=0;w<=redcar;w++){
		randomcar+="0";
		
	}
	for (var v=0;v<999;v++){
		variout=Math.floor(Math.random()*parseInt(randomcar));
		if (variout>=vari && variout<=vari2){
			document.getElementById("out").innerHTML=variout;
			break;
		}
		
		
	}
	
	
	
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	