function formsing(){
	var element = document.getElementById("jura");
	if(document.getElementById("buttonsing").textContent == "Log out"){
		document.getElementById("hello").style.display = "none";
		return document.getElementById("buttonsing").innerHTML = "Log in";
	}
	if(element.style.display == "block"){
		element.style.display = "none";
	}
	else{
		element.style.display = "block";
	}
}

function sing(){
	var username=document.getElementById("inputin").value;
	var password=document.getElementById("inputinn").value;

	var xmlhttp = new XMLHttpRequest();
		var url = "sing.txt";

		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				var myArr = JSON.parse(xmlhttp.responseText);
				myFunction(myArr);
			}
		};
		xmlhttp.open("GET", url, true);
		xmlhttp.send();

		function myFunction(arr) {

		    for(var i = 0; i < arr.length; i++) {
		    	var name = arr[i].name;
		    	var passwor = arr[i].password;
		    	if(name == username && passwor == password){
		    		document.getElementById("buttonsing").innerHTML = "Log out";
		    		document.getElementById("jura").style.display = "none";
		    		document.getElementById("hello").style.display = "block";
		    		document.getElementById("hello").innerHTML = "Hello " + name;
		    	}
		       

		    
		    }
			
		}
	
}
