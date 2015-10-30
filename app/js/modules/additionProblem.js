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
	//Get the values from the number fields and answer field
	var x = $("#num1").text();
	var y = $("#num2").text();
	var answer = $("#answer").val();

	//Test addition
	if((parseInt(x) + parseInt(y)) == parseInt(answer)){
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
	setText("#num1", Math.floor(Math.random() * 100));
	setText("#num2", Math.floor(Math.random() * 100));
	
	setText(operator, "+");

	//Empty the answer and correct fields
	clearTextEntry(answer);
	setText(correctIndicator, "");
	
	//Set the submit button back to say submit
	setText(submitButton, "Submit");
	setButtonAction(submitButton, "testAddition()");
}