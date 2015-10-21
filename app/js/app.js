/*
 * This file is meant to call the appropriate content for the page based on
 * what the current problem type is. Any problem solving functionality is 
 * based within the relevant files.
 * 
 */
//Get fields
var problemTypeTitle = "#problemType";

var tryAgainMessages = ["Try again!", "Oops, that's incorrect!", "Keep trying!"];

//Create the default content of the page
function initializeApp(){
	console.log("Initializing the app...");
	
	//Initialize the default (addition)
	setUpAddition();
	
	console.log("Addition set up complete!");
}