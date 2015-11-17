/*
 * This file is meant to call the appropriate content for the page based on
 * what the current problem type is. Any problem solving functionality is 
 * based within the relevant files.
 * 
 */
//Selectors fields
var problemTypeTitle = "#problemType";
var operator = "#operator";
var submitButton = "#submitButton";
var newProblemButton = "#generateButton";
var userAnswer = "#answer";
var correctIndicator = "#correctness";

//View fields
var homeView = "#homeView";
var appView = "#appView";

//Global Variables
var problemAnswer;
var attempts = 0;

//Internal Variables
var modules = [];

//Create the default content of the page
function initializeApp(){
	console.log("Initializing the app...");
	
	//Show module selection page
	displayHome();
	
	console.log("Initial set up complete!");
}

//Display our app view
function displayApp(){
	$(homeView).hide();
	
	//Show the app view
	$(appView).show();
	
	//Set up the app with the modules selected from the home
	generateProblem();
}

//Display the home view
function displayHome(){
	//Hide the app view
	$(appView).hide();
	
	//Show the module selection
	$(homeView).show();
}

//In this function we are going to pull the selected modules of users
function activateModule(moduleType, button){
	if(modules.indexOf(moduleType) > -1){
		modules.splice(modules.indexOf(moduleType), 1);
		$(button).removeClass("selected");
	}
	else{
		modules.push(moduleType);
		$(button).addClass("selected");
	}
}

function generateProblem(){
	var selection = modules[Math.floor(Math.random() * modules.length)];
	attempts = 0;
	
	switch(selection){
		case "Addition":
			AdditionModule.setUp();
			break;
		case "Subtraction":
			SubtractionModule.setUp();
			break;
		case "Multiplication":
			MultiplicationModule.setUp();
			break;
		case "Division":
			DivisionModule.setUp();
			break;
		default:
			AdditionModule.setUp();
			break;
	}
}