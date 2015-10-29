/*
 * This file is meant to call the appropriate content for the page based on
 * what the current problem type is. Any problem solving functionality is 
 * based within the relevant files.
 * 
 */
//Get fields
var problemTypeTitle = "#problemType";
var operator = "#operator";
var submitButton = "#submitButton";
var newProblemButton = "#generateButton";
var answer = "#answer";
var correctIndicator = "#correctness";

//Create the default content of the page
function initializeApp(){
	console.log("Initializing the app...");
	
	//Show module selection page
	displayHome();
	
	//Initialize secondary scripts (ie submitHandles)
	
	console.log("Initial set up complete!");
}

//Display our app view
function displayApp(){
	//Hide the module selection
	$("#homeView").hide();
	
	//Show the app view
	$("#appView").show();
	
	//Set up the app with the modules selected from the home
	//Default set up addition for now
	setUpAddition();
}

//Display the home view
function displayHome(){
	//Hide the app view
	$("#appView").hide();
	
	//Show the module selection
	$("#homeView").show();
}

//In this function we are going to pull the selected modules of users
function getModuleSelections(){
	
}