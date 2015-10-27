//Set up the addition module
function setUpAddition(){
	//Send init message
	console.log("Initializing the addition module");
	
	//Change the title to the proper text
	$(problemTypeTitle).text("Addition");
	
	//Call the newAdditionProblem function
	newAdditionProblem();
	
	//Change the submitButton onclick to test addition
	$(submitButton).attr("onclick", "testAddition()");
	
	//Change the problem generator button to newAdditionProblem
	$(newProblemButton).attr("onclick", "newAdditionProblem()");
	
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
		$("#correctness").text("Correct!");
	}
	else {
		tryAgainMessage("#correctness");
	}
}

function newAdditionProblem(){
	//Random number between 0 and 100 for both x and y
	$("#num1").text(Math.floor(Math.random() * 100));
	$("#num2").text(Math.floor(Math.random() * 100));

	$(operator).text("+");

	//Empty the answer and correct fields
	clearTextEntry(answer);
	clearTextDisplay(correctIndicator);
}