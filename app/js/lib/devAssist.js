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
	
	setText(selector, messages[Math.floor(Math.random() * messages.length)]);
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

/* setButtonAction
 * This function changes the onclick of a button. It requires a jQuery selector and 
 * a javascript function that will be called by the button.
 */
function setButtonAction(selector, functionCall){
	$(selector).attr("onclick", functionCall);
}

/* Code is from Mozilla's JS Documentation on Math.round */
// Closure
(function() {
  /**
   * Decimal adjustment of a number.
   *
   * @param {String}  type  The type of adjustment.
   * @param {Number}  value The number.
   * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
   * @returns {Number} The adjusted value.
   */
  function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  // Decimal round
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
  // Decimal floor
  if (!Math.floor10) {
    Math.floor10 = function(value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }
  // Decimal ceil
  if (!Math.ceil10) {
    Math.ceil10 = function(value, exp) {
      return decimalAdjust('ceil', value, exp);
    };
  }
})();