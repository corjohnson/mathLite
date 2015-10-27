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