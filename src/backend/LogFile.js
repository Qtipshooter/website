//LogFile.js
//Quinton Graham
//Manages the logs for the program

const fs = require('fs')

class LogFile {

  constructor(outputFile) {
    if(typeof outputFile === 'string') {
      this.outputFile = outputFile;
    }
    else {
      this.outputFile = "log.txt";
    }
    this.fileLoggingOn = true;
    this.retryTimer = 1;
    this.retryTimerCurrent = this.retryTimer;
  }

  logMsg(logStr) {
    
    console.log(logStr);
    
    //adding new line for the logfile (not automatic)
    logStr = `\n` + logStr;
    if(this.fileLoggingOn){
      fs.appendFile(this.outputFile, logStr, (err) => {
        if(err) {
          console.log("--------  ERROR: LOGGING DOWN  --------");
          
          //turn off the file, and set a graduated timer for when to retry
          this.fileLoggingOn = false;
          this.retryTimer = this.retryTimer * 2;
          this.retryTimerCurrent = this.retryTimer;
        }
        else {
          this.retryTimer = 1;
        }
      })
    }
    else {
      if(this.retryTimerCurrent <=0) {
        this.fileLoggingOn = true;
      }
      this.retryTimerCurrent--;
    }
  }

  logReq(req) {
    var timestamp = this.createTimestamp(new Date());
    var logStr = timestamp + " [" + req.ip + "] " + req.method + ":\"" + req.originalUrl + "\"";
    this.logMsg(logStr);
  }

  createTimestamp(d) {
    if(!(d instanceof Date)) {
      return null;
    }
    var month = this.normalizeTimeLen(d.getMonth() + 1);
    var day = this.normalizeTimeLen(d.getDate());
    var year = d.getFullYear();
    var hours = this.normalizeTimeLen(d.getHours());
    var minutes = this.normalizeTimeLen(d.getMinutes());
    var seconds = this.normalizeTimeLen(d.getSeconds());

    return `[${month}/${day}/${year} ${hours}:${minutes}:${seconds}]`;
  }

  normalizeTimeLen(n) {
    if(!(typeof(n) === 'number')) {
     return n;
    }
    if(n < 10) {
      return "0" + n.toString();
    }
    return n;
  }
}

module.exports = LogFile
