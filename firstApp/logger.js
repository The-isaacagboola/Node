const EventEmmiter = require("events");

var url = "htttp://mylogger.io/log";

class Logger extends EventEmmiter {
  log(message) {
    //send a request
    console.log(message);

    //raise an event
    this.emit("messageLogged", { id: 1, url: "https://" });
    this.emit("logging", { user: "Isaac" });
  }
}

module.exports = {
  Logger,
  url,
};
