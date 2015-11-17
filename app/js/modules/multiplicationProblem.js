var MultiplicationModule = function () {
	
};

MultiplicationModule.setUp = function () {
	//Change the title to the proper text
	setText(problemTypeTitle, "Multiplication");
	
	//Call the newAdditionProblem function
	MultiplicationModule.newProblem();
};

MultiplicationModule.test = function () {
	//Get user's answer
	var answer = $(userAnswer).val();

	//Test addition
	if(parseInt(answer) == problemAnswer){
		//Mark that the user was correct
		setText(correctIndicator, "Correct!");
		
		//Change the submit button to the generate problem button
		setText(submitButton, "New Problem");
		setButtonAction(submitButton, "generateProblem()");
	}
	else {
		attempts++;
		tryAgainMessage(correctIndicator);
	}
	
	if(attempts >= 3){
		//Mark that the user was correct
		setText(correctIndicator, "The correct answer is: " + problemAnswer);
		
		//Change the submit button to the generate problem button
		setText(submitButton, "New Problem");
		setButtonAction(submitButton, "generateProblem()");
		
		attempts = 0;
	}
};

MultiplicationModule.newProblem = function () {
	//Random number between 0 and 100 for both x and y
	var x = Math.floor(Math.random() * 20);
	var y = Math.floor(Math.random() * 20);
	
	//Store the answer in a global variable
	problemAnswer = x * y;
	
	//Fill out text fields in the problem
	setText("#num1", x);
	setText("#num2", y);
	
	setText(operator, "*");

	//Empty the answer and correct fields
	clearTextEntry(answer);
	setText(correctIndicator, "");
	
	//Set the submit button back to say submit
	setText(submitButton, "Submit");
	setButtonAction(submitButton, "MultiplicationModule.test()");
};