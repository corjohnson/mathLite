/* clearTextEntry
 * This function takes in a jQuery id selector for an input
 * as a string and uses jQuery to clear the text from the element
 */
function clearTextEntry(selector){
	$(selector).val("");
}

/* clearTextDisplay
 * This function takes in a jQuery id or class selector for an 
 * element with the attribute "text" and empties it
 */
function clearTextDisplay(selector){
	$(selector).text("");
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
 * 
 * Doesn't work. I think it's the load order, so either I need to add it after the page loads
 * or I can try to call it from the submit button itself? I'm gonna need to think on this one
 */
$(answer).keyup(function(e) {
	alert("Hello world");
	if(e.which == 13){
		alert("Enter was pressed");
		//$(submitButton).trigger("click");
	}
});