var events= require('events');     

var eventEmitter = new events.EventEmitter();

eventEmitter.on('someEvent',function(message){
    console.log(message);
})

eventEmitter.emit('someEvent','Hello World!');

