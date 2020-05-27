// ***** JS For 2011 J3 Problem ****** //

window.onload = pageReady;

function pageReady() {
	//get the variables
	var form = document.getElementById("termIn");
	var showCount = document.getElementById("termOut");
	//set listener
	form.onsubmit = processForm;
	//create the function
	function processForm(){

		//get the values input by the user
		var t1 = parseInt(document.getElementById("t1").value);
		var t2 = parseInt(document.getElementById("t2").value);

		// make sure our numbers will work with the problem
		//showCount.innerHTML = t1 + " and " + t2;

		//to go through the formula we need a while loop so we can run this only while our numbers meet our criteria (ie never running after the newTerm is below 0)
		while (t1 >= t2 && t1 >= 0 && t2 >= 0) {
			//create a new var to act as our counter, and add to it as we go through the loop
			var sumacCount = 2;
			sumacCount = sumacCount + 1;

			//do the math - our newTerm is the result of the subtraction of the first two terms
			newTerm = t1 - t2;

			//now we set t1 as t2, and our t2 as our newTerm so we can continue with the loop
			t1 = t2;
			t2 = newTerm;

			//Finally print out the result of the count to the div
			showCount.innerHTML = sumacCount;
		}
		
		return false;

	}//end processForm

}//end pageReady