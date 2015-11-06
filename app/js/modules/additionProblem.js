var AdditionModule = function () {
	
};

AdditionModule.setUp = function () {
	//Change the title to the proper text
	setText(problemTypeTitle, "Addition");
	
	//Call the newAdditionProblem function
	AdditionModule.newProblem();
};

AdditionModule.test = function () {
	//Get user's answer
	var answer = $(userAnswer).val();

	//Test addition
	if(parseInt(answer) == problemAnswer){
		//Mark that the user was correct
		setText(correctIndicator, "Correct!");
		
		//Log the problem
		logger.logProblem("Addition", 1, true, 1);
		
		//Change the submit button to the generate problem button
		setText(submitButton, "New Problem");
		setButtonAction(submitButton, "generateProblem()");
	}
	else {
		tryAgainMessage(correctIndicator);
	}
};

AdditionModule.newProblem = function () {
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
	setButtonAction(submitButton, "AdditionModule.test()");
};