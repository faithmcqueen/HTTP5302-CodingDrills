// ***** JS For 2019 J2 Problem ****** //

window.onload = pageReady;

function pageReady() {

	//get variables
	var msgEncode = document.getElementById("msgCode");
	var decoded = document.getElementById("decode");
	//set listener
	msgEncode.onsubmit = decodeForm;
	//create the function
	function decodeForm(){

		//get the value of each input
		var num = parseInt(document.getElementById("num").value);
		var char = document.getElementById("char").value;

		//set our validation so that the number entered can't be above 80
		if (num > 80){
			decoded.innerHTML = "Sorry, invalid input.";
		} 
		// now we use repeat() and pass through the num value to get the char variable to repeat the number of times input
		else {
			decoded.innerHTML = char.repeat(num);
		}

		return false;

	} //end decodeForm

} //end pageReady;