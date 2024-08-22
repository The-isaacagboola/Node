const EventEmmiter = require("events"); // this is a covention to show its a class with methods inside of it

const { Logger } = require("./logger");
const { log } = require("console");
// Logger.log('message') ----- wouldnt work since its  a class
const loggerObj = new Logger();

loggerObj.on("messageLogged", (arg) => {
  console.log("Listener called", arg);
});

loggerObj.on("logging", (arg) => {
  console.log("Logging in User ", arg.user);
});

loggerObj.log("Working");
