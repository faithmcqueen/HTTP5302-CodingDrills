// ***** JS For 2019 J1 Problem ****** //

window.onload = pageReady;

function pageReady(){

	//get our form by ID and set a listener
	var finalScore = document.getElementById("finalScore");
	finalScore.onsubmit = processForm;

	//build the function
	function processForm (){
		//get our variables from the form
		var showWinner = document.getElementById("gameWinner");
		var a3pt = document.getElementById("apple3Pt").value;
		var a2pt = document.getElementById("apple2Pt").value;
		var a1pt = document.getElementById("apple1Pt").value;
		var b3pt = document.getElementById("banana3Pt").value;
		var b2pt = document.getElementById("banana2Pt").value;
		var b1pt = document.getElementById("banana1Pt").value;

		//parseInt the variables so that we can work with them
		//then we use those integers now and do the math to get both team's scores
		var aTotal = (parseInt(a3pt) * 3) + (parseInt(a2pt) * 2) + parseInt(a1pt);
		var bTotal = (parseInt(b3pt) * 3) + (parseInt(b2pt) * 2) + parseInt(b1pt);

		//create an if statement for what should print out to determine which team wins
		if (aTotal > bTotal){
			showWinner.innerHTML = "Team Apple wins the game!";
		} else if (aTotal < bTotal){
			showWinner.innerHTML = "Team Bananas wins the game!";
		} else if (aTotal === bTotal){
			showWinner.innerHTML = "The game is tied!";
		} else {
			showWinner.innerHTML = "Sorry! The game total could not be recorded."
		} //end if statement

		return false;
		
	} //end processForm

}//end pageReady;