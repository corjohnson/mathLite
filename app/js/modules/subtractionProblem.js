var SubtractionModule = function () {
	
};

SubtractionModule.setUp = function () {
	//Change the title to the proper text
	setText(problemTypeTitle, "Subtraction");
	
	//Call new subtraction problem
	SubtractionModule.newProblem();	
};

SubtractionModule.test = function () {
	//Get the user's answer
	var answer = $(userAnswer).val();
	
	//Test subtraction
	if(parseInt(answer) == problemAnswer){
		//Mark that the user was correct
		setText(correctIndicator, "Correct!");
		
		//Change the submit to new problem
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

SubtractionModule.newProblem = function () {
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
	setButtonAction(submitButton, "SubtractionModule.test()");
};