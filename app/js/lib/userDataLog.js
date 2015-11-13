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
	//Need to push in a data structure not the individual data
	//this.problemStats.push(object);
	this.problemStats[this.problemStats.length] = new ProblemLogItem("test", 1, true, 1);
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
		formatted += par.toString();
	}
	
	return "\n\tProblem Stats: " + formatted + "\n";
};

var ProblemLogItem = function(problemType, attempts, solved, time){
	this.problemType = problemType; 
	this.attempts = attempts;
	this.solved = solved;
	this.time = time;
};

ProblemLogItem.prototype.toString = function(){
	return "{ Problem Type: " + this.problemType + ", Attempts: " 
			+ this.attempts + ", Solved: " + this.solved + ", " +
			"Time to Complete: " + this.time + " }";
};