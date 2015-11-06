var Logger = function(dataLog) {
	//Store access to a specific dataLog
	this.dataLog = dataLog;
};

Logger.prototype.setDataLog = function(dataLog) {
	this.dataLog = dataLog;
};

/**
 * This function logs problem data, and will write it to the data log
 * It takes in a problemType(string), attempts(int), solved(bool), time(float point seconds)
 */
Logger.prototype.logProblem = function(problemType, attempts, solved, time) {
	this.dataLog.insertProblemStats([problemType, attempts, solved, time]);
};