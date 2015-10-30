/* clearTextEntry
 * This function takes in a jQuery id selector for an input
 * as a string and uses jQuery to clear the text from the element
 */
function clearTextEntry(selector){
	$(selector).val("");
}

/* setText
 * This function takes two parameters, the jQuery identifier and
 * a string to set as the text. This function is compatible with 
 * elements that support the text attribute
 */
function setText(selector, text){
	$(selector).text(text);
}

/* tryAgainMessage
 * This function will take a jQuery id or class selector and
 * set the text to one of the try again messages.
 */
function tryAgainMessage(selector){
	var messages = ["Try again!", "Oops, that's incorrect!", "Keep trying!"];
	
	$(selector).text(messages[Math.floor(Math.random() * messages.length)]);
}

/* enterButtonHandle
 * When the user hits the enter button it should submit their answer to the problem.
 * Since I'm not using a form to submit the answers, I need to make a jquery handler.
 */
function enterButtonHandle(eventKey){
	//Test the input against the enter keycode
	if(eventKey.which == 13){
		$(submitButton).trigger("click");
	}
}