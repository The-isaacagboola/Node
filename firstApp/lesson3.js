const path = require('path');
const os = require('os');

//__filename is a string; when parsed is converted to an object
var pathObj = path.parse(__filename)

console.log(pathObj)
console.log(`${pathObj.dir}/${pathObj.base}`) //  somewhat gives the __filename

const totalMem = os.totalmem()
const FreeMem = os.freemem()

console.log('Total Memory: ', totalMem)
console.log('Free Memory: ',FreeMem )