//Set up the subtraction module
function setUpSubtraction(){
	//Send init message
	console.log("Initializing the subtraction module");
	
	//Change the title to the proper text
	setText(problemTypeTitle, "Subtraction");
	
	//Call the newSubtractionProblem function
	newSubtractionProblem();
	
	//Send init complete message
	console.log("Subtraction module initialization complete");
}

function testSubtraction(){
	//Get the user's answer
	var answer = $(userAnswer).val();
	
	//Test subtraction
	if(parseInt(answer) == problemAnswer){
		//Mark that the user is correct
		setText(correctIndicator, "Correct!");
		
		//Change the submit button to the generate problem button
		setText(submitButton, "New Problem");
		setButtonAction(submitButton, "newAdditionProblem()");
	}
	else {
		tryAgainMessage(correctIndicator);
	}
}

function newSubtractionProblem(){
	//Random number between 0 and 100 for both x and y
	var x = Math.floor(Math.random() * 100);
	var y = Math.floor(Math.random() * 100);
	
	//Store the answer in a global variable
	problemAnswer = x - y;
	
	//Fill out the text fields
	setText("#num1", x);
	setText("#num2", y);
	
	setText(operator, "-");

	//Empty the answer and correct fields
	clearTextEntry(answer);
	setText(correctIndicator, "");
	
	//Set the submit button back to say submit
	setText(submitButton, "Submit");
	setButtonAction(submitButton, "testAddition()");
}