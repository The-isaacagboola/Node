const EventEmmiter = require('events');// this is a covention to show its a class with methods inside of it

//create an instance
const emitter = new EventEmmiter();

//register a listener
emitter.on('messageLogged', function(){
    console.log('Listener called')
})

//raise an event
emitter.emit('messageLogged');