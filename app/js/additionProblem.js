//Set up the addition module
function setUpAddition(){
	//Send init message
	console.log("Initializing the addition module");
	
	//Change the title to the proper text
	$(problemTypeTitle).text("Addition");
	
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
		$("#correctness").text("Correct!");
	}
	else {
		$("#correctness").text(tryAgainMessages[Math.floor(Math.random() * 3)]);
	}
}

function newAdditionProblem(){
	//Random number between 0 and 100 for both x and y
	$("#num1").text(Math.floor(Math.random() * 100));
	$("#num2").text(Math.floor(Math.random() * 100));

	//Empty the answer and correct fields
	$("#answer").val("");
	$("#correctness").text("");
}