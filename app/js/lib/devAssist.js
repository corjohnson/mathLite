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