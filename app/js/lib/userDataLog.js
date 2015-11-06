/* This is the Data Log which will be used to track user statistics and
 * information regarding their progress within the app. It will eventually
 * be used for creating new problems, but the difficulty curve has not
 * been implemented yet.
 */
var DataLog = function(){
	this.userStats = [];
	
	this.problemStats = [];
	
	this.userStats.averageProblemTime = 0;
	this.userStats.numberOfProblemsSolved = 0;
};

DataLog.prototype.insertProblemStats = function(object){
	this.problemStats.push(object);	
};

DataLog.prototype.toString = function(){
	return "User Data: " + this.getUserStats() + this.getProblemStats();	
};

DataLog.prototype.getUserStats = function(){
	return "\n\tUser Stats: " + this.userStats.toString() + "\n";
};

DataLog.prototype.getProblemStats = function(){
	var formatted = "";
	
	for(var par in this.problemStats){
		formatted += "{ " + par[0] + ", " + par[1] + ", "
					 + par[2] + ", " + par[3] + " }";
	}
	
	return "\n\tProblem Stats: " + this.problemStats.toString() + "\n";
};