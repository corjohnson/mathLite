//Set up the subtraction module
function setUpSubtraction(){
	//Send init message
	console.log("Initializing the subtraction module");
	
	//Change the title to the proper text
	$(problemTypeTitle).text("Subtraction");
	
	//Call the newSubtractionProblem function
	newSubtractionProblem();
	
	//Change the submitButton onclick to test subtraction
	$(submitButton).attr("onclick", "testSubtraction()");
	
	//Change the problem generator button to newSubtraction
	$(newProblemButton).attr("onclick", "newSubtractionProblem()");
	
	//Send init complete message
	console.log("Subtraction module initialization complete");
}

function testSubtraction(){
	//Get the values from the number fields and answer field
	var x = $("#num1").text();
	var y = $("#num2").text();
	var answer = $("#answer").val();

	//Test subtraction
	if((parseInt(x) - parseInt(y)) == parseInt(answer)){
		$("#correctness").text("Correct!");
	}
	else {
		$("#correctness").text(tryAgainMessages[Math.floor(Math.random() * 3)]);
	}
}

function newSubtractionProblem(){
	//Random number between 0 and 100 for both x and y
	$("#num1").text(Math.floor(Math.random() * 100));
	$("#num2").text(Math.floor(Math.random() * 100));
	$(operator).text("-");

	//Empty the answer and correct fields
	clearTextEntry(answer);
	clearTextDisplay(correctIndicator);
}