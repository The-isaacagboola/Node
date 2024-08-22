
var url = "htttp://mylogger.io/log"

function log(message){
	//send an http request
	
	console.log(message)
}


// this is fine;
// module.exports.log = log
// module.exports.url = url

// but alternatively; i'd do,
module.exports ={
	log,
	url
}

console.log(module)


