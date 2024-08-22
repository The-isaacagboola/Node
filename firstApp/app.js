const logger = require('./logger');

const fs = require('fs');
const events = require('events');

function sayHello(name){
	console.log(`Hello ${name}`);
}

logger.url //now available as well as .log
console.log(logger)
