//Set up the addition module
function setUpAddition(){
	//Send init message
	console.log("Initializing the addition module");
	
	//Change the title to the proper text
	setText(problemTypeTitle, "Addition");
	
	//Call the newAdditionProblem function
	newAdditionProblem();
	
	//Send init complete message
	console.log("Addition module initialization complete");
}

function testAddition(){
	//Get user's answer
	var answer = $(userAnswer).val();

	//Test addition
	if(parseInt(answer) == problemAnswer){
		//Mark that the user was correct
		setText(correctIndicator, "Correct!");
		
		//Change the submit button to the generate problem button
		setText(submitButton, "New Problem");
		setButtonAction(submitButton, "newAdditionProblem()");
	}
	else {
		tryAgainMessage(correctIndicator);
	}
}

function newAdditionProblem(){
	//Random number between 0 and 100 for both x and y
	var x = Math.floor(Math.random() * 100);
	var y = Math.floor(Math.random() * 100);
	
	//Store the answer in a global variable
	problemAnswer = x + y;
	
	//Fill out text fields in the problem
	setText("#num1", x);
	setText("#num2", y);
	
	setText(operator, "+");

	//Empty the answer and correct fields
	clearTextEntry(answer);
	setText(correctIndicator, "");
	
	//Set the submit button back to say submit
	setText(submitButton, "Submit");
	setButtonAction(submitButton, "testAddition()");
}